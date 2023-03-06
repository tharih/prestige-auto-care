import { defineField, defineType } from "sanity";

export default defineType ({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields:[
        defineField({
            name: "home_title",
            title: "Home Banner",
            type: "string",
          }),
        
        


    ]
})