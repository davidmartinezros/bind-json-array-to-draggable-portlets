const webpack = require('webpack');
//const path = require('path');

module.exports = {
    /*module: {
        test: /ui-sortable/,
        use: ['imports-loader?$UI=jquery-ui/ui/widgets/sortable']
    },*/
    plugins: [
        new webpack.DefinePlugin({
        'STABLE_FEATURE': JSON.stringify(true),
        'EXPERIMENTAL_FEATURE': JSON.stringify(false)
        }),
        new webpack.ProvidePlugin({
        "$":"jquery",
        "jQuery":"jquery",
        "window.jQuery":"jquery"
        }),
    ]/*,
    resolve : {
        alias: {
          // bind version of jquery-ui
          "jquery-ui": "jquery-ui/jquery-ui.js",      
          // bind to modules;
          modules: [
            path.join(__dirname, "js/helpers"),
            path.join(__dirname, "node_modules"),
          ]
        }
    }*/
};