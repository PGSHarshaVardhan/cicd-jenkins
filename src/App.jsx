

import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router basename="/ecommerce">
      <div>
        <h1> CICD JENKINS DEMO</h1>
        <p> jenkins source code  uses git repo  and set branch /main   poll scm triggers option  * * * * * buid step add buid step <b> Windows batch command </b> <u>call npm install </u>  <u> call npm run dev</u> rmdir "C:\......tomcat9\webapps\jenkinsfrontdemo
  mkdir "C:\......tomcat9\webapps\jenkinsfrontdemo
  xcopy path </p>
  
  </div>
  <div>
  <p> buid step add buid step <b> Windows batch command</b>
  stop tomcat 9
  start tomcat 9
  </p>
      </div>
        </Router>
      
    </>
  );
}

export default App
