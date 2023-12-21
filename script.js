"use strict"


var btn = document.querySelector('#btn');
var input_product_name = document.querySelector('#product_name');
var input_product_amount = document.querySelector('#amount_name');

var append_div = document.querySelector('.list_of_product');

var display_total_amount = document.querySelector('#final_amount');
var error_name = document.querySelector('#product_name_error');
var error_amount = document.querySelector('#amount_error');

var total_div=document.querySelector('#final_amount')

var new_element = document.querySelector('#new_element');


var total = document.querySelector('#tdis_total');

var sort = document.querySelector('#triyangle')

total_div.style.display ="none";

total.innerText =0;


var newarr =[];
//    display_total_amount.style.display = "none";
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    

    setTimeout(()=>{
        error_name.innerText="";
        error_amount.innerText="";
        },1500)

        if(input_product_name.value == "" || input_product_amount.value ==""){
            if(input_product_name.value == "" && input_product_amount.value ==""){
                error_name.innerText = "iinvalid ";
                error_amount.innerText="invalid amount";
                
                 } else{
                    if(input_product_name.value == ""){
                        error_name.innerText = "iinvalid ";
                    }else{
                        error_amount.innerText="invalid amount";
                    }
            
                  }  
                }else{
                             var create_div = document.createElement("div");
                                 create_div.setAttribute('id','create_element')
                              var append_product = document.createElement("div");
                              append_product.setAttribute('id','pro_name')
                              var append_amount = document.createElement("div"); 
                              append_amount.setAttribute('id','amount')
                            //   console.log(append_amount);    
                            create_div.style.padding-top ;"20px"  
                             var del_icon = document.createElement('i');
                                 del_icon.setAttribute('class','fa-solid fa-trash');
                                 del_icon.setAttribute('id','cc');
                                
                                 
                                 new_element.append(create_div);
                                 create_div.append(append_product);
                                 create_div.append(append_amount);
                                 create_div.append(del_icon)
                                 
                                
                           
       
        var value_product = input_product_name.value;
        // console.log(value_product);
        var value_amount = input_product_amount.value;
        // console.log(value_amount);
    
        append_product.innerText = value_product;
        append_amount.innerText=value_amount;

    // var append_amt = append_amount.innerText;
    // console.log("uuu="+append_amt);


    total.innerText=  parseInt(append_amount.innerText) + parseInt(total.innerText);

   //insert elements in array

    newarr.push(value_amount) ;
    console.log(newarr);


    input_product_name.value ="";
    input_product_amount.value ="";
    

    // total display

    total_div.style.display ="block";

    }




    del_icon.addEventListener('click',()=>{
      if(confirm(`you want to delete the ${value_product}`) == true){
        del_icon.parentElement.remove();
        total.innerText=  parseInt(total.innerText)-parseInt(append_amount.innerText);
        
      }
      
    })
   
    // sort.addEventListener('click',()=>{
    //     newarr.sort()
    // })


        
})










