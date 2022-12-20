import Home from "./pages/Home";
function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;

// another sol but step in all counter is constant(get value by map())
// export default class App extends Component {
//   state = {
//     data: [
//       { id: 1, value: 1 },
//       { id: 2, value: 2 },
//       { id: 3, value: 3 },
//       { id: 4, value: 4 },
//     ],
//   };

//   onIncrement = (counter, increment) => {
//     const newValue = counter.value + increment;
//     this.setState({
//       data: this.state.data.map((item) => {
//         item.value = item.id === counter.id ? newValue : item.value;
//         return item;
//       }),
//     });
//   };

//   onDecrement = (counter, decrement) => {
//     const newValue = counter.value - decrement;
//     if (newValue >= 0) {
//       this.setState({
//         data: this.state.data.map((item) => {
//           item.value = item.id === counter.id ? newValue : item.value;
//           return item;
//         }),
//       });
//     }
//   };

//   render() {
//     const { data } = this.state;
//     return (
//       // <div className="counters">
//       //   {data.map((counter) => (
//       //     <Counter
//       //       key={counter.id}
//       //       value={counter.value}
//       //       onIncrement={this.onIncrement.bind(this, counter)}
//       //       onDecrement={this.onDecrement.bind(this, counter)}
//       //     />
//       //   ))}

//   }
// }
