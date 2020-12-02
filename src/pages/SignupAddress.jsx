import React from 'react';

//CSS
import '../styles/pages/signup.css';

// Components
import Footer from '../components/Footer';
import HeaderSignup from '../components/HeaderSignup';
import CreateAccountAddressCard from '../components/cards/CreateAccountAddress';

export default function SignupAddress() {
  return (
    <div id='page-signup'>
      <HeaderSignup />

      <main>
        <CreateAccountAddressCard />
      </main>

      <Footer />
    </div>
  );
}
