const TASKS = 'tasks';

function initStorage() {
    
    const itemOfStorage = localStorage.getItem(TASKS);
    if(!itemOfStorage){
        localStorage.setItem(TASKS, JSON.stringify([]));

    } else{
       return JSON.parse(itemOfStorage);
    }
}

function addTask(task) {
    const taskArr = JSON.parse(localStorage.getItem(TASKS));
taskArr.push(task);
localStorage.setItem(TASKS, JSON.stringify(taskArr));
}



export default {
    initStorage,
    addTask
}