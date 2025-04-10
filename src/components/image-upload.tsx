"use client"

import { useState } from "react"
import Image from "next/image"
import { Upload, X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface ImageUploadProps {
  onImageSelected: (imageUrl: string) => void
  currentImage?: string
}

// Placeholder images
const PLACEHOLDER_IMAGES = [
  { id: "placeholder1", url: "/career.png", label: "Abstract" },
  { id: "placeholder2", url: "/ai.png", label: "AI" },
  { id: "placeholder3", url: "/about.png", label: "Technology" },
  { id: "placeholder4", url: "/strategy.png", label: "Business" },
]

export function ImageUpload({ onImageSelected, currentImage }: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(currentImage || null)
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<string | null>(null)

  const handlePlaceholderSelect = (placeholderId: string) => {
    const placeholder = PLACEHOLDER_IMAGES.find((p) => p.id === placeholderId)
    if (placeholder) {
      setPreviewUrl(placeholder.url)
      setSelectedPlaceholder(placeholderId)
      // Use the placeholder ID as the image reference
      onImageSelected(placeholderId)
    }
  }

  const handleRemoveImage = () => {
    setPreviewUrl(null)
    setSelectedPlaceholder(null)
    onImageSelected("")
  }

  return (
    <div className="space-y-6">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertDescription>
          Image uploads to Sanity are currently unavailable. Please use one of the placeholder images below.
        </AlertDescription>
      </Alert>

      {previewUrl ? (
        <div className="relative rounded-lg overflow-hidden border border-border">
          <div className="relative aspect-video w-full">
            <Image src={previewUrl || "/placeholder.svg"} alt="Preview" fill className="object-cover" />
          </div>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleRemoveImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-2">Select a placeholder image below</p>
          <p className="text-xs text-muted-foreground mb-4">Direct image uploads are currently unavailable</p>
        </div>
      )}

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Select a placeholder image:</h3>
        <RadioGroup
          value={selectedPlaceholder || ""}
          onValueChange={handlePlaceholderSelect}
          className="grid grid-cols-2 gap-4"
        >
          {PLACEHOLDER_IMAGES.map((placeholder) => (
            <div key={placeholder.id} className="flex items-center space-x-2">
              <RadioGroupItem value={placeholder.id} id={placeholder.id} />
              <Label htmlFor={placeholder.id} className="flex items-center gap-2">
                <div className="relative w-12 h-12 overflow-hidden rounded border">
                  <Image
                    src={placeholder.url || "/placeholder.svg"}
                    alt={placeholder.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{placeholder.label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>You can also continue without selecting an image.</p>
      </div>
    </div>
  )
}
