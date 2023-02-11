const num=Math.ceil(Math.random()*10)

console.log(num)

const num1=Math.ceil(Math.random()*10)

const input=document.getElementById("input")

const que=document.getElementById('question');
const scoreE=document.getElementById('score')
let score=JSON.parse(localStorage.getItem("score")) || 0;

// if(!score){
//     score=0;
// }

scoreE.innerText=`score: ${score}`
que.innerText=`What is ${num} multiply by ${num1}`


const correctAs=num*num1;

const form=document.getElementById("form")

form.addEventListener("submit", ()=> {
    const userAns=+input.value;
    if(userAns===correctAs){
        score++;
        console.log(score)
        updateLocaldata()
    }else{
        score--;
        updateLocaldata()
        console.log(score)
    }
});

function updateLocaldata(){
    localStorage.setItem("score", JSON.stringify(score))
}