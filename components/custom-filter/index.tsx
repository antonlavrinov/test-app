import * as SC from "./CustomFilter";
import { useFilter, useToggleDropdown } from "./hooks";

interface CustomFilterProps {
  selectFilter: string;
  filterList: any;
  defaultOption: string;
  loading: boolean;
  name: string;
}

const CustomFilter: React.FC<CustomFilterProps> = ({
  selectFilter,
  filterList,
  defaultOption,
  loading,
  name,
}) => {
  const [handleClick, selectedOption] = useFilter(
    loading,
    selectFilter,
    defaultOption
  );

  const [toggleDropdown, dropdown, dropdownRef] = useToggleDropdown(loading);

  return (
    <SC.SelectWrapper>
      <SC.Select
        isLoading={loading}
        onClick={toggleDropdown}
        onKeyPress={toggleDropdown}
        role="button"
        tabIndex="0"
      >
        <SC.SelectTitle isLoading={loading}>
          {name} <span>{selectedOption}</span>
        </SC.SelectTitle>
        <SC.Arrow />
      </SC.Select>
      {dropdown && (
        <SC.OptionList ref={dropdownRef}>
          {filterList.map((ordering) => {
            const selectStyle = ordering.name === selectedOption ? true : false;
            return (
              <SC.Option
                selectStyle={selectStyle}
                key={ordering.value}
                value={ordering.value}
                onClick={() => handleClick(ordering.value, ordering.name)}
                onKeyPress={() => handleClick(ordering.value, ordering.name)}
                role="button"
                tabIndex="0"
              >
                {ordering.name}
              </SC.Option>
            );
          })}
        </SC.OptionList>
      )}
    </SC.SelectWrapper>
  );
};

export default CustomFilter;
