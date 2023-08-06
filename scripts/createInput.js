let addTaskButton = document.querySelector('.header__create-button')
addTaskButton.onclick = function addTask() {
    let header = document.querySelector('.header');
    // let inputField = document.createElement('div');
    // inputField.classList.add('input')
    // inputField.innerHTML = ' <input type="text" class="input__field" id="input__field" autofocus> <button class="input__button"> <img src="../img/addTask.svg" alt="plus" class="input__button-img"> </button>';

    header.insertAdjacentHTML("afterend", '<div class="input">\n' +
        '        <label for="input__field"></label>\n' +
        '        <input type="text" class="input__field" id="input__field" autoFocus>\n' +
        '            <button class="input__button">\n' +
        '                <img src="img/addTask.svg" alt="plus" class="input__button-img">\n' +
        '            </button>\n' +
        '    </div>')
};

