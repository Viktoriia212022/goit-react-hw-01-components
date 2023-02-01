import PropTypes from 'prop-types';
import { Table, TrHead, Th, TrBody, Td } from '../TransactionHistory/TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <TrHead>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </TrHead>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TrBody key={id}>
              <Td>{type}</Td>
              <Td>{amount}</Td>
              <Td>{currency}</Td>
            </TrBody>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};