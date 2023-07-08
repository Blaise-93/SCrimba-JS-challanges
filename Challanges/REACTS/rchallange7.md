Context: 
> What is the difference btw the Context
API and prop drilling?

- Context API implicitly states what value a given child cmpt can have. So with context API, you defined sth at top level and put values at that top level. 

- While prop drilling, you pass it from parent at any child cmpt.

Don't over use contextAPI.

> contextAPI is useful for:
- authentication
- web theme etc
