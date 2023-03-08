import { defineField, defineType } from "sanity";

export default defineType ({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields:[
       defineField ({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
        }),
        defineField ({
            name: 'name',
            title:'Name',
            type:'string',
        }),
        
        defineField({
            name:'details',
            title:'Details',
            type:'string',
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options: {
                source: 'slug',
                maxLength: 96,
              },
        })


    ]
})