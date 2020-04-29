/**
 * Optional Chaining
 *      --> '?' - Optional Chaining Operator
 */

const fetchedUserData = {
    id: 'u1',
    name: 'Abhishek Baghel',
    job: { title: 'Senior Developer', description: 'My Own Company' }
};

/**
 * If Data is fetched from the backend then typescript doesn't know whether certain property exist on the response.
 */
console.log(fetchedUserData?.job?.title);
/**
 * In Javascript:
 *  --> const title = fetchedUserData.job && fetchedUserData.job.title; 
 */