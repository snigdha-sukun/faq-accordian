const questions = document.querySelectorAll('.question');

function toggleAnswer(question) {
    const plus = question.querySelector('.plus');
    const minus = question.querySelector('.minus');
    const previousActive = document.querySelector('.active');
    const answer = question.nextElementSibling;
    if (previousActive && previousActive !== answer) {
        const previousPlus = previousActive.previousElementSibling.querySelector('.plus');
        const previousMinus = previousActive.previousElementSibling.querySelector('.minus');
        previousActive.classList.remove('active');
        previousPlus.style.display = 'block';
        previousMinus.style.display = 'none';
    }
    answer.classList.toggle('active');
    plus.style.display = plus.style.display === 'none' ? 'block' : 'none';
    minus.style.display = minus.style.display === 'block' ? 'none' : 'block';
}

questions.forEach((question) => {
    question.addEventListener('click', () => toggleAnswer(question));
});