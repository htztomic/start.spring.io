import FileSaver from 'file-saver'
import Modal from 'react-responsive-modal'
import PropTypes from 'prop-types'
import React from 'react'
import get from 'lodash.get'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'

import { CodePrism, FileTree } from './index'
import { IconDownload, IconFile, IconTimes } from './../icons'

class ExploreModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: null }
  }

  onCopy = () => {
    toast.success('Your file has been copied.')
  }

  download = (file, event) => {
    event.preventDefault()
    let blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' })
    FileSaver.saveAs(blob, file.filename)
    toast.success('Your file has been downloaded.')
  }

  onClickItem = item => {
    this.props.onSelected(item)
  }

  render() {
    const { tree, selected, projectName } = this.props
    if (tree) {
      return (
        <div>
          <Modal
            open={this.props.open}
            onClose={this.props.onClose}
            showCloseIcon={false}
            focusTrapped={false}
            classNames={{ modal: 'modal-explorer', overlay: 'overlay' }}
          >
            <div className='colset'>
              <div className='left'>
                <div className='head'>
                  <strong>{projectName}</strong>
                </div>
                <div className='content'>
                  <FileTree
                    selected={selected}
                    onClickItem={this.onClickItem}
                    tree={tree}
                  />
                </div>
                <div className='foot'>
                  <span onClick={this.props.download} className='action'>
                    <IconDownload />
                    Download the ZIP
                  </span>
                </div>
              </div>
              <div className='right'>
                {selected && (
                  <>
                    <div className='head'>
                      <strong>
                        <IconFile />
                        {get(selected, 'filename')}
                      </strong>
                      <div className='actions'>
                        <span
                          onClick={event => this.download(selected, event)}
                          className='action'
                        >
                          Download
                        </span>
                        <span className='divider'>|</span>
                        <CopyToClipboard
                          onCopy={this.onCopy}
                          text={get(selected, 'content', '')}
                        >
                          <span className='action'>Copy</span>
                        </CopyToClipboard>
                      </div>
                      <span onClick={this.props.onClose} className='close'>
                        <IconTimes />
                      </span>
                    </div>
                    <div className='content'>
                      <CodePrism item={selected} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </Modal>
        </div>
      )
    } else {
      return <></>
    }
  }
}

ExploreModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  download: PropTypes.func.isRequired,
  tree: PropTypes.array,
  projectName: PropTypes.string,
  selected: PropTypes.object,
}

export default ExploreModal
