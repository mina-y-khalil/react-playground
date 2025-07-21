import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [tabContent, setTabContent] = useState(); // this must be on the top level of the component not inside any function the variable here is an array of 2 elements the first is the current value of the state the second is a function to update that value

    function handleSelect(selectedButton) {
        // selectedButton is the text content of the button that was clicked 'components', 'JSX', 'Props', 'State'
        // console.log(`Selected tab: ${selectedButton}`);
        setTabContent(selectedButton);
        console.log(tabContent);
    }
    return (
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={<>
                    <TabButton isSelected={tabContent === 'Components'} onClick={() => handleSelect('Components')}>Components</TabButton>
                    <TabButton isSelected={tabContent === 'JSX'} onClick={() => handleSelect('JSX')}>JSX</TabButton>
                    <TabButton isSelected={tabContent === 'Props'} onClick={() => handleSelect('Props')}>Props</TabButton>
                    <TabButton isSelected={tabContent === 'State'} onClick={() => handleSelect('State')}>State</TabButton>

                </>}
            >{tabContent}</Tabs>
            <menu >

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

        </Section>

    )
}