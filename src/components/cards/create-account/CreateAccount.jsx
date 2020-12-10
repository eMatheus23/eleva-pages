import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// CSS
import '../../../styles/components/cards/create-account.css';

// Components
import Page01 from './Page01';
import Page02 from './Page02';

export default function CreateAccountCard({
  renderPage,
  handleFinish,
  isInCheckout,
}) {
  const [page, setPage] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inCheckout, setInCheckout] = useState(false);
  const history = useHistory();

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
      return setPage(2);
    }
    sessionStorage.setItem(
      '@elevagro-app/viewer-status|is-logged-in',
      JSON.stringify(true)
    );
    setIsLoggedIn(true);
    history.push('/checkout');
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
