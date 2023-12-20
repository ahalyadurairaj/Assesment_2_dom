"use strict"


var btn = document.querySelector('#btn');
var input_product_name = document.querySelector('#product_name');
var input_product_amount = document.querySelector('#amount_name');

var append_div = document.querySelector('.list_of_product');


btn.addEventListener('click',(event)=>{
    event.preventDefault();

    var create_div = document.createElement("div");
    create_div.setAttribute('id','create_element')
    var append_product = document.createElement("div");
    var append_amount = document.createElement("div");
    

    var value_product = input_product_name.value;
    console.log(value_product);
    var value_amount = input_product_amount.value;
    console.log(value_amount);

    append_product.innerText = value_product;
    append_amount.innerText=value_amount;







    create_div.append(append_product);
    create_div.append(append_amount);
    append_div.append(create_div);


    input_product_name.value ="";
    input_product_amount.value ="";

})