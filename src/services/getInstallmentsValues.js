const formatValue = value =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

// Recebe o valor total da compra, o número máximo de parcelas e retorna os valores das parcelas
const getInstallmentsValues = (value, maxInstallments) => {
  const installments = [];

  for (let i = 0; i < maxInstallments; i++) {
    const installment = value / (i + 1);

    installments.push(formatValue(installment));
  }

  return installments;
};

export default getInstallmentsValues;
