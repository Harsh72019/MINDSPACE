// import React, { useState } from "react";
// import questions from "../../data/AssessmentData.js";
// import "../../index.css";
// import {motion} from 'framer-motion'

// function Assessment() {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState({});

//   const handleAnswerChange = (e) => {
//     const newAnswer = e.target.value;
//     setAnswers({ ...answers, [`q${currentQuestionIndex + 1}`]: newAnswer });
//   };

//   const getResult = () => {
//     let score = 0;
//     Object.values(answers).forEach((value) => {
//       if (value === "a") {
//         score += 0;
//       } else if (value === "b") {
//         score += 1;
//       } else if (value === "c") {
//         score += 2;
//       } else if (value === "d") {
//         score += 3;
//       }
//     });

//     let result = "";
//     if (score < 5) {
//       result = "You appear to be functioning well.";
//     } else if (score < 10) {
//       result = "You appear to be experiencing mild symptoms of mental health issues.";
//     } else if (score < 15) {
//       result = "You appear to be experiencing moderate symptoms of mental health issues.";
//     } else {
//       result = "You appear to be experiencing severe symptoms of mental health issues.";
//     }

//     return result;
//   };

//   return (
//     <>
//     <div className="fontt container mx-auto bg-gradient-to-b from-[#6a5ca5] to-[#9472A2] w-full p-4 h-[100vh] flex flex-col justify-center items-center" >
//     <h1 className="text-7xl font-bold mb-10 text-white">Let's assess yourself first!</h1>
//       <div className="flex justify-center ">
//         <div className="Assessment blue-glassmorphism flex-col  p-4 md:p-6 w-full md:h-full flex justify-between shadow-md shadow-[#00000046] rounded-lg">
//           <div className="w-full pr-8">
//             {currentQuestionIndex < questions.length ? (
//               <>
//                 <h2 className="text-2xl font-bold mb-3 text-[#D2E2E2]">
//                   Question {currentQuestionIndex + 1}/10
//                 </h2>
//                 <label className="text-lg font-medium mb-2 text-[#D2E2E2]">
//                   {questions[currentQuestionIndex].question}
//                 </label>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-2xl font-bold text-center mb-3 text-[#D2E2E2]">Result</h2>
//                 <p className="text-lg mb-2 text-[#D2E2E2]">{getResult()}</p>
//                 <a href="/resource" className="text-lg flex justify-center items-center  text-blue-500"><button className="bg-[#d14516] mt-4 rounded-sm hover:bg-[#932b09] text-white">Resources that might help</button></a>
//               </>
//             )}
//           </div>
//           <div className="h-full">
//             <div className="flex flex-col items-start">
//               {currentQuestionIndex < questions.length &&
//                 questions[currentQuestionIndex].options.map((option) => (
//                   <label
//                     className="inline-flex items-center my-1 text-lg font-medium text-[#D2E2E2]"
//                     key={option.value}
//                   >
//                     <input
//                       type="radio"
//                       name={`q${currentQuestionIndex + 1}`}
//                       value={option.value}
//                       onChange={handleAnswerChange}
//                       checked={answers[`q${currentQuestionIndex + 1}`] === option.value}
//                       className="mr-2"
//                     />
//                     {option.option}
//                   </label>
//                 ))}
//             </div>
            
//           </div>
          
//         </div>
//       </div>
//       <div className="text-center mt-6">
//         {currentQuestionIndex < questions.length && (
          
//           <button
//           className="px-5 py-3 bg-[#d14516] text-[white] text-xl rounded hover:bg-[#df7878] transition-colors duration-300"
//           onClick={() => {
//             if (!answers[`q${currentQuestionIndex + 1}`]) {
//               alert("Please choose an option");
//               return;
//             }
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//           }}
//         >
//           Next
//         </button>
        
//         )}
//       </div>
//     </div>
//       </>
//   );


// }

// export default Assessment;
import React, { useState } from "react";
import AssessmentData from "../../data/AssessmentData";
import{motion} from "framer-motion"

