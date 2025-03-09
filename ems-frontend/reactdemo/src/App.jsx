import './App.css'
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import EmployeeComponent from './components/EmployeeComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// function App() {
//   return (
//     <div className="container">
//       <header>
//         <h1>Welcome to My React Website</h1>
//       </header>
//       <section>
//         <p>This section gives sum of two values.</p>
//         <input type="text" placeholder="Enter text here" />
//         <button>Click Me</button>
//       </section>
//       <footer>
//         <p>© 2025 My React App</p>
//       </footer>
//     </div>
//   );
// }

// export default App;



function App(){
  return(
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* http://localhost:5173 */}
          <Route path = '/' element = {<ListEmployeeComponent/>}></Route>
          {/* http://localhost:5173/employees */}
          <Route path = '/employees' element = {<ListEmployeeComponent/>}></Route> 
          <Route path = '/add-employee' element = {<EmployeeComponent/>}></Route>            
          <Route path = '/edit-employee/:id' element = {<EmployeeComponent/>}></Route>     
        </Routes>        
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App;


