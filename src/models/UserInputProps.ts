export interface UserInputProps {
  title: string;
  value: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
