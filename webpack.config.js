
module.exports = {
  entry: {
    App: "./app/assets/scripts/App.js"           //path.resolve(__dirname,),
  },
  output: {
    path: "./app/temp/scripts",
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['react','es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }   /*End of module*/

}/*End of module exports*/
