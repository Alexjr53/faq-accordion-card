function closeQuestion(currentQuestion) {
    currentQuestion.classList.remove('item-open');
}
function closeCurrentQuestionOpenOther(item, currentQuestion) {
    item.classList.add('item-open');
    currentQuestion.classList.remove('item-open');
}
function openQuestion(item) {
    item.classList.add('item-open');
}

export {closeQuestion, closeCurrentQuestionOpenOther, openQuestion}