# What are props?


* How do you pass a value (obj/data) from a parent to child -> via props.  -:)

- while from child to parent  -> via function prop. So a parent will pass a function down to child via a props.

---

# What is prop-drilling?
Prop is basically drilling props down from one level to another.

# Can you modify props? 
It's not a good practice to modify it, rather you modify `state` -> because they come from functional/class component. Don't modify props.

*NB*:
- Props are used to pass data from one component to other components as an argument. While;
- State holds information about the components. - - Props can be accessed by the child component. State cannot be accessed by child components
