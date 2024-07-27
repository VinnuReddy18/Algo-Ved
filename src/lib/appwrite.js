// import { Client, Account} from 'appwrite';

// export const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('66a21670001106955871'); // Replace with your project ID

// export const account = new Account(client);
// export { account,ID } from 'appwrite';
import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('66a21670001106955871'); // Your project ID

const account = new Account(client);

export { account, ID };
