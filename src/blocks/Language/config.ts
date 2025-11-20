import { Block } from "payload";


export const Language: Block = {
    slug: 'languge',
    interfaceName: 'LanguageBlock',
    fields: [
        {
            name: 'technology',
            type: 'select',
            defaultValue: 'React Js',
            options: [
                {
                    label: 'Typescript',
                    value: 'typescript',
                },
                {
                    label: 'Javascript',
                    value: 'javascript',
                },
                {
                    label: 'CSS',
                    value: 'css',
                },

                {
                    label: 'React Js ',
                    value: 'react js',
                },
                {
                    label: 'Next Js ',
                    value: 'next js ',
                },
                {
                    label: 'Java ',
                    value: 'java',
                },
                {
                    label: 'advanvced Java  ',
                    value: 'advanced java',
                },

                {
                    label: 'HTML ',
                    value: 'html',
                },

                {
                    label: 'Bootstrap ',
                    value: 'bootstrap',
                },
            ],
        },
        {
            name: 'code',
            type: 'code',
            label: false,
            required: true,
        },

    ]

}