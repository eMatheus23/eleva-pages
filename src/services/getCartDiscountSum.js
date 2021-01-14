const discountSumFunction = arrayOfProducts => {
  const sum = arrayOfProducts
    .map(product => {
      if (product.discount) {
        return product.original_price - product.price;
      }
      return false;
    })
    .reduce((prev, curr) => prev + curr, 0);

  if (sum > 0) {
    return sum;
  }

  return null;
};

export default discountSumFunction;
