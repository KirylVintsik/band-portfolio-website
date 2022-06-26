const questions = [
  {
    id: 1,
    name: "Which Red Hot Chili Peppers' song was written about Aborigines?",
    options: ["Walkabout", "Right On Time", "Parallel Universe"],
    answer: "Walkabout",
  },
  {
    id: 2,
    name: "What instrument besides the bass does Flea play on the video Psychedelic Sexfunk 'Live From Heaven'?",
    options: ["Trumpet ", "Saxophone", "Harmonica"],
    answer: "Trumpet ",
  },
  {
    id: 3,
    name: "On their 1996 tour to Australia, how long did it take for their two Sydney shows to sell out?",
    options: ["48 Hours", "1 Week", "1 Hour"],
    answer: "1 Hour",
  },
  {
    id: 4,
    name: "Which Australian festival did the Chili Peppers perform at in January/February 2000",
    options: ["Big Day Out", "Livid Festival", "Vans Warped Tour"],
    answer: "Big Day Out",
  },
  {
    id: 5,
    name: "Which famous record cover did the Red Hot Chili Peppers copy?",
    options: [
      "Electric Ladyland",
      "Abbey Road",
      "Sgt. Pepper's Lonely Hearts Club Band",
    ],
    answer: "Abbey Road",
  },
];

export const getRandomQuestion = () => {
  const index = Math.floor(Math.random() * 5);
  return questions[index];
};

export const isCorrectAnswer = ({ id, answer }) => {
    const question = questions.find((question) => question.id === id) || {};
    return question.answer === answer;
}