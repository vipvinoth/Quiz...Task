import React, { useState } from 'react'
import './App.css'
export default function App(){
    const questions=[
        {
            questext:"How many days in year?",
            ansoption:[
                {anstext:"360", isCorrect:false},
                {anstext:"366", isCorrect:false},
                {anstext:"365", isCorrect:true},
                {anstext:"364", isCorrect:false},
            ]
        },
        {
            questext:"Who is the CEO Tesla?",
            ansoption:[
                {anstext:"Bill Gates", isCorrect:false},
                {anstext:"Elon Musk", isCorrect:true},
                {anstext:"Mark Zuckerberg", isCorrect:false},
                {anstext:"Carl Pie", isCorrect:false},
            ]
        },
        {
            questext:"Which one smallest ocean in world?",
            ansoption:[
                {anstext:"Indian", isCorrect:false},
                {anstext:"Pacific", isCorrect:false},
                {anstext:"Atlantic", isCorrect:false},
                {anstext:"Artic", isCorrect:true},
            ]
        },
        {
            questext:"In which ocean Bermuda Triangle region is located?",
            ansoption:[
                {anstext:"Indian", isCorrect:false},
                {anstext:"Artic", isCorrect:false},
                {anstext:"Atlantic", isCorrect:true},
                {anstext:"Pacific", isCorrect:false},
            ]
        },
        {
            questext:"In which country, white elephant is found?",
            ansoption:[
                {anstext:"Thailand", isCorrect:true},
                {anstext:"India", isCorrect:false},
                {anstext:"Malaysia", isCorrect:false},
                {anstext:"Sri Lanka", isCorrect:false},
            ]
        },
        {
            questext:"Total number of oceans in the World is?",
            ansoption:[
                {anstext:"3", isCorrect:false},
                {anstext:"5", isCorrect:true},
                {anstext:"7", isCorrect:false},
                {anstext:"12", isCorrect:false},
            ]
        },
        {
            questext:"Who is the CEO Microsoft?",
            ansoption:[
                {anstext:"Elon Musk", isCorrect:false},
                {anstext:"Bill Gates", isCorrect:true},
                {anstext:"Pete Lau", isCorrect:false},
                {anstext:"Mathev seth", isCorrect:false},
            ]
        },
        {
            questext:"Which Team has won IPL cup 2008?",
            ansoption:[
                {anstext:"KKR", isCorrect:false},
                {anstext:"CSk", isCorrect:false},
                {anstext:"Mi", isCorrect:false},
                {anstext:"RR", isCorrect:true},
            ]
        },
        {
            questext:"Who scored the most fifties in IPL?",
            ansoption:[
                {anstext:"Chris Gayle", isCorrect:false},
                {anstext:"David warner", isCorrect:true},
                {anstext:"KL Rahul", isCorrect:false},
                {anstext:"Virat Kohli", isCorrect:false},
            ]
        },
        {
            questext:"Who is CEO of Flipkart?",
            ansoption:[
                {anstext:"Kalyan krishnamurthy", isCorrect:true},
                {anstext:"Mark Zuckerberg", isCorrect:false},
                {anstext:"Andy Jassy", isCorrect:false},
                {anstext:"Jeff Bezos", isCorrect:false},
            ]
        }
    ];
    const [score,setscore]=useState(0)
    const [showscore, setshowscore]=useState(false);
    const [currentques,setcurrentques]=useState(0);
    const handleansbuttonclick=(isCorrect)=>{
        const nextques=currentques+1;
        if(nextques<questions.length){
           setcurrentques(nextques);
        }
        else{
            setshowscore(true);
        }
        if(isCorrect===true){
            setscore(score+1);
        }
    }
    return(
        <div className='app'>
            {showscore ? (<div className='score-section'>you have scored {score} out of{questions.length}</div>):(<div className='question-section'>
                <div className='question-count'>
                    <span> Questions {currentques+1} </span>/{questions.length}
                    </div>
                    <div className='ques-text'>
                        {questions[currentques].questext}
                    </div>
                    <div className='ans-section'>
                        {questions[currentques].ansoption.map((ansoption)=><button onClick= 
                        {()=>handleansbuttonclick(ansoption.isCorrect)}>{ansoption.anstext}</button>)}
                    </div>
            </div>
            )
            }
        </div>
    )
}







    


