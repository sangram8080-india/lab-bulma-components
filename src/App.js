import './App.css';
import "./App.css";
import  "bulma/css/bulma.css";


import SignupForm from "./components/SignupForm.js";
import CoolButton from "./components/CoolButton.js";
import Message from "./components/Message.js";

function App() {
  return (
    <div className="App">
      <SignupForm />
      <CoolButton isSuccess>Button 1</CoolButton>
      <CoolButton> Button 2 </CoolButton>
      <CoolButton  isSmall  isDanger  isRounded>Button 1</CoolButton>
      <CoolButton  isSmall  isSuccess>Button 2</CoolButton>
      <Message></Message>

    
    </div>
  );
}

export default App;