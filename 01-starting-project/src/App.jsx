import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {


  return (
    <>
      <Header />       {/* here how we can use the Header component */}
      <main>
        <CoreConcepts />  {/* here how we can use the CoreConcepts component */}
        <Examples />  {/* here how we can use the Examples component */}

      </main>
    </>
  );
}

export default App;
