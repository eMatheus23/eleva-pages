import React, {useState}   from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../styles/pages/checkout-page.css';
import '../styles/components/cards/complete-profile.css'

import logoElevagroFooter from '../images/logos/marca-footer.svg';

// Components
import ProgressBar from '../components/ProgressBar'
import { ButtonDark } from '../components/Buttons'
import ProductCheckout from '../components/cards/ProductCheckout'

import ProfileIcon from '../images/icons/complete-profile.svg';


export default function CheckoutAccessPage() {
  document.title = "Acesse seu produto!"

  const [products, setProducts] = useState([
    {
      id:1,
      subscription: "mensal",
      name: "Plataforma Elevagro",
      discription: "Assinatura Mensal Elevagro",
      price_original: "265,00",
      price: "189,00",
      discount: "35%",
    },
    {
      id:2,
      subscription: "semestral",
      name: "Plataforma Elevagro",
      discription: "Assinatura Semestral Elevagro com valor promocional",
      price_original: "265,00",
      price: "189,00",
      discount: "35%",
    },
    {
      id:2,
      subscription: "anual",
      name: "Plataforma Elevagro",
      discription: "Assinatura Anual Elevagro com valor promocional",
      price_original: "239,00",
      price: "189,00",
      discount: "35%",
    },
  ])

  return (
    <div id='page-checkout'>     
        <header>
          <Link to={'/'}>
            <img src={logoElevagroFooter} alt='Elevagro' />
          </Link>
        </header>
        
        <div className="content-wrapper">
          <main> 
            <div className="complete-profile-wrapper">  
              <div className='complete-profile-title'>
                <h3>Compra realizada com sucesso.</h3>
              </div>  
              <div className="card-container">
                <h2>Melhore a sua experiência.</h2>
                <p>
                  A Elevagro sugere conteúdos mais úteis e relevantes para você, 
                  se você tiver o seu perfil mais completo.
                </p>
                <form action="">
                  <fieldset>
                    <label htmlFor="user-prefered-culture">Principal cultura de interesse</label>
                    <select
                      name="user-prefered-culture" 
                      id="user-prefered-culture"
                      className="select-appearance"
                      required
                    >
                      <option value="soja">Selecione aqui</option>
                      <option value="soja">Soja</option>
                      <option value="milho">Milho</option>
                      <option value="trigo">Trigo</option>
                      <option value="...">...</option>
                    </select>
                  </fieldset>

                  <fieldset>
                    <label htmlFor="user-prefered-area">Principal área de interesse</label>
                    <select
                      name="user-prefered-area" 
                      id="user-prefered-area"
                      className="select-appearance"
                      required
                    >
                      <option value="soja">Selecione aqui</option>
                      <option value="fitopatologia1">Fitopatologia</option>
                      <option value="fitopatologia12">Fitopatologia</option>
                      <option value="fitopatologia13">Fitopatologia</option>
                      <option value="...">...</option>
                    </select>
                  </fieldset>

                  <fieldset>
                    <label htmlFor="user-profession">Profissão</label>
                    <select
                      name="user-profession" 
                      id="user-profession"
                      className="select-appearance"
                      required
                    >
                      <option value="soja">Selecione aqui</option>
                      <option value="1">Profissão 01</option>
                      <option value="2">Profissão 02</option>
                      <option value="3">Profissão 03</option>
                      <option value="4">...</option>
                    </select>
                  </fieldset>

                  <ButtonDark>
                    <img src={ProfileIcon} alt="Complete seu perfil"/>
                    Completar meu perfil
                  </ButtonDark>
                </form>
              </div>

              <ProgressBar progress={3}/>
            </div> 
          </main>

          <aside>           
            <section className="checkout-cart-sucess">
              <h3>O seu pedido</h3>

              {
                products.map((product, key) => {
                  return <ProductCheckout key={'produto_'+key} product={product} success={true}/>
                })
              }

            </section>

          </aside>             
      </div>
    </div>
  )
}