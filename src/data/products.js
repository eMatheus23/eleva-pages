const products = [
  {
    id: 1,
    type: 'premium-subscription',
    name: 'Plataforma Elevagro',
    subscription: 'mensal',
    discription: 'Assinatura Mensal Elevagro',
    price_original: 39.90,
    price: 29.90,
    discount: 25,
    img: require('../images/mockups/product-checkout-mockup.png'),
  },
  {
    id: 2,
    type: 'premium-subscription',
    name: 'Plataforma Elevagro',
    subscription: 'semestral',
    discription: 'Assinatura Semestral Elevagro com valor promocional',
    price_original: 265.00,
    price: 189.00,
    discount: 30,
    img: require('../images/mockups/product-checkout-mockup2.png'),
  },
  {
    id: 3,
    type: 'premium-subscription',
    name: 'Plataforma Elevagro',
    subscription: 'anual',
    discription: 'Assinatura Anual Elevagro com valor promocional',
    price_original: 265.00,
    price: 239.00,
    discount: 10,
    img: require('../images/mockups/product-checkout-mockup3.png'),
  },
  {
    id: 4,
    type: 'coupon',
    code: 'COUPON34',
    name: 'Voucher',
    price: -34.00,
  }
];

export default products