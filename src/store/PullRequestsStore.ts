import { PullRequest } from '../types/api';

export class PullRequestsStore {
  pullRequests: PullRequest[] = [];

  constructor() {
    // init an empty array for pull requests
    this.pullRequests = [];
  }

  /**
   *
   * Get a copy of the pull requests.
   */
  get() {
    return [...this.pullRequests];
  }

  /**
   *
   * Set the Pull Requests, replacing existing ones.
   * @param {Array} prs - An array of pull requests to set.
   * @throws Will throw an error if prs is not an array.
   *
   */
  set(prs: PullRequest[]) {
    if (Array.isArray(prs)) {
      this.pullRequests = prs;
    } else {
      throw new Error('PullRequests should be an array');
    }
  }

  /**
   *
   * clear the pull requests
   */
  clear() {
    this.pullRequests = [];
  }

  /**
   *
   * Add pull requests
   */
  add(prs: PullRequest[]) {
    if (Array.isArray(prs)) {
      this.pullRequests.push(...prs);
    } else {
      throw new Error('PullRequests should be an array');
    }
  }
}
