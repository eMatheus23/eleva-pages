import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Signup card
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { SignupCard, GreenCard, PremiumOffer } from './styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#ffffff',
    '&$checked': {
      color: '#ffffff',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const HomeSignupCard = ({ viewerStatus }) => {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      {viewerStatus === 'visit' && (
        <SignupCard>
          <GreenCard>
            <form className="login__container">
              <p className="form-title">Cadastro rápido e gratuito.</p>

              <div className="card__input-container name">
                <label htmlFor="name">Nome completo</label>
                <input type="text" />
              </div>

              <div className="card__input-container phone">
                <label htmlFor="phone">Celular</label>
                <input type="text" placeholder="(XX) 99999-9999" />
              </div>

              <div className="card__input-container email">
                <label htmlFor="email">E-mail</label>
                <input type="text" placeholder="E-mail para acesso" />
              </div>

              <button type="submit" className="submit__button">
                Inscreva-se
              </button>

              <div className="terms-container">
                <FormControlLabel
                  // eslint-disable-next-line prettier/prettier
                  control={(
                    <GreenCheckbox
                      checked={state.checkedA}
                      onChange={handleChange}
                      name="checkedA"
                    />
                    // eslint-disable-next-line prettier/prettier
                    )}
                  // eslint-disable-next-line prettier/prettier
                  label=""
                />
                <label htmlFor="terms">
                  <>
                    Aceito os
                    <> </>
                    <Link to="/">termos de uso</Link>
                    <> </>
                    Elevagro.
                  </>
                </label>
              </div>
            </form>
          </GreenCard>
        </SignupCard>
      )}

      {viewerStatus === 'free' && (
        <PremiumOffer>
          <GreenCard>
            <h3>Tenha acesso à todos os conteúdos e descontos exclusivos.</h3>

            <Link to="/plans">Veja os planos</Link>
          </GreenCard>
        </PremiumOffer>
      )}
    </>
  );
};

HomeSignupCard.propTypes = {
  viewerStatus: PropTypes.string.isRequired,
};

export default HomeSignupCard;
