import './SearchBar.css'

function SearchBar({ query, setQuery, onSearch, loading }) {
  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = query.trim()
    if (trimmed) {
      onSearch(trimmed)
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter GitHub username..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
      />
      <button
        type="submit"
        className="search-btn"
        disabled={loading || !query.trim()}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  )
}

export default SearchBar
