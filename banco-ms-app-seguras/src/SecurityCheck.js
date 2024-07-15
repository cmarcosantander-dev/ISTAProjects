import React from 'react';

class SecurityCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIcon: null,
      answer: '',
      shuffledIcons: this.shuffleIcons()
    };
  }

  shuffleIcons() {
    const icons = [
      'pelota.JPG', 'ancla.PNG', 'bicicleta.PNG', 'billete.PNG', 'calculadora.PNG',
      'corazon.PNG', 'impresora.PNG', 'metro.PNG', 'microfono.PNG', 'mundo.PNG',
      'palmera.PNG', 'paloma.PNG', 'satelite.PNG', 'taco.PNG', 'telefono.PNG', 'televisor.PNG'
    ];
    // Utiliza sort con Math.random() para obtener un orden aleatorio
    return icons.sort(() => Math.random() - 0.5);
  }

  handleIconClick = (icon) => {
    this.setState({ selectedIcon: icon });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { answer, selectedIcon } = this.state;
    const { user, onAccessGranted } = this.props;

    if (answer === user.securityAnswer && selectedIcon === user.securityIcon) {
      onAccessGranted();
    } else {
      alert('Respuesta o icono incorrecto');
    }
  }

  handleChange = (event) => {
    this.setState({ answer: event.target.value });
  }

  render() {
    const { user } = this.props;
    const { selectedIcon, shuffledIcons } = this.state;

    return (
      <div className="security-check-container">
        <div className="question-container">
          <p>{user.securityQuestion}</p>
          <input type="text" name="answer" onChange={this.handleChange} />
        </div>
        <div className="icons">
          {shuffledIcons.map((icon) => (
            <img
              key={icon}
              src={`/${icon}`}
              alt={icon}
              className={`icon ${selectedIcon === icon ? 'selected' : ''}`}
              onClick={() => this.handleIconClick(icon)}
            />
          ))}
        </div>
        <button type="submit" onClick={this.handleSubmit}>Ingresar</button>
      </div>
    );
  }
}

export default SecurityCheck;
