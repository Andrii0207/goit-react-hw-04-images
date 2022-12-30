// import { Component } from 'react';
import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ closeModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleClickByEsc);
  });

  useEffect(() => {
    window.removeEventListener('keydown', handleClickByEsc);
  });

  const handleClickByEsc = evt => {
    if (evt.code === 'Escape') {
      closeModal();
    }
  };

  const handleClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClickBackdrop}>
      <div className={css.modal}>{this.props.children}</div>
    </div>
  );
};

export default Modal;

// class Modal extends Component {
// componentDidMount = () => {
//   window.addEventListener('keydown', this.handleClickByEsc);
// };

//   componentWillUnmount = () => {
// window.removeEventListener('keydown', this.handleClickByEsc);
//   };

//   handleClickByEsc = evt => {
//     if (evt.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   handleClickBackdrop = evt => {
//     if (evt.currentTarget === evt.target) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     return (
//       <div className={css.overlay} onClick={this.handleClickBackdrop}>
//         <div className={css.modal}>{this.props.children}</div>
//       </div>
//     );
//   }
// }

// export default Modal;
