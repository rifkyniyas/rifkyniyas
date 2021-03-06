window.onload = () =>{
    document.getElementsByTagName('body')[0].classList.remove('no-scroll-overflow')
    document.getElementById('loadingMenu').classList.add('hidden');
}


function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
//Get the button
var mybutton = document.getElementById("sticky-logo");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var rootElement = document.documentElement;
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
    if (document.body.scrollTop > 20 || rootElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}
let question_and_answers = [
    {
        question: 'Your interests other than coding',
        answer : 'Playing computer games, enjoying some game of cricket and enjoying a sip of physics'
    },
    {
        question: 'Video games that you play',
        answer : `Need for Speed Most Wanted is my favourite of all time. I mostly like playing game series like IGI, Call of Duty, Farcry, Need for Speed, Assassin's creed etc.
        I have started playing free fire in recent days.`
    },
    {
        question: 'What made you to have interest in programming',
        answer : `Curousity to know what will happen if I can instruct the computer to do what I wanted`
    },
    {
        question: 'Your most used social media platform',
        answer : `Instagram. I do use twitter and facebook mostly to connect with fellow developers`
    },
    {
        question: 'Your favourite programmming languages',
        answer : `Obviously, I love both PHP and Javascript, the tools I work with everyday`
    },
    {
        question: 'First programming language you learned',
        answer : `Pascal what I was taught first. It went horrible though. I taught myself with HTML for a hobby and it turned out pretty well`
    },
    {
        question: 'Your worst experience ever',
        answer : `My first question on Stack Overflow`
    },
]
document.getElementById('closeQuestions').addEventListener('click', ()=>{
    document.getElementById('about_me_intro').classList.toggle('hidden');
    document.getElementById('question_and_answers').classList.toggle('hidden');
})
document.getElementById('start_question').addEventListener('click', () =>{
    document.getElementById('about_me_intro').classList.toggle('hidden');
    document.getElementById('question_and_answers').classList.toggle('hidden');
    if(document.getElementById('questions').innerHTML != ''){
        return;
    }
    let q_and_a = '';
    question_and_answers.forEach((question, index) => {
        
        q_and_a += `<div class="question d-flex justify-content-between" data-question="${index}">
            <p class="mb-0">${question.question}</p>
            <i class="far fa-question-circle question_icon" id="question-${index}" onclick="printAnswer(event)"></i>
        </div>
        <p class="answer hidden" id="answer-${index}" data-answer=${index}></p>`;
    })
    document.getElementById('questions').innerHTML += q_and_a;
});
const printAnswer = (event) =>{
    const answerId = event.target.id;
    let id = answerId.split(/-(.*)/)[1];
    let answer = question_and_answers[id].answer;
    console.log(answer);
    document.getElementById('answer-'+id).classList.toggle('hidden');
    document.getElementById('answer-'+id).innerHTML = '';
    //make a close button
    event.target.classList.toggle('hidden');
    let i = 0;
    let speed = 100;
    function typeWriter(){
        if (i < answer.length) {
            document.getElementById('answer-'+id).innerHTML += answer.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}
//lightbox
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
AOS.init({
    duration: 800,
    disable: function() {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    }
})