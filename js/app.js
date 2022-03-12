const comboArea = document.getElementById("selectArea")
const comboServicios = document.getElementById("selectServicios")
 
function cargarSelectArea() {
    
    for (let el = 0; el < area.length; el++)
        comboArea.innerHTML += `<option value="${el}">${area[el]}</option>`
}

function cargarSelectServicios() {
    
    for (let el = 0; el < servicios.length; el++)
        comboServicios.innerHTML += `<option value="${el}">${servicios[el]}</option>`
}

debugger
cargarSelectArea()
cargarSelectServicios()