import React, { Component } from 'react';
const body = document.querySelector('body');
export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
    body.classList.add('no-scroll');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
    body.classList.remove('no-scroll');
  }

  handleCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose()
    }
  };

  backDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose()
    }
  };
  render() {
    return (
      <div onClick={this.backDropClick} className="backDrop">
        <div className='modal'>
          <img src={this.props.largeimg} alt="pitr" />
        </div>
      </div>
    );
  }
}
