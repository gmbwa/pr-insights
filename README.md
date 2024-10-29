# Pull Request Node.js App

## Installation

### Clone the repository

Clone the repository by running:

```bash
git clone https://github.com/gmbwa/pr-insights.git
cd pr-insights
```

### Install dependencies

Make sure you have Node.js version 22 or later installed, then run:

```bash
npm install
```

### Set up environment variables

Create a `.env` file in the root directory and add your GitHub API token:

```bash
AUTH=your_github_token_here
```

Replace `your_github_token_here` with your GitHub personal access token, which you can generate from [GitHub's settings page](https://github.com/settings/tokens). This token is required for authentication with the GitHub API.

## Usage

**Fetch PRs:** `npm run fetch-prs` – Fetches PRs and saves them to a JSON file.

**Load PRs to memory:** `npm run start` – Loads stored PRs into memory for use. Simple implementation in `/src/index.ts`
