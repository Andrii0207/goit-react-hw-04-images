import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleClickByEsc = evt => {
      if (evt.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleClickByEsc);

    return () => {
      window.removeEventListener('keydown', handleClickByEsc);
    };
  }, [closeModal]);

  const handleClickBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClickBackdrop}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

export default Modal;
