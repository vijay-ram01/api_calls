import './App.css';
import './Product'
import Product from './Product';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
        {/* <button class="bg-blue-500 text-white font-bold hover:bg-blue-300 py-2 px-2 rounded">Saga</button> */}
        <Product></Product>
      
    </div>
  );
}

// {/* <header className="App-header">
//   <div class="container mt-8 grid p-1 rounded bg-blue-500">

//   </div>
//   {/* <button class="bg-blue-500 text-white font-bold hover:bg-blue-300 py-2 px-2 rounded">Saga</button> */}
//   <Product></Product>
// </header> */}

export default App;