import {closeQuestion, closeCurrentQuestionOpenOther, openQuestion} from './question.js'

document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', () => {
        const currentQuestion = document.querySelector('.item-open');
       
        if (item.classList.contains('item-open')) {
            closeQuestion(currentQuestion);
        } else if (currentQuestion) {
            closeCurrentQuestionOpenOther(item, currentQuestion);
        } else {
            openQuestion(item);
        }
    })
})