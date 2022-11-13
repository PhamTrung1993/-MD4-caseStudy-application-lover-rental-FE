token = localStorage.getItem("token");
let id = JSON.parse(localStorage.getItem("currentUser")).id;
console.log(currentUser)
// showAllOrder();

function showAllOrder() {
    $.ajax({
        headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        }, type: "get", url: "http://localhost:8080/orders/",
        success: function (data) {
            showAllOrder()
        }
    })
}
function showAllOrder(lists) {
    let res = "<tr>\n" +
        "    <td>STT</td>\n" +
        "    <td>Name User</td>\n" +
        "    <td>Name Provider</td>\n" +
        "    <td>Date</td>\n" +
        "    <td>Status</td>\n" +
        "</tr>\n";
    for (let i= 0; i< lists.length; i++) {
        let order = lists[i];
        res += "<tr>\n" +
            "    <td>" + (i +1)       +   "</td>\n" +
            "    <td>" + order.user.userName  + "</td>\n" +
            "    <td>" + order.provider.name  + "</td>\n" +
            "    <td>" + order.startTime.slice(0,10)  + "</td>\n" +
            `    <td>" <a class="changeStatus" onclick='changStatus($(this))' href ="${order.id}"> Status </a> </td>\n ` +

            `<td><a class="deleteOrder" onclick='deleteOrderById($(this))' href="${order.id}">Delete</a></td></tr>`;
    }
    document.getElementById("display").innerHTML = "<table>" + res + "</table>"

}
function deleteOrderById(a) {
    let orderId = a.attr("href");
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/orders/${id}`,
        success: function (data) {
            a.parent().parent().remove();
        }
    });
//    Chặn sự kiện mặc định của thẻ
    event.preventDefault();

}