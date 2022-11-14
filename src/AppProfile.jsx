import logo from "./logo.svg";
import "./App.css";
import Profile from "./components/Profile";
import { useState } from "react";
import CreateFile from "./components/CreateFile";

export default function AppProfile() {
  let [users, setUsers] = useState([
    { name: "yeonji", live: "주안" },
    { name: "jonghun", live: "서울" },
  ]);

  let [newUser, setNewUser] = useState({ name: "", live: "" });

  let getValue = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  let makeProfile = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: "", live: "" });
  };

  return (
    <>
      <CreateFile
        makeProfile={makeProfile}
        getValue={getValue}
        newUser={newUser}
      ></CreateFile>
      {users.map((user, i) => (
        <Profile user={user} key={i}></Profile>
      ))}
    </>
  );
}
