function test() {
    let id = document.getElementById("id").value;
    let formData = new FormData();
    formData.append("image", document.getElementById("file"))
    $.ajax({
        headers: {
            'Accept': '*/*',
            'Content-Type': 'multipart/form-data',
        },
        type: "POST",
        url: "http://localhost:8080/provider/save" + id,
        data: formData,
        contentType: false,
        processData: false,
        success: function (reponse) {
            if (reponse != 0) {
                alert("done");
            }
        }
    })
}


