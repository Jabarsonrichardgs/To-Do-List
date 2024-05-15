var a = document.getElementById('get');

function addli() {
    var b = document.getElementById('main2');
    var c = document.createElement('li');
    c.innerHTML = a.value + "<button onclick='delIt(event)'>Delete</button>"; 
    b.appendChild(c); 
}
function delIt(event){
    event.target.parentElement.remove()

}
