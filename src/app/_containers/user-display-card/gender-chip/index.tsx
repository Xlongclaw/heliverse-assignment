import React from "react";
import { Chip } from "@nextui-org/react";

interface GenderChipProps {
  /**
   * The gender to display.
   */
  gender: string;
}

/**
 * Component representing a chip displaying the gender.
 * 
 * @param {GenderChipProps} props - The props for the GenderChip component.
 * @returns {React.ReactElement} The GenderChip component.
 */
const GenderChip: React.FC<GenderChipProps> = ({ gender }) => {
  return (
    <Chip
      variant={"bordered"}
      size="sm"
    >
      {gender}
    </Chip>
  );
};

export default GenderChip;
