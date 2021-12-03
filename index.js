const calc = (precio1, descuento1) => {
    const resta = descuento1 / 100
    let multiplicacion = precio1 * resta
    return precio1 - multiplicacion
}


function porcentaje () {
    const input = document.getElementById("input")
    let precio = Number(input.value) 

    const input2 = document.getElementById("descuento")
    let descuento = Number(input2.value) 

    const ejecutar = calc(precio, descuento)

    const resultado = document.getElementById("total")
    resultado.innerText = "$" + ejecutar 
}
function porcentaje5 () {
    const input = document.getElementById("input")
    let precio = Number(input.value)

    const ejecutar = calc(precio, 5)

    const resultado = document.getElementById("total")
    resultado.innerText = "$" + ejecutar 
}
function porcentaje10 () {
    const input = document.getElementById("input")
    let precio = Number(input.value)

    const ejecutar = calc(precio, 10)

    const resultado = document.getElementById("total")
    resultado.innerText = "$" + ejecutar 
}
function porcentaje15 () {
    const input = document.getElementById("input")
    let precio = Number(input.value)

    const ejecutar = calc(precio, 15)

    const resultado = document.getElementById("total")
    resultado.innerText = "$" + ejecutar
}
function porcentaje20 () {
    const input = document.getElementById("input")
    let precio = Number(input.value)

    const ejecutar = calc(precio, 20)

    const resultado = document.getElementById("total")
    resultado.innerText = "$" + ejecutar 
}
function porcentaje25 () {
    const input = document.getElementById("input")
    let precio = Number(input.value)

    const ejecutar = calc(precio, 25)

    const resultado = document.getElementById("total")
    resultado.innerText = "$" + ejecutar
}


const play = document.getElementById("ejecutar")
play.onclick = () => { porcentaje() }

const descuento5 = document.getElementById("5")
descuento5.onclick = () => { porcentaje5() }

const descuento10 = document.getElementById("10")
descuento10.onclick = () => { porcentaje10() }

const descuento15 = document.getElementById("15")
descuento15.onclick = () => { porcentaje15() }

const descuento20 = document.getElementById("20")
descuento20.onclick = () => { porcentaje20() }

const descuento25 = document.getElementById("25")
descuento25.onclick = () => { porcentaje25() }

