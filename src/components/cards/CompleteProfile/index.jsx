import React, { useState } from 'react';

import './styles.css';

// Components
import ProgressBar from '../../ProgressBar';
import ButtonRounded from '../../Buttons';
import OptionsGenerator from '../../SelectorOptionsGenerator';

import ProfileIcon from '../../../assets/images/icons/complete-profile.svg';
import successIlustration from '../../../assets/images/ilustrations/checkout-success-ilustration.png';

import {
  professions,
  formations,
  cultures,
  areas,
} from '../../../data/research-options';

const CompleteProfileCard = () => {
  const [page, setPage] = useState(1);

  function handleSelectChange(event) {
    const select = event.target;
    const input = event.target.nextSibling;

    if (select.value === 'outro') {
      select.style.display = 'none';
      input.style.display = 'flex';
    }
  }

  function handleInputCancel(event) {
    const inputContainer = event.target.parentNode;
    const input = event.target.parentNode.firstChild;
    const select = event.target.parentNode.previousSibling;

    inputContainer.style.display = 'none';
    input.value = '';
    select.style.display = 'flex';
    select.value = 0;
  }

  return (
    <div className="complete-profile-wrapper">
      {page === 1 && (
        <>
          <div className="complete-profile-title">
            <h3>Acesso</h3>
          </div>

          <div className="card-container page01">
            <img src={successIlustration} alt="Compra realizada com sucesso" />

            <h2>COMPRA REALIZADA COM SUCESSO.</h2>

            <p>
              A Elevagro vai oferecer conteúdos mais relevantes se conhecer
              melhor você.
            </p>

            <ButtonRounded buttonStyle="transparent" onClick={() => setPage(2)}>
              Complete seu perfil
            </ButtonRounded>
          </div>
        </>
      )}

      {page === 2 && (
        <>
          <div className="complete-profile-title">
            <h3>Compra realizada com sucesso.</h3>
          </div>

          <div className="card-container">
            <h2>Melhore a sua experiência.</h2>
            <p>
              A Elevagro sugere conteúdos mais úteis e relevantes para você, se
              você tiver o seu perfil mais completo.
            </p>
            <form action="">
              <fieldset>
                <label htmlFor="user-prefered-culture">
                  Principal cultura de interesse
                </label>
                <select
                  name="user-prefered-culture"
                  id="user-prefered-culture"
                  className="select-appearance"
                  defaultValue={0}
                  required
                >
                  <option value={0} disabled>
                    Selecione aqui
                  </option>
                  <OptionsGenerator array={cultures} />
                </select>
              </fieldset>

              <fieldset>
                <label htmlFor="user-prefered-area">
                  Principal área de interesse
                </label>
                <select
                  name="user-prefered-area"
                  id="user-prefered-area"
                  className="select-appearance"
                  defaultValue={0}
                  required
                >
                  <option value={0} disabled>
                    Selecione aqui
                  </option>
                  <OptionsGenerator array={areas} />
                </select>
              </fieldset>

              <fieldset>
                <label htmlFor="user-profession">Profissão</label>
                <select
                  name="user-profession"
                  id="user-profession"
                  className="select-appearance"
                  onChange={handleSelectChange}
                  defaultValue={0}
                  required
                >
                  <option value={0} disabled>
                    Selecione aqui
                  </option>
                  <OptionsGenerator array={professions} />
                </select>

                <div className="input-container-research">
                  <input type="text" placeholder="Digite aqui" />
                  <button type="button" onClick={handleInputCancel}>
                    Cancelar
                  </button>
                </div>
              </fieldset>

              <fieldset>
                <label htmlFor="user-formation">Formação</label>
                <select
                  name="user-formation"
                  id="user-formation"
                  className="select-appearance"
                  onChange={handleSelectChange}
                  defaultValue={0}
                  required
                >
                  <option value={0} disabled>
                    Selecione aqui
                  </option>
                  <OptionsGenerator array={formations} />
                </select>

                <div className="input-container-research">
                  <input type="text" placeholder="Digite aqui" />
                  <button type="button" onClick={handleInputCancel}>
                    Cancelar
                  </button>
                </div>
              </fieldset>

              <ButtonRounded buttonStyle="secondary">
                <img src={ProfileIcon} alt="Complete seu perfil" />
                Completar meu perfil
              </ButtonRounded>
            </form>
          </div>
        </>
      )}

      <ProgressBar progress={3} />
    </div>
  );
};

export default CompleteProfileCard;
