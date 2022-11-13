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
            "    <td>" + order.user_id  + "</td>\n" +

            `<td><a class="deleteOrder" onclick='deleteOrderById($(this))' href="${order.id}">Delete</a></td></tr>`;
    }

}