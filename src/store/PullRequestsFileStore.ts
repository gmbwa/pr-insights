import fs from 'fs';
import path from 'path';
import { PullRequest } from '../types/api';

export class PullRequestsFileStore {
  filename: string;

  constructor() {
    this.filename = path.join(process.cwd(), 'tmp/pr-files.json');
  }

  /**
   *
   * Get PRs from the file.
   */
  get(): PullRequest[] {
    const json = JSON.parse(fs.readFileSync(this.filename, 'utf8'));
    return json;
  }

  /**
   *
   * Set the Pull Requests, replacing existing ones.
   * @param {Array} prs - An array of pull requests to set.
   * @throws Will throw an error if prs is not an array.
   *
   */
  save(prs: PullRequest[]) {
    fs.writeFileSync(this.filename, JSON.stringify(prs, null, 2), {});
  }

  delete() {
    fs.unlinkSync(this.filename);
  }
}
