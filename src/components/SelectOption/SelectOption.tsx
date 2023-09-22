"use client";import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { twMerge } from "tailwind-merge";

export interface SelectedOptionProps {
  options: { value: string; label: string }[];
  setValue: Dispatch<SetStateAction<string | undefined>>;
  value: string | undefined;
  errorMessage?: string;
  label?: string;
  reset?: boolean;
}

export function SelectOption({
  options,
  setValue,
  errorMessage,
  label,
  value,
}: SelectedOptionProps) {
  const [selectedOption, setSelectedOption] = useState<null | {
    value: string;
    label: string;
  }>(null);

  function handleChange(e: SingleValue<{ value: string; label: string }>) {
    setSelectedOption(e);
    setValue(e ? e.value : undefined);
  }

  function clearSelection() {
    setSelectedOption(null);
  }

  useEffect(() => {
    if (!value?.length) {
      setSelectedOption(null);
    }
  }, [value]);

  return (
    <div>
      {label && <label className="block mb-2 text-sm font-bold">{label}</label>}
      <Select
        options={options}
        onChange={handleChange}
        value={selectedOption}
        isClearable
        isSearchable
        className={twMerge(
          `transition-all text-sm text-gray-900 bg-white rounded-lg rounded-t-lg border dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400`,
          errorMessage ? "border-red-700" : "border-gray-200"
        )}
      />
      {errorMessage && (
        <span className="text-red-700 font-semibold">{errorMessage}</span>
      )}
    </div>
  );
}
