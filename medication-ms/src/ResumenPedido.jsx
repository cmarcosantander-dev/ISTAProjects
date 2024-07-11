import React from 'react';

const ResumenPedido = ({ pedido, onCancel, onConfirm }) => {
  const { medicamento, tipo, cantidad, distribuidor, sucursal } = pedido;

  const direcciones = [];
  if (sucursal.principal) direcciones.push("Calle 12 de Diciembre, 28");
  if (sucursal.secundaria) direcciones.push("Calle Av. Quito");

  return (
    <div>
      <h2>Pedido al Distribuidor {distribuidor}</h2>
      <p>{cantidad} unidades del {tipo} {medicamento}</p>
      <p>Para la farmacia situada en {direcciones.join(' y ')}</p>
      <button onClick={onCancel}>Cancelar</button>
      <button onClick={onConfirm}>Enviar Pedido</button>
    </div>
  );
};

export default ResumenPedido;
