import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";

export const Bann: Block = {
    slug: 'bann',
    fields: [
        {
            name: 'style',
            type: 'select',
            defaultValue: 'Success',
            options: [

                { label: 'Warning', value: 'warning' },

                { label: 'Error', value: 'error' },

                { label: 'Info', value: 'info' },

                { label: 'Success', value: 'success' },

                { label: 'Primary', value: 'primary' },

                { label: 'Danger', value: 'danger' },

                { label: 'Secondary', value: 'secondary' },
            ],
            required: true,
        },

        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor({

                features: ({ rootFeatures }) => {
                    return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()]
                },
            }),

            label: false,
            required: true
        }
    ],
    interfaceName: 'BannBlock'
}