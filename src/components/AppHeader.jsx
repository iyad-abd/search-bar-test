/**
 * Application header component
 * @param {Object} props - Component props
 * @param {string} props.title - Header title
 * @param {string} props.subtitle - Header subtitle
 * @returns {JSX.Element} - Header component
 */
const AppHeader = ({ title, subtitle }) => {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};

export default AppHeader;
