import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";
import TableOperations from "../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regular-price-asc", label: "Sort by price (low-hight)" },
          { value: "regular-price-desc", label: "Sort by price (height-low)" },
          { value: "max-capacity-asc", label: "Sort by capacity (height-low)" },
          {
            value: "max-capacity-desc",
            label: "Sort by capacity (height-low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
