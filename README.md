# accordion-mystic

Graphical control element comprising a vertically stacked list of items. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.

## About

Accordion-mystic is still on the development and learning stage. Feel free to give a feedback, suggestion ot advise. Animated circles are main feature of this accordion, be sure to check them out by using `MysticAccordionBackground` or `MysticAccordionCircles` components.

## Installation

```sh
yarn add accordion-mystic gsap

# or

npm i accordion-mystic gsap
```

## Import Components

```jsx
import {
  MysticAccordion,
  MysticAccordionBackground,
  MysticAccordionCircles,
  MysticAccordionContent,
  MysticAccordionHeader,
  MysticAccordionIcon,
  MysticAccordionItem,
  MysticAccordionTitle,
} from 'accordion-mystic';
```

## Components

- `MysticAccordionBackground`: custom background.

- `MysticAccordionCircles`: three animated circles for the background.

- `MysticAccordion`: main accordion wrapper.

- `MysticAccordionItem`: accordion item wrapper, manages state of a single item.

- `MysticAccordionHeader`: triggers opening/closing of a single accordion item.

- `MysticAccordionTitle`: displays Title for accordion item, takes props as well as children.

- `MysticAccordionIcon`: an animated arrow icon.

- `MysticAccordionContent`: the main content for the accordion item.

## Usage

Accordion is closed by default, each item can be toggled

**Note 🚨** Each MysticAccordionHeader must be passed an index prop

```jsx
<MysticAccordion>
  <MysticAccordionItem>
    <MysticAccordionHeader index={0}>
      <MysticAccordionTitle title={'Props title 1'}>
        Accordion title 1
      </MysticAccordionTitle>
      <MysticAccordionIcon />
    </MysticAccordionHeader>
    <MysticAccordionContent>
      <div>
        <p>Accordion content</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quidem voluptatibus. Repudiandae distinctio aperiam, laudantium sequi
          numquam exercitationem. Saepe, doloremque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet eligendi cupiditate, repellendus
          mollitia at sed aut quaerat voluptas ex eos debitis!
        </p>
      </div>
    </MysticAccordionContent>
  </MysticAccordionItem>
  <MysticAccordionItem>
    <MysticAccordionHeader index={1}>
      <MysticAccordionTitle>Accordion title 2</MysticAccordionTitle>
      <MysticAccordionIcon />
    </MysticAccordionHeader>
    <MysticAccordionContent>
      <div>
        <p>Accordion second content</p>
      </div>
    </MysticAccordionContent>
  </MysticAccordionItem>
</MysticAccordion>
```

To make multiple accordion items be visible at the same time, pass the `multipleToggle` prop

```jsx
<MysticAccordion multipleToggle>
  {...}
</MysticAccordion>
```

To apply cube animation, pass the `cube` prop

```jsx
<MysticAccordion cube>
  {...}
</MysticAccordion>
```

To apply darkMode styles, pass the `darkMode` prop

```jsx
<MysticAccordion darkMode>
  {...}
</MysticAccordion>
```

To add background, wrap your content in MysticAccordionBackground, pass `darkMode` prop to apply darMode styles

```jsx
<MysticAccordionBackground darkMode>
  <MysticAccordion>
    {...}
  </MysticAccordion>
</MysticAccordionBackground>
```

There is a possibility to use animated circles on the background, just add <MysticAccordionCircles /> anywhere in your components. Add `className="darkMode"` to color the circles

```jsx
<div>
    <MysticAccordionCircles className="darkMode"/>
    {...}
</div>
```
