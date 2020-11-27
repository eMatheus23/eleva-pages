import React, { useEffect, useState } from 'react';
import axios from 'axios';

//CSS
import '../styles/pages/signup-address.css';

// import States from '../assets/states.json';

// Components
import Footer from '../components/Footer'
import HeaderSignup from '../components/HeaderSignup'
import { ButtonDark } from '../components/Buttons'
import ProgressBar from '../components/ProgressBar'

// Icons 
import ArrowRight from '../images/icons/arrow-right.svg';

import brazilFlag from '../images/flags/brazil.svg'

export default function SignupAddress(props) {
  const [stateOptions, setStateOptions] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cityOptions, setCityOptions] = useState([]);

  console.log(props.location.state)

  document.title = "Elevagro | Criar Conta Premium";

  const countryOptions = [
    { value: 'brazil', label: 'Brasil', imgUrl: brazilFlag },
    { value: 'spain', label: 'Spain', imgUrl: brazilFlag  },
    { value: 'usa', label: 'USA', imgUrl: brazilFlag  }
  ]

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        setStateOptions(response.data);
      });
  }, []);

  function handleSelectState(event) {
    const state = event.target.value 
    const cities = document.querySelector('#city')
    
    setSelectedState(state)
    
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`)
      .then((response) => {
        console.log(response.data)
        setCityOptions(response.data);
      });

    cities.removeAttribute('disabled');
  }

  return (
    <div id='page-signup-address'>
      <HeaderSignup/>

      <main>
        <h3>Dados necessários para sua adesão Premium</h3>
        <div className="account-creation-address-card">
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
                  required
                >
                  {countryOptions.map(country => 
                    <option 
                      value={country.value}>{country.label}</option>
                    )}
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
                    <option value="" disabled>UF</option>
                    {stateOptions.map(state => {
                      return (
                        <option 
                          key={state.sigla} 
                          value={state.sigla} 
                        >
                          {state.sigla}
                        </option>
                      )
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
                    <option value="" disabled>Cidade</option>
                    {cityOptions.map(city => {
                      return (
                        <option 
                          key={city.id} 
                          value={city.nome} 
                        >
                          {city.nome}
                        </option>
                      )
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
            
            <ButtonDark linkTo={'/signup/checkout'} params={props.location.state} >
                Próximo 
                <img src={ArrowRight} alt="Próximo"/>
            </ButtonDark>
          </form>
        </div>

        <ProgressBar progress={1}/>

      </main>

        <Footer/>
      </div>
  );
}
