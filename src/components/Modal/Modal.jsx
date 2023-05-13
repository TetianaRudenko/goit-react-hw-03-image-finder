import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Overlay, OverlayModal } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return createPortal(
      <Overlay onClick={this.handleOverlayClick}>
        <OverlayModal>
          <img src={this.props.src} alt={this.props.alt} width="1280" />
          {/* {this.props.children} */}
        </OverlayModal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

