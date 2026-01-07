// import { useRef } from "react";

// export function FocusInput() {
//   const inputRef = useRef(null);

//   return (
//     <div>
//       <input ref={inputRef} placeholder="click button to focus" />
//       <button onClick={() => inputRef.current?.focus()}>Focus</button>
//     </div>
//   );
// }

// export default FocusInput

import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div>
      <h2>useRef Focus Example</h2>

      <input
        ref={inputRef}
        placeholder="Click button to focus"
      />

      <br /><br />

      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
