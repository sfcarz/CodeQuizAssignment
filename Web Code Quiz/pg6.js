$(document).ready(function () {

    const $startButton = $('#start-button');
    const $nextButton = $('#next-button');
    const $questionContainer = $('#question-container');
    let shufflingQuestion, currentQuestions;
    const $question = $('#question');
    // const $question = querySelector('#question')
    const $answerButtons = $('#answer-buttons')


    // let removeChild = $('.parent .child').remove();
    // let findChild = $('.parent').find('.child');
    // console.log(findChild);
    // console.log($answerButtons.children.text);
    

    $startButton.on('click', startQuiz)
    $nextButton.on('click', () => {
        currentQuestion++;
        setNextQuestion();
    })

function startQuiz() {
    console.log('It Worked, lets get started');
    $startButton.addClass('hide');
    shufflingQuestion = question.sort(() => Math.random() - .5);
    currentQuestions = 0;
    $questionContainer.removeClass('hide')
    setNextQuestion();
    
}

function setNextQuestion() {
    console.log('It also worked');
    reset()
    showQuestion(shufflingQuestion[currentQuestions])

}

function showQuestion(question) {
    console.log("showing question worked too");
    $question.text(question.quizQuestion).addClass('text-lg');
    question.answer.forEach(answer => {
        const button = $('<button>, <br>');
        button.text(answer.text);
        button.addClass('btn btn-outline-light mb-3');
        if (answer.correct) {
            button.data('answer', 'correct');
        }
            button.on('click', selectAnswer());
            $answerButtons.append(button)
    })
            console.log('After After');
}

function reset() {
    $nextButton.addClass('hide');
    while ($answerButtons.firstChild) {
        $answerButtons.removeChild($answerButtons.removeChild);
    };
}

function selectAnswer() {
    // const selectedButton = e.target.btn;
    // const correct = selectedButton.data('correct');
    // setStatusClass(document.body, correct);
    // Array.from($answerButtons.children).forEach(button => {
    //     setStatusClass(button, button.data('correct'))
    // })
    if (shufflingQuestion.length > currentQuestions +1) {
        $nextButton.removeClass('hide')
    } else {

    }
}

// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.addClass('correct')
//     } else {
//         element.addClass('wrong')
//     }
// }

// function setStatusClass(element) {
//         element.removeClass('correct')
//         element.removeClass('wrong')
    
// }

const question = [
    {
        quizQuestion: 'What does pop() do to an Array?', 
        answer: [
            { text: 'Adds a new Array?', correct: false },
            { text: 'Removes an Array?', correct: false },
            { text: 'Adds an Array to the middle?', correct: false },
            { text: 'Removes the last element from the Array?', correct: true},
        ]
    },

    {
        quizQuestion: 'What does split do to a string', 
        answer: [
            { text: 'Turns into an object?', correct: false },
            { text: 'Turns into an Array?', correct: true },
            { text: 'Splits the string in 2?', correct: false },
            { text: 'All the Above?', correct: false },
        ]
    },
]


});
