import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form } from '@unform/web';
import * as Yup from 'yup';

// CSS
// import './styles.css';

// Components
import ButtonRounded from '../../Buttons';
import ProgressBar from '../../ProgressBar';
import Input from '../../FormInput';
import InputMask from '../../FormInputMask';
import Switch from '../../CustomSwitch';
import Password from '../../FormPassword';
import Select from '../../FormSelect';
import CountryPicker from '../../CountryPicker';

// Icons
import ArrowRight from '../../../assets/images/icons/arrow-right-white.svg';
import ArrowRightGray from '../../../assets/images/icons/arrow-right-gray.svg';

import getValidationErrors from '../../../utils/getValidationErrors';

import { Title, Container, DoubleSection, Terms, Login } from './styles';

const CreateAccountCard = ({ renderPage, isInCheckout, sigupFinished }) => {
  const history = useHistory();

  const [inCheckout] = useState(() => {
    if (isInCheckout) {
      return true;
    }

    return false;
  });

  const [page, setPage] = useState(() => {
    if (renderPage !== 2) {
      return 1;
    }

    return 2;
  });
  const [stateOptions, setStateOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => {
        setStateOptions(response.data);
      });
  }, []);

  const handleSelectState = useCallback(event => {
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
  }, []);

  const formRef = useRef(null);

  const handleNextPage = useCallback(() => {
    if (page === 1) {
      // Se estiver logado renderiza a pág 2
      localStorage.setItem('@elevagro-app/viewer-status', 'free');
      return setPage(2);
    }

    // Se não estiver na página 1 habilita o login
    localStorage.setItem('@elevagro-app/viewer-status', 'free');

    // Se o card estiver no checkout, envia a função para atualizar a tela
    if (inCheckout) sigupFinished();

    return history.push('/checkout');
  }, [page, inCheckout, sigupFinished]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleFirstSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          surname: Yup.string().required('Sobrenome obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          cpf: Yup.string()
            // eslint-disable-next-line no-useless-escape
            .matches(/^(\d{3}\.){2}\d{3}\-\d{2}$/)
            .required('CPF obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(8, 'No mínimo 8 dígitos'),
          terms: Yup.bool().oneOf([true], 'Você deve aceitar os termos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleNextPage();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [handleNextPage],
  );

  const handleSecondSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          cep: Yup.string()
            .matches(/^\d{5}-\d{3}$/)
            .required('CEP obrigatório'),
          country: Yup.string().required('País obrigatório'),
          state: Yup.string().required('Estado obrigatório'),
          city: Yup.string().required('Cidade obrigatória'),
          street: Yup.string().required('Logradouro obrigatório'),
          neighborhood: Yup.string().required('Bairro obrigatório'),
          'street-number': Yup.number()
            .transform(value => (Number.isNaN(value) ? undefined : value))
            .required('Número obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        handleNextPage();
      } catch (err) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [handleNextPage],
  );

  return (
    <>
      {page === 1 && (
        <>
          <Title>
            {!inCheckout && <h3>Conta Premium Elevagro</h3>}
            {inCheckout && <h3>Criar sua conta para acesso</h3>}
          </Title>

          <Container isInCheckout={isInCheckout}>
            <Form ref={formRef} onSubmit={handleFirstSubmit}>
              <div>
                <label htmlFor="name">Nome</label>
                <Input type="text" name="name" placeholder="Digite aqui" />
              </div>

              <div>
                <label htmlFor="surname">Sobrenome</label>
                <Input type="text" name="surname" placeholder="Digite aqui" />
              </div>

              <DoubleSection>
                <div>
                  <label htmlFor="phone">Nº celular</label>
                  <InputMask
                    type="text"
                    name="phone"
                    placeholder="(xx) 00000.0000"
                    mask="(99) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="cpf">
                    CPF
                    <Link to="/">Não tem CPF?</Link>
                  </label>

                  <InputMask
                    type="text"
                    name="cpf"
                    placeholder="000.000.000-00"
                    mask="999.999.999-99"
                  />
                </div>
              </DoubleSection>

              <div>
                <label htmlFor="email">e-mail</label>
                <Input name="email" placeholder="Será o seu login" />
              </div>

              <div>
                <label htmlFor="password">Senha</label>
                <Password name="password" placeholder="Sua senha de acesso" />
              </div>

              <ButtonRounded
                type="submit"
                buttonStyle={inCheckout ? 'primary' : 'secondary'}
              >
                Próximo
                {!inCheckout && <img src={ArrowRight} alt="Próximo" />}
                {inCheckout && <img src={ArrowRightGray} alt="Próximo" />}
              </ButtonRounded>

              <Terms>
                <Switch name="terms" id="ckeck-box" />
                <p>
                  Concordo com os
                  <> </>
                  <Link to="/">termos de uso</Link>
                  <> e </>
                  <Link to="/">Política de privacidade</Link>
                </p>
              </Terms>
            </Form>
          </Container>

          {inCheckout && (
            <Login>
              Já tem conta na Elevagro?
              <> </>
              <Link to="/">Faça o login aqui</Link>
              <>.</>
            </Login>
          )}

          <ProgressBar progress={0} />
        </>
      )}

      {page === 2 && (
        <>
          <Title>
            {!inCheckout && <h3>Dados necessários para sua adesão Premium</h3>}
            {inCheckout && <h3>Dados para realizar a sua compra.</h3>}
          </Title>

          <Container isInCheckout={isInCheckout}>
            <Form ref={formRef} onSubmit={handleSecondSubmit}>
              <DoubleSection type="two-thirds">
                <div>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    type="text"
                    name="cep"
                    placeholder="00000-000"
                    mask="99999-999"
                  />
                </div>

                <div>
                  <label htmlFor="country">País</label>
                  {/* <select
                  name="country"
                  id="country"
                  className="select-appearance"
                  defaultValue="Brasil"
                  required
                >
                  {countryOptions.map(country => {
                    return (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    );
                  })}
                </select> */}
                  <CountryPicker name="country" />
                </div>
              </DoubleSection>

              <DoubleSection type="one-third">
                <div>
                  <label htmlFor="state">Estado</label>
                  <Select
                    name="state"
                    id="state"
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
                  </Select>
                </div>

                <div>
                  <label htmlFor="city">Cidade</label>
                  <Select name="city" id="city" defaultValue="" disabled>
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
                  </Select>
                </div>
              </DoubleSection>

              <div>
                <label htmlFor="street">Logradouro</label>
                <Input
                  type="text"
                  name="street"
                  id="street"
                  placeholder="Digite aqui"
                />
              </div>

              <DoubleSection type="two-thirds">
                <div>
                  <label htmlFor="neighborhood">Bairro</label>
                  <Input
                    type="text"
                    name="neighborhood"
                    id="neighborhood"
                    placeholder="Digite aqui"
                  />
                </div>

                <div>
                  <label htmlFor="street-number">Número</label>
                  <Input
                    type="text"
                    name="street-number"
                    id="street-number"
                    placeholder="0000"
                  />
                </div>
              </DoubleSection>

              <ButtonRounded
                type="submit"
                buttonStyle={inCheckout ? 'primary' : 'secondary'}
              >
                Próximo
                {!inCheckout && <img src={ArrowRight} alt="Próximo" />}
                {inCheckout && <img src={ArrowRightGray} alt="Próximo" />}
              </ButtonRounded>
            </Form>
          </Container>

          <div className={inCheckout ? 'large-margin' : ''}>
            <ProgressBar progress={1} />
          </div>
        </>
      )}
    </>
  );
};

CreateAccountCard.propTypes = {
  renderPage: PropTypes.number,
  isInCheckout: PropTypes.bool,
  sigupFinished: PropTypes.func,
};

CreateAccountCard.defaultProps = {
  renderPage: 1,
  isInCheckout: false,
};

export default CreateAccountCard;
