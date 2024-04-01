import { Chip } from "@nextui-org/react";
import React from "react";

interface IProps {
  gender: string;
}

export default function GenderChip({ gender }: IProps) {
  return (
    <Chip
      variant={"bordered"}
      size="sm"
      // color={
      //   gender === "Male"
      //     ? "success"
      //     : gender === "Female"
      //     ? "danger"
      //     : "warning"
      // }
    >
      {gender}
    </Chip>
  );
}
