function EmailDetail({ email }) {
  if (!email) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500 text-lg">
        Selecciona un correo para leerlo
      </div>
    )
  }

  return (
    <div className="h-full bg-gray-800 p-6 overflow-y-auto">
      <h2 className="text-2xl font-bold text-white mb-1">{email.subject}</h2>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <span className="font-semibold text-gray-200">{email.from}</span>
        <span>·</span>
        <span>{email.time}</span>
      </div>
      <div className="border-t border-gray-700 pt-4 text-gray-300 leading-relaxed">
        {email.snippet}
        {/* Más contenido simulado */}
        <p className="mt-4 text-gray-500 italic">
          (Este es el cuerpo del correo. En el futuro contendrá texto real.)
        </p>
      </div>
    </div>
  )
}

export default EmailDetail