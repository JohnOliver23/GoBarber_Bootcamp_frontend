import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      {/**Info */}
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      {/**Success */}
      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>aconteceu um erro</strong>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
      {/**Error */}
      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicação</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
