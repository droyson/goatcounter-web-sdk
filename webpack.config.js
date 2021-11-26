const path = require('path')

module.exports = {
  entry: './src/count.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'count.js',
    path: path.resolve(__dirname, 'lib'),
    library: {
      name: 'goatcounter',
      type: 'umd2',
      export: 'default',
      umdNamedDefine: true
    }
  }
}
