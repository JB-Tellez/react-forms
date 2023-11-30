import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Header from './Header.jsx';
import ResetAlert from './ResetAlert.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const defaultEmail = 'anonymous';

  const [email, setEmail] = useState(defaultEmail);
  const [showAlert, setShowAlert] = useState(false);

  function handleFormSubmitted(event) {
    event.preventDefault();
    event.target.reset();
    setShowAlert(true);
  }

  function handleEmailInput(event) {
    if (event.target.value.length > 0) {
      setEmail(event.target.value);
    } else {
      setEmail(defaultEmail);
    }
  }

  return (
    <Container>
      <Header user={email} />

      <Form onSubmit={handleFormSubmitted}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailInput} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Receive notifications?" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ResetAlert show={showAlert} onClose={() => setShowAlert(false)} email={email} />
    </Container>
  )
}

export default App;
