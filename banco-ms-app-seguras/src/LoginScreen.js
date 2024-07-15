import React from 'react';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { users, onLoginSuccess } = this.props;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      onLoginSuccess(user);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }

  render() {
    return (
      <div className="login-screen">
        <div className="login-container">
          <h2>Acceder a Mi Cuenta Electrónica</h2>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <label>
              Usuario:
              <input type="text" name="username" onChange={this.handleChange} />
            </label>
            <label>
              Contraseña:
              <input type="password" name="password" onChange={this.handleChange} />
            </label>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
