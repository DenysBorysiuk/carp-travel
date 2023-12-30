export type ButtonProps = {
  className?: string;
  onClick?: () => void;
  label: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  aria?: string;
};
