/**
 * Creator           : Coding's Time
 * Youtube Channel   : https://www.youtube.com/channel/UC6dnKqrImGWqMb9ty1n0Ziw
 * Github Profile    : https://github.com/codingstime
 */
 let at = [] ; 

 at[0] = document.querySelector(".at1");
 at[1] = document.querySelector(".at2");
 at[2] = document.querySelector(".at3"); 
 at[3] = document.querySelector(".at4");
 at[4] = document.querySelector(".at5");
 at[5] = document.querySelector(".at6");
 at[6] = document.querySelector(".at7");
 at[7] = document.querySelector(".at8");
 at[8] = document.querySelector(".at9");
 at[9] = document.querySelector(".at10");
 last = document.querySelector(".last");

 const pere_name1 = document.querySelector(".pere_name1");
 const enfant_name1 = document.querySelector(".enfant_name1");
 const pere_name2 = document.querySelector(".pere_name2");
 const enfant_name2 = document.querySelector(".enfant_name2");
 const pere_name3 = document.querySelector(".pere_name3");
 const enfant_name3 = document.querySelector(".enfant_name3");
 const sideliste = document.querySelector(".sideListe");

 let photoenfant = [] ; 
 let photoparent = [] ; 
 let nompere = [] ; 
 let nomenfant = [] ; 

 let resulPhotoEnfant = [] ;
 let resulPhotopere = [];
 let resulNomEnfant = [] ;
 let resulNompere = [];


 var i = 0 , k = 0,s = 0; 

 const url = 'http://localhost:3000/slider' ;

 setInterval(() =>{
 fetch(url)
 .then(res =>res.json())
 .then(data => {


     for(pic in data){
      photoenfant[i] = data[pic].photoEnfant ;
      photoparent[i] = data[pic].photoPere ;
      nompere[i] = data[pic].NomPere ; 
      nomenfant[i] = data[pic].NomEnfant ; 
         i++;
         
     };

     for(pic in data){
      resulPhotoEnfant[k] = ` <img src="${photoenfant[k]}" alt="" class="carousel_img rounded">` ;
      resulPhotopere[k] = ` <img src="${photoparent[k]}" alt="" class="carousel_img rounded">` ;
      resulNomEnfant[k] = ` <p class="alert alert-dark text-center fs-2">${nompere[k]}</p>` ;
      resulNompere[k] = `       <p class="alert alert-dark text-center fs-2">${nomenfant[k]}</p>` ;
         k++;
         
     };

     at[0].innerHTML = resulPhotoEnfant[0] ; 
     at[1].innerHTML = resulPhotopere[0] ; 
     pere_name1.innerHTML = resulNomEnfant[0]
     enfant_name1.innerHTML = resulNompere[0]


     at[2].innerHTML = resulPhotoEnfant[1] ; 
     at[3].innerHTML = resulPhotopere[1] ; 
     pere_name2.innerHTML = resulNomEnfant[1]
     enfant_name2.innerHTML = resulNompere[1]


     at[4].innerHTML = resulPhotoEnfant[2] ; 
     at[5].innerHTML = resulPhotopere[2] ; 
     pere_name3.innerHTML = resulNomEnfant[2]
     enfant_name3.innerHTML = resulNompere[2] 



    let sideListe = '' ;
    for(users in data){
      sideListe += `
         <div class="attent d-flex align-middle mt-3">
            <img class="rounded" src="${data[users].photoPere}" alt="">
            <p class="mt-4 text fs-5 mx-3">${data[users].NomPere}</p>
         </div>
          ` ; 
    }

    sideliste.innerHTML = sideListe;




 })

}, 500);





 window.addEventListener("load", () => {
   autoSlide();
})

function autoSlide() {
   setInterval(() => {
      slide(getItemActiveIndex() + 1);
   }, 6000); // slide speed = 3s
}

function slide(toIndex) {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");

   // check if toIndex exceeds the number of carousel items
   if (toIndex >= itemsArray.length) {
      toIndex = 0;
   }

   const newItemActive = itemsArray[toIndex];

   // start transition
   newItemActive.classList.add("carousel_item__pos_next");
   setTimeout(() => {
      newItemActive.classList.add("carousel_item__next");
      itemActive.classList.add("carousel_item__next");
   }, 20);

   // remove all transition class and switch active class
   newItemActive.addEventListener("transitionend", () => {
      itemActive.className = "carousel_item";
      newItemActive.className = "carousel_item carousel_item__active";
   }, {
      once: true
   });
}

function getItemActiveIndex() {
   const itemsArray = Array.from(document.querySelectorAll(".carousel_item"));
   const itemActive = document.querySelector(".carousel_item__active");
   const itemActiveIndex = itemsArray.indexOf(itemActive);
   return itemActiveIndex;
} 