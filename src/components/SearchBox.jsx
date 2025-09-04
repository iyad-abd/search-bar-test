/**
 * Search input component with icon
 * @param {Object} props - Component props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Change handler function
 * @param {string} props.placeholder - Placeholder text
 * @returns {JSX.Element} - Search box component
 */
const SearchBox = ({ value, onChange, placeholder = "Search articles..." }) => {
  return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="search-input"
        />
        <div className="search-icon">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
