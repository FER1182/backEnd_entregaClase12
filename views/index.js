//canal de scocket departe del cliente
console.log("es prueba del socket")
const socket = io(); //abre canal de web socket y el servidor se prepara para escuchar conexcion

//com este escucha
/* socket.on("mensage_back",(data)=>{
    alert(data)
    socket.emit("mensaje_cliente","hola servidor")
    //render(data)
})

const render = (data)=>{
    let html = data.map(x=>{
        return `
                <p> ${x.nombre} : ${x.msn}  </p>
        `
    }).join(" ")//con esto convertimos el array en string separado por espacio

    document.querySelector("#caja").innerHTML = html
}


const addInfo=()=>{
    let dataObj = {
        nombre : document.querySelector("#nb").value,
        msn : document.querySelector("#msn").value 
    }
    console.log(dataObj)
    socket.emit("dataMsn", dataObj)
    document.querySelector("#msn").value = ""
    return false //para sacar el repintado de pantalla
}   */