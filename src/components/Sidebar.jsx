function Sidebar() {
  const categories = [
    { name: 'Bandeja de entrada', count: 12, active: true },
    { name: 'Enviados', count: 0, active: false },
    { name: 'Borradores', count: 2, active: false },
    { name: 'Papelera', count: 0, active: false },
  ]

  return (
    <aside className="h-full bg-gray-800 p-4 flex flex-col">
      {/* Botón Redactar */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full mb-6 transition">
        Redactar
      </button>

      {/* Lista de categorías */}
      <nav className="flex flex-col space-y-1">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className={`flex justify-between items-center px-3 py-2 rounded-lg cursor-pointer transition ${
              cat.active
                ? 'bg-gray-700 text-blue-400 font-semibold'
                : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            <span>{cat.name}</span>
            {cat.count > 0 && (
              <span className="bg-gray-600 text-xs px-2 py-0.5 rounded-full text-gray-300">
                {cat.count}
              </span>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar