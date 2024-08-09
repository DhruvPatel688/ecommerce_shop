

var buttons = document.querySelectorAll("btn-button");

var totalPrice = 0;

var items = [["0", 0.99], ["1", 0], ["2", 1.99], ["3", 0], ["4", 0.99], ["5", 2.99], ["6", 1.99], ["7", 0.99], ["8", 0]];

var button1 = buttons[0];
function addTocart(){
    totalPrice += items[0][1]
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
}
