import {
    TransactionHistoryTable,
    Thead,
    TrColumn,
    TdString,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
    return (<TransactionHistoryTable>
        <Thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </Thead>

        <tbody>
            {items.map(({ type, amount, currency, id }) => <TrColumn key={id}>
                <TdString>{type}</TdString>
                <TdString>{amount}</TdString>
                <TdString>{currency}</TdString>
            </TrColumn>)}
        </tbody>
    </TransactionHistoryTable>)
}
TransactionHistory.prototype = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};