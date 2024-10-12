# Travel-App
A travel application that includes a simple form where you enter the location you are traveling to and the date you are leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. 

## Project Prerequisites
- Webserver - Node
- Web application framework for routing - Express
- Build tool - Webpack. Using webpack
- External script - Service Worker
- External API - Geonames, Pixabay, Weatherbit.

## Development Lessons from Building This Application
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external URLs

## loaders and plugins Installed 
- npm i -D @babel/core @babel/preset-env babel-loader
- npm i -D style-loader node-sass css-loader sass-loader
- npm i -D clean-webpack-plugin
- npm i -D html-webpack-plugin
- npm i -D mini-css-extract-plugin
- npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

## Unit Test
Unit testing was done using the jest framework. Jest is a framework for testing JavaScript projects.The Jest framework provides us the ability to create, and run unit tests.

## Service Worker
The project had service worker, set up in webpack. 

## Acknowledgement
- Got destination coordinates from - Geonames API
- Fetch current and future weather forecasts using - Pixabay API
- Display relevant images of the destination with the - Weatherbit API
- User-friendly interface for trip planning




## Dependencies
| DEPENDENCY | VERSION |
|----------|----------|
| Node.js | 20.12.2 | 
| body-parser | 1.20.3| 
| cors | 2.8.5 | 
| dotenv | 16.4.5 | 
| express| 4.21.0 | 
| node-fetch | 3.3.2 | 
| regenerator-runtime| 0.14.1 | 

## Dev Dependencies
| DEPENDENCY | VERSION |
|----------|----------|
| @babel/cli | 7.25.6 | 
| @babel/core | 7.25.2| 
| @babel/preset-env | 7.25.4 | 
| babel-loader | 9.2.1 | 
| clean-webpack-plugin| 4.0.0 | 
| css-loader | 7.1.2 | 
| html-webpack-plugin| 5.6.0 | 
| jest | 29.7.0 | 
| jest-environment-jsdom| 29.7.0 | 
| mini-css-extract-plugin | 2.9.1 | 
| node-sass|9.0.0 | 
| sass-loader| 16.0.2 | 
| style-loader | 4.0.0 | 
| webpack| 5.94.0 | 
| webpack-cli | 5.1.0 | 
| workbox-webpack-plugin|7.1.0 | 

## Version
This project requires the following versions listed above. Please ensure you are using this version to avoid compatibility issues.

## Working with this project

### To Run the Project in Development Mode

## Installation

1. Clone the repository:
   ```bash
   git clone

2. Navigate to the project directory:
   ```bash
   cd <project-directory>

3. Install the dependencies:
    ```bash
    npm install

## Setting Up API Keys

This project relies on several external APIs for functionality. To get the application running on your machine, you must set up the environment variables by creating or updating a .env file. Below are the steps to do so:

1. **Install dotenv**

   If you haven't already, please ensure that dotenv is installed to manage environment variables. You can install it by running:

   ```bash
   npm install dotenv

2. **Create a .env File**

Create a .env file in the root directory of your project. This file should contain your API keys.
Note: This file should not be committed to version control (e.g., GitHub) for security reasons. Add .env to your .gitignore file to prevent accidental exposure.

3. **Add Your API Keys to the .env File**

   Below is an example of what the `.env` file should look like:

   ```bash
   GEO_USERNAME=your-geo-username
   WEATHER_KEY=your-weatherbit-api-key
   PIXA_KEY=your-pixabay-api-key



4. **Accessing Environment Variables**

   Make sure your application loads the `.env` file by requiring `dotenv` in your code. For example, at the top of your main server file, you can add:

   ```javascript
   require('dotenv').config();

By following these steps, anyone setting up this project can add their own API keys and get it running without issues.

















