let addTaskButton = document.querySelector('.header__create-button');
addTaskButton.onclick = function addTask() {
    let input = document.querySelector('.input');
    if (input !== null) return false;
    let header = document.querySelector('.header');

    header.insertAdjacentHTML("afterend", '<div class="input">\n' +
        '        <label for="input__field" class="input__label"></label>\n' +
        '        <input type="text" class="input__field" id="input__field" autofocus>\n' +
        '        <button class="input__button">\n' +
        '            <img src="img/addTask.svg" alt="plus" class="input__button-img">\n' +
        '        </button>\n' +
        '    </div>')
};

