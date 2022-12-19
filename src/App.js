import React, { createRef, useState } from "react";
// const Item = ({ name, price }) => (
//   <li>
//     {name}, ${price},{addAmount}
//   </li>
// );

// const App = (props) => {
//   let [items, setItems] = useState([
//     { id: 1, name: "AirForce1", price: 240 ,},
//     { id: 2, name: "AirJordan", price: 200 },
//   ]);

//   let nameRef = createRef();
//   let priceRef = createRef();

//   let add = () => {
//     let id = items.length + 1;
//     let name = nameRef.current.value;
//     let price = priceRef.current.value;

//     setItems([...items, { id, name, price }]);
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((i) => (
//           <Item key={i.id} name={i.name} price={i.price} />
//         ))}

//       </ul>
//       <input type="text" ref={nameRef} />
//       <br />
//       <input type="text"  />
//       <br />
//       <button onClick={add}>Add</button>

//     </div>
//   );
// };

// const Item = ({ name, price }) => (
//   <li>
//     {name}, ${price}
//   </li>
// );
// const App = (props) => {
//   let [items, setItems] = useState([
//     { id: 1, name: "Apple", price: 0.99 },
//     { id: 2, name: "Orange", price: 0.89 },
//   ]);

//   let nameRef = createRef();
//   let priceRef = createRef();

//   let add = () => {
//     let id = items.length + 1;
//     let name = nameRef.current.value;
//     let price = priceRef.current.value;
//     setItems([...items, { id, name, price }]);
//   };

//   return (
//     <div>
//       <ul>
//         {items.map((i) => (
//           <Item key={i.id} name={i.name} price={i.price} />
//         ))}
//       </ul>
//       <input type="text" ref={nameRef} />
//       <br />
//       <input type="text" ref={priceRef} />
//       <br />
//       <button onClick={add}>Add</button>
//     </div>
//   );
// };
const Item = ({ price, amount }) => {
  return (
    <div>
      <p style={{ color: "red" }}>Items price and amount:</p>
      <p>
        price : {price} , amount : {amount}
      </p>
      <p>total : {price * amount}</p>
    </div>
  );
};
const App = (props) => {
  let [items, setItems] = useState([{ id: 1, price: 10, amount: 2 }]);

  let add = () => {
    let id = items.length + 1;
    let price = priceRef.current.value;
    let amount = amountRef.current.value;
    setItems([...items, { id, price, amount }]);
  };
  let priceRef = createRef();
  let amountRef = createRef();

  return (
    <div>
      {items.map((i) => (
        <Item key={i.id} price={i.price} amount={i.amount} />
      ))}
      <input type="text" ref={priceRef} placeholder="item price" />
      <input type="text" placeholder="amount" ref={amountRef} />
      <button onClick={add}>Add</button>
    </div>
  );
};
export default App;
