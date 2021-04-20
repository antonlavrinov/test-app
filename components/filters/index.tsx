import CustomFilter from "../custom-filter";
import * as SC from "./Filters";

type FiltersProps = {
  selectPlatform: any;
  selectOrder: any;
  loading: boolean;
};

type FilteringList = {
  name: string;
  value: string;
};

const Filters: React.FC<FiltersProps> = ({
  selectPlatform,
  selectOrder,
  loading,
}) => {
  const orderingList: FilteringList[] = [
    { name: "All", value: "-added" },
    { name: "Date: ascending", value: "-released" },
    { name: "Date: descending", value: "released" },
    { name: "Rating: ascending", value: "-rating" },
    { name: "Rating: descending", value: "rating" },
  ];

  const platformList: FilteringList[] = [
    { name: "All games", value: "100" },
    { name: "PC", value: "4" },
    { name: "PlayStation 4", value: "18" },
    { name: "Xbox One", value: "1" },
    { name: "Nintendo Switch", value: "7" },
    { name: "iOS", value: "3" },
    { name: "Android", value: "21" },
  ];

  return (
    <SC.Wrapper>
      <CustomFilter
        filterList={platformList}
        selectFilter={selectPlatform}
        defaultOption={"All games"}
        loading={loading}
        name="Platform:"
      />
      <CustomFilter
        filterList={orderingList}
        selectFilter={selectOrder}
        defaultOption={"All"}
        loading={loading}
        name="Order by:"
      />
    </SC.Wrapper>
  );
};

export default Filters;
