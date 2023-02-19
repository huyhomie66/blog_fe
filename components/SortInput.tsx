import { Select, SelectProps } from "@chakra-ui/react";

interface SortOption {
  label: string;
  value: string;
}

const SORT_OPTIONS: SortOption[] = [
  { label: "Sort by Date (Newest first)", value: "date_desc" },
  { label: "Sort by Date (Oldest first)", value: "date_asc" }
];

interface SortInputProps extends Omit<SelectProps, "onChange"> {
  handleSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedValue: string;
}

function SortInput({ handleSortChange, selectedValue }: SortInputProps) {
  return (
    <Select width={"20vw"} value={selectedValue} onChange={handleSortChange}>
      {SORT_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}

export default SortInput;
