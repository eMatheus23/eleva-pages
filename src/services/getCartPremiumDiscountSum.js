const getCartPremiumDiscountSum = arrayOfProducts => {
  const sum = arrayOfProducts
    .map(product => {
      if (product.discount_for_premium) {
        return product.price - product.price_for_premium;
      }
      return false;
    })
    .reduce((prev, curr) => prev + curr, 0);

  if (sum > 0) {
    return sum;
  }

  return null;
};

export default getCartPremiumDiscountSum;
