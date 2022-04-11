import Question from './Question'
import './App.css'
import React from 'react'
  

export default function QuestionsPage() {
    
   
    const [questions, setQuestions] = React.useState(() => [])
   
    
        React.useEffect(() => {
            fetch('https://opentdb.com/api.php?amount=3')
                .then(response => response.json())
                .then(data => setQuestions(data.results));
        }, [])
   
     const questions_elements = questions.map((question_element, index) => {
            const data_question = question_element.question
            const answers = []
     
            const correct_answer = question_element.correct_answer
            answers.push(correct_answer)
            for (let i = 0; i < question_element.incorrect_answers.length; i++) {
                answers.push(question_element.incorrect_answers[i])
            } 
            
            const shuffledAnswersArray = shuffle(answers)
            
            const possible_answers = getAnswerObjects(shuffledAnswersArray)
            
            const newQuestionObject = {
                'question' : data_question,
                'correct_answer': correct_answer,
                'possible_answers' : possible_answers
            }
           
           
          
            
            return <Question
                id={index}
                question={newQuestionObject.question}
                correct_answer={newQuestionObject.correct_answer}
                possible_answers={newQuestionObject.possible_answers}
                setAnswerChosen={setAnswerChosen}
              
            />
          
    
    
        })
  
    
    function getAnswerObjects(answers){
        let answer_objects = []
        for(let i = 0; i < answers.length; i++){
            const answer_object = {
                'text' : answers[i],
                'isSelected' : false
            }
            answer_objects.push(answer_object)
        }
        return answer_objects
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    
      
   
    function checkAnswers(){
     //  console.log(answerChosenPerQ[0].questionId)
    }

    return (
        <div className='questions-container'>
            {questions_elements}
            <button className='check-answers' onClick={checkAnswers}>Check Answers</button>
        </div>




    )
}