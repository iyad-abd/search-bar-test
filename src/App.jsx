import { useState, useMemo } from 'react';

// Import components
import AppHeader from './components/AppHeader';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';

// Import data and utilities
import { sampleData } from './data/sampleData';
import { filterData } from './utils/searchUtils';

// Import styles
import './styles/index.css';

/**
 * Main App component that orchestrates the search functionality
 * @returns {JSX.Element} - The main application component
 */
function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and search logic using memoization for performance
  const filteredResults = useMemo(() => {
    return filterData(sampleData, searchTerm);
  }, [searchTerm]);

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <AppHeader 
        title="Search Application" 
        subtitle="Search through articles and see highlighted results" 
      />
      
      <SearchBox 
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search articles..."
      />
      
      <SearchResults 
        results={filteredResults}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App
