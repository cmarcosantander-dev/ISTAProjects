import React from 'react';
import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
import SecurityCheck from './SecurityCheck';
import AccountStatement from './AccountStatement';
import './App.css';

const users = [
  {
    username: 'user1',
    password: 'password1',
    securityQuestion: '¿Cuál es tu color favorito?',
    securityAnswer: 'azul',
    securityIcon: 'pelota.JPG'
  },
  {
    username: 'user2',
    password: 'password2',
    securityQuestion: '¿Cuál es el nombre de tu mascota?',
    securityAnswer: 'firulais',
    securityIcon: 'ancla.PNG'
  }
  // Añadir más usuarios si es necesario
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSecurityCheck: false,
      authenticatedUser: null,
      showAccountStatement: false,
      backgroundImage: 'main-background' // Estado inicial para la imagen de fondo
    };
  }

  handlePersonasClick = () => {
    this.setState({ showLogin: true });
  }

  handleLoginSuccess = (user) => {
    this.setState({ 
      showLogin: false, 
      showSecurityCheck: true, 
      authenticatedUser: user,
      backgroundImage: 'security-background' // Cambia la imagen de fondo a security-background.png
    });
  }

  handleAccessGranted = () => {
    this.setState({ showSecurityCheck: false, showAccountStatement: true });
  }

  render() {
    const { showLogin, showSecurityCheck, authenticatedUser, showAccountStatement, backgroundImage } = this.state;

    return (
      <div className={`App ${backgroundImage}`}>
        {showLogin ? (
          <LoginScreen users={users} onLoginSuccess={this.handleLoginSuccess} />
        ) : showSecurityCheck ? (
          <SecurityCheck user={authenticatedUser} onAccessGranted={this.handleAccessGranted} />
        ) : showAccountStatement ? (
          <AccountStatement />
        ) : (
          <MainScreen onPersonasClick={this.handlePersonasClick} />
        )}
      </div>
    );
  }
}

export default App;
