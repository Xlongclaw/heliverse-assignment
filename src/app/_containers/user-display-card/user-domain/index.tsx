import React from "react";
import DomainIcon from "./DomainIcon";
import BrushIcon from "./BrushIcon";
import StoreIcon from "./StoreIcon";
import CreditCardIcon from "./CreditCardIcon";
import DollarIcon from "./DollarIcon";
import PieChartIcon from "./PieChartIcon";
import CommandLineIcon from "./CommandLineIcon";

interface IProps {
  domain: string;
}

export default function UserDomain({ domain }: IProps) {
  return (
    <div className="flex gap-2 text-tiny items-center text-default-600">
      {domain === "Finance" ? (
        <CreditCardIcon />
      ) : domain === "IT" ? (
        <CommandLineIcon />
      ) : domain === "UI Designing" ? (
        <BrushIcon />
      ) : domain === "Business Development" ? (
        <StoreIcon />
      ) : domain === "Sales" ? (
        <PieChartIcon />
      ) : domain === "Marketing" ? (
        <DollarIcon />
      ) : (
        <DomainIcon />
      )}
      <p>{domain.toUpperCase()}</p>
    </div>
  );
}
