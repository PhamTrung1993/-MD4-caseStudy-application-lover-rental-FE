token = localStorage.getItem("token");
let id = JSON.parse(localStorage.getItem("currentUser")).id;
showOrder();

function showOrder() {
    $.ajax({
        headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }, type: "get", url: "http://localhost:8080/orders/" + id, success: function (data) {
            let userName = `<h2>` + data.user.name + `</h2>`
        }
    })
}