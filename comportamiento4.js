const btnAgregar=document.getElementById("btnAgregar");
const contenedorDeNotas=document.getElementById("contenedorDeNotas");
function agregarNota(){
    //Para crear la nota
    const nota=document.createElement("article");
    nota.className="nota";
    const contenido=document.createElement("div");
    contenido.className="nota-contenido";
    contenido.contentEditable="true"; //para poder permitie editar la nota
    contenido.textContent="Escribe la nota...";
    //Para la fecha y el boton de eliminar en el pie de la nota
    const pie=document.createElement("div");
    pie.className="nota-pie";
    //Para la fecha
    const fecha=document.createElement("span");
    fecha.className="nota-fecha";
    const ahora=new Date();
    const fechaF=ahora.toLocaleString();
    fecha.textContent=fechaF;
    //Para el boton de eliminar
    const eliminarBtn=document.createElement("button");
    eliminarBtn.className="nota-eliminar";
    eliminarBtn.textContent="Eliminar";
    eliminarBtn.addEventListener("click", function(){
        nota.remove();
    });
    pie.appendChild(fecha);
    pie.appendChild(eliminarBtn);
    nota.appendChild(contenido);
    nota.appendChild(pie);
    //Para agregar la nota al contenedor
    contenedorDeNotas.appendChild(nota);
}
//Este es el evento para el boton de agregar
btnAgregar.addEventListener("click", agregarNota);