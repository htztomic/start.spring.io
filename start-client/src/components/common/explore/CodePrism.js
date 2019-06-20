import PropTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import Highlight, { defaultProps } from 'prism-react-renderer'

import theme from './theme'

const FILE_EXTENSION_TO_LANGUAGE = {
  js: 'javascript',
  md: 'markdown',
  sh: 'bash',
  cmd: 'bash',
  kts: 'kotlin',
}

const getLanguage = file => {
  if (!file.includes(`.`)) {
    return `none`
  }
  const extension = file.split(`.`).pop()
  return FILE_EXTENSION_TO_LANGUAGE.hasOwnProperty(extension)
    ? FILE_EXTENSION_TO_LANGUAGE[extension]
    : extension.toLowerCase()
}

class CodePrism extends React.Component {
  render() {
    const code = get(this.props, 'item.content', '').replace(/\t/g, '  ')
    const extension = getLanguage(get(this.props, 'item.filename'))
    return (
      <Highlight
        {...defaultProps}
        code={code}
        language={extension}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          let groupLine = tokens.length > 9 ? '2' : '1'
          groupLine = tokens.length > 99 ? '3' : groupLine
          groupLine = tokens.length > 999 ? '4' : groupLine

          return (
            <pre className={`${className} line-${groupLine}`} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  <span data-value={i + 1} className='number'></span>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )
        }}
      </Highlight>
    )
  }
}

CodePrism.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CodePrism
