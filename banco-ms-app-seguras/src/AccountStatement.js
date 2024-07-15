import React from 'react';

class AccountStatement extends React.Component {
  render() {
    return (
      <div className="account-statement">
        <h2>Estado de Cuenta</h2>
        <table className="account-table">
          <tbody>
            <tr>
              <td><strong>Tipo Cliente</strong></td>
              <td><strong>Tipo Cuenta</strong></td>
              <td><strong>Nro. Cuenta</strong></td>
              <td><strong>Saldo Contable</strong></td>
              <td><strong>Estado</strong></td>
              <td><strong>Retenciones</strong></td>
              <td><strong>Autorizaciones</strong></td>
            </tr>
            <tr>
              <td>TITULAR</td>
              <td>CUENTA ACTIVA</td>
              <td>2901788669</td>
              <td>$40.72</td>
              <td>ACTIVA</td>
              <td>$0.00</td>
              <td>$0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AccountStatement;
