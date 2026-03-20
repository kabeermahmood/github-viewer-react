import './ProfileCard.css'

function ProfileCard({ user }) {
  return (
    <div className="profile-card">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="profile-avatar"
      />

      <h2 className="profile-name">{user.name || user.login}</h2>
      <p className="profile-username">@{user.login}</p>

      {user.bio && <p className="profile-bio">{user.bio}</p>}

      {user.location && (
        <p className="profile-location">
          <span className="location-icon">📍</span>
          {user.location}
        </p>
      )}

      <div className="profile-stats">
        <div className="stat-box">
          <span className="stat-number">{user.public_repos}</span>
          <span className="stat-label">Repos</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">{user.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
