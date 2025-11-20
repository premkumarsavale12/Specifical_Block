import { Block } from "payload";



export const Date: Block = {

    slug: 'date',
    interfaceName: 'DateBlock',
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
    ]
}