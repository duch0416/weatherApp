import { useEffect, useState } from "react";

import { StorageKeys } from "../enums/storageKeys.enum";

export function useLocalStorage<T>(
  key: StorageKeys,
  initialValue?: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const readValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(readValue);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [initialValue, key, storedValue]);

  return [storedValue, setStoredValue];
}
