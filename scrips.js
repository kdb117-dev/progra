function Calcula_promedio()
{
var n1=parseFloat(document.getElementById("precio1").value);
var n2=parseFloat(document.getElementById("cantidad1").value);


var subtotal1 = (precio * cantidad);
var impuesto = (subtotal * 0.15);
var total = (subtotal + impuesto);

document.getElementById("subtotal").value = subtotal.tofixed(2);
document.getElementById("impuesto").value = impuesto.tofixed(2);
document.getElementById("total").value = total.tofixed(2);


document.getElementsByName("total")[0].value = p;

}
