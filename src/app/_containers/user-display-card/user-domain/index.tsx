import React from "react";
import DomainIcon from "./DomainIcon";
import BrushIcon from "./BrushIcon";
import StoreIcon from "./StoreIcon";
import CreditCardIcon from "./CreditCardIcon";
import DollarIcon from "./DollarIcon";
import PieChartIcon from "./PieChartIcon";
import CommandLineIcon from "./CommandLineIcon";

interface UserDomainProps {
  /**
   * The domain of the user.
   */
  domain: string;
}

/**
 * Component representing the user's domain with an icon.
 * 
 * @param {UserDomainProps} props - The props for the UserDomain component.
 * @returns {React.ReactElement} The UserDomain component.
 */
const UserDomain: React.FC<UserDomainProps> = ({ domain }) => {
  return (
    <div className="flex gap-2 text-tiny items-center text-default-600">
      {/* Render icon based on the domain */}
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
      {/* Display domain text */}
      <p>{domain.toUpperCase()}</p>
    </div>
  );
};

export default UserDomain;
