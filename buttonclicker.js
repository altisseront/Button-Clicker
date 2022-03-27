function remove(button) {
    button.remove()
}
function login(element) {
    if (element.innerText == "Login"){
    element.innerText = "Logout";
    }
    else if (element.innerText == "Logout"){
        element.innerText = "Login";
    }


}

function addLike1() {
    var x = document.getElementById('likes1');
    var value1 = x.innerHTML;

    ++value1;

    console.log(value1);
    document.getElementById('likes1').innerHTML = value1;
}
function addLike2() {
    var x = document.getElementById('likes2');
    var value2 = x.innerHTML;

    ++value2;

    console.log(value2);
    document.getElementById('likes2').innerHTML = value2;
}