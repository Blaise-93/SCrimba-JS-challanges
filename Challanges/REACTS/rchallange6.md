## **What is the difference btw refs and state variable**

- Refs are a function provided by React to access the DOM element and the React element that you might have created on your own.
- They are used in cases where we want to change the value of a child component, without making use of props and all.

- while state variable -> are objs/something that can trigger or re-render.  Refs don't, so they have value that persist across render.

 #### When to use refs:
- Managing focus or media
- Triggering animations
- integrating with DOM libs.

