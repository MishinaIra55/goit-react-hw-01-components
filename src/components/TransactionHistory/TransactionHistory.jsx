import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';


export default function TransactionHistory ( props ) {
  const { items } = props;
  const transaction = items.map(item => {
    return (

    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency }</td>
    </tr>
    )
  })

  return (
    <table className={styles.transaction}>
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
  items: PropTypes.array,
};
