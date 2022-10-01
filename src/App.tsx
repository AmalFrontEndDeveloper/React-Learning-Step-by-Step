import './App.css';
import PrimarySearchAppBar from './common/header/header';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/status';
import {Routes,Route} from 'react-router-dom'
import { Home } from './modules/Home/Home';
import { About } from './modules/About/About';
import { SideNavConfiguration } from './common/side-Nav-configuration/Side-Nav-Configuration';
function App() {
  const PersonName = {
    firstName: 'AR',
    LastName: 'Rock'
  }

  const nameList = [
    {
      FirstName: 'AR',
      LastName: 'Rock'
    },
    {
      FirstName: 'Dev',
      LastName: 'Sigh'
    },
    {
      FirstName: 'Arul',
      LastName: 'Sharp'
    },
    {
      FirstName: 'Alex',
      LastName: 'Pandiyan'
    },
  ]
 

  return (
    <div className="App">

      

{/* 


    <section className="home">
        <div className="text">Dashboard Sidebar</div>
    </section> */}













      <Person name={PersonName} />
      <Greet name="AR" messageCount={20} isLoggedIn={false} />
      <PersonList names={nameList} />
      <Status  status='Loading' />

      <Heading>Place Holder Text</Heading>
      <Button handleClick={(event,name)=>{
        console.log('Event',event,name);
      }}  />

      <Input value='' handleChange={event=> console.log(event)} />
      <Container styles={{padding:'10px',background:'red'}} />
      {/* <PrimarySearchAppBar /> */}
     {/* <SideNavConfiguration /> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}



export default App;
