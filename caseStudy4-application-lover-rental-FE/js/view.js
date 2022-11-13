

function getAllProvider(){
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/provider/lists",
        success: function (data){
            showAllProvider(data)
        }
    })
}
function showAllProvider(){
    let res =
        `          
          <div class="new-label new-top-left"> New </div>
          <div class="product-image">
            <div class="large-image"> <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwROtWtCiJOMXUdqka9GT6BGh8fJO65DkIw&usqp=CAU" class="cloud-zoom" id="zoom1" rel="useWrapper: false, adjustY:0, adjustX:20"> <img alt="product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ6crUgAArTvvxIeOCH2-7eU98GaGGD6NKPe7w82kJHOxeeTVCE5WztT7vLxiyDTwx0c&usqp=CAU"> </a> </div>
            <div class="flexslider flexslider-thumb">
              <ul class="previews-list slides">
                <li><a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ6crUgAArTvvxIeOCH2-7eU98GaGGD6NKPe7w82kJHOxeeTVCE5WztT7vLxiyDTwx0c&usqp=CAU' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'products-images/product6.jpg' "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ6crUgAArTvvxIeOCH2-7eU98GaGGD6NKPe7w82kJHOxeeTVCE5WztT7vLxiyDTwx0c&usqp=CAU" alt="Thumbnail 1"/></a></li>
                <li><a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1G7d4ChLTecwXEdI60aSacY839eqmYd6z4zTx2TIwCVGqzebRHq8P32deROUHiZd5GY0&usqp=CAU' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'products-images/product10.jpg' "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1G7d4ChLTecwXEdI60aSacY839eqmYd6z4zTx2TIwCVGqzebRHq8P32deROUHiZd5GY0&usqp=CAU" alt="Thumbnail 2"/></a></li>
                <li><a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dCAzrx7oKsBlCbOwwC5MzlgnaCnW_i8m9LFIs5tjl0UJA4WVs25m5jqwdQacuBh7nyM&usqp=CAU' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'products-images/product3.jpg' "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dCAzrx7oKsBlCbOwwC5MzlgnaCnW_i8m9LFIs5tjl0UJA4WVs25m5jqwdQacuBh7nyM&usqp=CAU" alt="Thumbnail 1"/></a></li>
                <li><a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZm7XYsxrKDEx0nl0pnCL9cOM48-syWV-2KkIu3i19wu3in4zJOAkb6YvMXFRLPZOxPY&usqp=CAU' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'products-images/product4.jpg' "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZm7XYsxrKDEx0nl0pnCL9cOM48-syWV-2KkIu3i19wu3in4zJOAkb6YvMXFRLPZOxPY&usqp=CAU" alt="Thumbnail 2"/></a></li>
                <li><a href='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ6crUgAArTvvxIeOCH2-7eU98GaGGD6NKPe7w82kJHOxeeTVCE5WztT7vLxiyDTwx0c&usqp=CAU' class='cloud-zoom-gallery' rel="useZoom: 'zoom1', smallImage: 'products-images/product5.jpg' "><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQ6crUgAArTvvxIeOCH2-7eU98GaGGD6NKPe7w82kJHOxeeTVCE5WztT7vLxiyDTwx0c&usqp=CAU" alt="Thumbnail 2"/></a></li>
              </ul>
            </div>
          </div>
          <!-- end: more-images -->
          <div class="clear"></div>
            </div>
            <div className="product-next-prev"><a className="product-next" href="#"><span></span></a> <a
                className="product-prev" href="#"><span></span></a></div>
                <div className="product-name">
                <h1>Provider</h1>
            </div>
            <div className="short-description">
                <p> good service </p>
            </div>
          </div>
        </div>
       `


    document.getElementById("view").innerHTML = res  ;
}