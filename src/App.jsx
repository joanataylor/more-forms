//gets the card from components
import HookForm from './components/HookForm';
//gets css from bootswatch/bootstrap that i dragged to src folder
import './lux.css';

function App() {
  return (
    //className are bootstrap classes -> margin 3 (1-5 available)
    <div className="container mt-3">
      <div className="card shadow">
        <div className="card-body">
          {/* calling component card - Hook Form */}
          <HookForm /> 
        </div>
      </div>
    </div>
  );
}

export default App;

