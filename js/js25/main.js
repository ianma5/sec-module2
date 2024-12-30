// Higher order functions

// one of these things:
// takes one or more functions as an argument
// returns a function as its result

import { posts } from "./posts.js";

//forEach() html collections, node lists, query

/* posts.forEach(post => {
    console.log(post);
}); */


const filteredPosts = posts.filter(post => {
    return post.userId === 5;
});

console.log(filteredPosts);

const mappedPosts = filteredPosts.map(post => {
    return post.id * 10;
});

console.log(mappedPosts);

const reducedPosts = mappedPosts.reduce((sum, post) => {
    return sum+ post;
});

console.log(reducedPosts);