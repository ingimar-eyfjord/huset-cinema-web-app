// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);

function getData(){
	fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/film")
	.then(res=>res.json())
	.then(handleData)}
function handleData(myData){
	myData.forEach(showPost)
}
function showPost(post){
const template = document.querySelector(".insidefilmtemplate").content;
const postCopy = template.cloneNode(true);
	

	const h1 = postCopy.querySelector("h1");h1.textContent=post.title.rendered;
	
//	const titleunderimage = postCopy.querySelector(".titleunderimage");titleunderimage.textContent=post.title.rendered;
	
	const logline = postCopy.querySelector(".logline");logline.innerHTML=post.content.rendered;

	const imgPath = post.poster.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered)
	
const eventdate = postCopy.querySelector(".choose-showdate");
	eventdate.textContent=post.event_date;
	
const price = postCopy.querySelector(".price-inside");
	price.textContent=post.price;
	
	
var url_string = (window.location.href).toLowerCase();
				var url = new URL(url_string);
        		var id = url.searchParams.get("id");
				
	
		function appendIntitle(){
		if(post.id == id)
		document.querySelector("#post-inside").appendChild(postCopy);
	}
	appendIntitle()}
	
	
//	document.querySelector("#post").appendChild(postCopy)
//}


