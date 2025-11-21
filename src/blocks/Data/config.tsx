
import { Block } from "payload";


export const Data: Block = {

    slug: 'data',
    interfaceName: 'data',
    fields: [
        {
            name: 'dateOnly',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'dayOnly',
                    displayFormat: 'd MMM yyy',
                },
            },
        },
        {
            name: 'timeOnly',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'timeOnly',
                    displayFormat: 'h:mm:ss a',
                },
            },
        },
        {
            name: 'monthOnly',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: 'monthOnly',
                    displayFormat: 'MMMM yyyy',
                },
            },
        },


        {
            name: 'contect',
            type: 'email',
            label: 'Contact Email',
            required: true
        },

        {
            name: 'description',
            type: 'textarea',
            required: true,
            minLength: 20,
            maxLength: 100
        },
         
         {
             name:'age',
              type:'number',
               required:true,
                
         }
    ]

}