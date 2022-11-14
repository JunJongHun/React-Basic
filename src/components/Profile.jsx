import React from "react";

function Profile(props) {
  return (
    <div className="container">
      <img
        className="img"
        src="https://t4.ftcdn.net/jpg/02/59/68/53/240_F_259685304_GU2G9fZ4qWXiWgJbcOrlagnJmTBVQ32X.jpg"
        alt="babyyeonji"
      />
      <h1 className="name">{props.user.name}</h1>
      <span className="live">{props.user.live}</span>
    </div>
  );
}

export default Profile;
