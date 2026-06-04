import mockJobs from '../data/mockJobs'
// 1. Definimos el componente JobList.
//    Recibe un objeto como parámetro y extrae directamente la prop "jobs" mediante destructuración.
//    "jobs" será un array de objetos, cada uno representando una oferta de trabajo.
function JobList({onSave}) {

  // 2. Todo componente debe devolver JSX.
  return (
    // 3. Elemento raíz: un div que contendrá toda la lista de ofertas.
    //    JSX solo permite devolver un único elemento padre.
    <div>
      
      {/* 4. Abrimos llaves {} para insertar JavaScript dentro del JSX */}
      {
        // 5. Llamamos al método .map() sobre el array "jobs".
        //    .map() recorre cada elemento del array y ejecuta la función que le pasemos.
        //    El resultado será un nuevo array de elementos JSX.
        mockJobs.map((job) => (
          
          // 6. Por cada objeto "job" en el array, renderizamos un div contenedor.
          //    La prop "key" es OBLIGATORIA cuando se renderizan listas con .map().
          //    Usamos "job.id" porque es un valor único y estable que identifica cada oferta.
          //    React usa esta clave internamente para optimizar el renderizado; no se verá en el HTML.
          <div key={job.id}>
            
            {/* 7. Párrafo que muestra el título de la oferta.
                   Las llaves {} dentro del JSX evalúan la expresión "job.title"
                   y muestran el valor de la propiedad "title" del objeto actual. */}
            <p>{job.title}</p>
            
            {/* 8. Párrafo que muestra el nombre de la empresa,
                   accediendo a la propiedad "company" del objeto "job". */}
            <p>{job.company}</p>
            <button onClick={() => onSave(job)}>Guardar</button>
          </div> // Cierra el div contenedor de la oferta actual.
        )) // Cierra la función flecha y la llamada a .map().
      }
      {/* Cierra las llaves de JavaScript */}
      
    </div> // Cierra el elemento raíz.
  ); // Cierra el return.
}

// 9. Exportamos el componente para que pueda ser importado en otros archivos (App.jsx).
export default JobList;