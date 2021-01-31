import React from 'react';
import { Link } from 'react-router-dom';

// Signup card
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Container, ContentWrapper } from './styles';

const GreenCheckbox = withStyles({
  root: {
    color: '#ffffff',
    '&$checked': {
      color: '#ffffff',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const SignupHomeCard = () => {
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
          <p>
            Inscreva-se gratuitamente na Elevagro e seja avisado(a) sobre novas
            trilhas de ensino.
          </p>
          <form>
            <div>
              <label htmlFor="name">Nome completo</label>
              <input type="text" placeholder="Nome completo" />
            </div>

            <div>
              <label htmlFor="email">E-mail para acesso</label>
              <input type="text" placeholder="E-mail para acesso" />
            </div>

            <div>
              <label htmlFor="phone">Celular</label>
              <input type="text" placeholder="(XX) 99999-9999" />
            </div>

            <section>
              <button type="submit">Inscreva-se</button>
              <div>
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

export default SignupHomeCard;
