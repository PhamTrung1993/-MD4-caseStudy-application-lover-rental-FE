let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let token = localStorage.getItem("token");
console.log(currentUser)

function checkLogin() {
    if (currentUser === null) {
        $('#dropdownMenuButton1').hide();
        $('#profile').hide();
    }
    else {
        document.getElementById("admin-name").innerHTML = currentUser.username;
        $('#dropdownMenuButton').hide();
    }
}

checkLogin();

function logout() {
    localStorage.clear();
    window.location.href = "home.html";
}

function login() {
    let username = $('#username').val();
    let password = $('#password').val();
    if (username === "") {
        document.getElementById("error_login").innerHTML = "username address cannot be blank !";
        return false;
    }
    if (password === "") {
        document.getElementById("error_login").innerHTML = "Password can not be blank !";
        return false;
    }
    let data = {
        userName: username,
        password: password,
    };
    $.ajax({
        url: `http://localhost:8080/login`,
        type: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        data: JSON.stringify(data),
        success: function (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role",data.roles[0].authority);

            if (data.roles[0].authority == "ROLE_PO"){
                location.href = "../po/po.html"
            }else if(data.roles[0].authority == "ROLE_ADMIN"){
                location.href = "../admin/admin.html"
            }else if(data.roles[0].authority == "ROLE_PROVIDER"){
                location.href = "../provider/provider.html"
            }else if(data.roles[0].authority == "ROLE_USER"){
                location.href = "../user/user.html"
            }else {
                location.href = "login.html"
            }
            console.log(data)
        },
        error: function (err) {
            alert("Đăng nhập không thành công")
            console.log(err)
        }
    });
    event.preventDefault();
}