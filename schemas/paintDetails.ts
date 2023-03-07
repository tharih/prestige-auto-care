import { defineField, defineType } from "sanity";

export default defineType({
  name: "paint",
  title: "Paint Details",
  type: "document",
  fields: [
    defineField({
        name: "service_image1",
        title: "Service Image",
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
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "service_title1",
      title: "Service Title 1",
      type: "string",
    }),
    defineField({
      name: "service_description1",
      title: "Service Description 1",
      type: "string",
    }),
    defineField({
      name: "service_title2",
      title: "Service Title 2",
      type: "string",
    }),
    defineField({
      name: "service_description2",
      title: "Service Description 2",
      type: "string",
    }),
    defineField({
      name: "service_title3",
      title: "Service Title 3",
      type: "string",
    }),
    defineField({
      name: "service_description3",
      title: "Service Description 3",
      type: "string",
    }),
    defineField({
      name: "service_title4",
      title: "Service Title 4",
      type: "string",
    }),
    defineField({
      name: "service_description4",
      title: "Service Description 4",
      type: "string",
    }),
    defineField({
        name: "description2",
        title: "Description 2",
        type: "string",
      }),
      defineField({
        name: "title2",
        title: "Title 2",
        type: "string",
      }),

      defineField({
        name: "process_description",
        title: "Process Description",
        type: "string",
      }),
      defineField({
        name: "process_title1",
        title: "Process Title 1",
        type: "string",
      }),
      defineField({
        name: "process_description1",
        title: "Process Description 1",
        type: "string",
      }),
      defineField({
        name: "process_title2",
        title: "Process Title 2",
        type: "string",
      }),
        defineField({
        name: "process_description2",
        title: "Process Description 2",
        type: "string",
      }),
      defineField({
        name: "process_title3",
        title: "Process Title 3",
        type: "string",
      }),
      defineField({
        name: "process_description3",
        title: "Process Description 3",
        type: "string",
      }),
    defineField({
      name: "service_image2",
      title: "Service Image 02",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "customer_description",
      title: "Benefits Description",
      type: "string",
    }),
    defineField({
        name: "benefits",
        title: "Benefits",
        type: "array",
        of: [
          {
            type: "string",
          },
        ],
      }),
  ],
});
