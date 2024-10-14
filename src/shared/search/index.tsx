import React, { useState } from "react";
import seacrhIcon from "../../assets/seacrh.png";

interface ISearchProps {
  onSearch: (query: string) => void;
  className?: string;
  iconClass?: string;
}

const Search: React.FC<ISearchProps> = ({ onSearch, className, iconClass }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Seacrh"
      />
      <button type="submit">
        <img src={seacrhIcon} alt="" className={iconClass} />
      </button>
    </form>
  );
};

export default Search;
