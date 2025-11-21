
import { Block } from "payload";

export const FAQ: Block = {
    slug: 'faq',
    interfaceName: 'faq',
    labels: {
        singular: 'FAQ Block',
        plural: 'FAQ Blocks'
    },

    fields: [
    

        {
            name: 'items',
            type: 'array',
            label: 'FAQ Questons',
            minRows: 1,
            fields: [

                {
                    name: 'Question',
                    type: 'text',
                    label: 'Question',
                    required: true

                },

                {
                    name: 'Answer',
                    type: 'textarea',
                    label: 'answer',
                    required: true
                },

            ]
        },

    ]
}