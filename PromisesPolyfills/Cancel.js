// Why Cancel a Promise?
// User Interaction: If a user navigates away or cancels a task, ongoing promises should not be resolved or executed.
// Performance: Canceling unnecessary promises can help improve application performance and responsiveness.
// Resource Management: Prevent resource-intensive operations that are no longer needed.
function fetchdata(url,signal){
    return new Promise((res,rej)=>{
        const timer=setTimeout(()=>{
            res(`resolved ${url}`)
        },2000)
        signal.addEventListener('abort',()=>{
            clearTimeout(timer);
            rej(new Error('Fetch aborted!'))
        })
    })
}
const abort = new AbortController();
const signal = abort.signal;
fetchdata('wwww.api.data',signal).then((x)=>{
   console.log(x)
}).catch((e)=>console.log(e.message))

setTimeout(()=>{
    abort.abort()
},1000)



function fetchDataWithFlag(url) {
    let isCancelled = false;
return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isCancelled) {
                reject(new Error('Promise was cancelled'));
            } else {
                resolve(`Data from ${url}`);
            }
        }, 2000);
        // Return a cancel function
        return () => {
            isCancelled = true;
        };
    });
}
// Usage example
const cancelFetch = fetchDataWithFlag('https://api.example.com/data');
// Handle promise resolution
cancelFetch
    .then(data => console.log(data))
    .catch(err => console.error(err.message));
// Cancel the fetch after 1 second
setTimeout(() => {
    cancelFetch(); // Call the cancel function
}, 1000);