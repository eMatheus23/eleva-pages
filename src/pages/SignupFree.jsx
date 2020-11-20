import React from 'react';
import ReactFlagsSelect from 'react-flags-select';

//CSS
import '../styles/pages/signup-free.css';

// Components
import Footer from '../components/Footer'
import HeaderSignup from '../components/HeaderSignup'
import { ButtonDark } from '../components/Buttons'
import ProgressBar from '../components/ProgressBar'

// Icons 
import ArrowRight from '../images/icons/arrow-right.svg';

import brazilFlag from '../images/flags/brazil.svg'

export default function SignupFree() {
  const countryOptions = [
    { value: 'brazil', label: 'Brasil', imgUrl: brazilFlag },
    { value: 'spain', label: 'Spain', imgUrl: brazilFlag  },
    { value: 'usa', label: 'USA', imgUrl: brazilFlag  }
  ]

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
                  className="form-small" 
                  name="country" 
                  id="appearance-select"
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
                <input 
                  className="form-small" 
                  type="text" 
                  name="state" 
                  id="state" 
                  placeholder="Digite aqui"
                  required
                />
              </fieldset>

              <fieldset>
                <label htmlFor="city">Cidade</label>
                <input 
                  className="form-medium" 
                  type="text" 
                  name="city" 
                  id="city" 
                  placeholder="Digite aqui"
                  required
                />
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
            
            <ButtonDark linkTo={'/signup/address'}>
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
