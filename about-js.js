// JavaScript Document

//modal
window.addEventListener("DOMContentLoaded", seegenre);
function seegenre() {
	fetch("https://iesdesigner.eu/wordpress/wp-json/wp/v2/genre").then(res => res.json()).then(handlemodalData)
}
function handlemodalData(myData) {
	myData.forEach(showgenre)
}
function showgenre(genre) {
	const modal = document.querySelector(".genreModal").content;
	//const jsonmodalinfo = modal.cloneNode(true);
	if (genre.count > 0 && genre.parent === 30) {
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
function seevenue() {
	fetch("https://iesdesigner.eu/wordpress/wp-json/wp/v2/venues").then(res => res.json()).then(handlevenuelData)
}
function handlevenuelData(venueData) {
	venueData.forEach(showvenue)
}
function showvenue(venue) {
	const modal = document.querySelector(".venueModal").content;
	//const jsonmodalinfo = modal.cloneNode(true);
	const genreVenue = document.querySelector(".venueModal");
	if (venue.count > 0 && venue.name == "Cinema") {
		genreVenue.innerHTML += `<a class="venuename" href = Venue.html?id=${venue.id}><h3>${venue.name}</h3></a>`;
	}
	document.querySelector(".Venuefilter").addEventListener("click", showvenuemodal);

	function showvenuemodal(venueData) {
		const venuemodal = document.querySelector(".modal-background-venue");
		//	var a = document.querySelector(".venuename"); 
		//	a.href = `title.html?id=${venue.id}`;
		//	console.log(venue.id);	
		//...
		venuemodal.classList.remove("hide");
	}
	//close the modal when clicked
	const genremodal = document.querySelector(".modal-background-venue");
	genremodal.addEventListener("click", () => {
		genremodal.classList.add("hide");
	});
}
function myFunction() {
	var input, filter, li, a, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	li = document.getElementsByClassName("homepagefilminfo");
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByClassName("movietitle")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}