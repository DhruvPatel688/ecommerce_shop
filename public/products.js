
import { createClient } from '../node_modules/@supabase/supabase-js'
const supabaseUrl = 'https://vaozihqxjhjblekvunmu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhb3ppaHF4amhqYmxla3Z1bm11Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5MDg4NTEsImV4cCI6MjAzMzQ4NDg1MX0.smpniaPE0zi3ESvYlrkMgtvgfPBhVUWkByMp5YxWvoE'
const supabase = createClient(supabaseUrl, supabaseKey)


var buttons = document.querySelectorAll(".btn-button");



items = [ ["1", 0.99], ["2", 0], ["3", 1.99], ["4", 0], ["5", 0.99], ["6", 2.99], ["7", 1.99], ["8", 0.99], ["9", 0],]

var cart = []

var totalPrice = 0
/*
function addToCart(itemId, itemPrice){
    const user = supabase.auth.user();
    if (!user){
        console.error('User not signed in');
        return;
    }

    cart.push([itemId, itemPrice]);
    totalPrice += itemPrice;
    const {data, error} = await supabase
    .from('carts')
    .upsert({
        user_id: user.id,
        items: cart.map(item => item[0])
    });

    if (error){
        console.error('Error updating cart:', error);
    } else {
        console.log('Cart updated:', data);
    }

   
} */
/*

for (i = 0; i < buttons.length; i++){
    let button = buttons[i];
    let price = items[i][1]
    button.addEventListener("click", function(){
        buttonFunc(price, i);
    });
}


function buttonFunc(price, index){
    
    totalPrice += items[index][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
    
        <td class = "font">$${price}</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;

}
*/

var buttons = document.querySelectorAll(".btn-button")
var button0 = buttons[0];
button0.addEventListener("click", button0Func);
function button0Func(){
    
    totalPrice += items[0][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$0.99</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
   /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button1 = buttons[1];
button1.addEventListener("click", button1Func);
function button1Func(){
    
    totalPrice += items[1][1];
    var total = document.getElementById("total"); 
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$0.00</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
   /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button2 = buttons[2];
button2.addEventListener("click", button2Func);
function button2Func(){
    
    totalPrice += items[2][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$1.99</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
    /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button3 = buttons[3];
button3.addEventListener("click", button3Func);
function button3Func(){
    
    totalPrice += items[3][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$0.00</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
    /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button4 = buttons[4];
button4.addEventListener("click", button4Func);
function button4Func(){
    
    totalPrice += items[4][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$0.99</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
    /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button5 = buttons[5];
button5.addEventListener("click", button5Func);
function button5Func(){
    
    totalPrice += items[5][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$2.99</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
    /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button6 = buttons[6];
button6.addEventListener("click", button6Func);
function button6Func(){
    
    totalPrice += items[6][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$1.99</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
    /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button7 = buttons[7];
button7.addEventListener("click", button7Func);
function button7Func(){
    
    totalPrice += items[7][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$0.99</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
    /* addToCart(items[0][0], items[0][1]);*/

}

var buttons = document.querySelectorAll(".btn-button")
var button8 = buttons[8];
button8.addEventListener("click", button8Func);
function button8Func(){
    
    totalPrice += items[8][1];
    var total = document.getElementById("total");
    var addIt = document.getElementById("addToCart");
    addIt.innerHTML += `<tbody class = "box-item">
    <tr>
        <td class = "font">
            <img src ="#"></img>
        </td>
       
        <td class = "font">$0.00</td>
        <a  href = "#"><td class = "danger font"><span class="material-symbols-outlined">
            delete
            </span></td></a>
        
    </tr>
    <tr>
        
</tbody>`
    total.innerHTML = `Total: $${totalPrice}`;
    /* addToCart(items[0][0], items[0][1]);*/

} 

