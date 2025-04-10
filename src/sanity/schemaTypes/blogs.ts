// schemas/blogPost.js
export const blog = {
  name: "blogPost",
  title: "Blog Post",
  type: "document", // This defines a document type (a full record)
  fields: [
    {
      name: "id",
      title: "Blog Id",
      type: "number", // A simple number field for the blog id
    },
    {
      name: "title",
      title: "Title",
      type: "string", // A simple string field for the blog title
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string", // A text field for the blog excerpt
    },
    {
      name: "date",
      title: "Date",
      type: "date", // A datetime field for the post date
    },
    {
      name: "author",
      title: "Author",
      type: "string", // A string field for the author's name
    },
    {
      name: "category",
      title: "Category",
      type: "string", // A string field for the category of the post
    },
    {
      name: "image",
      title: "Image",
      type: "image", // An image field for the blog post image
      options: {
        hotspot: true, // To allow for image cropping and focusing
      },
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },   
  ],
};
