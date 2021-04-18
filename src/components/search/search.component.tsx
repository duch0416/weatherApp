import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useDebounce } from "use-debounce";

import { useEffectAfterMount } from "../../hooks/useEffectAfterMount";
import { SearchProps } from "./search.types";
import { Input } from "./search.styled";

export const Search: React.FC<SearchProps> = ({ onSearch, initValue }) => {
  const [currentValue, setCurrentValue] = useState(initValue ?? "");
  const [debauncedValue] = useDebounce(currentValue, 500);

  const handleChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentValue(e.target.value);
  };

  useEffectAfterMount(() => {
    if (onSearch) {
      onSearch(String(debauncedValue));
    }
  }, [debauncedValue]);

  return (
    <div>
      <Input value={currentValue} onChange={handleChange} placeholder="search" />
    </div>
  );
};
