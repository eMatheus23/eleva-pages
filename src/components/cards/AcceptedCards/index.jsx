import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import Switch from '@material-ui/core/Switch';
import cardImg from '../../../assets/images/icons/card-icon-gray.svg';
import acceptedCardsImg from '../../../assets/images/icons/accepted-cards.png';

const AcceptedCards = ({ saveCardOptionActive }) => {
  const [saveCardActive] = useState(() => {
    if (saveCardOptionActive) {
      return true;
    }

    return false;
  });
  const [state, setState] = useState({
    checkedB: false,
  });

  const handleSwitchChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="accepted-cards-container">
      <div>
        <img src={cardImg} alt="" />

        {saveCardActive && (
          <Switch
            checked={state.checkedB}
            onChange={handleSwitchChange}
            name="checkedB"
          />
        )}
      </div>

      <div>
        <p>Você pode parcelar em até 10 vezes no cartão de crédito.</p>
        <img src={acceptedCardsImg} alt="" />
        {saveCardActive && (
          <p>Salvar dados do cartão para compras futuras mais ágeis.</p>
        )}
      </div>
    </div>
  );
};

AcceptedCards.propTypes = {
  saveCardOptionActive: PropTypes.bool,
};

AcceptedCards.defaultProps = {
  saveCardOptionActive: false,
};

export default AcceptedCards;
