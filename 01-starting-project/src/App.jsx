import reactImg from './assets/react-core-concepts.png'; {/* we added this line to import the imageto avoid broken image link during rendering */ }
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}



function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

{/* props example*/ }
function coreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>

  );
}

function App() {
  return (
    <div>
      <Header />       {/* here how we can use the Header component */}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <coreConcepts
              title="Components"
              description="The core UI building blocks of React."
              img={componentsImg}
            />
            <coreConcepts title="Props" description="Custom attributes you can pass to components." />
            <coreConcepts title="State" description="A way to manage dynamic data in your components." />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
