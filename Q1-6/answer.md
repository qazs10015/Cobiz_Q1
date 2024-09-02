## Please write the sample code to debounce handleOnChange

The following sample code in question is class component, but I prefer React Hook.

```jsx
var SearchBox = React.createClass({
 render: function() {
 return <input type="search" name="p" onChange={this.handleOnChange} 
/>;
 },
 handleOnChange: function(event) {
 // make ajax call
 }
})
```

Here is my answer.

App.jsx
```jsx
import { SearchBox } from './SearchBox';

export default function App() {
  // please open develop tool and see the console
  return <SearchBox></SearchBox>;
}

```

SearchBox.jsx
```jsx
let timeId = 0;
export function SearchBox() {
  const handleOnChange = (event) => {
    if (timeId) clearInterval(timeId);

    timeId = setTimeout(() => {
      console.log(event.target.value);
      // make ajax call
    }, 3000);
  };
  return <input type="search" name="p" onChange={handleOnChange} />;
}

```