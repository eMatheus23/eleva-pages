import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

// Main
import courseTumbnail from '../../../assets/images/mockups/course-thumbnail-02.png';

import courseDetailImg from '../../../assets/images/mockups/course-thumbnail.png';
import cartIcon from '../../../assets/images/icons/cart-icon.svg';
import authorImg from '../../../assets/images/mockups/track-authors/scientist2.png';

export const CourseDetailsModal = ({ handleModal }) => {
  // const history = useHistory();

  // const handleBecomePremium = () => {
  //   history.push('/checkout');
  // };

  return (
    <div className="course-datails-modal">
      <div className="content">
        <span
          onClick={
            () => handleModal({ modalName: 'courseDetails', opened: false })
            // eslint-disable-next-line react/jsx-curly-newline
          }
          role="button"
          tabIndex={0}
          className="close-modal"
        >
          X
        </span>

        <img src={courseDetailImg} alt="Título do Curso" />

        <h5>Nutrição</h5>

        <h3>
          Manejo da resistência de insetos a inseticidas e a plantas
          geneticamente modificadas
        </h3>

        <p>
          Módulo 1. Principais plantas daninhas na soja e sua interferência na
          produção Identificar as principais plantas daninhas e suas
          interferências na produção da soja e diferenciar resistência de
          tolerância.
        </p>

        <p>
          Módulo 2. Manejo Integrado de Plantas Daninhas (MIPD) na Soja Analisar
          o manejo integrado de plantas daninhas na soja como alternativa viável
          dentro do sistema.
        </p>

        <p>
          Módulo 3. Dessecação bem feita para implantação da cultura Avaliar a
          importância da dessecação correta para implantação da cultura da soja
        </p>

        <p>
          Módulo 4. Herbicidas pré-emergentes: A ferramenta mais importante
          Caracterizar a aplicação de herbicidas pré-emergentes na cultura da
          soja
        </p>

        <p>
          Módulo 5. Herbicidas Pós-emergentes Conhecer o funcionamento dos
          herbicidas pós-emergentes e saber como e quando estes herbicidas podem
          ser aplicados na cultura da soja
        </p>

        <p>
          Módulo 6. Novas tecnologias na cultura da soja: Enlist e Xtend
          Entender as novas tecnologias que surgirão no Brasil nas próximas
          safras e os cuidados importantes na adoção destas tecnologias.
        </p>

        <h4>Com quem você vai aprender:</h4>

        <div className="authors">
          <div className="author">
            <img src={authorImg} alt="Nome do Autor" />
            <p>Dr.ª Margarete Manuele Siqueira Silva</p>
            <Link to="/">Sobre</Link>
          </div>
        </div>

        <div className="purchase-container">
          <h4>Adquirir apenas este curso:</h4>
          <del>R$: 450,00</del>
          <h2>R$: 438,70</h2>
          <p>
            12x de
            <strong> R$ 12,30 </strong>
            no cartão
          </p>
          <button type="button">
            Compre agora
            <img src={cartIcon} alt="Compre Agora" />
          </button>
          <span>___ Ou ___</span>
          <section className="be-premium-offer">
            <p>Seja Premium e pague apenas:</p>
            <button type="button">R$ 212,00</button>
          </section>

          <Link to="/">Acessar página do curso.</Link>
        </div>
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        className="clickable-background"
        onClick={
          () => handleModal({ modalName: 'courseDetails', opened: false })
          // eslint-disable-next-line react/jsx-curly-newline
        }
      />
    </div>
  );
};

const CoursesList = ({ handleModal }) => {
  return (
    <section className="courses-list">
      <h2>Os 6 cursos que compõem esta Trilha:</h2>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <button
              type="button"
              onClick={
                () => handleModal({ modalName: 'courseDetails', opened: true })
                // eslint-disable-next-line react/jsx-curly-newline
              }
            >
              Detalhes
            </button>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <button type="button">Detalhes</button>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <button type="button">Detalhes</button>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <button type="button">Detalhes</button>
          </div>
        </div>
      </div>

      <div className="course">
        <img src={courseTumbnail} alt="Nome do Curso" />

        <div className="course-description">
          <div>
            <span>Nutrição</span>
            <p>
              Manejo da resistência de insetos a inseticidas e a plantas
              geneticamente modificadas
            </p>
          </div>

          <div>
            <span>R$: 450,00</span>
            <button type="button">Detalhes</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesList;
