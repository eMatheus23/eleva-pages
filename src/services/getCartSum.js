const getCartSum = productsInCart => {
  const sum = productsInCart
    .map(product => product.price)
    .reduce((prev, curr) => prev + curr, 0);

  if (sum < 0) {
    return 0;
  }

  return sum;
};

export default getCartSum;
