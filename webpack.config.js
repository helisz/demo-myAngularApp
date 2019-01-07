// Next we need to update our compilation configuration. First, inside webpack.config.js, we need to inform Webpack what kind of files it should resolve and let it know how to compile our TypeScript files using @ngtools/webpack. Lastly we use ScriptExtPlugin to give Webpack information on how we want to load our application in the index.html file.

// (If we don’t do that, Angular will complain that it doesn’t know where to load our application. You’ll see the following error in the browser console:
// Error: The selector "app" did not match any elements). We want our script to be loaded in defer mode (executed after DOM initialization), so we need to add this information in ScriptExtPlugin. Modify your webpack.config.js file accordingly:




const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = function () {
    return {
        entry: './src/main.ts',
        output: {
            path: __dirname + '/dist',
            filename: 'app.js'
        },

        resolve: {
            extensions: ['.ts', '.js']
        },

        module: {
            rules: [
                { test: /\.ts$/, loader: '@ngtools/webpack' }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' }
            ]),
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                output: __dirname + '/dist',
                inject: 'head'
            }),

            new ScriptExtPlugin({
                defaultAttribute: 'defer'
            }),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: true
            })

        ]
    };
}