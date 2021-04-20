import { useState } from "react";
import { useClickOutside } from "../../hooks";

export const useToggleDropdown = (loading?: boolean) => {
  const [dropdown, setDropdownActive] = useState(false);

  const dropdownRef = useClickOutside(() => {
    setDropdownActive(false);
  });

  const toggleDropdown = (): void => {
    if (loading) return;
    setDropdownActive((state) => !state);
  };

  return [toggleDropdown, dropdown, dropdownRef] as const;
};

export const useFilter = (loading, selectFilter, defaultOption) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [toggleDropdown] = useToggleDropdown();

  const handleClick = (value, name) => {
    if (loading) return;
    toggleDropdown();
    selectFilter(value, name);
    setSelectedOption(name);
  };

  return [handleClick, selectedOption] as const;
};
