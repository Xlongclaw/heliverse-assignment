import React from "react";
import { Input } from "@nextui-org/react";

interface FilterInputProps {
  /**
   * The label text for the filter input.
   */
  label: string;
  /**
   * Callback function to handle the change event of the filter input.
   * @param value - The new value of the filter input.
   */
  onChange: (value: string) => void;
}

/**
 * Represents a filter input component.
 * 
 * @param props - The props for the FilterInput component.
 * @returns The FilterInput component.
 */
const FilterInput: React.FC<FilterInputProps> = ({
  label,
  onChange,
}): React.JSX.Element => {
  return (
    <Input
      onChange={(e) => onChange(e.target.value)}
      className="w-40"
      label={label}
      size="sm"
    />
  );
};

export default FilterInput;
