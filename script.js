/*

Thanks to HackYourFuture on YouTube
https://youtu.be/jiJJ2V8K1ik

*/

/*

fetch("http://api.tvmaze.com/search/shows?q=girls")
.then((response) => {
    console.log("response received, but the body is not ready yet")
    console.log(response)
    return response.json()
})

.then((jsonData) => {
    console.log("We got our data")
    console.log(jsonData);
})
*/
console.log("\n=======================\n")

function searchShow(query){
  const url = `http://api.tvmaze.com/search/shows?q=${query}`;  
fetch(url)
.then((response) => {
    return response.json();
})
.then((jsonData) => {
    console.log(jsonData);
})
}
//8:45
window.onload = () =>{
    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = (event) => {
        console.log(searchFieldElement.value)
    }
}
