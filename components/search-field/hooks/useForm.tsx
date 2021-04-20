import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { useFormDropdown } from "./useFormDropdown";

export const useForm = (apiService, searchGames) => {
  const [inputText, setInputText] = useState("");
  const [dropdownResults, setDropdownResults] = useState([]);
  const [setDropdownActive] = useFormDropdown();

  const debouncedText = useDebounce(inputText, 250);

  useEffect(() => {
    if (debouncedText) {
      searchDropdownResults(debouncedText).then((results) =>
        setDropdownResults(results)
      );
    } else {
      setDropdownResults([]);
    }
  }, [debouncedText]);

  const searchDropdownResults = async (value) => {
    try {
      const searchPreview = await apiService.getSearchPreviewResults(value, 7);
      return searchPreview.results;
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = async (e) => {
    setInputText(e.target.value);
    setDropdownActive(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    setDropdownActive(false);
    setDropdownResults([]);
    setInputText("");
    searchGames(inputText);
  };

  const handleDropdownResultClick = () => {
    setDropdownResults([]);
    setDropdownActive(false);
    setInputText("");
  };

  return {
    handleChange,
    handleSubmit,
    handleDropdownResultClick,
    inputText,
    dropdownResults,
  };
};
