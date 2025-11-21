

import { Block } from "payload";


export const Sample: Block = {
    slug: 'sample',
    interfaceName: 'sample',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'subtitle',
            type: 'text',
        },
    ],
};

