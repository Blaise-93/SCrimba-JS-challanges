##  **State and Lifecycle**

* state is managed within a given compt, so it can't be managed outside a scope function.

* The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component

---

> ### What is difference between state in a class component vs state in a function component?


- state in a class component you use `this.setState`, so it is attached to a class obj and it is something that persist throughout the given class compt.

- state in a function component is something that is re-called multiple times.

NB:

In React, the difference between state in a class component and state in a function component is that class components have a state object that can be updated using `this.setState()` method while function components use the` useState() ` hook to manage state. The useState() hook returns an array with two elements: the *current state value and a function* that updates it.
-

### _What is Component Lifecycle and it's differnt parts:_?

- Each **class component** in React has a lifecycle which you can monitor and manipulate during its three main phases.

- The three main phases are: Mounting, Updating, and Unmounting.

- **Mounting** means putting elements into the DOM. React has four built-in methods that get called, in this order, when mounting a component: constructor(), getDerivedStateFromProps(), render(), and componentDidMount()

- **Updating** is the next phase in the component lifecycle. It occurs when a component is updated as a result of changes to either its props or state. React has five built-in methods that get called, in this order, when updating a component: getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), and componentDidUpdate()

- **Unmounting** is the final phase in the component lifecycle. It occurs when a component is removed from the DOM. React has one built-in method that gets called when unmounting a component: componentWillUnmount()2

NB:
> We now use ReactHook state eg useState, useEffect etc to manipulate and update our `function component` instead. And it is much convenient to use and maintain than class cycle compt
---



