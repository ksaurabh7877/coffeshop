// Add the coffee to local storage with key "coffee"

async function show() {

    try {
    var res = await fetch("https://masai-mock-api.herokuapp.com/coffee/menu")
    
    
    // console.log('data:', coffee)


        var coffee = await res.json()

        console.log("coffee:", coffee.menu)

        var coffee = coffee.menu

        coffee.array.forEach(element => {
            
        });(function(ele, idx){
            var menu = document.getElementById('menu')

            var div = document.createElement('div')

            var name = ele.title

            var image = ele.image

            var price = ele.price

            var addtobucket = document.createElement('button')

            addtobucket.id = 'add_to_bucket'

            addtobucket.innerHTML = "add to bucket"

            addtobucket.addEventListener('click', function () {
                bucketfunc(ele, idx)
            });

            var img = document.createElement('img')

            img.src = image;


            var coffee_name = document.createElement('p')

            coffee_name.innerHTML = name;


            var coffee_price = document.createElement('p')

            coffee_price.innerHTML = price;



            div.append(img, coffee_name, coffee_price, addtobucket)

            menu.append(div)
            
            var bucket = document.getElementById('add_to_bucket')
            
            bucket.addEventListener('click', function(){
                location.href='./bucket.html'
            });
        });
    }
    catch(err){

    }
}

function bucketfunc(ele, idx){

    
    var count = document.getElementById('coffee_count')
    
    var arr = localStorage.getItem('bucket')
    
    if(arr == null){
        arr = []
    }
    else{
        arr = JSON.parse(localStorage.getItem('bucket'))
    }

    arr.push(ele)

    arr = localStorage.getItem('bucket',JSON.stringify(arr))

    count.innerHTML = JSON.parse(localStorage.getItem('bucket')).length;
}




show()
