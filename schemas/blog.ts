import { defineField, defineType } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
        name: "small_description",
        title: "Small Description",
        type: "string",
      }),
    defineField({
      name: "description01",
      title: "Description 01",
      type: "string",
    }),
    defineField({
        name: "image1",
        title: "Image 02",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
       defineField({
      name: "description02",
      title: "Description 02",
      type: "string",
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
    }),
    defineField({
      name: "writtenby",
      title: "Written By",
      type: "string",
    }),
    defineField({
        name: "publishedAt",
        title: "Published at",
        type: "datetime",
      }),
      defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "name",
          maxLength: 100,
        },
      }),

  ],
});
