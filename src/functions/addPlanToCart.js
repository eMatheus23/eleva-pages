// Data
import products from '../data/products'

export default function addToCart(selectedPlan) { 
  // Busca o cart conteúdo do localStorage
  const cart = JSON.parse(localStorage.getItem('@elevagro-app/cart'));

  // Procura o plano escolhido no array e guarda em uma variável
  const planToCart = products.filter(
    (product) => product.subscription === selectedPlan
  );

  // Inicia a variável temporária como um array vazio
  var temporaryCart = [];

  // Se o carrinho não estiver vazio
  if (cart) {
    // Coloca o cart na variável temporária
    temporaryCart = cart;

    // Procura o index de outros planos no cart
    const cartIndex = temporaryCart.findIndex(
      (product) => product.subscription !== selectedPlan
    );

    // Se for encontrado algum plano, ele é excluído do cart
    if (cartIndex >= 0) {
      temporaryCart.splice(cartIndex, 1);
    }
  }

  // Adiciona o plano escolhido ao carrinho temporário
  temporaryCart.push(planToCart);

  localStorage.setItem('@elevagro-app/cart', JSON.stringify(temporaryCart));
}
