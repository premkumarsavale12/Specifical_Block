import { Block } from "payload";


export const Simple: Block = {

    slug: 'simple',
    interfaceName: 'simple',

    fields: [

        {
            name: 'subtitle',
            type: 'text'
        },
        {
            name: 'contact',
            type: 'email',
            label: 'Contact Email Address',
            required: true,
        },

        {
            name: 'title',
            type: 'text',
            required: true,
            minLength: 20,
            maxLength: 100,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
            minLength: 40,
            maxLength: 160,
        },
    ]

}