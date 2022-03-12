const area = ['', 'Marketing Digital', 'Desarrollo Web', 'Arte Digital', 'Productos' ]

const servicios = ['', 'Maquetado Web', 'Copywriting', 'Posicionamiento SEO', 'Community Manager'
, 'Marqueting de contenido', 'Dominio y Hosting', 'E-commerce']



function buscarYeliminar() {
    const borroElemento = prompt("Ingrese el servicio que desea quitar:")
    const indice = servicios.indexOf(borroElemento)
        if (indice > -1) {
            servicios.splice(indice, 1)
        }
        else {
            console.warn("No se encontró el elemento:", borroElemento)
            return
        }
        console.table(cursos)
}

function agregarServicio() {
    const nuevoServicio = prompt("Ingrese el servicio que desea agregar:")
    const resultado = servicios.includes(nuevoServicio)
    if (resultado) {
        console.warn("El servicio ingresado", nuevoServicio, "ya existe en el array.")
        return
    }
    else {
        servicios.push(nuevoServicio)
        console.table(servicios)
        console.info("ℹ️ ", nuevoServicio, "se agregó exitosamente.")
    }
}

function hacerAlgoXcadaElemento() {
    
    area.forEach((area)=> {
        console.log(area)
    })
}


const prods = [{producto: "Bananas", importe: 230},
               {producto: "Peras", importe: 299}, 
               {producto: "Manzanas", importe: 550}]

function sumarProds () {
    debugger
    const resultado = prods.reduce((acumulador, elem)=> acumulador += elem.importe, 0)
    console.log(resultado)
}
