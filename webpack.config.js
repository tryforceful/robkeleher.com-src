const path = require('path');

module.exports = {
    entry: './_js/fontawesome_builder.js',
    output: {
        filename: 'fontawesome_bundle.js',
        path: path.resolve(__dirname, 'assets/javascripts')
    },
    mode: 'production'
};