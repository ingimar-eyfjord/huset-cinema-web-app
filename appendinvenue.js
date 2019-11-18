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
	
	
// URL parameter
	var a = postCopy.querySelector(".seemore"); 
	a.href = `title.html?id=${post.id}`;


const cardinfo = postCopy.querySelector(".homepagefilminfo");
  cardinfo.addEventListener("click", () => {
   
 window.open(`
https://iesdesigner.eu/school-folder/2-semester/web-application/title.html?id=${post.id}`)	  
  });

// Appening only the ID of Venue
	
var url_venue_string = (window.location.href).toLowerCase();
var venueurl = new URL(url_venue_string);
var venueid = venueurl.searchParams.get("id");
//	console.log(id);
		function appendInvenue(){
		post.venues.forEach(i=>{
		if(parseInt(i) === parseInt(venueid))
		document.querySelector("#post").appendChild(postCopy);	
		})
	}
	appendInvenue()
}


//modal
//modal
window.addEventListener("DOMContentLoaded", seegenre);
function seegenre(){
	fetch("https://iesdesigner.eu/wordpress/wp-json/wp/v2/genre")
	.then(res=>res.json())
	.then(handlemodalData)}
function handlemodalData(myData){
	myData.forEach(showgenre)
}
function showgenre(genre){
const modal = document.querySelector(".genreModal").content;
//const jsonmodalinfo = modal.cloneNode(true);
	
	if (genre.count > 0 && genre.parent === 30){
		
	const genreModal = document.querySelector(".genreModal");
	genreModal.innerHTML += `<a class="genrename" href = Genre.html?id=${genre.id}><h3>${genre.name}</h3></a>`;
	
	}
	
	
document.querySelector(".Genrefilter").addEventListener("click", seetrailer);

  function seetrailer(myData) {
    const genremodal = document.querySelector(".modal-background");
	  
    //...
    genremodal.classList.remove("hide");
  }

	//close the modal when clicked
  const genremodal = document.querySelector(".modal-background");
  genremodal.addEventListener("click", () => {
    genremodal.classList.add("hide");
  });
}

//modal
window.addEventListener("DOMContentLoaded", seevenue);
function seevenue(){
	fetch("https://iesdesigner.eu/wordpress/wp-json/wp/v2/venues")
	.then(res=>res.json())
	.then(handlevenuelData)}
function handlevenuelData(venueData){
	venueData.forEach(showvenue)
}
function showvenue(venue){
const modal = document.querySelector(".venueModal").content;
	const genreVenue = document.querySelector(".venueModal");
	if (venue.count > 0 && venue.name == "Cinema"){
	genreVenue.innerHTML += `<a class="venuename" href = Venue.html?id=${venue.id}><h3>${venue.name}</h3></a>`;}
	
document.querySelector(".Venuefilter").addEventListener("click", showvenuemodal);

  function showvenuemodal(venueData) {
    const venuemodal = document.querySelector(".modal-background-venue");
    venuemodal.classList.remove("hide");
  }

	//close the modal when clicked
  const genremodal = document.querySelector(".modal-background-venue");
  genremodal.addEventListener("click", () => {genremodal.classList.add("hide");
  });
}

//// See sidebarmodal
//document.querySelector(".sidebarIconToggle").addEventListener("click", showsidebarmodal);
//function showsidebarmodal(){
//	const sidebarmodal = document.querySelector(".sidebarmodalbackground");
//    sidebarmodal.classList.remove("hide");
//  }
// const sidebarmodal = document.querySelector(".sidebarmodalbackground");
//  sidebarmodal.addEventListener("click", () => {sidebarmodal.classList.add("hide");
//  });


function myFunction() {
    var input, filter, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    li = document.getElementsByClassName("homepagefilminfo");
		
    for (i = 0; i < li.length; i++) {console.log(i);
        a = li[i].getElementsByClassName("movietitle")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}