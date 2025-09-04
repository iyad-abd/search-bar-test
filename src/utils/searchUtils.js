/**
 * Filters data based on search term
 * @param {Array} data - Array of items to search through
 * @param {string} searchTerm - The search term
 * @returns {Array} - Filtered array of items
 */
export const filterData = (data, searchTerm) => {
  if (!searchTerm.trim()) {
    return data;
  }

  const term = searchTerm.toLowerCase();
  return data.filter(item => 
    item.title.toLowerCase().includes(term) || 
    item.content.toLowerCase().includes(term)
  );
};

/**
 * Formats the results count text
 * @param {number} count - Number of results
 * @returns {string} - Formatted count text
 */
export const formatResultsCount = (count) => {
  return `${count} result${count !== 1 ? 's' : ''} found`;
};
