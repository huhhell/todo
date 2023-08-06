 function submitTask() {
    let input = document.querySelector('.input')
    let header = document.querySelector('.header');
    let inputField = document.querySelector('.input__field');
    if (inputField.value === '') return false;

    header.insertAdjacentHTML("afterend", '    <div class="task">\n' +
        '        <div class="task__text">Cleaning dinner room</div>\n' +
        '        <div class="task__done">\n' +
        '            <img src="img/tick.svg" alt="tick" class="task__done-img">\n' +
        '        </div>\n' +
        '    </div>');
    let taskText = document.querySelector('.task__text');
    taskText.innerHTML = inputField.value;
    input.remove();
}