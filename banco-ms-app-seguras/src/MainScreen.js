import React from 'react';

class MainScreen extends React.Component {
  render() {
    return (
      <div className="main-screen">
        <div className="buttons">
          <button className="button">Banca Electrónica</button>
          <button className="button" onClick={this.props.onPersonasClick}>Personas</button>
          <button className="button">Empresas</button>
        </div>
      </div>
    );
  }
}

export default MainScreen;
