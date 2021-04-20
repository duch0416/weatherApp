import { LoaderIcon } from "./loader.styled";
import sunImg from "../../assets/sun.svg";
import { LoaderProps } from "./loader.types";

export const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div data-testid="loader-container" className={className}>
    <LoaderIcon src={sunImg} data-testid="loader" />
  </div>
);
