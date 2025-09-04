import HighlightedText from './HighlightedText';
import { formatResultsCount } from '../utils/searchUtils';

/**
 * Component that displays search results
 * @param {Object} props - Component props
 * @param {Array} props.results - Array of search results
 * @param {string} props.searchTerm - Current search term
 * @returns {JSX.Element} - Search results component
 */
const SearchResults = ({ results, searchTerm }) => {
  return (
    <div className="results-container">
      <div className="results-header">
        <h2>Search Results</h2>
      </div>

      <div className="results-list">
        {results.length > 0 ? (
          results.map(item => (
            <div key={item.id} className="result-item">
              <h3 className="result-title">
                <HighlightedText text={item.title} searchTerm={searchTerm} />
              </h3>
              <p className="result-content">
                <HighlightedText text={item.content} searchTerm={searchTerm} />
              </p>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No results found for "{searchTerm}"</p>
            <p>Try different keywords or check your spelling</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
