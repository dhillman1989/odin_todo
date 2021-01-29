const seedData = [
  {
    projectTitle: "stuff",
    tagline: "Do things",
    todos: [
      {
        title: "item 1",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia?",
        date: "tbc",
        complete: false,
      },
      {
        title: "item 2",
        desc: "some other thing to do",
        date: "tbc",
        complete: true,
      },
    ],
  },
  {
    projectTitle: "stuff",
    tagline: "Do things",
    todos: [
      {
        title: "item 1",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, mollitia?",
        date: "tbc",
        complete: false,
      },
      {
        title: "item 2",
        desc: "some other thing to do",
        date: "tbc",
        complete: true,
      },
    ],
  },
];

localStorage.setItem("projects", JSON.stringify(seedData));
