const school = {
  class: {
    student: {
      name: "ramesh",
      address: "itahari",
    },
  },
  class5: [
    { subjects: "science", section: "A", totalStudents: 50 },
    {
      student: {
        name: "ramesh",
        roll: 25,
        class: 5,
        address: "Itahari",
      },
    },
    "three",
  ],
};

console.log(school.class.student.name);
console.log(school.class.student.address);
console.log(school.class5[2]);
