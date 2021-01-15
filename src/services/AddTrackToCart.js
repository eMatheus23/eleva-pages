// Data
import tracks from '../data/tracks.json';

const AddTrackToCart = ({ trackId }) => {
  // Busca o conteúdo do cart no localStorage
  const cart = JSON.parse(localStorage.getItem('@elevagro-app/cart'));

  // Procura o produto escolhido no array e guarda em uma variável
  const couponToCart = tracks.filter(track => track.id === trackId);

  // Coloca o cart na variável temporária
  let temporaryCart = cart;

  // Se o carrinho não estiver vazio
  if (temporaryCart) {
    // Adiciona o plano escolhido ao carrinho temporário
    temporaryCart.push(couponToCart[0]);

    localStorage.setItem('@elevagro-app/cart', JSON.stringify(temporaryCart));

    return temporaryCart;
  }

  temporaryCart = couponToCart;

  return localStorage.setItem(
    '@elevagro-app/cart',
    JSON.stringify(temporaryCart),
  );
};

export default AddTrackToCart;
