import React from "react"
import ReactDOM from "react-dom"
import ReactModal from 'react-modal'

class ImageModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  setModalState(showModal) {
    this.setState({
      showModal: showModal
    });
  }

  render() {
    return (
      <div className="column">

        <img src={ this.props.src } onClick={ this.setModalState.bind(this, true) } />
        <ReactModal isOpen={ this.state.showModal }>
          <img src={ this.props.src } onClick={ this.setModalState.bind(this, false) } />
        </ReactModal>
        </div>
    )
}
}

export default ImageModal
