import mockCases from './javascript/object.js';
import { appendTickets } from './javascript/helpers.js';

// mock function for importing JSON object data from local file instead of using API.
async function getCases() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockCases), 100);
    });
}

getCases()
    .then((data) => appendTickets(data))
    .catch(console.error);