getProviderById();
// function getAllProvider(providerId){
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/provider/" + providerId,
//         success: function (data){
//             showAllProvider(data)
//         }
//     })
// }
// ham get 1 provider
function getProviderById(){
    let idNext = localStorage.getItem("providerId");
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/"+idNext,
        success: function (data){
            showProviderId(data);
        }
    })
}
function showProviderId(data){
    let res =
        `<div class="product-img-box col-sm-4 col-xs-12">
                  <div class="new-label new-top-left">Provider </div>
                  <div class="product-image">
                    <div class="large-image"> <a href="https://inkythuatso.com/uploads/thumbnails/800/2022/05/aca1c913ccaf08584170c78c7c2d3a5d-06-16-06-38.jpg" class="cloud-zoom" id="zoom1" rel="useWrapper: false, adjustY:0, adjustX:20"> <img alt="product-image" src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/aca1c913ccaf08584170c78c7c2d3a5d-06-16-06-38.jpg"> </a> </div>
                    <div class="flexslider flexslider-thumb">
                      <ul class="previews-list slides">
                        <li><a href='' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'https://atplink.com/blog/wp-content/uploads/2021/12/ami-bung-bu.jpg' "><img src="https://atplink.com/blog/wp-content/uploads/2021/12/ami-bung-bu.jpg" alt="Thumbnail 1"/></a></li>
                        <li><a href='' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'https://cf.shopee.vn/file/e78672db6328f6c20b1c407a7b92c676_tn' "><img src="https://cf.shopee.vn/file/e78672db6328f6c20b1c407a7b92c676_tn" alt="Thumbnail 2"/></a></li>
                        <li><a href='' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'https://inkythuatso.com/uploads/thumbnails/800/2022/05/ab3fae694256f2a06071ad6a1db7bb4e-06-16-11-41.jpg' "><img src="https://inkythuatso.com/uploads/thumbnails/800/2022/05/ab3fae694256f2a06071ad6a1db7bb4e-06-16-11-41.jpg" alt="Thumbnail 1"/></a></li>
                        </ul>
                    </div>
                  </div>
                  <!-- end: more-images -->
                  <div class="clear"></div>
                </div>
            <div className="product-next-prev"><a className="product-next" href="#"><span></span></a> <a
                className="product-prev" href="#"><span></span></a></div>
                <div className="product-name">
                <h1>${data.name}</h1>
            </div>
            <div className="short-description">
                <table>
                    <tr>
                    <td>Gender:</td>
                    <td>${data.gender}</td>
                    </tr>
                    <tr>
                    <td>Nationality:${data.nationality}</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>City:</td>
                    <td>${data.city}</td>
                    </tr>
                    <tr>
                    <td>View: </td>
                    <td>${data.view}</td>
                    </tr>
                    <tr>
                    <td>facbook : </td>
                    <td>${data.facebook}</td>
                    </tr>
                    <tr>
                    <td>Weigh : </td>
                    <td>${data.weight}</td>
                    </tr>
                    <tr>
                    <td>Height : </td>
                    <td>${data.height}</td>
                    </tr>
                    <tr>
                    <td>Has been hired : </td>
                    <td>${data.hasBeenHired}</td>
                    </tr>
                    <button onclick="showServiceByProvider(getProviderId())">Show Service</button>
                    <button onclick="showFormAddOrder()">Match</button>
                    <tr id="showServiceByProvider">
                    
                    </tr>
                        
                    </table> 
            </div>
          </div>
        </div>
       `

    document.getElementById("view").innerHTML = res  ;
}
function showFormAddOrder(){
    let form = `
                        <br><input type="text" id="user_id" placeholder="ID Khách hàng">
                        <br><input type="text" id="provider_id" placeholder="ID người Cung Cấp">
                        <br><input type="datetime-local" id="startTime" placeholder="Ngày Bắt Đầu">
                        <br><input type="text" id="timeRent" placeholder="Số giờ thuê">
                        <br><button onclick="addNewOrder()">Save</button><br>
                        `

    document.getElementById("view").innerHTML = form;
}
function showServiceByProvider(providerId){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/serProvidedByUser/"+providerId,
        success: function (data){
            let content ="";
            for (let i = 0; i < data.length; i++) {
                content += showOneService(data[i]);
            }
            document.getElementById('showServiceByProvider').innerHTML = "<td>Service:</td><td>" + content + "</td>";
        }
    })
}
function showOneService(lists){
    return `${lists.name}` + "," ;
}