// function showTodo(todo:{title:string,text:string}){
//     console.log(todo.title+':'+todo.text);
// }
// let myTodo={title:'trash',text:'take out trash'}

// showTodo(myTodo);

interface Todo{
    title:number;
    text:string;
}

function showTodo(todo:Todo){
    console.log(todo.title+':'+todo.text);
}
let myTodo={title:1,text:'take out trash'}
showTodo(myTodo);