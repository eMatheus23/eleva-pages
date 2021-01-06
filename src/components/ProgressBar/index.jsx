import React from 'react';

import ProgrogressImg0 from '../../assets/images/progress-bar/progress-your-accout.svg';
import ProgrogressImg1 from '../../assets/images/progress-bar/progress-data.svg';
import ProgrogressImg2 from '../../assets/images/progress-bar/progress-payment.svg';
import ProgrogressImg3 from '../../assets/images/progress-bar/progress-access.svg';

import './styles.css';

const ProgressBar = ({ progress }) => {
  function handleProgressBar() {
    switch (progress) {
      case 0:
        return ProgrogressImg0;
      case 1:
        return ProgrogressImg1;
      case 2:
        return ProgrogressImg2;
      case 3:
        return ProgrogressImg3;
      default:
        return ProgrogressImg0;
    }
  }

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <img src={handleProgressBar()} alt="" />
      </div>
      <div className="progress-legend">
        <span className={progress === 0 ? 'active' : ''}>Sua conta</span>
        <span className={progress === 1 ? 'active' : ''}>Dados</span>
        <span className={progress === 2 ? 'active' : ''}>Pagamento</span>
        <span className={progress === 3 ? 'active' : ''}>Acesso</span>
      </div>
    </div>
  );
};

export default ProgressBar;
