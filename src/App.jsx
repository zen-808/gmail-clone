import { useState } from 'react'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import EmailDetail from './components/EmailDetail'
import Header from './components/Header'
import LikeButton from './components/LikeButton'

function App() {
  const [selectedEmail, setSelectedEmail] = useState(null)

  return (
    
    <div className="h-screen flex bg-gray-900 text-white overflow-hidden">
      {/* Cambiar h-screen por min-h-screen */}
      <div className="w-64 flex-shrink-0">
        <Header content="Gmail clone" />
        <Sidebar />
        <LikeButton />
      </div>
      <div className="w-96 flex-shrink-0 border-r border-gray-700">
        <EmailList
          onSelectEmail={setSelectedEmail}
          selectedEmailId={selectedEmail?.id}
        />
      </div>
      <div className="flex-1">
        <EmailDetail email={selectedEmail} />
      </div>
    </div>
  )
}

export default App