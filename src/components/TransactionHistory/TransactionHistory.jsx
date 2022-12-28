import PropTypes from 'prop-types';
import  './TransactionHistory.module.css';


export default function TransactionHistory ( { items } ) {

  const transaction = items.map(({ type, amount, currency, id }) => {
    return (
      <tr key={id}>
      <td>{type} </td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
  })

  return (
    <table >
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>
      <tbody>
      {transaction}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf (
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired
    })
  )
};
