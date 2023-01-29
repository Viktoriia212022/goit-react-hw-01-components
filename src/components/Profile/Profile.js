import PropTypes from 'prop-types';
// import user from './user.json'
import css from './Profile.module.css';

export const Profile = ({ userItems: { username, tag, location, avatar, stats } }) => {
  return (<div className={css.profile}>
  <div key={username} className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.items}>
        <span className={css.label}>Followers:</span>
        <span className={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views:</span>
        <span className={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes:</span>
        <span className={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>)
}

// export const Profile = ({ username, tag, location, avatar, stats }) => {
//   return (<div className="profile">
//     <div key={username} class="description">
//       <img
//         src={avatar}
//         alt="User avatar"
//         class="avatar"
//       />
//       <p className="name">{username}</p>
//       <p className="tag">{tag}</p>
//       <p className="location">{location}</p>
//     </div>

//     <ul className="stats">
//       <li>
//         <span className="label">Followers</span>
//         <span className="quantity">{stats.followers}</span>
//       </li>
//       <li>
//         <span className="label">Views</span>
//         <span className="quantity">{stats.views}</span>
//       </li>
//       <li>
//         <span className="label">Likes</span>
//         <span className="quantity">{stats.likes}</span>
//       </li>
//     </ul>
//   </div>)
// };

Profile.propTypes = {username:PropTypes.string, tag:PropTypes.string, location:PropTypes.string, avatar:PropTypes.string, stats:PropTypes.object

}