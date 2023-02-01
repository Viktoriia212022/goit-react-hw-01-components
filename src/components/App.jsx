import { Profile } from "./Profile/Profile.js";
import { Statistics } from "./Statistics/Statistics.js";
import { FriendList } from "./FriendList/FriendList.js";

import { TransactionHistory } from './TransactionHistory/TransactionHistory.js';

import friends from './FriendList/friends.json'
import user from './Profile/user.json';
import data from './Statistics/data.json';
import transactions from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile userItems={user} />
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </div>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
