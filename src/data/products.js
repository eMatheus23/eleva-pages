/* eslint-disable global-require */
const products = [
  {
    id: 1,
    type: 'premium-subscription',
    name: 'Plataforma Elevagro',
    subscription: 'mensal',
    discription: 'Assinatura Mensal Elevagro',
    price_original: 39.9,
    price: 29.9,
    promo_discount: 25,
    img: require('../assets/images/mockups/product-checkout-mockup.png'),
  },
  {
    id: 2,
    type: 'premium-subscription',
    name: 'Plataforma Elevagro',
    subscription: 'semestral',
    discription: 'Assinatura Semestral Elevagro com valor promocional',
    price_original: 160.0,
    price: 120.0,
    promo_discount: 25,
    img: require('../assets/images/mockups/product-checkout-mockup2.png'),
  },
  {
    id: 3,
    type: 'premium-subscription',
    name: 'Plataforma Elevagro',
    subscription: 'anual',
    discription: 'Assinatura Anual Elevagro com valor promocional',
    price_original: 265.0,
    price: 189.0,
    promo_discount: 30,
    img: require('../assets/images/mockups/product-checkout-mockup3.png'),
  },
  {
    id: 4,
    type: 'course',
    name: 'CURSO',
    subscription: '',
    discription:
      'Manejo da resistência de insetos a inseticidas e a plantas geneticamente modificadas',
    price_original: 265.0,
    price: 245.0,
    promo_discount: 30,
    img: require('../assets/images/mockups/course-thumbnail.jpg'),
  },
  {
    id: 5,
    type: 'coupon',
    code: 'COUPON34',
    name: 'Voucher',
    price: -34.0,
  },
];
/* eslint-enable global-require */

export default products;
