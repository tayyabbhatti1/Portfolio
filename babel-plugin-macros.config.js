module.exports = {
  emotion: {
    autoLabel: 'dev-only',
    labelFormat: '[local]',
    sourceMap: true,
    importMap: {
      '@emotion/styled': {
        default: {
          canonicalImport: ['@emotion/styled', 'default'],
        },
      },
    },
  },
}; 