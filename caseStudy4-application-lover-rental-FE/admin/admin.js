let tk = localStorage.getItem("token");
let rl = localStorage.getItem("role");
if (tk == null){
    window.location.href = "login.html"
}
if (rl == "ROLE_ADMIN" && rl == "ROLE_PO"){
    window.location.href = "admin.html"}
else if (rl == "ROLE_PROVIDER"){
    window.location.href = "../AccessDenied.html"
}
else if (rl == "ROLE_USER"){
    window.location.href = "../AccessDenied.html"
}