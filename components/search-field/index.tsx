import RawgService from "../../rawg-service";
import Link from "next/link";
import * as SC from "./SearchField";
import { useFormDropdown } from "./hooks/useFormDropdown";
import { useForm } from "./hooks/useForm";

const rawgService = new RawgService();

const SearchField = ({ searchGames, loading }) => {
  const {
    handleChange,
    handleSubmit,
    handleDropdownResultClick,
    inputText,
    dropdownResults,
  } = useForm(rawgService, searchGames);

  const [, dropdownActive, dropdownRef] = useFormDropdown();

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.LookingGlass onClick={handleSubmit} />
      <SC.Input
        disabled={loading}
        placeholder="Search here..."
        type="text"
        onChange={handleChange}
        value={inputText}
      />
      {dropdownActive && dropdownResults.length > 0 && (
        <SC.Dropdown ref={dropdownRef}>
          {dropdownResults.map((result) => {
            return (
              <Link key={result.id} href={`/games/${result.slug}`} passHref>
                <SC.DropdownItem
                  role="button"
                  tabIndex="0"
                  onClick={handleDropdownResultClick}
                >
                  {result.name}
                </SC.DropdownItem>
              </Link>
            );
          })}
        </SC.Dropdown>
      )}
    </SC.Form>
  );
};

export default SearchField;
