import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HandleForm from './components/handleForm';
import ControlledForm from './components/controlledForm';
import SubmitForm from './components/formSub';
import UncontrolledForm from './components/uncontrolledForm';
import ValidationForm from './components/validatedForm';


function App() {
  return (
    <div>
      <h1>React Forms Unit 4</h1>
      < HandleForm />
      < SubmitForm />
      <ControlledForm />
      < UncontrolledForm /> 
      < ValidationForm />
    </div>
  );
}

export default App;
