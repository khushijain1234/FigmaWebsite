
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from "./frontend/Home";
import Bookings from './frontend/pages/Bookings';
import Destinations from './frontend/pages/Destination';
import Flights from './frontend/pages/Flights';
import Hotels from './frontend/pages/Hotels';
import Login from './frontend/pages/Login';
import Signup from './frontend/pages/Signup';

function App() {
  return (
    <div className="App">
    
    <Router>
   
     
    
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/bookings" element={<Bookings/>} />
          <Route path="/destinations" element={<Destinations/>} />
          <Route path="/flights" element={<Flights/>} />
          <Route path="/hotels" element={<Hotels/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />  
          {/* <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/courselist" component={CourseList} />
          <Route exact path="/alumnilist" component={AlumniList} />
          <Route exact path="/jobs" component={Job} /> */}
          
    </Routes>
      
    
     
  
  
  
     
     
        
    
    </Router>
    </div>
  );
}

export default App;
