import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';


function App() {
  const [tabContent, setTabContent] = useState(); // this must be on the top level of the component not inside any function the variable here is an array of 2 elements the first is the current value of the state the second is a function to update that value

  function handleSelect(selectedButton) {
    // selectedButton is the text content of the button that was clicked 'components', 'JSX', 'Props', 'State'
    // console.log(`Selected tab: ${selectedButton}`);
    setTabContent(selectedButton);
    console.log(tabContent);
  }

  return (
    <div>
      <Header />       {/* here how we can use the Header component */}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>   //the map method is used to create an array of jsx elements from an array of data
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept key={concept.title} {...concept} />
            ))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={tabContent === 'Components'} onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton isSelected={tabContent === 'JSX'} onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton isSelected={tabContent === 'Props'} onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton isSelected={tabContent === 'State'} onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {!tabContent ? <p>Please select a topic</p> : null}
          {tabContent ? <div id="tab-content">
            <h3>{EXAMPLES[tabContent.toLocaleLowerCase()].title}</h3>
            <p>{EXAMPLES[tabContent.toLocaleLowerCase()].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent.toLocaleLowerCase()].code}
              </code>
            </pre>
          </div> : null}
          {/* {tabContent} */}
        </section>


        <h2>Time to get started!</h2>

      </main>
    </div>
  );
}

export default App;
