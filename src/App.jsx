import { useState } from 'react'
import Sidebar from './components/Sidebar'
import EmailList from './components/EmailList'
import EmailDetail from './components/EmailDetail'
import Header from './components/Header'
import LikeButton from './components/LikeButton'

function App() {
  const [selectedEmail, setSelectedEmail] = useState(null)

  return (
    
    <div className="h-screen flex bg-gray-900 text-white">
      {/* Cambiar h-screen por min-h-screen */}
      <div className="w-64 flex-srhrink-0 max-height: [85vh] ">
        <Header content="Gmail clone" />
        <Sidebar />
        <LikeButton />
      </div>
      <div className="w-96 shrink-0 border-r border-gray-700">
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