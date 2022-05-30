// On clicking remove button the item should be removed from DOM as well as localstorage.


var pro = JSON.parse(localStorage.getItem('bucket'))

bucketshow(pro)

function bucketshow(pro) {

    var bucket = document.getElementById('bucket')

    bucket.innerHTML = "";

    pro.map(function(ele, idx){

        var bucket = document.getElementById('bucket')

        var name = ele.menu.title

        var div = document.createElement('div')

        var image = ele.menu.image

        var price = ele.menu.price

        var addtobucket = document.createElement('button')

        addtobucket.id = "coffee_remove"

        addtobucket.innerHTML = 'coffee_remove'


        addtobucket.addEventListener('click', function(){
            bucketdelete(idx)
        });

        var img = document.createElement('img')

        img.src = image

        var coffee_name = document.createElement('p')

        coffee_name.innerHTML = name;


        var coffee_price = document.createElement('p')

        coffee_price.innerText = price;

        div.append(img, coffee_name, coffee_price, addtobucket);

        bucket.append(div);
    });
}

function bucketdelete(idx){
    pro.splice(idx, 1);

    localStorage.setItem('bucket', JSON.stringify(pro));

    bucketshow(pro);

    price();
}


function price() {

    var a = document.getElementById('total_amount')

    a.innerHTML = "";

    var total = pro.reduce(function(acc,el){

        return acc + el.price
    }, 0)

    a.innerHTML = total
}

price()

var checkout = document.getElementById('confirm_checkout')

confirm_checkout.addEventListener('click', function(){
    location.href = "checkout.html"
});