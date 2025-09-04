# Search Application - Project Structure

This document outlines the organized structure of the search application.

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── AppHeader.jsx    # Application header component
│   ├── SearchBox.jsx    # Search input component
│   ├── SearchResults.jsx # Search results display component
│   ├── HighlightedText.jsx # Text highlighting component
│   └── index.js         # Component exports
├── data/                # Static data and constants
│   └── sampleData.js    # Sample articles data
├── utils/               # Utility functions
│   ├── highlightText.js # Text highlighting logic
│   └── searchUtils.js   # Search and filtering utilities
├── styles/              # CSS modules
│   ├── base.css         # Base styles and resets
│   ├── layout.css       # Layout and positioning
│   ├── search.css       # Search box styles
│   ├── results.css      # Results display styles
│   ├── highlight.css    # Text highlighting styles
│   ├── responsive.css   # Responsive design
│   └── index.css        # Style imports
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## 🧩 Components

### AppHeader
- Displays the application title and subtitle
- Props: `title`, `subtitle`

### SearchBox
- Handles search input with icon
- Props: `value`, `onChange`, `placeholder`

### SearchResults
- Displays filtered search results
- Props: `results`, `searchTerm`

### HighlightedText
- Highlights search terms in text
- Props: `text`, `searchTerm`

## 🛠️ Utilities

### highlightText.js
- `highlightText(text, searchTerm)` - Highlights search terms in text

### searchUtils.js
- `filterData(data, searchTerm)` - Filters data based on search term
- `formatResultsCount(count)` - Formats results count text

## 🎨 Styles

Styles are organized into logical modules:
- **base.css** - Foundation styles and resets
- **layout.css** - Main layout and positioning
- **search.css** - Search input styling
- **results.css** - Results display styling
- **highlight.css** - Text highlighting styles
- **responsive.css** - Mobile and tablet responsive design

## 📊 Data

### sampleData.js
Contains an array of sample articles with:
- `id` - Unique identifier
- `title` - Article title
- `content` - Article content

## 🚀 Benefits of This Structure

1. **Separation of Concerns** - Each file has a single responsibility
2. **Reusability** - Components can be easily reused
3. **Maintainability** - Easy to find and modify specific functionality
4. **Scalability** - Easy to add new features and components
5. **Testing** - Individual components and utilities can be tested separately
6. **Performance** - Modular imports allow for better code splitting
