import './RepoList.css'

function RepoList({ repos }) {
  if (repos.length === 0) {
    return <p className="no-repos">No public repositories found.</p>
  }

  return (
    <div className="repo-list">
      <h3 className="repo-list-title">Recent Repositories</h3>
      <div className="repo-grid">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-card"
          >
            <h4 className="repo-name">{repo.name}</h4>
            <p className="repo-description">
              {repo.description || 'No description'}
            </p>
            <div className="repo-meta">
              {repo.language && (
                <span className="repo-language">
                  <span className="language-dot"></span>
                  {repo.language}
                </span>
              )}
              <span className="repo-stars">⭐ {repo.stargazers_count}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RepoList
