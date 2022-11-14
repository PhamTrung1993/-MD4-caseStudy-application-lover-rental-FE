function showMenList(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/rentListForGender/nam",
        success: function (data){
            showAllProvider(data)
        }
    })
}
function showAllProvider(lists){
    let res = "";
    for (let i = 0; i < lists.length; i++) {
        let provider = lists[i];
        res +=  `<li className="item">
            <div className="col-item">
                <div className="product-image"><a href="#" title="Sample Product"> <img
                    className="small-image" src="" alt="HTC Rhyme Sense"> </a></div>
                <div className="product-shop">
                    <h2 className="product-name"><a title=" Sample Product" href="#"> ${provider.name} </a></h2>
                    <div className="price-box">
      
                        <p className="special-price"><span className="price-label"></span> <span id="product-price-212"
                                                                                                 className="price"> $50 </span>
                        </p>
                    </div>
                    <div className="ratings">
                        <div className="rating-box">
                            <div style="width:50%" className="rating"></div>
                        </div>
                        <p className="rating-links"><a href="#">1 Review(s)</a> <span className="separator">|</span> <a
                            href="#review-form">Add Your Review</a></p>
                    </div>
                    <div>
                    <table>
                    <tr>
                    <td>Gender:</td>
                    <td>${provider.gender}</td>
                    </tr>
                    <tr>
                    <td>Nationality:${provider.nationality}</td>
                    <td></td>
                    </tr>
                    <tr>
                    <td>City:</td>
                    <td>${provider.city}</td>
                    </tr>
                    <tr>
                    <td>View: </td>
                    <td>${provider.view}</td>
                    </tr>
                    <tr>
                    <td>facbook : </td>
                    <td>${provider.facebook}</td>
                    </tr>
                
                    </table>               
                        </div>
                    <div className="desc std">
                 </div>
                    <div className="actions">
                        <button className="button btn-cart ajx-cart" title="Add to Cart" type="button"><span>Match</span>
                        </button>
                         <button className="button btn-cart ajx-cart" title="Add to Cart" onclick="detailsProvider(`+ provider.id +`)"><span>Details</span>
                        </button>
                </div>
            </div>
        </li>`;

    }
    document.getElementById("products-list").innerHTML = res  ;

}
function showWoMenList(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/rentListForGender/nu",
        success: function (data){
            showAllProvider(data)
        }
    })
}
function showFullList(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/lists",
        success: function (data){
            showAllProvider(data)
        }
    })
}
function detailsProvider(providerId){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/" + providerId,
        success: function (data){
            showProviderById(data)
        }
    })
}
