// Consts 
const apikey = "a82aed59b6a0fdd57c3f3299f56b0a0a";
const apiEndPoint ="https://api.themoviedb.org/3"

const apiPaths = {
    // fetchAllCategories: `$[apiEndPoint]genre/movie/list?api_key=[apikey]]`
    fetchAllCategories: `${apiEndPoint}/genre/movie/list?api_key=${apikey}`
}


// Boots up the app
function init(){
    fetch(apiPaths.fetchAllCategories)
    .then(res => console.log(res))
    .catch(err => console.error(err));
    
}

window.addEventListener('load',function(){
    init();
})