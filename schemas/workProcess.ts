import { defineField, defineType } from "sanity";

export default defineType ({
    name: 'workProcess',
    title: 'Work Process',
    type: 'document',
    fields:[
        defineField({
            name: "title_1",
            title: "Process 1",
            type: "string",
          }),
          defineField({
            name: "description_1",
            title: "Descripton 1",
            type: "string",
          }),
          defineField({
            name: "title_2",
            title: "Process 2",
            type: "string",
          }),
          defineField({
            name: "description_2",
            title: "Descripton 2",
            type: "string",
          }),
          defineField({
            name: "title_3",
            title: "Process 3",
            type: "string",
          }),
          defineField({
            name: "description_3",
            title: "Descripton 3",
            type: "string",
          }),
          defineField({
            name: "title_4",
            title: "Process 4",
            type: "string",
          }),
          defineField({
            name: "description_4",
            title: "Descripton 4",
            type: "string",
          }),
          
          
          
        
        


    ]
})