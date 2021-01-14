const getDecimals = value => {
  const decimals = value % Math.floor(value);

  const finalValue = decimals
    .toLocaleString('pt-BR', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })
    .slice(-2);

  return finalValue;
};

export default getDecimals;
