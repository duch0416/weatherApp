export interface SearchProps {
  setCurrentValue: (phrase: string) => void;
  currentValue: string;
  onSearch?: (phrase: string) => void;
}