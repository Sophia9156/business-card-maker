import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = ({authService}) => {
  const onLogin = (e) => {
    authService
    .login(e.currentTarget.textContent)
    .then(console.log);
  }
  return(
    <section>
      <Header />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  )
}

export default Login;