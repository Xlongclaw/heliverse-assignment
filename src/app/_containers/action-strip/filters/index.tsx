import React from "react";
import FilterInput from "./filter-input";

interface FiltersProps {
  /**
   * Callback function to change the filter data.
   * @param data - An object containing filter keys and corresponding values.
   */
  changeFilterData: (data: { [key: string]: string | boolean }) => void;
}

/**
 * Represents the filters component for filtering user data.
 * 
 * @param props - The props for the Filters component.
 * @returns The Filters component.
 */
const Filters: React.FC<FiltersProps> = ({ changeFilterData }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {/* Input for filtering by domain */}
      <FilterInput label="Filter by Domain" onChange={(value) => changeFilterData({ domain: value })} />
      {/* Input for filtering by gender */}
      <FilterInput label="Filter by Gender" onChange={(value) => changeFilterData({ gender: value })} />
      {/* Input for filtering by availability */}
      <FilterInput label="Filter by Available(Y/n)" onChange={(value) => changeFilterData({ available: value === "n" ? false : true })} />
    </div>
  );
};

export default Filters;
