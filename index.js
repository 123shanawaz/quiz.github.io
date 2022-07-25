const quizdb=[
    {
    question: "Q1:what is the full form of HTML?",
     a:"Hello to My Land",
     b:"Hey text markup language",
     c:"Hypertext makeup language",
     d:"Hypertext markup languge",
     ans:"ans4"
},
{
    question: "Q2:what is the full form of CSS?",
    a:"Cascading style Sheets",
    b:"Hey text markup language",
    c:"Hypertext makeup language",
    d:"Hypertext markup languge",
    ans:"ans1" 
},
{question: "Q3:what is the full form of HTTP?",
     a:"Hello to My Land",
     b:"Hey text markup language",
     c:"Hypertext makeup language",
     d:"Hpertext transfer protocal",
     ans:"ans4"
},
{
    question :"Q4:what is the full form of JS?",
     a:"Hello to My Land",
     b:"Hey text markup language",
     c:"Java Script",
     d:"Hypertext markup languge",
     ans:"ans3"
},
]
const timer_Text=document.querySelector('.timer .time_left_text');
const timecount=document.querySelector('.timer .time_sec');

const inner_div=document.querySelector('.inner-div');
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscore=document.querySelector('#showscore');
let questioncount=0;
let score=0;
const questionload=()=>{
    const questionlist=quizdb[questioncount];
    question.innerHTML=questionlist.question;

    option1.innerHTML=questionlist.a;
    option2.innerHTML=questionlist.b;
    option3.innerHTML=questionlist.c;
    option4.innerHTML=questionlist.d;
   
}



questionload();

const getcheckedanswer =() => {
    let answer;
    answers.forEach((currelemnt) => {
        if(currelemnt.checked){
            answer=currelemnt.id;
        }
    })
    return answer;


};

const disslectall=()=>{
    answers.forEach((currelemnt)=> currelemnt.checked=false);

    
}


submit.addEventListener('click',()=>{
    const checkedanswer=getcheckedanswer();
    console.log(checkedanswer);
    if(checkedanswer===quizdb[questioncount].ans){
        score++;
    }
    questioncount++;
    disslectall();
    if(questioncount<quizdb.length){
        
        questionload();
    }
    else{
        showscore.innerHTML=`
        <h3> you scored ${score}/${quizdb.length}</h3>
        <button class="btn" onclick="location.reload()">Play again </button>
        `;
        showscore.classList.remove('scoreA');
    }

});
const btn=document.querySelector('.strat_quiz');
btn.onclick=()=>{
    
    inner_div.classList.remove("inactive");
    
    btn.classList.add("inactive");
    startTimer(15);
   

}
function startTimer(time){
counter=setInterval(timer,1000)
        function timer(){
           timecount.textContent=time;
           time--;
           if(time==0){
            inner_div.classList.add("inactive"); 
            btn.classList.remove("inactive");
            
           }
            if(time<0){
                clearInterval(counter);
            }
        }

}

