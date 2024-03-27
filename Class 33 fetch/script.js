// In JavaScript, the fetch function is used to make network requests (e.g., fetching data from an API) and handle responses asynchronously. It is a modern alternative to older methods like XMLHttpRequest and provides a simpler, more powerful interface.


//------------------------------------------------------------------
// formats => ajax, json etc


// let url1 = 'https://jsonplaceholder.typicode.com/posts';
// let posts = fetch(url1);

// posts.then((value) => {
//     return value;
// }).then((res) => {
//     return res.json();
// }).then((data) => {
//     data.forEach((post) => {
//         document.write(`${post.id} <br>`);
//     });
// }).catch((err) => {
//     console.log('Data not found!');
// });



// let data = fetch(url1)
// data.then((value) => {

//   return value

// }).then((res) => {

//   // console.log(res.json());
//   const fda = res.json()
//   console.log(fda[1]);
// })


// --------usage of emails in html fles --------


// let firstemail = response[1]
// console.log(firstemail);



//   -----------------------------------------------------------------

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();



// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// fetch( apiUrl )
//       .then((response) => {
//         return response
//       })
//       .then((data) => {
//         console.log(data.json());
//       })
//       .catch(error => console.error('Error:', error));


// ============================================================

let url = 'https://jsonplaceholder.typicode.com/todos'

let promises = fetch(url)

async function fetchData() {
    try {
        const response = await promises

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // console.log(data[2].title);
        document.write(data[2].title)
        data.forEach((value) => {
            document.write(`${value.title} <br>`)
        })

    } catch (error) {
        console.error('Error:', error);
    }
}

// // Call the async function
fetchData();
