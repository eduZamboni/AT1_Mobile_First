export default function Friend({ image, name, mutualFriends, mutualFriend }) {
    return (
      <div className="friend">
        <img src={image} alt={name} className="friend-image" />
        <div className="friend-info">
          <p className="friend-name">{name}</p>
          {mutualFriends && (
            <p className="friend-details">{mutualFriends} amigos em comum</p>
          )}
          {mutualFriend && (
            <p className="friend-details">Amigo em comum: {mutualFriend}</p>
          )}
        </div>
      </div>
    );
  }