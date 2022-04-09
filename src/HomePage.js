

export default function HomePage(props){
   return(
    
        <div className="home-page">  
           <h1 className='title'>Quizzical</h1>
           <h3 className='subtitle'>Some description if needed</h3>
           
           <button className='start-game' onClick={props.toggle}>Start Quiz</button>
           
       </div>
   )

}