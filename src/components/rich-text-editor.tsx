/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { Bold, Italic, List, ListOrdered, Quote, Heading1, Heading2, Heading3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RichTextEditorProps {
  value: any
  onChange: (value: any) => void
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const [markdownContent, setMarkdownContent] = useState("")
  const [activeTab, setActiveTab] = useState<string>("write")

  // Convert Sanity blocks to markdown on initial load
  useEffect(() => {
    if (value && Array.isArray(value)) {
      // Simple conversion from blocks to markdown
      // In a real app, you'd want a more robust conversion
      const markdown = value
        .map((block: any) => {
          if (block._type === "block") {
            return block.children.map((child: any) => child.text).join("")
          }
          return ""
        })
        .join("\n\n")

      setMarkdownContent(markdown)
    }
  }, [value])

  // Convert markdown to Sanity blocks on change
  const handleContentChange = (content: string) => {
    setMarkdownContent(content)

    // Simple conversion from markdown to blocks
    // In a real app, you'd want a more robust conversion
    const blocks = content
      .split("\n\n")
      .map((paragraph) => {
        if (!paragraph.trim()) return null

        return {
          _type: "block",
          style: "normal",
          _key: Date.now().toString(),
          markDefs: [],
          children: [
            {
              _type: "span",
              _key: Date.now().toString() + Math.random(),
              text: paragraph,
              marks: [],
            },
          ],
        }
      })
      .filter(Boolean)

    onChange(blocks)
  }

  const insertMarkdown = (markdownSyntax: string, selectionOffset = 0) => {
    const textarea = document.getElementById("markdown-editor") as HTMLTextAreaElement
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = markdownContent.substring(start, end)

    const beforeText = markdownContent.substring(0, start)
    const afterText = markdownContent.substring(end)

    const newText = beforeText + markdownSyntax.replace("text", selectedText) + afterText
    handleContentChange(newText)

    // Set cursor position
    setTimeout(() => {
      textarea.focus()
      const newCursorPos = start + markdownSyntax.indexOf("text") + (selectedText.length || selectionOffset)
      textarea.setSelectionRange(newCursorPos, newCursorPos)
    }, 0)
  }

  const toolbar = [
    {
      icon: <Bold className="h-4 w-4" />,
      action: () => insertMarkdown("**text**", 2),
      tooltip: "Bold",
    },
    {
      icon: <Italic className="h-4 w-4" />,
      action: () => insertMarkdown("*text*", 1),
      tooltip: "Italic",
    },
    {
      icon: <Heading1 className="h-4 w-4" />,
      action: () => insertMarkdown("# text", 2),
      tooltip: "Heading 1",
    },
    {
      icon: <Heading2 className="h-4 w-4" />,
      action: () => insertMarkdown("## text", 3),
      tooltip: "Heading 2",
    },
    {
      icon: <Heading3 className="h-4 w-4" />,
      action: () => insertMarkdown("### text", 4),
      tooltip: "Heading 3",
    },
    {
      icon: <List className="h-4 w-4" />,
      action: () => insertMarkdown("- text", 2),
      tooltip: "Bullet List",
    },
    {
      icon: <ListOrdered className="h-4 w-4" />,
      action: () => insertMarkdown("1. text", 3),
      tooltip: "Numbered List",
    },
    {
      icon: <Quote className="h-4 w-4" />,
      action: () => insertMarkdown("> text", 2),
      tooltip: "Quote",
    },
  ]

  // Simple markdown to HTML converter for preview
  const markdownToHtml = (markdown: string) => {
    const html = markdown
      .replace(/^# (.*$)/gm, "<h1>$1</h1>")
      .replace(/^## (.*$)/gm, "<h2>$1</h2>")
      .replace(/^### (.*$)/gm, "<h3>$1</h3>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/^> (.*$)/gm, "<blockquote>$1</blockquote>")
      .replace(/^- (.*$)/gm, "<ul><li>$1</li></ul>")
      .replace(/^[0-9]+\. (.*$)/gm, "<ol><li>$1</li></ol>")
      .replace(/\n/g, "<br>")

    return html
  }

  return (
    <div className="border rounded-md">
      <div className="flex items-center gap-1 p-2 border-b">
        {toolbar.map((item, index) => (
          <Button key={index} variant="ghost" size="sm" onClick={item.action} title={item.tooltip} type="button">
            {item.icon}
          </Button>
        ))}
      </div>

      <Tabs defaultValue="write" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mx-2 my-2">
          <TabsTrigger value="write">Write</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="write" className="p-0">
          <Textarea
            id="markdown-editor"
            value={markdownContent}
            onChange={(e) => handleContentChange(e.target.value)}
            placeholder="Write your blog post content here..."
            className="min-h-[300px] border-0 focus-visible:ring-0 resize-y"
          />
        </TabsContent>

        <TabsContent value="preview" className="p-4 min-h-[300px] prose prose-sm max-w-none">
          {markdownContent ? (
            <div dangerouslySetInnerHTML={{ __html: markdownToHtml(markdownContent) }} />
          ) : (
            <p className="text-muted-foreground">Nothing to preview yet.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
