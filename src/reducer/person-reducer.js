const personReducer = (person, action) => {
  switch (action.type) {
    case "updated":
      return {
        ...person,
        mentors: person.mentors.map((mentor) =>
          mentor.name === action.prev
            ? { ...mentor, name: action.current }
            : mentor
        ),
      };
    case "added":
      return {
        ...person,
        mentors: [
          ...person.mentors,
          { name: action.name, title: action.title },
        ],
      };
    case "deleted":
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name),
      };

    default:
      break;
  }
};

export default personReducer;
