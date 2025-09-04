import { highlightText } from '../utils/highlightText.jsx';

/**
 * Component that renders text with highlighted search terms
 * @param {Object} props - Component props
 * @param {string} props.text - The text to display
 * @param {string} props.searchTerm - The search term to highlight
 * @returns {JSX.Element} - Component with highlighted text
 */
const HighlightedText = ({ text, searchTerm }) => {
  return highlightText(text, searchTerm);
};

export default HighlightedText;
