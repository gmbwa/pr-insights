import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.AUTH) {
  throw new Error('Missing env variable AUTH');
}

export class BaseGitService<T> {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async get(): Promise<T[]> {
    /**
     * The git APIs are paginated.
     *
     */
    // regex from the pagination docs - https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api?apiVersion=2022-11-28
    const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i;
    const data: T[] = [];
    let url = this.url;
    let pagesRemaining = true;

    try {
      while (pagesRemaining) {
        console.log('url:', url);
        const options = {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            Authorization: `token ${process.env.AUTH}`,
            Accept: 'application/vnd.github.v3+json',
          },
        };

        const response = await axios.get<T[]>(url, options);

        data.push(...(response?.data || []));

        const linkHeader = response.headers.link || '';

        pagesRemaining = !!(linkHeader && linkHeader.includes(`rel="next"`));

        if (pagesRemaining) {
          url = linkHeader.match(nextPattern)?.[0] || '';
        }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
      } else {
        throw new Error('Failed to fetch data: An unknown error occurred.');
      }
    }

    return data;
  }
}
