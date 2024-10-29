import { PullRequestsFileStore } from './store/PullRequestsFileStore.ts';

const main = async () => {
  try {
    const fileStore = new PullRequestsFileStore();
    const prs = fileStore.get();
    console.log('totalPRs = ', prs.length);
  } catch (error) {
    console.error('An error occurred in main:', error);
    process.exit(1);
  }
};

main();
