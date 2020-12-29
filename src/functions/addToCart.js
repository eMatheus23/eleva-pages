// Data
import products from '../data/products';

export function deleteOtherPlans(array) {
  const newArray = array;
  // Procura o index de outros planos no cart
  newArray.map((product, index) => {
    if (product.subscription) {
      // Se for encontrado algum plano, ele é excluído do cart
      newArray.splice(index, 1);
    }
    return false;
  });

  return newArray;
}

export default function addToCart(productId) {
  // Busca o cart conteúdo do sessionStorage
  const cart = JSON.parse(sessionStorage.getItem('@elevagro-app/cart'));

  // Procura o produto escolhido no array e guarda em uma variável
  const productToCart = products.filter(product => product.id === productId);

  // // Inicia a variável temporária como um array vazio
  // var temporaryCart = [];

  // Coloca o cart na variável temporária
  let temporaryCart = cart;

  // Se o carrinho não estiver vazio
  if (temporaryCart) {
    if (productToCart[0].type === 'premium-subscription') {
      temporaryCart = deleteOtherPlans(temporaryCart);
    }

    // Adiciona o plano escolhido ao carrinho temporário
    temporaryCart.push(productToCart[0]);

    return sessionStorage.setItem(
      '@elevagro-app/cart',
      JSON.stringify(temporaryCart),
    );
  }

  temporaryCart = productToCart;

  return sessionStorage.setItem(
    '@elevagro-app/cart',
    JSON.stringify(temporaryCart),
  );
}
