let isDone = false;

function doTask() {
    let doneField = document.querySelector('.task__done');
    let doneTick = document.querySelector('.task__done-img');
    if (isDone === false) {
        doneField.style.backgroundColor = 'rgba(233,233,233,0)';
        doneTick.style.display = 'block';
        isDone = true;
    } else {
        doneField.style.backgroundColor = 'rgb(233,233,233)';
        doneTick.style.display = 'none';
        isDone = false;
    }
}