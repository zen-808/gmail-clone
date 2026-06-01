// 1. Importa el Hook 'useState' desde la librería core de React para poder manejar estados locales.
import { useState } from 'react'

// 2. Importa el componente de la barra de navegación lateral (carpetas, categorías, etc.).
import Sidebar from './components/Sidebar'

// 3. Importa el componente que renderizará la lista de los correos electrónicos disponibles.
import EmailList from './components/EmailList'

// 4. Importa el componente encargado de mostrar el contenido completo del correo seleccionado.
import EmailDetail from './components/EmailDetail'

// 5. Importa el componente del encabezado de la aplicación (barra de búsqueda, logo, etc.).
import Header from './components/Header'

// 6. Importa un componente interactivo de botón "Me gusta" (o similar) alojado en la interfaz.
import LikeButton from './components/LikeButton'

// 7. Define el componente funcional principal 'App', que actúa como el orquestador global de la aplicación.
function App() {
  
  // 8. LÓGICA DE ESTADO: Declaramos 'selectedEmail' para guardar el objeto del correo que el usuario está leyendo.
  // Se inicializa en 'null' porque al abrir la aplicación por primera vez no hay ningún correo seleccionado.
  // 'setSelectedEmail' es la función que usaremos para cambiar este valor cuando se haga clic en un correo.
  const [selectedEmail, setSelectedEmail] = useState(null)

  // 9. El bloque 'return' define la estructura de la interfaz de usuario utilizando sintaxis JSX.
  return (
    
    // 10. CONTENEDOR PRINCIPAL: Usa Flexbox para alinear las columnas de forma horizontal.
    // 'min-h-screen': CORREGIDO. Asegura que el fondo cubra al menos el 100% de la pantalla si el contenido crece.
    // 'bg-gray-900' y 'text-white': Aplica un tema oscuro global con texto blanco para legibilidad.
    <div className="min-h-screen flex bg-gray-900 text-white">
      
      {/* 11. COLUMNA IZQUIERDA (Menú y Navegación): Tiene un ancho fijo de 16rem (w-64).
          'shrink-0': Evita que esta columna se comprima si la pantalla se vuelve más pequeña.
          'max-h-[85vh]': CORREGIDO. Se eliminó la sintaxis nativa de CSS por la nomenclatura exacta de Tailwind para valores arbitrarios. */}
      <div className="w-64 shrink-0 max-h-[85vh]">
        
        {/* 12. Renderiza el Header pasándole el título a través de la propiedad (prop) 'content'. */}
        <Header content="Front-email" />
        
        {/* 13. Renderiza la barra lateral de navegación. */}
        <Sidebar />
        
        {/* 14. Renderiza el botón de interactividad complementario. */}
        <LikeButton />
      
      {/* 15. Cierre de la columna izquierda. */}
      </div>

      {/* 16. COLUMNA CENTRAL (Lista de Correos): Tiene un ancho fijo de 24rem (w-96).
          'shrink-0': Al igual que la barra lateral, su tamaño no se alterará en pantallas medianas.
          'border-r border-gray-700': Añade una sutil línea vertical a la derecha para separar las columnas visualmente. */}
      <div className="w-96 shrink-0 border-r border-gray-700">
        
        {/* 17. COMPONENTE EMALILIST: 
            'onSelectEmail': Enviamos la función 'setSelectedEmail' hacia abajo (State Lifting). Cuando el usuario haga clic en un correo aquí dentro, este notificará a 'App' y actualizará el estado global.
            'selectedEmailId': Pasa el ID del correo seleccionado actual usando encadenamiento opcional (?.). Si es null, envía undefined; si no, envía el ID exacto para que la lista sepa cuál resaltar visualmente. */}
        <EmailList
          onSelectEmail={setSelectedEmail}
          selectedEmailId={selectedEmail?.id}
        />
      
      {/* 18. Cierre de la columna central. */}
      </div>

      {/* 19. COLUMNA DERECHA (Detalle del Correo): 
          'flex-1': Esta es la clave de la distribución. Hace que esta columna se estire automáticamente para ocupar TODO el espacio restante del monitor. */}
      <div className="flex-1">
        
        {/* 20. COMPONENTE EMAILDETAIL: Le pasamos el objeto 'selectedEmail' completo como prop.
            Si el estado es 'null', este componente internamente mostrará un mensaje tipo "Selecciona un correo para leer". Si contiene un correo, pintará su asunto y cuerpo. */}
        <EmailDetail email={selectedEmail} />
      
      {/* 21. Cierre de la columna derecha. */}
      </div>

    {/* 22. Cierre del contenedor principal. */}
    </div>
  )
}

// 23. Exporta el componente 'App' por defecto para que el archivo de entrada (main.jsx o index.jsx) pueda renderizarlo en el DOM real.
export default App