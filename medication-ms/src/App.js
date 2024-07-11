import React, { useState } from 'react';
import PedidoForm from './PedidoForm';
import ResumenPedido from './ResumenPedido';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pedido, setPedido] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handlePedidoSubmit = (datosPedido) => {
    setPedido(datosPedido);
  };

  const handleCancel = () => {
    setPedido(null);
  };

  const handleConfirm = () => {
    console.log("Pedido Enviado");
    alert("Pedido Enviado");
    setPedido(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        pedido ? (
          <ResumenPedido
            pedido={pedido}
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        ) : (
          <PedidoForm onSubmit={handlePedidoSubmit} />
        )
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
