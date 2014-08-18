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
                + "<input type='number' class='cartData form-control' id='" + items[i].item.barcode + "' name= '"+ items[i].item.name +"' data-name='" + items[i].item.name +
                "' value='" + items[i].count + "'>"
                + '</div><div class="col-md-3 ' + items[i].item.barcode +'">'
                + items[i].item.price * items[i].count + '</div</div></div></div></div>');
            already_exit_sort.push(items[i].item.category);
        } else {
            $('#' + items[i].item.category + '').append('<div class="panel-body"  id='
                + items[i].item.category + '><div class="row text-center"><div class="col-md-3">'
                + items[i].item.name + '</div><div class="col-md-3">'
                + items[i].item.price + '</div> <div class="col-md-3 form-inline num">'
                + "<input type='number' class='cartData form-control' id='" + items[i].item.barcode + "' name= '"+ items[i].item.name +"' data-name='" + items[i].item.name +
                "' value='" + items[i].count + "'>"
                + '</div><div class="col-md-3 ' + items[i].item.barcode +'">'
                + items[i].item.price * items[i].count + '</div</div></div></div>');
        }
    }
    $('#addCart').append('<p class="text-right text-danger h4"><label>总计：<span id="totalMoney"></span>元</label></p>' +
        '<p class="text-right"><a class="btn btn-primary btn-lg" role="button" href="shoppingList.html">结算</a></p>');
    $('#totalMoney').text(getTotalMoney());
    $('.cartData').on('change',function(){
        //cartChange($(this));
        var count = $(this).val();
        var money;
        var items = JSON.parse(localStorage.getItem("name"));
        var name = $(this).attr("name");
        for (var i = 0; i < items.length; i++) {
            if (items[i].item.name == name) {
                items[i].count = parseInt(count);
                money = count * items[i].item.price;
                // element.closest('num').find('.perMoney').text(money);
                localStorage.setItem("name", JSON.stringify(items));
                break;
            }
            var total=0;
            total+=count;
        }
        console.log($(this)[0].id);
        var array = $(this)[0].id;
        console.log($('.'+array));
        $('.'+array).text(money);
        $('#totalMoney').text(getTotalMoney());
        localStorage.getItem('amounts');
        localStorage.amounts=parseInt(total);
        $('.cartPlus_display').text(localStorage.amounts);
    });
});
//function cartChange(element) {
//    var count = element.val();
//    var money;
//    var items = JSON.parse(localStorage.getItem("name"));
//    var name = element.attr("name");
//    for (var i = 0; i < items.length; i++) {
//        if (items[i].item.name == name) {
//            items[i].count = parseInt(count);
//            money = count * items[i].item.price;
//           // element.closest('num').find('.perMoney').text(money);
//            localStorage.setItem("name", JSON.stringify(items));
//
//
//            break;
//
//        }
//    }
//}
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











