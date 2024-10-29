/**
 *
 * Fetch all PRs
 * API reference docs - https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests
 *
 */

import { PullRequest } from '../types/api.ts';
import { BaseGitService } from './BaseGitService.ts';

export class PullRequestsService extends BaseGitService<PullRequest> {
  constructor(org: string, name: string) {
    const url = `https://api.github.com/repos/${org}/${name}/pulls?state=all&per_page=100`;

    super(url);
  }
}
