import React, { useState } from 'react';

const PedidoForm = ({ onSubmit }) => {
  const [medicamento, setMedicamento] = useState('');
  const [tipo, setTipo] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [distribuidor, setDistribuidor] = useState('');
  const [sucursal, setSucursal] = useState({
    principal: false,
    secundaria: false
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!medicamento || !tipo || !cantidad || !distribuidor) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    if (parseInt(cantidad) <= 0) {
      setError('La cantidad debe ser un número positivo.');
      return;
    }
    if (!sucursal.principal && !sucursal.secundaria) {
      setError('Seleccione al menos una sucursal.');
      return;
    }

    setError('');
    onSubmit({
      medicamento,
      tipo,
      cantidad,
      distribuidor,
      sucursal
    });
  };

  const handleSucursalChange = (e) => {
    const { name, checked } = e.target;
    setSucursal(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleMedicamentoChange = (e) => {
    const value = e.target.value;
    // Utiliza una expresión regular para permitir solo letras y números
    const regex = /^[a-zA-Z0-9 ]*$/;
    if (regex.test(value)) {
      setMedicamento(value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Medicamento:</label>
        <input
          type="text"
          value={medicamento}
          onChange={handleMedicamentoChange} // Cambiado para validar letras y números
        />
      </div>
      <div>
        <label>Tipo del Medicamento:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="analgésico">Analgesico</option>
          <option value="analéptico">Analeptico</option>
          <option value="anestésico">Anestesico</option>
          <option value="antiácido">Antiácido</option>
          <option value="antidepresivo">Antidepresivo</option>
          <option value="antibiótico">Antibiotico</option>
        </select>
      </div>
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
      </div>
      <div>
        <label>Distribuidor:</label>
        <div>
          <label>
            <input
              type="radio"
              name="distribuidor"
              value="COFARMA"
              checked={distribuidor === 'COFARMA'}
              onChange={(e) => setDistribuidor(e.target.value)}
            />
            COFARMA
          </label>
          <label>
            <input
              type="radio"
              name="distribuidor"
              value="EMPSEPHAR"
              checked={distribuidor === 'EMPSEPHAR'}
              onChange={(e) => setDistribuidor(e.target.value)}
            />
            EMPSEPHAR
          </label>
          <label>
            <input
              type="radio"
              name="distribuidor"
              value="CEMEFAR"
              checked={distribuidor === 'CEMEFAR'}
              onChange={(e) => setDistribuidor(e.target.value)}
            />
            CEMEFAR
          </label>
        </div>
      </div>
      <div>
        <label>Sucursal:</label>
        <div>
          <label>
            <input
              type="checkbox"
              name="principal"
              checked={sucursal.principal}
              onChange={handleSucursalChange}
            />
            Principal
          </label>
          <label>
            <input
              type="checkbox"
              name="secundaria"
              checked={sucursal.secundaria}
              onChange={handleSucursalChange}
            />
            Secundaria
          </label>
        </div>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">OK</button>
      <button type="button" onClick={() => window.location.reload()}>Borrar</button>
    </form>
  );
};

export default PedidoForm;
