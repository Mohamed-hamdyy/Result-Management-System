import React, { useState } from "react";
import "../index.css";
import { useLocation, useEffect } from "react";


function Exercise() {
  // Properties

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const[Exercise,setExercise]=useState()

  /////use location to get the exercise id
   const [id,setid]=useState(localStorage.getItem("ExerciseId"));
   const [Cid,setCid]=useState(localStorage.getItem("ExCourseId"));
   const [user,setuser]=useState("ahmedyo2001");
   

  const fetchExercise= async (a)=>{
    const response = await fetch('http://localhost:7000/api/getExercise',{
      method:"POST",
      headers:{
         "content-type":"application/json; charset=UTF-8"
  
  
      },
      body:JSON.stringify({
         exerciseID :a,
     
  
      } )
    });
        const json = await response.json()
        return json;
    }

    const fetchProgress= async (a,b,c)=>{
      const response = await fetch('http://localhost:7000/api/addProgress',{
        method:"POST",   
        headers:{
           "content-type":"application/json; charset=UTF-8"
    
    
        },
        body:JSON.stringify({
           userName:a,
           courseId:b,
           exe:c
    
        } )
      });
          const json = await response.json()
          console.log(json);
          return json;
      }


    useEffect(()=>{
      async function getTheExercise(){
        setExercise(await (fetchExercise(id)));
   


        }
        getTheExercise();
     
        },[Exercise]);









  const questions = [
  //    {
  //   text: "what is happening ", 
  //   options: [
  //     { id: 0, text: "a", isCorrect: false },
  //     { id: 1, text: "b", isCorrect: false },
  //     { id: 2, text: "c", isCorrect: false },
  //     { id: 3, text: "d", isCorrect: true },
  //   ],
  //  }
];



if (Exercise){
  for (let i=0;i<Exercise.question.length;i++){
    const x ={
      text: Exercise.question[i], 
      options: [
        { id: 0, text: Exercise.choices[i][0], isCorrect: (Exercise.choices[i][0]===Exercise.answer[i])?true:false },
        { id: 1, text: Exercise.choices[i][1], isCorrect: (Exercise.choices[i][1]===Exercise.answer[i])?true:false },
        { id: 2, text: Exercise.choices[i][2], isCorrect: (Exercise.choices[i][2]===Exercise.answer[i])?true:false },
        { id: 3, text: Exercise.choices[i][3], isCorrect: (Exercise.choices[i][3]===Exercise.answer[i])?true:false },
      ],
    }
   questions.push(x);
  }
}

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  const handleFinish= async()=> {
   const success= score / questions.length;
   if(success>0.5)
   await fetchProgress(user,Cid,id);
   

  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Exercise</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={handleFinish}>Finish</button>
          <div className="Answers">
           <div className="columnExercise">
           <ul>
                {
                  Exercise.question.map(exe=>{
                    return <h2>Queestion : {exe}</h2>
                  }
                  )
                }
              </ul>
           </div>
           <div className="columnExercise">
           <ul>
                {
                  Exercise.answer.map(ans=>{
                    return <h2>Answer: {ans}</h2>
                  }
                  )
                }
              </ul>


           </div>


          </div>


        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          {Exercise && <h3 className="question-text">{questions[currentQuestion].text}</h3>}

          {/* List of possible answers  */}
          <ul>
            {Exercise && questions[currentQuestion].options.map((option) => {
              return (
               <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Exercise;