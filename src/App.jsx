import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ResetAlert from './components/ResetAlert.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NumberFilter from './components/NumberFilter.jsx';
import ReactiveForm from './components/ReactiveForm.jsx';

function App() {

  const defaultEmail = 'anonymous';
  const [email, setEmail] = useState(defaultEmail);
  const [showAlert, setShowAlert] = useState(false);

  function handleComplete(info) {
    console.log(info);
    setShowAlert(true) 
  }

  return (
    <Container>
      <ReactiveForm 
        email={email} 
        setEmail={setEmail} 
        defaultEmail={defaultEmail} 
        onComplete={handleComplete} />
      <ResetAlert show={showAlert} onClose={() => setShowAlert(false)} email={email} />
      <NumberFilter />
    </Container>
  )
}

export default App;
