import { useState } from 'react'
import mockEmails from '../data/mockEmails'

function EmailList({ onSelectEmail, selectedEmailId }) {
  const [emails, setEmails] = useState(mockEmails)

  const handleClick = (email) => {
    // Marcar como leído (opcional por ahora)
    const updated = emails.map((e) =>
      e.id === email.id ? { ...e, read: true } : e
    )
    setEmails(updated)
    onSelectEmail(email)
  }

  return (
    <div className="h-full bg-gray-800 overflow-y-auto">
      {emails.map((email) => (
        <div
          key={email.id}
          onClick={() => handleClick(email)}
          className={`p-3 border-b border-gray-700 cursor-pointer transition hover:bg-gray-700 ${
            selectedEmailId === email.id
              ? 'bg-gray-600 border-l-4 border-l-blue-500'
              : 'border-l-4 border-l-transparent'
          } ${!email.read ? 'font-semibold text-white' : 'text-gray-300'}`}
        >
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm truncate">{email.from}</span>
            <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{email.time}</span>
          </div>
          <p className="text-sm truncate">{email.subject}</p>
          <p className="text-xs text-gray-400 truncate mt-0.5">{email.snippet}</p>
        </div>
      ))}
    </div>
  )
}

export default EmailList