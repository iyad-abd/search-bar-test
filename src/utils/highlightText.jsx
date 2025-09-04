/**
 * Highlights search terms in text by wrapping them in <mark> tags
 * @param {string} text - The text to search in
 * @param {string} searchTerm - The term to highlight
 * @returns {JSX.Element} - React element with highlighted text
 */
export const highlightText = (text, searchTerm) => {
  if (!searchTerm.trim()) {
    return <span>{text}</span>;
  }

  // Escape special regex characters in search term
  const escapedSearchTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) => 
        regex.test(part) ? (
          <mark key={index} className="highlight">{part}</mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};
