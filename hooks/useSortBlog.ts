import { SelectProps } from "@chakra-ui/react";
import { useState } from "react";

interface SortOption {
  label: string;
  value: string;
}

const SORT_OPTIONS: SortOption[] = [
  { label: "Sort by Date (Newest first)", value: "date_desc" },
  { label: "Sort by Date (Oldest first)", value: "date_asc" }
];

interface SortInputProps extends Omit<SelectProps, "onChange"> {
  onSortChange?: (value: string) => void;
}

function useSort({ onSortChange }: SortInputProps) {
  const [selectedValue, setSelectedValue] = useState<string>(
    SORT_OPTIONS[0].value
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    onSortChange && onSortChange(selectedValue);
  };
  return { selectedValue, handleSortChange };
}

export { useSort };
