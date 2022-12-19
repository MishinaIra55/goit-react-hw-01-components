import Profile from 'components/Profile/Profile';
import user from 'assets/user.json';

import Statistics from './Statistics/Statistics';
import data from 'assets/data.json';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding:50,


      }}
    >
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />
    </div>
  );
};
