// @flow
// Original: https://github.com/sdras/night-owl-vscode-theme
// Converted automatically using ./tools/themeFromVsCode

/*::

import type { PrismTheme } from '../src/types'
*/

var theme /*: PrismTheme */ = {
  plain: {
    color: '#282c33',
    backgroundColor: '#fff',
  },
  styles: [
    {
      types: ['changed'],
      style: {
        color: 'rgb(162, 191, 252)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgba(239, 83, 80, 0.56)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['inserted', 'attr-name', 'namespace'],
      style: {
        color: '#c18401',
        fontStyle: 'italic',
      },
    },
    {
      types: ['comment'],
      style: {
        color: '#a0a1a7',
        fontStyle: 'italic',
      },
    },
    {
      types: ['string', 'url'],
      style: {
        color: '#50a14f',
      },
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(214, 222, 235)',
      },
    },
    {
      types: ['number'],
      style: {
        color: 'rgb(247, 140, 108)',
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: '#50a14f',
      },
    },
    {
      types: ['prolog'],
      style: {
        color: '#4078f2',
      },
    },
    {
      types: ['builtin', 'char', 'constant', 'function'],
      style: {
        color: 'rgb(130, 170, 255)',
      },
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ['punctuation'],
      style: {
        color: '#282c33',
      },
    },
    {
      types: ['selector', 'doctype'],
      style: {
        color: 'rgb(199, 146, 234)',
        fontStyle: 'italic',
      },
    },
    {
      types: ['class-name'],
      style: {
        color: 'rgb(255, 203, 139)',
      },
    },
    {
      types: ['tag', 'operator', 'keyword'],
      style: {
        color: '#e45649',
      },
    },
    {
      types: ['boolean'],
      style: {
        color: 'rgb(255, 88, 116)',
      },
    },
    {
      types: ['property'],
      style: {
        color: 'rgb(128, 203, 196)',
      },
    },
  ],
}

module.exports = theme
