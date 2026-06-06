


let foods=[

{
id:1,
name:"Pizza",
image:"https://images.unsplash.com/photo-1513104890138-7c749659a591",
desc:"Cheesy Italian Pizza",
price:300,
rating:4.5
},


{
id:2,
name:"Burger",
image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
desc:"Tasty Cheese Burger",
price:150,
rating:4.2
},


{
id:3,
name:"Pasta",
image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
desc:"Creamy White Sauce Pasta",
price:200,
rating:4.7
}

];



let cart=[];




let foodContainer=document.getElementById("foodContainer");


foods.forEach(food=>{


foodContainer.innerHTML += `

<div class="card">


<img src="${food.image}">


<h2>${food.name}</h2>

<p>${food.desc}</p>

<p>₹${food.price}</p>

<p>⭐${food.rating}</p>


<button onclick="addCart(${food.id})">
Add To Cart
</button>


</div>

`;

});



function addCart(id){


let item=foods.find(f=>f.id==id);


let exist=cart.find(c=>c.id==id);



if(exist){

exist.qty++;

}

else{

cart.push({...item,qty:1});

}


displayCart();


}



function displayCart(){


let box=document.getElementById("cartContainer");


box.innerHTML="";


let total=0;



cart.forEach(item=>{


total += item.price*item.qty;



box.innerHTML += `


<div class="card">


<h3>${item.name}</h3>

<p>
₹${item.price}
</p>


<button onclick="changeQty(${item.id},-1)">
-
</button>


${item.qty}


<button onclick="changeQty(${item.id},1)">
+
</button>


</div>


`;

});


document.getElementById("total").innerHTML=
"Total Amount : ₹"+total;



}


function changeQty(id,value){


let item=cart.find(c=>c.id==id);


item.qty += value;



if(item.qty==0){

cart=cart.filter(c=>c.id!=id);

}


displayCart();

}



function orderPage(){


document.getElementById("payment").style.display="block";


let amount=0;


cart.forEach(c=>{

amount+=c.price*c.qty;

});


document.getElementById("summary").innerHTML=

"Order Total : ₹"+amount;


}


function paymentProcess(){


return new Promise(resolve=>{


setTimeout(()=>{


resolve("Order Confirmed");


},3000);


});


}





async function placeOrder(){



let msg=document.getElementById("message");


msg.innerHTML="Processing Order...";



let result=await paymentProcess();



msg.innerHTML=
result+
"<br>Order ID : #"+Math.floor(Math.random()*10000);



}