# accordion-fog

Graphical control element comprising a vertically stacked list of items. Each item can be "expanded" or "collapsed" to reveal the content associated with that item. Gsap is used for animations,follow this link for more information on gsap https://greensock.com/

## About

Accordion-fog is still on the development and learning stage. Feel free to give a feedback, suggestion or advise. Animated circles are main feature of this accordion, be sure to check them out by using `FogAccordionBackground` or `FogAccordionCircles` components.

## Installation

```sh
yarn add accordion-fog

# or

npm i accordion-fog
```

## Import Components

```jsx
import {
  FogAccordion,
  FogAccordionBackground,
  FogAccordionCircles,
  FogAccordionContent,
  FogAccordionHeader,
  FogAccordionIcon,
  FogAccordionItem,
  FogAccordionTitle,
} from 'accordion-fog';
```

## Components

- `FogAccordionBackground`: custom background.

- `FogAccordionCircles`: three animated circles for the background.

- `FogAccordion`: main accordion wrapper.

- `FogAccordionItem`: accordion item wrapper, manages state of a single item.

- `FogAccordionHeader`: triggers opening/closing of a single accordion item.

- `FogAccordionTitle`: displays Title for accordion item, takes props as well as children.

- `FogAccordionIcon`: an animated arrow icon.

- `FogAccordionContent`: the main content for the accordion item.

## Usage

Accordion is closed by default, each item can be toggled

**Note 🚨** Each FogAccordionHeader must be passed an index prop

```jsx
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quidem voluptatibus. Repudiandae distinctio aperiam, laudantium sequi
          numquam exercitationem. Saepe, doloremque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet eligendi cupiditate, repellendus
          mollitia at sed aut quaerat voluptas ex eos debitis!
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
```

To make multiple accordion items be visible at the same time, pass the `multipleToggle` prop

```jsx
<FogAccordion multipleToggle>
  {...}
</FogAccordion>
```

To apply cube animation, pass the `cube` prop

```jsx
<FogAccordion cube>
  {...}
</FogAccordion>
```

To apply darkMode styles, pass the `darkMode` prop

```jsx
<FogAccordion darkMode>
  {...}
</FogAccordion>
```

To add background, wrap your content in FogAccordionBackground, pass `darkMode` prop to apply darMode styles

```jsx
<FogAccordionBackground darkMode>
  <FogAccordion>
    {...}
  </FogAccordion>
</FogAccordionBackground>
```

There is a possibility to use animated circles on the background, just add <FogAccordionCircles /> anywhere in your components. Add `className="darkMode"` to color the circles

```jsx
<div>
    <FogAccordionCircles className="darkMode"/>
    {...}
</div>
```
