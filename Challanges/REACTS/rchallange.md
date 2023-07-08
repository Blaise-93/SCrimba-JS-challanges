What is JSX?
-
- JSX (JavaScript Syntax Extension and occasionally referred as JavaScript XML) is an extension to the JavaScript language syntax which provides a way to structure component rendering using syntax
- It produces elements that represent objects
- write js with an HTML- like template syntax (not HTML, not a string)

What is the difference between elements and cmpts?
-
- In ReactJS, an *element* represents a single UI element, while a *component* is a reusable piece of code that can generate one or more elements.
- An element is created by invoking a React component with `some props`, while a component is created by defining a JavaScript class or function.
- So, ReactElement is a light, stateless, immutable, virtual representation of a DOM Element

So, component is a function or class returns an element. E.g.

```JavaScript

/* react element */
import React from 'react'; 
import ReactDOM from 'react-dom';

const reactElement = <div>Helllloooo</div>

const domElement = document.getElementById('root')

ReactDOM.render(reactElement, domElement)

/* component eg */
import React from 'react'; 
import ReactDOM from 'react-dom';

const Component = () => <div>Helllloooo</div> // fn component

const domElement = document.getElementById('root')

ReactDOM.render(<Component />, domElement)

```
___

Can you write React without JSX?

- Yes you can.
by totally calling up on React.createElement()

For eg:
```JavaScript
const Component = () => React.createElement('div', null, 'Hellllooooo!')

```



