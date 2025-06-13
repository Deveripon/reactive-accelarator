"use server"

export async function getGitHubContributors() {
  try {
    const response = await fetch("https://api.github.com/repos/Deveripon/reactive-accelarator/contributors", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Reactive-Accelerator-Website",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const contributors = await response.json()
    return contributors.slice(0, 12) // Limit to top 12 contributors
  } catch (error) {
    console.error("Error fetching contributors:", error)
    // Return fallback data
    return [
      {
        id: 1,
        login: "Deveripon",
        avatar_url: "https://github.com/Deveripon.png",
        html_url: "https://github.com/Deveripon",
        contributions: 100,
        type: "User",
      },
    ]
  }
}

export async function getGitHubStats() {
  try {
    const response = await fetch("https://api.github.com/repos/Deveripon/reactive-accelarator", {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Reactive-Accelerator-Website",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const stats = await response.json()
    return {
      stargazers_count: stats.stargazers_count,
      forks_count: stats.forks_count,
      watchers_count: stats.watchers_count,
      open_issues_count: stats.open_issues_count,
      subscribers_count: stats.subscribers_count,
    }
  } catch (error) {
    console.error("Error fetching GitHub stats:", error)
    // Return fallback data
    return {
      stargazers_count: 34,
      forks_count: 19,
      watchers_count: 1,
      open_issues_count: 0,
      subscribers_count: 1,
    }
  }
}
