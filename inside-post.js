// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);

function getData(){
	fetch("https://iesdesigner.eu/wordpress/wp-json/wp/v2/film?_embed")
	.then(res=>res.json())
	.then(handleData)}
function handleData(myData){
	myData.forEach(showPost)
}
function showPost(post){
const template = document.querySelector(".insidefilmtemplate1").content;
const postCopy = template.cloneNode(true);
	

	const h1 = postCopy.querySelector("h1");h1.textContent=post.title.rendered;
	
//	const titleunderimage = postCopy.querySelector(".titleunderimage");titleunderimage.textContent=post.title.rendered;
	
	const logline = postCopy.querySelector(".logline");logline.innerHTML=post.content.rendered;

	const imgPath = post.poster.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered)
	
	const lengthinfo = postCopy.querySelector(".lengthinfo");
	lengthinfo.innerHTML = `<p>Length:&nbsp;${post.length}</p>`;
	
	
	const censorship1 = postCopy.querySelector(".censorship");
	censorship1.innerHTML = `<p>Censorship:&nbsp;${post.censorship1}</p>`;
	
	
	
	post.genreid.forEach(er=>{
		let newEl = document.createElement("div")
		
		newEl.textContent  =`${er.post_title}, `;	
		postCopy.querySelector(".genreInside").appendChild(newEl)
	
	})
	
	
//close the modal when clicked
  const modal = document.querySelector(".modal-background");
  modal.addEventListener("click", () => {
    modal.classList.add("hide");
  });
	
	post.slideshow.forEach(e=>{
		postCopy.querySelector(".glider").innerHTML += `<div class="image-container"> <img class="image-slide" src="${e.guid}"></div>`;
	})
	
	
	postCopy.querySelector(".trailer_modal").addEventListener("click", () => {
    fetch(`https://iesdesigner.eu/wordpress/wp-json/wp/v2/film${post.id}`)
      .then(res => res.json())
      .then(seetrailer);
  });
	
  function seetrailer(myData) {
    modal.querySelector(".modal-video").innerHTML = post.trailervideo;

    //...
    modal.classList.remove("hide");
  }
	
	
const eventdate = postCopy.querySelector(".choose-showdate");
	eventdate.textContent=post.event_date;
	
const price = postCopy.querySelector(".price-inside");
	price.textContent= "Price: " + post.price + "  DKK";
	
	
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


