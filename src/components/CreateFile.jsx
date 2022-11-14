import React from "react";

function CreateFile(props) {
  let keys = Object.keys(props.newUser);
  return (
    <>
      <h3>이름</h3>
      <input
        name={keys[0]}
        value={props.newUser.name}
        onChange={props.getValue}
      />
      <h3>사는곳</h3>
      <input
        name={keys[1]}
        value={props.newUser.live}
        onChange={props.getValue}
      />
      <button onClick={props.makeProfile}>만들기!</button>
    </>
  );
}

export default CreateFile;
