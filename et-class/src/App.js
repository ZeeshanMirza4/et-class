// import logo from './logo.svg';
import './App.css';
import SohanMain from './Components/Sohan/SohanMain';
import AaqibMain from './Components/Aaqib/AaqibMain';
import AdnanMain from './Components/Adnan/AdnanMain';
import SalmanMain from './Components/Salman/SalmanMain';
import ZeeshanMain from './Components/Zeeshan/ZeeshanMain';

function App() {
  return (
    <div className="App">
     <h1>ET-CLASS-PROJECT</h1>
     <ZeeshanMain/>
     <AaqibMain/>
     <SohanMain/>
     <SalmanMain/>
     <AdnanMain/>
    </div>
  );
}

export default App;
