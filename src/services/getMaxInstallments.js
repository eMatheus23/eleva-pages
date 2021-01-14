/**
 * Retorna o número máximo de parcelas, de acordo com o valor e com as regras de negócio.
 */

const getMaxInstallments = value => {
  if (value > 150) {
    return 10;
  }

  if (value > 100) {
    return 6;
  }

  return 1;
};

export default getMaxInstallments;
