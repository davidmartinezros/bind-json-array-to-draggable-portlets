import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url';

// snip

plugins: [
    json(),	   // <-- add this
    url({      // <-- and this
        limit: 0,
        include: [
            /.*cldr\/.*\.json/,
            /.*sap.ui.core.*\/SAP-icons.*/,
            /\.properties$/,
        ],
    emitFiles: true,
    fileName: "[name].[hash][extname]",
    }),        // <-- till here
    resolve(),
    babel()
]