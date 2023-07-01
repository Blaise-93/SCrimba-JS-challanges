Learning Markdown Basis

# *This is my Markdown Playground* 

 ## _Make it an italic sentence using markdown_

--- 
To partittion on md files use => (--)

- Othered list component with bullet point
- Bullet point 2

1. #### **Hi there, I hope you are good**
 the above id a bold word with number 1

---

let's put some codes inside a markdown file as below -> (put ``` with the name of d language eg python and ends it with ``` )

The below class code, Employee is used to `instantiate attributes` and methods,
 thus dynamically instantiate an objects passed to it.
```python
class Employee:
    def __init__(self, first_name, last_name, email):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        
    @property
    def fullname(self):
        return f'Welcome, {self.first_name} {self.last_name}'

emp1 = Employee("Blaise", "Mart", "blaisemart@gmail.com" )

print(emp1.__dict__)
print(emp1.fullname)

```
Javascript function that `sort out data` in a given array of
nested objects. -:)

```javaScript

function sortArr(arr) {
    return arr.sort((a, b) => a.price - b.price)
}

console.log(sortArr(shoppingCart))

```

---
To add link do this -> []()

#### [Add new file link to your work](https://github.com/Blaise-93/build-a-playing-game-1)

How to link images to my markdown files => ![](paste the link here)

![Image Link](https://github.com/Blaise-93/build-a-playing-game-1/blob/master/images/goblin.png)


OR [for the image, use html path code]

<img src="https://github.com/Blaise-93/build-a-playing-game-1/blob/master/images/goblin.png" width="100" height="45"/>

NB:
Another good tools you can use to write and optimize your markdown is [For Readme Contents](https://readme.so/editor) and after you are done, you can download it from their website











