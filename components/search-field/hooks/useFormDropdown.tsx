import { useState } from "react";
import { useClickOutside } from "./useClickOutside";

export const useFormDropdown = () => {
  const [dropdownActive, setDropdownActive] = useState(true);

  const dropdownRef = useClickOutside(() => {
    setDropdownActive(false);
  });

  return [setDropdownActive, dropdownActive, dropdownRef] as const;
};
