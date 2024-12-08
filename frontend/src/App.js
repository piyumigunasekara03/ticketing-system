import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route instead of Switch
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import TicketDetails from './pages/TicketDetails';

function App() {
  return (
    <Router>
      <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ticket-details" element={<TicketDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

