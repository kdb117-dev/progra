function calcularSueldo() {
    let sueldo1 = parseFloat(document.getElementById("sueldo1").value) || 0;
    let sueldo2 = parseFloat(document.getElementById("sueldo2").value) || 0;
    let sueldo3 = parseFloat(document.getElementById("sueldo3").value) || 0;

    let total = sueldo1 + sueldo2 + sueldo3;

    document.getElementById("totalSueldo").textContent = total.toFixed(2);
} 