function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let questions = [
    'How old are you ?',
    'Where are you from ?', 
    'What are your interests other than coding ?', 
    'Why should we hire you ?',
    'What video games do you play ?',
    'What made you to have interest in programming ?',
    'What is your most used social media platform ?',
    'What are your favourite programmming languages ?',
    'What is the most unforgettable experience in your life ?',
    'What is the most stupidest thing you have ever done ?'
]
let answers = [
    '18 years',
    'Sri Lanka', 
    'Physics', 
    'Waste of time',
    'Free Fire',
    'Stupidity',
    'Instagram',
    'PHP and Javascript',
    'Master Speller',
    'Eaten Banana'
]
// var i = 0;
// var txt = 'My Name is Rifky'; /* The text */
// var speed = 100; /* The speed/duration of the effect in milliseconds */
document.getElementById('start_question').addEventListener('click', () =>{
    document.getElementById('about_me_intro').classList.toggle('hidden');
    document.getElementById('question_and_answers').classList.toggle('hidden');
    let question_and_answers = '';
    questions.forEach((question, index) => {
        question_and_answers += 
        `<div class="question d-flex justify-content-between">
            <p class="mb-0">${question}</p>
            <i class="far fa-question-circle question_icon" id="question-${index}" onclick="printAnswer(event)"></i>
        </div>
        <p class="answer" id="answer-${index}"></p>`;
    })
    document.getElementById('questions').innerHTML += question_and_answers;
})
// function printText (){
//     while (i<txt.length){
//         document.getElementById('answer').innerHTML += txt.charAt(i);
//         setInterval()
//     }
// }
// function typeWriter(answer, id) {
//     console.log(answer);
//     if (i < answer.length) {
//         document.getElementById('answer-'+id).innerHTML += answer.charAt(i);
//         i++;
//         setTimeout(typeWriter(answer, id), speed);
//     }
// }
const printText = (answer, id, increment) => {
    document.getElementById('answer-'+id).innerHTML += answer.charAt(increment);
    console.log(answer.charAt(increment));
}
const printAnswer = (event) =>{
    const answerId = event.target.id;
    let id = answerId.split(/-(.*)/)[1];
    let answer = answers[id];
    document.getElementById('answer-'+id).innerHTML = '';
    let i = 0;
    while(i < answer.length){
        setTimeout(printText(answer, id, i) , i*100)
        i++;
    }
    console.log(answer);
    console.log(id);
}