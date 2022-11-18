const questions = document.querySelectorAll('.item');

questions.forEach((item)=>{
    item.addEventListener('click', ()=>{
        const currentQuestion = document.querySelector('.item-open');
        if(item.classList.contains('item-open')){
            currentQuestion.classList.remove('item-open');
        }else if(currentQuestion){
            currentQuestion.classList.remove('item-open');
            item.classList.add('item-open');
        }else{
            item.classList.add('item-open');
        }
    })
})