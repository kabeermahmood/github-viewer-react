const BASE_URL = 'https://api.github.com/users'

export async function fetchUser(username) {
  const response = await fetch(`${BASE_URL}/${username}`)

  if (response.status === 404) {
    throw new Error('User not found. Please check the username and try again.')
  }

  if (!response.ok) {
    throw new Error('Something went wrong. Please try again later.')
  }

  return response.json()
}

export async function fetchRepos(username) {
  const response = await fetch(
    `${BASE_URL}/${username}/repos?sort=updated&per_page=6`
  )

  if (!response.ok) {
    throw new Error('Something went wrong. Please try again later.')
  }

  return response.json()
}
