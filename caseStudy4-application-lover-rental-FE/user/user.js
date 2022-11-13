
function getAllUser(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/user/" + id,
        success: function (data){
            showAllUser(data)
        }
    })
}

function showAllUser(user){
    let res = "";
        let user1 = user
        res =  `<li className="item">
                    <h2 className="product-name"><a title=" Sample Product" href="#"> ${user1.userName} </a></h2>
                    </div>
                    <div>
                    <tr>
                    <td>Nick Name:${user1.userName}</td>
                    <td>Email : ${user1.email}</td>
                    <td>Phone : ${user1.phone}</td>
                    <td>Ngay gia nhap : ${user1.joinDate}</td> 
                    <td>VIP : ${user1.vip}</td>
                    </tr>
                
                        </div>
                  
                </div>
            </div>
        </li>`;

    document.getElementById("view").innerHTML = res  ;
}
function loginSuccess(){
    localStorage.getItem()
}