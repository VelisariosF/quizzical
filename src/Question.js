import './App.css'
import Answer from './Answer'
import React from 'react'
export default function Question(props){
    const [selected, setSelected] = React.useState(props.answers)
    const answer_elements = props.answers.map((answer, index) =>{
        return <Answer 
       
        value={answer} 
        isSelected={answer.isSelected}
        toggle={()=>toggle(index)}/>
                 
    })

    function toggle(answer_Id){
        setSelected(prevAnswers => prevAnswers.map((prevAnswer, index) =>{
            return index === answer_Id ? 
                   {
                       ...prevAnswer,
                       isSelected : !prevAnswer.isSelected
                   }: prevAnswer
        }))
    }

    return(
      
        <div className='question-container'>
            <h2 className='question'>{props.question}</h2>
            <div className='answers-container'> 
             {answer_elements}
            </div>
           
        </div>
    )
}