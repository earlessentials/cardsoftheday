/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true"
const repositoryName = "cardsoftheday"
const githubPagesBasePath = `/${repositoryName}`

const nextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        basePath: githubPagesBasePath,
        output: "export",
        trailingSlash: true
      }
    : {})
}

export default nextConfig