/**
 *
 * Fetch all Repos Service
 * API reference docs - https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28
 *
 */
import { Repo } from '../types/api.ts';
import { BaseGitService } from './BaseGitService.ts';

export class ReposService extends BaseGitService<Repo> {
  constructor(org: string) {
    const url = `https://api.github.com/orgs/${org}/repos?state=all&per_page=30`;
    super(url);
  }
}
