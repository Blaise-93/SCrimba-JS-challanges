## What are Effects in React

What params does useEffect take in?
- a. function and
- b. a dependency array

When does the useEffect function run?
- is unmount whenever something/obj is update (just a technical ans).

- [] -> runs on mount if it is empty array.
- [variable] -> runs on mount and when variable changes

- No array -> runs on mount and on every state changes.


## What is the useEffect function's return value?

That return value is called clean up function -> which cleans up all the bypass functions/mtds eeg addEeventListener, thus unmounting the event concurently.





