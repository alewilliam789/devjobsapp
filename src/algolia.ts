import algoliasearch from 'algoliasearch';

// Connect and authenticate with your Algolia app
const client = algoliasearch('V6HOYYUE3G', 'bf602c3296fdeae700ecb21dde9add19');

// Create a new index and add a record
export const index = client.initIndex('jobs');