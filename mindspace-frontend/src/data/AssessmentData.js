// const questions = [{
//     id: 1, 
//     question: "In the past two weeks, how often have you felt sad or down?", 
//     options: [
//         { option: "Not at all", value: "a" }, 
//         { option: "A few days", value: "b" }, 
//         { option: "Half of the days", value: "c" }, 
//         { option: "Most of the days", value: "d" }]
// },
// {
//     id: 2,
//     question: "In the past two weeks, how often have you felt anxious or worried?",
//     options: [
//         { option: "Not at all", value: "a" },
//         { option: "A few days", value: "b" },
//         { option: "Half of the days", value: "c" },
//         { option: "Most of the days", value: "d" }
//     ]
// },
// {
//     id: 3,
//     question: "In the past two weeks, how often have you felt irritable or easily annoyed?",
//     options: [
//         { option: "Not at all", value: "a" },
//         { option: "A few days", value: "b" },
//         { option: "Half of the days", value: "c" },
//         { option: "Most of the days", value: "d" }
//     ]
// },
// {
//     id: 4,
//     question: "In the past two weeks, how often have you felt tired or had little energy?",
//     options: [
//         { option: "Not at all", value: "a" },
//         { option: "A few days", value: "b" },
//         { option: "Half of the days", value: "c" },
//         { option: "Most of the days", value: "d" }
//     ]
// },
// {
//     id: 5,
//     question: "In the past two weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
//     options: [
//         { option: "Not at all", value: "a" },
//         { option: "A few days", value: "b" },
//         { option: "Half of the days", value: "c" },
//         { option: "Most of the days", value: "d" }
//     ]
// },
// {
//     id: 6,
//     question: "In the past two weeks, how often have you felt little interest or pleasure in doing things?",
//     options: [
//         { option: "Not at all", value: "a" },
//         { option: "A few days", value: "b" },
//         { option: "Half of the days", value: "c" },
//         { option: "Most of the days", value: "d" }
//     ]
// },
// {
//     id: 7,
//     question: "In the past two weeks, how often have you had trouble concentrating on things, such as reading the newspaper or watching television?",
//     options: [
//         { option: "Not at all", value: "a" },
//         { option: "A few days", value: "b" },
//         { option: "Half of the days", value: "c" },
//         { option: "Most of the days", value: "d" }
//     ]
// },
// {
//     id: 8,
//     question: "In the past two weeks, how often have you had thoughts that you would be better off dead, or thoughts of hurting yourself in some way?",
//     options: [
//         { option: "Not at all", value: "a" },
//         { option: "A few days", value: "b" },
//         { option: "Half of the days", value: "c" },
//         { option: "Most of the days", value: "d" }
//       ]
//     },
//     {
//     id: 9,
//     question: "In the past two weeks, how often have you had difficulty in controlling your worries?",
//     options: [
//     { option: "Not at all", value: "a" },
//     { option: "A few days", value: "b" },
//     { option: "Half of the days", value: "c" },
//     { option: "Most of the days", value: "d" }
//     ]
//     },
//     {
//     id: 10,
//     question: "In the past two weeks, how often have you felt restless, agitated, or unable to sit still?",
//     options: [
//     { option: "Not at all", value: "a" },
//     { option: "A few days", value: "b" },
//     { option: "Half of the days", value: "c" },
//     { option: "Most of the days", value: "d" }
//     ]
//     }
//     ];
    
//     export default questions;      
const AssessmentData = [  {    id: 1,    heading: "Have you ever had a period of 2 weeks or more during which, nearly every day, you felt",    questions: [      {        id: "question1",        text: "Sad, blue or depressed?",        options: ["Currently", "Past few months", "Never"],
      },
      {
        id: "question2",
        text: "Down in the dumps, low or gloomy?",
        options: ["Currently", "Past few months", "Never"],
      },
      {
        id: "question3",
        text: "Lost interest in most things like work, hobbies, or things you usually like to do for fun?",
        options: ["Currently", "Past few months", "Never"],
      },
    ],
    output: "depression"
  },
  {
    id: 2,
    heading: "Has there ever been a period of at least 2 days when you were, for no apparent reason,",
    questions: [
      {
        id: "question1",
        text: "So happy or excited, more than your normal self, that you got into trouble, or people close to you were worried about your behaviour?",
        options: ["Currently", "Past few months", "Never"],
      },
      {
        id: "question2",
        text: "So irritable that you threw or broke things, started arguments, shouted at people or hit someone?",
        options: ["Currently", "Past few months", "Never"],
      },
    ],
    output: "bipolar disorder"
  },
  {
    id: 3,
    heading: "Have you ever had a spell or attack when you suddenly, for no particular reason, felt very very frightened or worried for 5 minutes or more?",
    questions: [
      {
        id: "question1",
        text: " ",
        options: ["Currently", "Past few months", "Never"],
      },
    ],
    output: "panic disorder"
  },
  {
    id: 4,
    heading: "Have you ever had a period of 1 month or more when, most of the time, you felt excessively worried or anxious about several things in your life?",
    questions: [
      {
        id: "question1",
        text: " ",
        options: ["Currently", "Past few months", "Never"],
      },
    ],
    output: "general anxiety disorder"
  },
];

export default AssessmentData;
  