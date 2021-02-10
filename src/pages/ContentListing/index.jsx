import React, { useState, useCallback } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

// MaterialUI Checkbox
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Componentes
import Header from '../../components/headers/MainHeader';
import SignupCard from './components/SignupCard';

// Services
import getViewerStatus from '../../services/getViewerStatus';

// Imagens
import heroBackground from '../../assets/images/pages/listing/bgs.png';
import CardImg from '../../assets/images/pages/listing/card-img.png';

// Estilização
import {
  ListingHero,
  Content,
  SmallerContentWrapper,
  FilterContainer,
} from './styles';
import { Container } from '../../styles/common/HomeStyledComponents';

const GreenCheckbox = withStyles({
  root: {
    color: '#009688',
    '&$checked': {
      color: '#009688',
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const ContentListing = () => {
  const [viewerStatus, setViewerStatus] = useState(getViewerStatus);
  const [areasFilterOpened, setAreasFilterOpened] = useState(false);

  // Funções para teste
  const handleLogin = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'free');

    setViewerStatus('free');
  }, []);

  const backToVisit = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'visit');

    setViewerStatus('visit');
  }, []);

  const becomePremium = useCallback(() => {
    localStorage.setItem('@elevagro-app/viewer-status', 'premium');

    setViewerStatus('premium');
  }, []);
  // Funções para teste

  const repeat = 36;

  const [state, setState] = React.useState({
    checkedTodas: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container>
      <Header
        viewerStatus={viewerStatus}
        handleLogin={handleLogin}
        backToVisit={backToVisit}
        becomePremium={becomePremium}
      />

      <ListingHero backgound={heroBackground}>
        <SmallerContentWrapper>
          <h1>Conteúdos sobre X Y Z, mais recentes…</h1>
        </SmallerContentWrapper>
      </ListingHero>

      <Content>
        <SmallerContentWrapper>
          <main className="content__container">
            {[...Array(repeat)].map((card, index) => (
              <div className="content__card" key={index}>
                <img src={CardImg} alt="" className="card__img" />
                <div className="card__text">
                  <h5>Nutrição de Plantas</h5>
                  <p>
                    Manejo da resistência de insetos a inseticidas e a plantas
                  </p>
                </div>
              </div>
            ))}
          </main>

          <aside>
            <SignupCard viewerStatus={viewerStatus} />

            <FilterContainer>
              <h3>Refinar busca</h3>
              <div className="filter__field">
                <header>
                  <h4>Área</h4>

                  <div
                    className="collapse__button"
                    role="button"
                    onClick={() => setAreasFilterOpened(!areasFilterOpened)}
                    tabIndex={0}
                  >
                    {areasFilterOpened && <FiChevronUp size="3rem" />}
                    {!areasFilterOpened && <FiChevronDown size="3rem" />}
                  </div>
                </header>
                <main className="field__content">
                  <ul>
                    <li>
                      <GreenCheckbox
                        checked={state.checkedTodas}
                        onChange={handleChange}
                        name="checkedTodas"
                      />
                      <span>Todas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedDoencas}
                        onChange={handleChange}
                        name="checkedDoencas"
                      />
                      <span>Doenças</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedPragas}
                        onChange={handleChange}
                        name="checkedPragas"
                      />
                      <span>Pragas</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedTecnology}
                        onChange={handleChange}
                        name="checkedTecnology"
                      />
                      <span>Tecnologia e Aplicação</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedNematoides}
                        onChange={handleChange}
                        name="checkedNematoides"
                      />
                      <span>Nematoides</span>
                    </li>

                    <li>
                      <GreenCheckbox
                        checked={state.checkedEtc}
                        onChange={handleChange}
                        name="checkedEtc"
                      />
                      <span>Etc</span>
                    </li>
                  </ul>
                </main>
              </div>
            </FilterContainer>
          </aside>
        </SmallerContentWrapper>
      </Content>
    </Container>
  );
};

export default ContentListing;
