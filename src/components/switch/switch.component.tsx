import { useState } from "react";
import { useEffectAfterMount } from "../../hooks/useEffectAfterMount";
import { Container, Ball, Value } from "./switch.styled";
import { SwitchProps } from "./switch.types";

export const Switch: React.FC<SwitchProps> = ({ className, onToggle }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleActivity = () => {
    setIsActive(!isActive);
  };

  useEffectAfterMount(() => {
    if (onToggle) {
      onToggle(isActive);
    }
  }, [isActive]);

  return (
    <div className={className}>
      <Container onClick={toggleActivity}>
        <Ball isActive={isActive} />
      </Container>
      <p>temperature unit: <Value>{isActive ? "fahrenheit" : "celsius"}</Value></p>
    </div>
  );
};
