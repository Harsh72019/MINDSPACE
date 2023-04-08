import React ,{ useState } from "react";
import { Configuration, OpenAIApi } from "openai";
// import Input from '@mui/material/Input';
import {BsFillArrowRightSquareFill as Icon} from "react-icons/bs"
// import  { useSpeechRecognition } from 'react-speech-recognition';
// import SpeechRecognition , {useSpeechRecognition } from "react-speech-recognition"
// import { onEnter }
import Loader from "./Loader"; 
import { motion } from "framer-motion";
import chatBG from "../assets/chatBG.mp4"
// import {useSpeechSynthesis} from "react-speech-kit"


  


const GitaGPT = () => {
  const [text, setText] = useState("");
  const [ prompt, setPrompt ] = useState("");
  const [ result, setResult ] = useState("");
  const [ loading, setLoading ] = useState(false);
 
  const configuration = new Configuration({
    apiKey: "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"
    
    // "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",
  });
  const openai = new OpenAIApi(configuration);
  // console.log(process.env.REACT_APP_OPENAI_API_KEY);

 

  // const synth = window.speechSynthesis;

  // function speakText() {
  //   const utterance = new SpeechSynthesisUtterance(text);
  //   synth.speak(utterance);
  // }

  // const { transcript, resetTranscript } = useSpeechRecognition();
  
  // const handleClickk = () => {
  //   SpeechRecognition.startListening();
  // }

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:"Respond to my question strictly in accordance to 'The Bhagvad Gita' but don't mention 'The Bhagvad Gita' in the answer and provide me a spiritual answer for the question below. \n "+ prompt ,
        temperature: 0.5, //TESTING WITH 0.7  change to 0.5 when needed
        max_tokens: 100,
      } , loading);
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
    const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };


  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    
    <motion.div
    className=" text-white bg-[#9472A2]"
    variants={container}
    initial="hidden"
    animate="show"
  >
    <main className=" main h-[111vh] bg-gradient-to-b from-[#6a5ca5] to-[#9472A2] fontt">
      {/* <video autoPlay loop muted>
        <source src={chatBG}/>
      </video> */}
      <div className="w-2/4 mx-auto">
      <motion.div className="text-center mt-8" variants={item}>
      <div className = "w-full banner text-2xl sm:text-6xl">

      Ask the <b>SPIRITUAL GURU</b> 
      {/* <br></br> */}
      to guide you 🦚

      </div>
     </motion.div>
        <form  className="wrapper">
          <button 
          className="icon"
          type="submit"
          onClick={ handleClick }
          ></button>
          
          <input 
            type="text" 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="eg. What should one do when they feel betrayed?"
            className="textarea text-sm bg-[white] fontt sm:text-xl text-[black]"
          ></input> 
          {/* <button className="text-black" onClick={handleClickk}>start listening</button> */}
        </form>
        
        <button
          onClick={handleClick}
          disabled={loading || prompt.length === 0}
          className="btn bg-[#d14516]"
        >
          {loading ? "..." : "Ask Me Anything"}
        </button>
        
        
        {/* <div className="result">{result}</div> */}
        {loading ? (<Loader/>  ) : (
         <div className="result-box blue-glassmorphism">
         <div className="result text-lg text-white" onChange={(event) => setText(event.target.value)}>{ result}</div>
        </div>
        )}

    
        
            
        
      </div>

      <div className="footer">
      </div>
    </main>
    </motion.div>
  );
}

export default GitaGPT;
