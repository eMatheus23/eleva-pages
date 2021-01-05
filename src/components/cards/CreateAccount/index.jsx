import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// CSS
import './styles.css';

// Components
import Page01 from './Page01';
import Page02 from './Page02';

export default function CreateAccountCard(props) {
  const [page, setPage] = useState(1);
  const [inCheckout, setInCheckout] = useState(false);
  const history = useHistory();

  const { renderPage, isInCheckout } = props;

  useEffect(() => {
    if (renderPage === 2) {
      setPage(renderPage);
    }

    if (isInCheckout) {
      setInCheckout(isInCheckout);
    }
  }, [renderPage, isInCheckout]);

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
    inCheckout && props.handleFinish();
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
}
