import transactions from "components/Transactions/transactions";
import friends from "components/FriendList/friends";
import data from "components/Statistic/data";
import user from "components/Profile/user";
import { Profile } from "components/Profile/Profile";
import { Statistic } from "components/Statistic/Statistic";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/Transactions/TransactionHistory"

export const App = () => {
    return <div>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistic title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>;
}

