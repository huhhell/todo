function submitTask() {
    let input = document.querySelector('.input')
    let header = document.querySelector('.header');
    let inputField = document.querySelector('.input__field');
    if (inputField.value === '') return false;

    header.insertAdjacentHTML("afterend", '    <div class="task">\n' +
        '        <div class="task__text"></div>\n' +
        '        <button class="task__done" onclick="doTask(this)">\n' +
        '            <img src="img/tick.svg" alt="tick" class="task__done-img">\n' +
        '        </button>\n' +
        '    </div>');

    let taskText = document.querySelector('.task__text');
    taskText.innerHTML = inputField.value;

    let doneField = document.querySelector('.task__done');
    doneField.setAttribute('isDone', 'false')

    input.remove();
}
