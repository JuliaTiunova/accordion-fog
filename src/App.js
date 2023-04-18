import './App.css';
import {
  FogAccordion,
  FogAccordionBackground,
  FogAccordionContent,
  FogAccordionHeader,
  FogAccordionIcon,
  FogAccordionItem,
  FogAccordionTitle,
} from './lib';

function App() {
  return (
    <div className='App'>
      <FogAccordionBackground>
        <FogAccordion>
          <FogAccordionItem>
            <FogAccordionHeader index={0}>
              <FogAccordionTitle title={'Props title 1'}>
                Accordion title 1
              </FogAccordionTitle>
              <FogAccordionIcon />
            </FogAccordionHeader>
            <FogAccordionContent>
              <div>
                <p>Accordion content</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, quidem voluptatibus. Repudiandae distinctio aperiam,
                  laudantium sequi numquam exercitationem. Saepe, doloremque.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                  eligendi cupiditate, repellendus mollitia at sed aut quaerat
                  voluptas ex eos debitis!
                </p>
              </div>
            </FogAccordionContent>
          </FogAccordionItem>
          <FogAccordionItem>
            <FogAccordionHeader index={1}>
              <FogAccordionTitle>Accordion title 2</FogAccordionTitle>
              <FogAccordionIcon />
            </FogAccordionHeader>
            <FogAccordionContent>
              <div>
                <p>Accordion second content</p>
              </div>
            </FogAccordionContent>
          </FogAccordionItem>
        </FogAccordion>
      </FogAccordionBackground>
    </div>
  );
}

export default App;
