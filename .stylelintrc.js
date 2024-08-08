module.exports = {
  extends: ['@fourdigit/stylelint-config-fourdigit'],
  rules: {
    'color-function-notation': null,
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'media-feature-colon-space-after': 'always',
    'property-no-vendor-prefix': null,
    'scss/at-import-partial-extension': null,
    'selector-no-qualifying-type': null,
    'selector-class-pattern': [
      '(?!(^|-|_)[0-9])(?!(^-|-$|^([amotpu]|swiper)--|---|__-|-__))^([amotpu]|swiper)-[0-9a-z-]+(__[0-9a-z-]+){0,2}(--[0-9a-z-]+)?$',
      {
        resolveNestedSelectors: true,
      },
    ],
    linebreaks: 'unix',
  },
};
