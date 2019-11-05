// JavaScript Document
// for search, finish later or use live search function
//window.addEventListener("DOMContentLoaded", init);
//
//function init(){
//	const urlParam = new URLSearchParams(window.location.search);
//	const search = urlParams.get("search");
//	const id = urlParams.get("id");
//
//if(search){getSearchData();
//		  }else if(id){
//			  getSingleFilm();
//		  }else {getFrontpageData();}}
//
//function getSearchData(){
//	const urlParams = new URLSearchParams(window.location.search);
//	const search = urlParams.get("search");
//}
//fetch()
//

window.addEventListener("DOMContentLoaded", getData);

function getData(){
	fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/film")
	.then(res=>res.json())
	.then(handleData)}
function handleData(myData){
	myData.forEach(showPost)
}
function showPost(post){
const template = document.querySelector(".filmtemplate").content;
const postCopy = template.cloneNode(true);
	
const h1 = postCopy.querySelector("h1");h1.textContent=post.title.rendered;

	const imgPath = post.poster.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered)
	
const eventdate = postCopy.querySelector(".showdate");
	eventdate.textContent=post.event_date;
	
const price = postCopy.querySelector(".price");
	price.textContent=post.price;
	
//This goes into the URL parametar created page//
//const p = postCopy.querySelector("p");	
//	p.innerHTML=post.content.rendered;
//
	
// Here is the beginging
	var a = postCopy.querySelector(".seemore"); 
	a.href = `title.html?id=${post.id}`;

	
document.querySelector("#post").appendChild(postCopy)
}

// Here is the retreive function
//window.onload = function() {
////			try {
//				var url_string = (window.location.href).toLowerCase();
//				var url = new URL(url_string);
//        		var id = url.searchParams.get("id");
//				console.log(id);
//
//
//	function appendInrestaurants(){
//		if(nameData.gsx$id.$t === id)
//		document.querySelector(".pagelayout").appendChild(copy);
//	}
//	appendInrestaurants()}