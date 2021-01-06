import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// CSS
import './styles.css';

// Components
import Page01 from './Page01';
import Page02 from './Page02';

const CreateAccountCard = ({ renderPage, isInCheckout, ...props }) => {
  const [page, setPage] = useState(() => {
    if (renderPage !== 2) {
      return 1;
    }

    return 2;
  });
  const [inCheckout] = useState(() => {
    if (isInCheckout) {
      return true;
    }

    return false;
  });

  const history = useHistory();

  function handleNextPage() {
    if (page === 1) {
      // Se estiver na página 1, ao clicar, renderiza a pág 2
      return setPage(2);
    }

    // Se não estiver na página 1 habilita o login
    localStorage.setItem(
      '@elevagro-app/viewer-status|is-logged-in',
      JSON.stringify(true),
    );

    /* eslint-disable no-unused-expressions */
    // Se o card estiver no checkout, envia a função para atualizar a tela
    inCheckout && props.sigupFinished();
    /* eslint-enable no-unused-expressions */

    return history.push('/checkout');
  }

  return (
    <>
      {page === 1 && (
        <Page01 handleNextPage={handleNextPage} isInCheckout={inCheckout} />
      )}
      {page === 2 && (
        <Page02 handleNextPage={handleNextPage} isInCheckout={inCheckout} />
      )}
    </>
  );
};

export default CreateAccountCard;
