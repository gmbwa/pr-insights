import { PullRequestsStore } from './store/PullRequestsStore.ts';
import { PullRequestsService } from './services/PullRequestsService.ts';
import { ReposService } from './services/ReposService.ts';
import { PullRequestsFileStore } from './store/PullRequestsFileStore.ts';

const main = async () => {
  try {
    const org = 'ramda';
    const prStore = new PullRequestsStore();
    const repos = await new ReposService(org).get();
    console.log(`Number of Repos = `, repos.length);

    for (const repo of repos) {
      const prService = new PullRequestsService(org, repo.name);
      const prs = await prService.get();
      prStore.add(prs);
    }
    const fileStore = new PullRequestsFileStore();
    fileStore.save(prStore.get());

    console.log(`Number of Pull Requests = `, prStore.get().length);
  } catch (error) {
    console.error('An error occurred in main:', error);
    process.exit(1);
  }
};

main();
