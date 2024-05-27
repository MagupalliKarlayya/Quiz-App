const arr=[
    {
          QestionName:"which is the smallest country in the world?",
          answers:[
            {options:"Vatican City",correct:true},
            {options:"Bhutan",correct:false},
            {options:"Nepal",correct:false},
            {options:"Sri Lanka",correct:false},
          ]
        
    },
    {
        QestionName:"which is the largest deser in the world?",
        answers:[
            {options:" Kalahari",correct:false},
            {options:"Sahara",correct:true},
            {options:"Gobi",correct:false},
            {options:" Antractica",correct:false},
          ]
    },
    {
        QestionName:"which is the largest country in the world?",
        answers:[
            {options:"Vatican City", correct:false},
            {options:"Bhutan", correct:false},
            {options:"Russia", correct:true},
            {options:" Sri Lanka", correct:false},
          ]
    },
    {
        QestionName:"which is the smallest continent in the world?",
        answers:[
            {options:"Asia", correct:false},
            {options:"Australia", correct:true},
            {options:"Arctic", correct:false},
            {options:" Africa", correct:false},
          ]
    },
    {
        QestionName:"What country has the highest life expectancy?",
        answers:[
            {options:"Rome", correct:false},
            {options:"Spanish", correct:false},
            {options:" Sri Lanka", correct:false},
            {options:"Hong Kong", correct:true},
          ]
    }
]
const qestionsElement=document.querySelector('.question');
const Answerelements=document.querySelector('.buttonscontainer');
const nextbutton=document.querySelector('#nextbutton');

let indexcount=0;
let score=0;
 function startQuiz(){
    indexcount=0;
    score=0;
    nextbutton.innerHTML='Next';
    printQuestions();
 }
 
 function printQuestions(){
    resetbuttons();
    const showquestion=arr[indexcount];
    let questionNo=indexcount+1;
    qestionsElement.innerHTML=questionNo+"."+showquestion.QestionName;
    
    showquestion.answers.forEach(answer=>{
        let button=document.createElement('button');
        button.innerHTML=answer.options;
        button.classList.add('brackets');
       Answerelements.appendChild(button);
       if(answer.correct){
        button.dataset.correct=answer.correct;
       }
       console.log(button.dataset.correct);
       button.addEventListener('click',Selectionans)
    })
 }
 function resetbuttons(){
    nextbutton.style.display="none";
    while(Answerelements.firstChild){
        Answerelements.removeChild(Answerelements.firstChild);
    }
 }
 function Selectionans(e){
    const selectbutton=e.target;
    const iscorrect = selectbutton.dataset.correct==="true";
    if(iscorrect){
        selectbutton.classList.add('correct');
        score++;
    }else{
        selectbutton.classList.add('incorrect');
    }
    Array.from(Answerelements.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextbutton.style.display="block";
 }
 function showscore(){
    resetbuttons();
    qestionsElement.innerHTML=`You Score ${score} Out of ${arr.length}`;
    nextbutton.innerHTML="Play Again"
    nextbutton.style.display="block";
 }
 function handeletask(){
    indexcount++;
    if(indexcount < arr.length){
        printQuestions();
    }else{
        showscore();
    }
 }
 nextbutton.addEventListener('click',() => {
             if(indexcount < arr.length){
                  handeletask();
             }else{
                startQuiz();
             }
 })
 startQuiz();
