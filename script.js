const inputId = document.getElementById('inputId');
const btnId = document.getElementById('btnId');
const tododata = document.querySelector('.tododata');

let listArray = [];



const sethtml = (currEle) => {
    const creEle = document.createElement('div');
    creEle.innerHTML = `<li>${currEle}</li> <button class="btndel">Delete</button>`;
    tododata.append(creEle);

}


const setLocalStorageData = (listArray) => {
    const todolistvalue = inputId.value.trim();
    inputId.value = '';
    listArray.push(todolistvalue);
    listArray = [...new Set(listArray)];//to remove duplicate values
    localStorage.setItem('list', JSON.stringify(listArray));

};


const getLocalStorageData = () => {
    return JSON.parse(localStorage.getItem("list"));
};

const addTodoListLocalStorage = (listArray) => {
    return localStorage.setItem("list", JSON.stringify(listArray));
};

listArray = getLocalStorageData() || [];



const addTodoList = (e) => {
    e.preventDefault();
    const todolistvalue = inputId.value.trim();

    if (!listArray.includes(todolistvalue) && todolistvalue !== '') {


        sethtml(todolistvalue);

        setLocalStorageData(listArray);

    }
}


const showTodoList = () => {

    console.log(listArray);

    listArray.forEach((element) => {
        sethtml(element);
    })

}

showTodoList();


const removeToDoList=(e)=>{
    const todoremove = e.target;
    let todolist = todoremove.previousElementSibling.innerText;
    let parentElement = todoremove.parentElement;
    console.log(todolist);
    
    listArray=listArray.filter((ele)=>{
        return ele !== todolist;
    })

    addTodoListLocalStorage(listArray);
    parentElement.remove();


}

tododata.addEventListener('click', (e)=> {
    e.preventDefault(); 
    
    if(e.target.classList.contains('btndel')){ 
        
        removeToDoList(e);
    };
    
});




btnId.addEventListener('click',  (e)=> {
    addTodoList(e);


});


