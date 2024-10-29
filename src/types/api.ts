import { Endpoints } from '@octokit/types';

export type PullRequest =
  Endpoints['GET /repos/{owner}/{repo}/pulls']['response']['data'][number];

export type Repo =
  Endpoints['GET /orgs/{org}/repos']['response']['data'][number];
