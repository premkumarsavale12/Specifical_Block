import { FixedToolbarFeature, HeadingFeature, InlineToolbarFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { Block } from "payload";


export const Main: Block = {
    slug: 'main',
    interfaceName: 'MainBlock',
    fields: [
        {

            name: 'richText',
            type: 'richText',
            editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                    return [
                        ...rootFeatures,
                        HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                        FixedToolbarFeature(),
                        InlineToolbarFeature(),
                    ]
                },
            }),
            label: false,

        },

        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },


        
    ],

    labels: {
        plural: 'Mains to Actions',
        singular: 'Main to Action',
    },
}