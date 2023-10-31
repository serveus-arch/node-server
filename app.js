const readline = require('readline');

let tasks = [];

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

function addTask(task) {
 tasks.push(task);
}

function removeTask(index) {
 tasks.splice(index, 1);
}

function completeTask(index) {
 tasks[index].completed = true;
}

function printTasks() {
 tasks.forEach((task, index) => {
    console.log(`${task.indicator} - ${task.description} - ${task.completed ? 'Completada' : 'No completada'}`);
 });
}

rl.question('Introduce una opción: ', (option) => {
 switch (option) {
    case '1':
      rl.question('Introduce el indicador: ', (indicator) => {
        rl.question('Introduce la descripción: ', (description) => {
          addTask({ indicator, description, completed: false });
          console.log('Tarea añadida.');
          rl.close();
        });
      });
      break;
    case '2':
      printTasks();
      rl.close();
      break;
    case '3':
      rl.question('Introduce el índice de la tarea a eliminar: ', (index) => {
        removeTask(index);
        console.log('Tarea eliminada.');
        rl.close();
      });
      break;
    case '4':
      rl.question('Introduce el índice de la tarea a completar: ', (index) => {
        completeTask(index);
        console.log('Tarea completada.');
        rl.close();
      });
      break;
    default:
      console.log('Opción no válida.');
      rl.close();
  }
});