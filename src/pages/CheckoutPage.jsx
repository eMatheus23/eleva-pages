import React, {useState}  from 'react';
import { Link } from 'react-router-dom';

//CSS
import '../styles/pages/checkout-page.css';

import logoElevagroFooter from '../images/logos/marca-footer.svg';

// Components
import AnnualOfferCard from '../components/cards/AnnualOffer'
import ProductCheckout from '../components/cards/ProductCheckout'
import PaymentOptionsCard from '../components/cards/PaymentOptions'


export default function CheckoutPage(props) {
  document.title = "Elevagro | Checkout"

  console.log(props);

  const [products, setProducts] = useState([
    {
      id:1,
      subscription: "anual",
      name: "Plataforma Elevagro",
      discription: "Assinatura Anual Elevagro com valor promocional",
      price_original: "265,00",
      price: "189,00",
      discount: "35%",
    },
  ])

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => {
      if (product.id === id) {
        return false
      }

      return true
    }))
  }

  return (
    <div id='page-checkout'>
      <header>
        <Link to={'/'}>
          <img src={logoElevagroFooter} alt='Elevagro' />
        </Link>
      </header>
      
      <div className="content-wrapper">
        <main>     
          <PaymentOptionsCard accessPage={'/checkout/access'} />
        </main>

        <aside>           
          <section className="checkout-cart">
            <h3>O seu pedido</h3>

            {
              products.map((product, key) => {
                return <ProductCheckout key={'produto_'+key} deleteProduct={deleteProduct} product={product} />
              })
            }

            <div className="checkout-discounts">
              <h2>SEUS DESCONTOS</h2>
              <h3>PREMIUM SEMESTRAL: - <span>R$ 68.00</span></h3>
            </div>

            <div className="checkout-total">
              <p>Total:</p>
              <h2 className="price-style helvetica">
                <span>R$</span><strong>189</strong>,00
              </h2>
            </div>

            <div className="coupon-input">
              <h3>Você tem cupom de desconto?</h3>
              <div className="input-container">
                <input type="text" placeholder="Digite aqui"/>
                <button type="button">Aplicar</button>
              </div>
            </div>

          </section>

          <AnnualOfferCard />

        </aside>
      </div>
    </div>
  )
}