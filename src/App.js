import { useState } from "react";
import Navbar1 from "./components/Navbar.js"
import TextForm from "./components/TextForm.js"
import Alert from "./components/Alert.js";
import About from "./components/About.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (status, message) => {
    setAlert({
      status: status,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert('Success', 'Dark Mode is Enabled')
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Success', 'Dark Mode is Disabled')
      document.title = "TextUtils - Light Mode"
    }
  }
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <BrowserRouter>
        <Navbar1 logoTitle="TextUtilsRandom" aboutUs="About" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
        <Alert alert={alert} capitalize={capitalize} />

        <div className="container">
          <Routes>
            <Route
              exact path="/"
              element={<TextForm EnterText="Enter the text to convert into UPPERCASE" btnOfForm="UPPERCASE" btnOfForm2="lowercase" btnOfForm3="Clear Text" btnOfForm4="Copy Text" btnOfForm5="Remove Extra Spaces" mode={mode} showAlert={showAlert} />}
            />
            <Route
            exact path = "/about"
            element = {<About mode={mode}/>}
            />
          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
