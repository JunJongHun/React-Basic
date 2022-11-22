import React, { useReducer } from "react";
import personReducer from "../reducer/personReducer";

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // const [person, setPerson] = useState(initialPerson);

  let changeMentorName = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev: prev, current: current });
  };
  let addMentor = () => {
    let mentoName = prompt("멘토이름?");
    let nickName = prompt("멘토 별명?");
    dispatch({ type: "added", mentoName: mentoName, nickName, nickName });
  };

  let deleteMentor = () => {
    let mentoName = prompt("삭제할 멘토는?");
    dispatch({ type: "deleted", name: mentoName });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={changeMentorName}>멘토의 이름을 바꾸기</button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={deleteMentor}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
