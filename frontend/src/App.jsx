import { useState } from 'react';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import AddService from './components/AddService';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // This state variable helps us switch between the dashboard and the add service form
  const [currentView, setCurrentView] = useState('dashboard'); 

  return (
    <div>
      {!isAuthenticated ? (
        <AuthPage onLogin={() => setIsAuthenticated(true)} />
      ) : (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
          
          {/* Navbar */}
          <nav style={{ background: '#0f172a', padding: '15px 40px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <h1 style={{ color: 'white', margin: 0, fontSize: '20px', marginRight: '20px' }}>Sentinel</h1>
            
            <button 
              onClick={() => setCurrentView('dashboard')} 
              style={{ background: currentView === 'dashboard' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
            >
              Dashboard
            </button>
            
            <button 
              onClick={() => setCurrentView('add')} 
              style={{ background: currentView === 'add' ? '#3b82f6' : 'transparent', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
            >
              + Add new monitor
            </button>
            
            <button 
              onClick={() => setIsAuthenticated(false)} 
              style={{ marginLeft: 'auto', background: 'transparent', color: '#cbd5e1', border: '1px solid #475569', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}
            >
              Logout
            </button>
          </nav>

          
          {currentView === 'dashboard' ? <Dashboard /> : <AddService />}
          
        </div>
      )}
    </div>
  );
}

export default App;