import { fields } from "@payloadcms/plugin-form-builder";
import { Block } from "payload";

export const Example: Block = {

    slug: 'example',
    interfaceName: 'example',

    fields: [
        {
            name: 'sliders',
            type: 'array',
            label: 'Image Slider',
            minRows: 1,
            maxRows: 10,
            interfaceName: 'CardSlider',
            labels: {
                singular: 'Slide',
                plural: 'Slides',
            },
            fields: [

                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'caption',
                    type: 'text',
                },
            ],
        },

    ]
}