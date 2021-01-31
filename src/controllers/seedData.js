const seedData = [
  {
    id: "sadsadasd",
    projectTitle: "stuff",
    tagline: "Do things",
    todos: [
      {
        id: "324324",
        title: "item 1",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia?",
        date: "tbc",
        complete: false,
      },
      {
        id: "34123qewwe",
        title: "item 2",
        desc: "some other thing to do",
        date: "tbc",
        complete: true,
      },
    ],
  },
  {
    id: "sdwe33223",
    projectTitle: "NEW LIST",
    tagline: "Do things",
    todos: [],
  },
];

localStorage.setItem("projects", JSON.stringify(seedData));
