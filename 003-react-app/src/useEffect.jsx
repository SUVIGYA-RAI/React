import { useState, useEffect } from "react";

export default function EffectDemo({ userId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    // simulate fetch
    setTimeout(() => {
      if (mounted) setData({ name: "User " + userId });
    }, 500);

    return () => {
      // cleanup when userId changes or component unmounts
      mounted = false;
    };
  }, [userId]); // runs when userId changes

  return <div>{data ? data.name : "Loading..."}</div>;
}
