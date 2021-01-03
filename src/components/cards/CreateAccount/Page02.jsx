import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import ButtonRounded from '../../Buttons';
import ProgressBar from '../../ProgressBar';

// Icons
import ArrowRight from '../../../assets/images/icons/arrow-right-white.svg';
import ArrowRightGray from '../../../assets/images/icons/arrow-right-gray.svg';

import countryOptions from '../../../data/countries';

export default function Page02({ handleNextPage, isInCheckout }) {
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [inCheckout, setInCheckout] = useState(false);

  document.title = 'Elevagro | Criar Conta Premium';

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        setStateOptions(response.data);
      });
  }, []);

  useEffect(() => {
    if (isInCheckout) {
      setInCheckout(isInCheckout);
    }
  }, [isInCheckout]);

  function handleSelectState(event) {
    const state = event.target.value;
    const cities = document.querySelector('#city');

    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`,
      )
      .then(response => {
        setCityOptions(response.data);
      });

    cities.removeAttribute('disabled');
  }
  return (
    <>
      <div className="create-account-title">
        {!inCheckout && <h3>Dados necessários para sua adesão Premium</h3>}
        {inCheckout && <h3>Dados para realizar a sua compra.</h3>}
      </div>

      <div className="create-account-card">
        <form action="">
          <section>
            <fieldset>
              <label htmlFor="cep">CEP</label>
              <input
                className="form-medium"
                type="text"
                name="cep"
                id="cep"
                placeholder="000000-000"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="country">País</label>
              <select
                name="country"
                id="country"
                className="select-appearance"
                defaultValue="Brasil"
                required
              >
                {countryOptions.map(country => {
                  return (
                    <option key={country.sigla} value={country.nome_pais}>
                      {country.nome_pais}
                    </option>
                  );
                })}
              </select>
            </fieldset>
          </section>

          <section>
            <fieldset>
              <label htmlFor="state">Estado</label>
              <select
                name="state"
                id="state"
                className="select-appearance"
                required
                defaultValue=""
                onChange={handleSelectState}
              >
                <option value="" disabled>
                  UF
                </option>
                {stateOptions.map(state => {
                  return (
                    <option key={state.sigla} value={state.sigla}>
                      {state.sigla}
                    </option>
                  );
                })}
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="city">Cidade</label>

              <select
                name="city"
                id="city"
                className="select-appearance"
                defaultValue=""
                disabled
                required
              >
                <option value="" disabled>
                  Cidade
                </option>
                {cityOptions.map((city, key) => {
                  return (
                    <option key={city.id + key} value={city.nome}>
                      {city.nome}
                    </option>
                  );
                })}
              </select>
            </fieldset>
          </section>

          <section>
            <fieldset>
              <label htmlFor="street">Logradouro</label>
              <input
                type="text"
                name="street"
                id="street"
                placeholder="Digite aqui"
                required
              />
            </fieldset>
          </section>

          <section>
            <fieldset>
              <label htmlFor="neighborhood">Bairro</label>
              <input
                className="form-medium"
                type="text"
                name="neighborhood"
                id="neighborhood"
                placeholder="Digite aqui"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="street-number">Número</label>
              <input
                className="form-small"
                type="text"
                name="street-number"
                id="street-number"
                placeholder="0000"
                required
              />
            </fieldset>
          </section>

          <ButtonRounded
            onClick={handleNextPage}
            buttonStyle={inCheckout ? 'primary' : 'secondary'}
          >
            Próximo
            {!inCheckout && <img src={ArrowRight} alt="Próximo" />}
            {inCheckout && <img src={ArrowRightGray} alt="Próximo" />}
          </ButtonRounded>
        </form>
      </div>

      <div className={inCheckout ? 'large-margin' : ''}>
        <ProgressBar progress={1} />
      </div>
    </>
  );
}