import Bussiness from './Bussiness';
import './App.css';

function App() {
  return (
    <div className="md:flex md:justify-center">
      <Bussiness name="Laura Smith" job="Frondend Developer" website="laurasmith.website" icon="instagram" names='hidden' buttons='bock' axe='hidden' axes='block'/>
    <Bussiness names='block' buttons='hidden' axe='block' axes='hidden' name="Laura Smith" job="Frondend Developer" website="laurasmith.website"/>
    </div>
  );
}

export default App;
