STEPS FOLLOWED:
------------------------------------------------------------------------------------------
1. Set up your project: Install Create React App by running the following command : (`npx create-react-app [PROJECT_NAME]`)
2. Replace the manifest.json file: Go to the public folder of your project and replace the existing manifest.json file with the one provided in the Chrome Extension documentation. Customize the manifest file according to your requirements. You can find the documentation here: https://developer.chrome.com/docs/extensions/mv3/manifest/
3. Create a background script: Inside the public folder, create a new file named `background.js` to handle background job logic for your extension.
4. Build your project: Run the following command to generate a build folder containing the necessary files: `npm run build`, This command will generate the build folder, which includes the `index.html` file and the `background.js` file.
5. Update manifest.json: Go to the public folder and open the `manifest.json` file. Update the `web_accessible_resources`, `background`, and `content_scripts` sections to include the appropriate references to the files generated in the build folder (`index.html`, `background.js`, and the bundled React components).
6. Inject React into the content: In your `content.js` file (located in the src folder), create an HTML element dynamically and insert it into the DOM. You can then use React components, such as an App component, and bundle all the React components into a single file using a bundler. Since you encountered an error, set up your own webpack configuration specifically for the content.js file to resolve the error. This means treating content.js as the main React file for the content part of your extension. Follow these steps to install webpack configuration
    1. Install required dependencies:
     `npm install --save-dev webpack webpack-cli babel-loader @babel/core @babel/preset-react react react-dom`
    2. Create a webpack configuration file - Create a file named `webpack.config.js` in the root directory of your project with the following content:
    `const path = require('path');
     module.exports = {
     mode: 'production',
    entry: './src/content.js',
    output: {
    filename: 'content.bundle.js',
    path: path.resolve(__dirname, 'build'),
     },
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
        ],
    },
    resolve: {
    extensions: ['.js', '.jsx'],
    },
    };`  
    3. Update your content.js file
     Remove any import statements from your content.js file since we will handle the bundling with Webpack. So, we can create an html element and insert into DOM, and create a root element for react and get newly create html element and render DOM. From there reconcilation happended.
    4. Update your manifest.json file
     Update the "content_scripts" section in your manifest.json file to include the bundled JavaScript file: 
    5. And after every time to build your application we need to execute `npx webpack --config webpack.config.js`   


6. To install tailwind css: We need to follow these steps: 
    1. Install the required dependencies:
     `npm install --save-dev webpack webpack-cli style-loader css-loader postcss-loader postcss autoprefixer tailwindcss`
    2. Create a postcss.config.js file:
    Create a file named postcss.config.js in the root directory of your project with the following content:
    `module.exports = {
    plugins: [
    require('tailwindcss'),
    require('autoprefixer')
    ]
    };`   

    3. Update your Webpack configuration: Modify your Webpack configuration (webpack.config.js) to add the necessary loaders for CSS processing. Here's an example configuration:
    `const path = require('path');
    module.exports = {
    mode: 'production',
    entry: './src/content.js',
    output: {
    filename: 'content.bundle.js',
    path: path.resolve(__dirname, 'build'),
    },
    module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
    },
    resolve: {
    extensions: ['.js'],
    },
    };`

    4. Build your extension: Run the Webpack build command to bundle your content script and process the CSS:
    `npx webpack --config webpack.config.js`


