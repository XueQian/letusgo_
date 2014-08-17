$(document).ready(function(){
    getShoppingList();
    $('.cartPlus_display').text(localStorage.amounts);
    $('#totalMoney').text(getTotalMoney());
    $('.btn').on('click',removeCart);


});
function getShoppingList(){
    var items=JSON.parse(localStorage.getItem("name"));
    if(items===null){
        items=[];
    }
    for (var i = 0; i < items.length; i++) {
        $('#order').append('<div class="row text-center"><div class="col-md-3">'+items[i].item.name+'</div>' +
            '<div class="col-md-3">'+items[i].count+'</div>' +
            '<div class="col-md-3">'+items[i].item.price+'</div> ' +
            '<div class="col-md-3">'+items[i].item.price*items[i].count+'</div></div>');
    }
    $('#order').append('<hr>');
    $('#order').append('<p class="text-right text-danger h4"><label>总计：<span id="totalMoney"></span>元</label></p>');
    $('#order').append('<p class="text-right" id="ok"><a class="btn btn-primary btn-lg" role="button" href="#">确定</a></p>')
}
function removeCart(){
    localStorage.removeItem("name");
}