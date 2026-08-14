import { NextResponse } from "next/server"

export const revalidate = 3600 // Cache for 1 hour

export async function GET() {
  try {
    // 1. Fetch live LeetCode data from official GraphQL
    let leetCodeStats = {
      totalSolved: 343,
      easySolved: 88,
      mediumSolved: 206,
      hardSolved: 49,
      ranking: 400817,
    }

    try {
      const lcRes = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query getUserProfile($username: String!) {
              matchedUser(username: $username) {
                submitStats: submitStatsGlobal {
                  acSubmissionNum {
                    difficulty
                    count
                  }
                }
                profile {
                  ranking
                }
              }
            }
          `,
          variables: { username: "uv3704" },
        }),
        next: { revalidate: 3600 },
      })

      if (lcRes.ok) {
        const lcData = await lcRes.json()
        const subs = lcData?.data?.matchedUser?.submitStats?.acSubmissionNum
        if (subs && Array.isArray(subs)) {
          const allCount = subs.find((s: any) => s.difficulty === "All")?.count
          const easyCount = subs.find((s: any) => s.difficulty === "Easy")?.count
          const medCount = subs.find((s: any) => s.difficulty === "Medium")?.count
          const hardCount = subs.find((s: any) => s.difficulty === "Hard")?.count
          const rank = lcData?.data?.matchedUser?.profile?.ranking

          if (allCount !== undefined) leetCodeStats.totalSolved = allCount
          if (easyCount !== undefined) leetCodeStats.easySolved = easyCount
          if (medCount !== undefined) leetCodeStats.mediumSolved = medCount
          if (hardCount !== undefined) leetCodeStats.hardSolved = hardCount
          if (rank !== undefined) leetCodeStats.ranking = rank
        }
      }
    } catch (lcErr) {
      console.error("LeetCode fetch error:", lcErr)
    }

    // 2. Fetch live GitHub data from official API
    let githubStats = {
      publicRepos: 44,
      followers: 5,
      createdAt: "2024-01-10",
    }

    try {
      const ghRes = await fetch("https://api.github.com/users/uv3704", {
        headers: { "User-Agent": "Yuvraj-Portfolio" },
        next: { revalidate: 3600 },
      })

      if (ghRes.ok) {
        const ghData = await ghRes.json()
        if (ghData?.public_repos !== undefined) {
          githubStats.publicRepos = ghData.public_repos
          githubStats.followers = ghData.followers
        }
      }
    } catch (ghErr) {
      console.error("GitHub fetch error:", ghErr)
    }

    return NextResponse.json({
      success: true,
      leetcode: leetCodeStats,
      github: githubStats,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to load live metrics" }, { status: 500 })
  }
}
