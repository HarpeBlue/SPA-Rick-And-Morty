const path = require('path'); // Nos permíte acceder hacia dónde estamos nosotros dentro de la carpeta dentro del proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Archivo necesario para trabajar con HTML
const { Template } = require('webpack');

module.exports = { // Módulo que vamos a exportar dónd viene cada configuración de lo que va a suceder.
  entry: './src/index.js', // El primer elemento es tener nuestro punto de entrada
  output: { // Donde vamos a poner nuestro proyecto listo y compilado para poner en producción
    path: path.resolve(__dirname, 'dist'), // Hacia dónde lo ponemos
    filename: 'main.js' // Archivo que se genera
  },
  resolve: {
    extensions: ['.js'], //extensiones que se van a utilizar.
  },
  module: {// Generamos Reglas necesarias para trabajar, como babel
    rules: [{ // pasadas por medio de un arreglo
      test: /\.js?$/, // estructuras de babel con un test con un reject con valores que queremos filtrar
      exclude: /node_modules/, // Exluimos la carpeta module
      use: {
        loader: 'babel-loader',// Utilizar un loader o configuración preestablecida.
      }
    }]
  },
  plugins: [// Plugins que vamos a utiliza con un arreglo.
    new HtmlWebpackPlugin(
      {
        inject: true,// como voy a inyectar un valor a un archivo HTML
        template: './public/index.html',// Donde se encuentra el template principal
        filename: './index.html' // hacia dónde lo mandamos.
      }
    )
  ]
}