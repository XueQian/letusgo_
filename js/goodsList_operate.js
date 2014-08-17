$(document).ready(function () {
    var itemList = LoadItem();
    //  localStorage.setItem('itemCount', itemList.length);
    localStorage.setItem('item', JSON.stringify(itemList));
    var item = JSON.parse(localStorage.getItem('item'));
    for (var m = 0; m < itemList.length; m++) {
        $('#goodsList_table').append('<tr><td id="goodsList_category">' + item[m].category + '</td>'
                + '<td id="goodsList_name">' + item[m].name + '</td>'
                + '<td id="goodsList_price">' + item[m].price + '</td>'
                + '<td id="goodsList_unit">' + item[m].unit + '</td>'
                + '<td id="goodsList_addButton"><button type="button" id="' + item[m].name + '" class="btn btn-primary cartPlus_btn">添加 </button></td></tr>'
        );
    }
   $('.cartPlus_display').text(localStorage.amounts);
    $('.cartPlus_btn').on('click', function () {
        localStorage.getItem('amounts');
        addToCart($(this)[0].id);
        cartAmount();
    });
});
function cartAmount() {
    if(localStorage.amounts == undefined){
        localStorage.amounts = 0;
    }
    localStorage.amounts = Number(localStorage.amounts) + 1;
    $('.cartPlus_display').text(localStorage.amounts);
   localStorage.setItem('amounts',localStorage.amounts);
}











