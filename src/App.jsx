import { useState, useEffect } from 'react'
import { fetchUser, fetchRepos } from './api/github'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import RepoList from './components/RepoList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import './App.css'

function App() {
  const [query, setQuery] = useState('')
  const [userData, setUserData] = useState(null)
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [searchedUsername, setSearchedUsername] = useState(null)

  useEffect(() => {
    if (!searchedUsername) return

    let cancelled = false

    async function loadProfile() {
      setLoading(true)
      setError(null)
      setUserData(null)
      setRepos([])

      try {
        const [user, userRepos] = await Promise.all([
          fetchUser(searchedUsername),
          fetchRepos(searchedUsername),
        ])

        if (!cancelled) {
          setUserData(user)
          setRepos(userRepos)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadProfile()

    return () => {
      cancelled = true
    }
  }, [searchedUsername])

  function handleSearch(username) {
    setSearchedUsername(username)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">GitHub Profile Viewer</h1>
        <p className="app-subtitle">
          Search for any GitHub user to view their profile and repositories
        </p>
      </header>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        loading={loading}
      />

      <main className="app-content">
        {loading && <Loader />}
        {error && !loading && <ErrorMessage message={error} />}
        {userData && !loading && !error && (
          <>
            <ProfileCard user={userData} />
            <RepoList repos={repos} />
          </>
        )}
      </main>
    </div>
  )
}

export default App
