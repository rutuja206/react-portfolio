// src/App.jsx
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4">
        <AllRoutes />
      </div>
    </>
  );
}

export default App;
