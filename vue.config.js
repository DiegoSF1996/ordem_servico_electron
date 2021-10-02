module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        extraResources: [
          {
            from: './bd/',
            to: 'bd',
            filter: [
              '**/*'
            ]
          }
        ]
      }
    },
    moment: {
      locales: [
        'pt-br'
      ]
    }
  }
}
