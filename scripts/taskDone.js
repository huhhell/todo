
function doTask(item) {
    let doneTick = item.querySelector('*');
    let isDone = item.getAttribute('isDone');

    if (isDone === 'false') {
        item.style.backgroundColor = 'rgba(233,233,233,0)';
        doneTick.style.display = 'block';
        item.setAttribute('isDone', 'true')
    } else {
        item.style.backgroundColor = 'rgb(233,233,233)';
        doneTick.style.display = 'none';
        item.setAttribute('isDone', 'false')
    }
}