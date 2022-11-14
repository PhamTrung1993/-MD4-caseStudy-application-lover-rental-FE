
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
            localStorage.clear();
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
                <p> good service </p>
            </div>
          </div>
        </div>
       `


    document.getElementById("view").innerHTML = res  ;
}
