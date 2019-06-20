import PropTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'

import { IconCaretDown, IconFile, IconFolder } from '../icons'

class FileTree extends React.Component {
  constructor(props) {
    super(props)
    const tree = this.props.tree

    this.state = {
      tree,
      folders: this.treeToArray(tree),
    }
  }

  treeToArray = tree => {
    const recurcive = (tree, acc) => {
      tree.forEach(item => {
        if (item.type === 'folder') {
          acc.push({
            filename: get(item, 'filename'),
            path: get(item, 'path'),
            hidden: get(item, 'hidden', false),
          })
          if (get(item, 'children')) {
            recurcive(item.children, acc)
          }
        }
      })
      return acc
    }
    return recurcive(tree, [])
  }

  toggleFolder = item => {
    const folders = get(this.state, 'folders')
    const folder = folders.find(folder => folder.path === item.path)
    folder.hidden = !get(folder, `hidden`, false)
    this.setState({ folders: folders })
  }

  isItemDisabled = item => {
    const notAllow = ['mvnw']
    const extensionAllow = [
      'java',
      'xml',
      'properties',
      'md',
      'gitignore',
      'css',
      'scss',
      'less',
      'js',
    ]
    const extension = item.filename.split(`.`).pop()
    if (extensionAllow.indexOf(extension) === -1) {
      return true
    }

    if (notAllow.indexOf(item.filename) > -1) {
      return true
    }
    return false
  }

  renderItem = (item, deph = 0) => {
    if (item.type === 'folder') {
      const f = get(this.state, 'folders').find(
        folder => folder.path === item.path
      )
      const isHidden = get(f, `hidden`, false)
      return (
        <li
          key={`li${item.path}`}
          className={`li-folder ${isHidden ? 'folder-hide' : ''}`}
        >
          <span
            key={`s1${item.path}`}
            className={`folder level-${deph}`}
            onClick={() => this.toggleFolder(item)}
          >
            <span key={`s2${item.path}`} className='text'>
              {get(item, 'children') && <IconCaretDown />}
              <span key={`s3${item.path}`} className='icon'>
                <IconFolder key={`s4${item.path}`} />
              </span>
              {item.filename}
            </span>
          </span>
          {get(item, 'children') && (
            <ul className='ul' key={`ul${item.path}`}>
              {item.children.map(it => this.renderItem(it, deph + 1))}
            </ul>
          )}
        </li>
      )
    } else {
      // File
      const isItemDisabled = this.isItemDisabled(item)
      const selected = get(this.props.selected, 'path') === get(item, 'path')
      return (
        <li key={`li${item.path}`} className='li-file'>
          <span
            key={`s1${item.path}`}
            className={`file level-${deph} ${
              isItemDisabled ? 'disabled' : ''
            } ${selected ? 'selected' : ''}`}
          >
            <span
              key={`s2${item.path}`}
              className={`text`}
              onClick={() => {
                this.clickItem(item, isItemDisabled)
              }}
            >
              <span key={`s3${item.path}`} className='icon'>
                <IconFile key={`s4${item.path}`} />
              </span>
              {item.filename}
            </span>
          </span>
        </li>
      )
    }
  }

  clickItem = (item, disabled) => {
    if (disabled) {
      return
    }
    this.props.onClickItem(item)
  }

  render() {
    return (
      <ul className='explorer-ul'>
        {this.state.tree.map(item => this.renderItem(item, 0))}
      </ul>
    )
  }
}

FileTree.propTypes = {
  tree: PropTypes.array.isRequired,
  selected: PropTypes.object,
  onClickItem: PropTypes.func.isRequired,
}

export default FileTree
