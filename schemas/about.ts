import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "home_title",
      title: "Home Title",
      type: "string",
    }),
    defineField({
      name: "home_image_01",
      title: "Home Image 01",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "home_image_02",
      title: "Home Image 03",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "experienceYears",
      title: "Experience Years",
      type: "string",
    }),

    defineField({
      name: "options",
      title: "Options",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "whyChooseUs",
      title: "why Choose Us",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "mainTitle",
              title: "Main Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "image_01",
      title: "Image 01",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "image_02",
      title: "Image 02",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "image_03",
      title: "Image 03",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "choose_image",
      title: "Choose us Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
