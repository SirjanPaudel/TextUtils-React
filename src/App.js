import { useState } from "react";
import Navbar1 from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"
import Alert from "./components/Alert.js";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (status, message) => {
    setAlert({
      status: status,
      message: message
    })
    setTimeout(()=>
    {
      setAlert(null)
    },1500)

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert('Success','Dark Mode is Enabled')
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Success','Dark Mode is Disabled')
      document.title = "TextUtils - Light Mode"
    }
  }
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <Navbar1 logoTitle="TextUtilsRandom" aboutUs="BMC" mode={mode} toggleMode={toggleMode}  showAlert={showAlert} />
      <Alert alert={alert} capitalize={capitalize}  />
      <div className="container">
        <TextForm EnterText="Enter the text to convert into UPPERCASE" btnOfForm="UPPERCASE" btnOfForm2="lowercase" btnOfForm3="Clear Text" btnOfForm4="Copy Text" btnOfForm5="Remove Extra Spaces" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
