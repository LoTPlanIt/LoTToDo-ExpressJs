const moduleAlias = require('module-alias')
const path = require('path')
const srcPath = path.resolve(__dirname, '..')

moduleAlias.addAliases({
  '@src': srcPath,
  '@configs': path.resolve(srcPath, 'configs'),
  '@constants': path.resolve(srcPath, 'constants'),
  '@utils': path.resolve(srcPath, 'utils'),
  '@middlewares': path.resolve(srcPath, 'middlewares'),
  '@apiV1': path.resolve(srcPath, 'apis/v1')
})

module.exports = moduleAlias
