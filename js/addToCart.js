function addToCart(name) {
    var cartList = JSON.parse(localStorage.getItem("name"));
    if(cartList===null){
        cartList=[];
    }
    var cartItems = isExistItem(name,cartList);
    if(cartItems){
        cartItems.count++;
    }else{
        cartList.push(new cartItem(getItemByName(name),1));
    }
    localStorage.setItem("name",JSON.stringify(cartList));
}

function  getItemByName(name) {
    var item = JSON.parse(localStorage.getItem('item'));

    var allProduct = LoadItem();
    var item_;
    for(var i=0;i<allProduct.length;i++){
        if(name==item[i].name){
            item_=allProduct[i];

            break;
        }
    }
    return item_;
}

function isExistItem(name,cartList) {
    var item_;
    for (var i = 0; i < cartList.length; i++) {
        if (name === cartList[i].item.name) {
            item_ = cartList[i];
            break;
        } else {
            item_=false;
        }
    }
    return item_;
}