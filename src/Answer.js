import "./App.css"

export default function Answer(props){
    const answer_style = {
       backgroundColor : props.isSelected ? '#D6DBF5' : "#F5F7FB"
    }
  
    return(

        <p className="answer" style={answer_style} onClick={props.toggle} >{props.value}</p>
    )
}

