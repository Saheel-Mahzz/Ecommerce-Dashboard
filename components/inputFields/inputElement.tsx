import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputElementProps {
  label: string;
  name: string;
  placeholder?: string;
  err?: string;
  type: string;
  disabled?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
}
export default function InputElement({
  label,
  name,
  err,
  type,
  placeholder,
  disabled = false,
  defaultValue,
  onChange,
}: InputElementProps) {
  return (
    <div className="space-y-2">
      <Label className="text-gray-400">{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {err && <span className="text-red-700 text-sm">{err}</span>}
    </div>
  );
}
