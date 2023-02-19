import React from "react";
import Color from "./Color";

function App() {

  const [val, setVal] = React.useState([]);
  // async function response() {
  //   const res = await fetch("https://reqres.in/api/products")
  //   val = await res.json()

  //   // const answer = resTojson.data.map(item => {
  //   //   return (
  //   //     <Color
  //   //       key={item.id}
  //   //       color={item.color}
  //   //     />
  //   //   )
  //   // })
  //   // console.log(answer)

  //   // setVal()

  // }
  // response()

  React.useEffect(() => {
    fetch('https://reqres.in/api/products')
      .then(response => response.json())
      .then(res => setVal(res.data))
  }, []);

  const childComponents = val.map(item => (
    <Color
      num={item.id}
      key={item.id}
      color={item.color}
      name={item.name}
    />
  ));

  return (
    <div>
      {childComponents}
    </div>
  );
}

export default App;