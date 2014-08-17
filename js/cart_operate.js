var already_exit_sort = [];

$(document).ready(function () {

    var items = JSON.parse(localStorage.getItem("name"));
    if (items === null) {
        items = [];
    }

    $('.cartPlus_display').text(localStorage.amounts);
    $('.cartPlus_btn').on('click', function () {
        localStorage.getItem('amounts');
        addToCart($(this)[0].id);
        cartAmount();
    });
    for (var i = 0; i < items.length; i++) {
        if (isExist1(items[i].item.category)) {
            $('#addCart').append(' <div class="panel panel-danger well well-sm"><div class="panel-heading"><label>'
                + items[i].item.category + '</label> </div><div class="panel-body"  id='
                + items[i].item.category + '><div class="row text-center"><div class="col-md-3">'
                + items[i].item.name + '</div><div class="col-md-3">'
                + items[i].item.price + '</div> <div class="col-md-3 form-inline num">'
                + "<input type='number' class='form-control' id='cartData' name='number' data-name='" + items[i].item.name +
                "' value='" + items[i].count + "'>"
                + '</div><div class="col-md-3 perMoney">'
                + items[i].item.price * items[i].count + '</div</div></div></div></div>');
            already_exit_sort.push(items[i].item.category);
        } else {
            $('#' + items[i].item.category + '').append('<div class="panel-body"  id='
                + items[i].item.category + '><div class="row text-center"><div class="col-md-3">'
                + items[i].item.name + '</div><div class="col-md-3">'
                + items[i].item.price + '</div> <div class="col-md-3 form-inline num">'
                + "<input type='number' class='form-control' id='cartData' name='number' data-name='" + items[i].item.name +
                "' value='" + items[i].count + "'>"
                + '</div><div class="col-md-3 perMoney">'
                + items[i].item.price * items[i].count + '</div</div></div></div>');
        }
    }
    $('#addCart').append('<p class="text-right text-danger h4"><label>总计：<span id="totalMoney"></span>元</label></p>' +
        '<p class="text-right"><a class="btn btn-primary btn-lg" role="button" href="shoppingList.html">结算</a></p>');
    $('#totalMoney').text(getTotalMoney());
    $('#cartData').on('change',function(){
        console.log($(this).val());
    });
});
function isExist1(category) {
    if (already_exit_sort.length === 0) {
        return true;
    }
    for (var i = 0; i < already_exit_sort.length; i++) {

        if (category == already_exit_sort[i]) {
            return false;
        }
    }
    return true;
}
function getTotalMoney() {
    var items = JSON.parse(localStorage.getItem("name"));
    var totalMoney = 0;
    if (items === null) {
        totalCount = 0;
    } else {
        for (var i = 0; i < items.length; i++) {
            totalMoney += items[i].item.price * items[i].count;
        }
    }
    return totalMoney;
}










