import React, { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceValue, setDounceValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDounceValue(value);
    }, delay || 1000);

    return () => clearTimeout(timerId);
  }, [value]);

  return [debounceValue];
}
