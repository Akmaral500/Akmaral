document.getElementById('active_name').textContent = localStorage['active_user']

document.getElementById("block").style.display = "none";

function regist(){
    let name_reg = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let conf_pass = document.getElementById('conf_password').value;
    let name_len = document.getElementById('name').value.length;
    let password_len = document.getElementById('password').value.length;

    if (name_len < 2) {
        document.getElementById("eror_name").textContent = "Должно быть больше 2х символов"
    } else if (password_len < 8) {
        document.getElementById("eror_pass").textContent = "Должно быть больше 2х символов"
        document.getElementById("eror_name").textContent = ""
    } else if (password != conf_pass) {
        document.getElementById("eror_pass").textContent = "Пароли не совпадают, попробуйте еще раз"
        document.getElementById("eror_pass").textContent = ""
    } else if(localStorage.getItem(name_reg)==null){
        document.getElementById("eror_user").textContent = ""
        document.getElementById("eror_name").textContent = ""
        document.getElementById("eror_pass").textContent = ""
        let new_user = {
            user_name: name_reg,
            user_password: password
        }
        localStorage.setItem(new_user.user_name, JSON.stringify(new_user));
        localStorage.setItem(new_user.user_password, JSON.stringify(new_user));
        localStorage.setItem("active_user", new_user.user_name)
        document.getElementById('active_name').textContent = localStorage['active_user']
        document.getElementById("block").style.display = "inline-block";
        document.getElementById("block1").style.display = "inline-block";
    } else {
        document.getElementById("eror_user").textContent = "Такой пользователь уже существует"
    }
}
    function rem() {
        localStorage.removeItem('active_user')
        document.getElementById("active_name").textContent = ' '
        document.getElementById("block").style.display = "none";
        document.getElementById("block1").style.display = "none";
}

function login() {
    let login = document.getElementById('login').value;
    let logpassword = document.getElementById('password_login').value;

    if(localStorage.getItem(login) != null && localStorage.getItem(logpassword) != null) {
        localStorage.setItem("active_user", login)
        document.getElementById('active_name').textContent = localStorage['active_user']
        document.getElementById("eror_log").textContent = ""
        document.getElementById("block").style.display = "inline-block";
        document.getElementById("block1").style.display = "inline-block";
    }else {
        document.getElementById("eror_log").textContent = "Пароль или логин введен неправильно"
    }
}

function change() {
    let new_pass = document.getElementById('passwordC').value;
    let new_user = {
        user_name: localStorage['active_user'],
        user_password: new_pass
    }
    localStorage.setItem(new_user.user_password, JSON.stringify(new_user));
    document.getElementById("block").style.display = "inline-block";
}