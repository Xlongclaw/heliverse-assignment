import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React from "react";

interface IProps {
  label: string;
  size: "sm" | "md" | "lg" | undefined;
  values: Array<string>;
  placeholder?:string | undefined
}

export default function AutoComplete({ label, size ,values, placeholder}: IProps) {
  return (
    <Autocomplete placeholder={placeholder} size={size} label={label} className="w-48">
      {values.map((value) => (
        <AutocompleteItem key={value} value={value}>
          {value}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
}
