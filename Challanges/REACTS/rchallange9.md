convert the class below to function based components:

```javascript

import React from 'react'; 
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({ count: this.state.count - 1 });
        }}>-</button>
        {this.state.count}
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}>+</button>
      </div>
    );
  }
}

const domElement = document.getElementById('root')

ReactDOM.render(<Counter />, domElement)
```
---
ANS:
the function componenr conversion:

```javascript
import React, {useState} from 'react'; 
import ReactDOM from 'react-dom';


function Counter() {
  const [count, setCount] = useState(0)
  
  function handleCount() {
    setCount(prevCount => prevCount - 1)
  }
  
   function handleAddCount() {
    setCount(prevCount => prevCount + 1)
  }
    return (
      <div>
        <button onClick={handleCount}>-</button>
        {count - 1}
        <button onClick={handleAddCount}
          >+</button>
      </div>
    );
}

const domElement = document.getElementById('root')

ReactDOM.render(<Counter />, domElement)
```