const Assessment = () => {
  const [answers, setAnswers] = useState({});
  const [currentCard, setCurrentCard] = useState(0);
  const [results, setResults] = useState([]);

  const handleChange = (cardId, questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [cardId]: {
        ...prevAnswers[cardId],
        [questionId]: answer,
      },
    }));
  };

  const handleContinue = (e) => {
    e.preventDefault();
    setCurrentCard((prevCard) => prevCard + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentCard((prevCard) => prevCard + 1);
    const newResults = AssessmentData.map((card) => {
      const { output } = card;
      const cardAnswers = answers[card.id] || {};
      const answeredQuestionsCount = Object.keys(cardAnswers).length;
      const totalQuestionsCount = card.questions.length;

      if (answeredQuestionsCount === totalQuestionsCount) {
        const allAnswers = Object.values(cardAnswers);
        const isAllCurrent = allAnswers.every((answer) => answer === "Currently");
        const isAllPastFewMonths = allAnswers.every((answer) => answer === "Past few months");
        const isAllNever = allAnswers.every((answer) => answer === "Never");

        if (isAllCurrent) {
          return <div className=""><b>You are currently suffering from <br/></b> {output}</div>; 
        } else if (isAllPastFewMonths) {
          return <div className=""><b>You had suffered from <br/></b> {output}</div>;
        } else if (isAllNever) {
          return <div className=""><b>You don't indicate any symptoms related to <br/></b> {output}</div>;
        } else {
          return <div className=""><b>You may have symptomps related to  <br/></b> {output}</div>;
        }
      } else {
        return `Please answer all questions for ${card.heading}`;
      }
    });
    setResults(newResults);
  };

  const currentCardData = AssessmentData[currentCard];

  return (
    <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
    <div className="fontt container mx-auto bg-gradient-to-b from-[#6a5ca5] to-[#9472A2] w-full p-4 h-[111vh] flex flex-col justify-start items-center">
    <h1 className="text-7xl font-bold m-16 text-white">Let's assess yourself first!</h1>
    <div className="flex justify-center">
      <div className="Assessment blue-glassmorphism flex-col p-4 md:p-6 w-full md:h-full flex justify-between shadow-md shadow-[#00000046] rounded-lg">
        
        
  
        {currentCard <AssessmentData.length   ? (
          <form onSubmit={handleSubmit}>
          <div key={currentCardData.id} className="mb-4">
            <h2 className="text-xl font-bold text-white mb-8">{currentCardData.heading}</h2>
            {currentCardData.questions.map((question) => (
              <div key={question.id} className="m-2 text-white text-lg">
                <p>{question.text}</p>
                <select
  value={answers[currentCardData.id]?.[question.id] || ""}
  onChange={(e) => handleChange(currentCardData.id, question.id, e.target.value)}
  className="block w-full text-black p-2 border rounded-md"
>
  <option value="" disabled>Select an option...</option>
  {question.options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ))}
</select>

              </div>
            ))}
            {currentCard !== AssessmentData.length - 1 && (
              <div className="flex justify-center items-center">
              <button
                type="button"
                onClick={handleContinue}
                className="bg-[#d14516] hover:bg-[#943110] text-white font-bold py-2 px-4 rounded mt-4 "
              >
                Continue
              </button>
              </div>
            )}
            {currentCard === AssessmentData.length - 1 && (
              <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#d14516] hover:bg-[#943110] text-white font-bold py-2 px-4 rounded mt-4"
              >
                Submit
              </button>
              </div>
            )}
          </div>
        </form>
        ) : (
  <>
<div className="mt-4 text-white text-xl">
          {results.map((result, index) => (
            <p key={index}>{result}</p>
          ))}
        </div>
        <a href="/resource" className="text-lg underline text-cyan-500"> 
          Resouces that might help
        </a>
      </>
        )}
      </div>
    </div>
  </div>
  </motion.div>
    );
    
};

export default Assessment;




