// Formata os valores de moedas para o padrão BRL (R$ 99,99)

const formatValue = value =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
