// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);

function getData(){
	fetch("http://iesdesigner.eu/wordpress/wp-json/wp/v2/film?_embed")
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

	
document.querySelector("#post").appendChild(postCopy)
}

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