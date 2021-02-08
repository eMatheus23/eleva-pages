import React from 'react';
import { Link } from 'react-router-dom';

// Signup card
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { ContentWrapper } from '../../../styles/common/HomeStyledComponents';
import { Container } from './styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#ffffff',
    '&$checked': {
      color: '#ffffff',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const HomeSignupCard = () => {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container>
      <ContentWrapper>
        <div className="card">
          <p className="card__text">
            Inscreva-se gratuitamente na Elevagro e seja avisado(a) sobre novas
            trilhas de ensino.
          </p>
          <form>
            <p className="form-title">Associação rápida e gratuita.</p>

            <div className="card__input-container name">
              <label htmlFor="name">Nome completo</label>
              <input type="text" placeholder="Nome completo" />
            </div>

            <div className="card__input-container email">
              <label htmlFor="email">E-mail</label>
              <input type="text" placeholder="E-mail para acesso" />
            </div>

            <div className="card__input-container phone">
              <label htmlFor="phone">Celular</label>
              <input type="text" placeholder="(XX) 99999-9999" />
            </div>

            <section className="card__button-container">
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
            </section>
          </form>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default HomeSignupCard;
