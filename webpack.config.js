const path = require("path");

module.exports = {
    entry: "./src/App.js",
    module:{
        rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader',
              options: {
                // Disables attributes processing
                sources: false,
              },
            },
          ],
    },
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        // contentBase: path.join(__dirname, 'public')
    }
}
