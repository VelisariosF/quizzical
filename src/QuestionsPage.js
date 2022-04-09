import Question from './Question'
import './App.css'
import React from 'react'
export default function QuestionsPage() {
    
  
    const [questions, setQuestions] = React.useState(() => loadQuestions())
    
    function loadQuestions(){
        React.UseEffect(() => {
            fetch('https://opentdb.com/api.php?amount=5')
                .then(response => response.json())
                .then(data => setQuestions(data['results']));
        }, [])
    }
        const questions_elements = questions.map(question_element => {
            const data_question = question_element.question;
            let answers = []
    
            const correct_answer = question_element.correct_answer
            answers.push(correct_answer)
            for (let i = 0; i < question_element.incorrect_answers.length; i++) {
                answers.push(question_element.incorrect_answers[i])
            }
    
            const shuffledAnswersArray = shuffle(answers)
            const isSelected = [false, false, false, false]
            const answer_objects = getAnswerObjects(shuffledAnswersArray)
            
            const newQuestionObject = {
                "question" : data_question,
                "correct_answer": correct_answer,
                "possible_answers" : answer_objects
            }
            return <Question
                
                question={newQuestionObject.question}
                correct_answer={newQuestionObject.possible_answers}
                answer_objects={newQuestionObject.answer_objects}
            />
    
    
    
        })
    
    
    
    function getAnswerObjects(answers){
        let answer_objects = []
        for(let i = 0; i < answers.length; i++){
            const answer_object = {
                "text" : answers[i],
                "isSelected" : false
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

    return (
        <div className='questions-container'>
            {questions_elements}
            <button className='check-answers'>Check Answers</button>
        </div>




    )
}