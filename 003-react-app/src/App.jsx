// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './index.css'
// // import Items from './updatearray'
// // import Toggle from './toggleuse'
// // import Student from './objectuse'
// // import Example1 from './example1'
// // import Example2 from './example2'
// // import DigitalClock from './digitalClock'
// // import Users from './geteffectapi'
// // import CreateUser from './postuse'
// import Ums from './ums'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <h1>Vite + React</h1> */}

//       {/* <Items />
//       {/* <Toggle /> */}
//       {/* <updateAge /> }
//       <Example1 />
//       <Example2 /> */}
//       {/* <Users />  */}
//       {/* <DigitalClock /> */}
//       {/* <h2>Create User</h2> */}
//       {/* <CreateUser /> */}
//       <Ums />
//     </>
//   )
// }

// export default App
import { useState } from "react";
import Event from "./event";
import Counter from "./state";
import Greeting from "./statefulStateless";
import NameForm from "./statefulStateless";
import EffectDemo from "./useEffect";
import TailwindCard from "./tailwindCard";
import Test from "./test";
import { ThemeProvider, ThemedText } from "./useContext";
import FocusInput from "./useRef";
import PrevCounter from "./prevCounter";
import { ReducerCounter} from "./useReducer";

export default function App() {
  const [id, setId] = useState(1);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Event />
      <Counter />
      <Greeting name="ALice" />
      <NameForm />

      <button onClick={() => setId((i) => i + 1)}>Next User</button>
      <EffectDemo userId={id} />
      <TailwindCard
        title="Tailwind Card"
        description="This component uses Tailwind utility classes."
      />
      <Test />
      <ThemeProvider>
        <ThemedText />
      </ThemeProvider>
      < FocusInput />
      <h2>useRef Previous Value Example</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <PrevCounter count={count} />
      < ReducerCounter />
    </div>
  );
}

// create a hook that uses usememo and reduce method to compute and memoise expensive summary data
