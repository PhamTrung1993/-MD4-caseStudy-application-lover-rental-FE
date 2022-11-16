function showRating(providerId){
    $.ajax({
        type: "GET",
        //tên API
        url: "http://localhost:8080/rating/"+ providerId,
        //xử lý khi thành công
        success: function (data) {
            // hien thi danh sach o day
            let content = '    <tr>\n' +
                '        <td>ID</td>\n' +
                '        <td>Comment</td>\n' +
                '        <td>Provider</td>\n' +
                '        <td>Delete</td>\n' +
                '    </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getRating(data[i]);
            }
            document.getElementById('rating').innerHTML = content;
        }
    });
}
function getRating(rating){
    return `<tr><td >${rating.id}</td><td >${rating.comment}</td><td >${rating.provider.name}</td>` +
        `<td><button onclick='deleteRating(${rating.id})'">Delete</button></td>` +
        `</tr>`;
}
function deleteRating(ratingId){
    $.ajax({
        type: "DELETE",
        url: `http://localhost:8080/rating/${ratingId}`,
        success: function (data) {
            alert("done");
            location.reload();
        },
        error: function (){
            alert("Co loi gi do");
        }

    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}
function addRating(providerId){
    let comment = document.getElementById("comment").value;
    let nal = {
        comment: comment,
        providerId: providerId
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/rating/save",
        data: JSON.stringify(nal),
        success: function (){
            alert("done");
        },
        error: function (err){
            console.log(err);
            alert("loi");
        }
    })
}