export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      let { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((p) =>
          p.name === prev ? { ...p, name: current } : p
        ),
      };
    }
    case "added":
      const { mentoName, nickName } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: mentoName, title: nickName }],
      };
    case "deleted":
      return {
        ...person,
        mentors: person.mentors.filter((p) => p.name !== action.name),
      };
    default:
      throw Error(`알수 없는 액션 타입이다. ${action.type}`);
  }
}
