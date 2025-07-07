  //  script for text

  const text = document.querySelector(".sec2");
    const textLoad = () => {
        setTimeout(() => {
           text.textContent ="front end developer";
        }, 0);

        setTimeout(() => {
          text.textContent ="chat bot developer";
       }, 4000);
      }
       textLoad();
      setInterval(textLoad , 8000);


         // script for animation 
const sr = ScrollReveal ({
  distance:"30px" ,
  duration: 1000 ,
  delay: 400,
  reset: false
})


sr.reveal('.first-container-home h1' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.first-container-home' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.first-container-home p' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.first-container-home .group-logo' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.second-container-home img' ,{delay: 200 , origin: 'left'}) 
 sr.reveal('#SERVICES' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.box-services' ,{delay: 300 , origin: 'top'}) 

sr.reveal('#projecte .t1' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.box-projecte' ,{delay: 300 , origin: 'top'}) 
sr.reveal('#EDUCATION h2' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.container-education' ,{delay: 300 , origin: 'bottom'}) 

sr.reveal('#contact h1' ,{delay: 200 , origin: 'top'}) 
sr.reveal('.conatiner-conatcte' ,{delay: 300 , origin: 'left'}) 


// const contactForm = document.getElementById('review');
// const msgcontact = document.getElementById('tt');

// const sendemail = (e) =>{
//  e.preventDefault()
// emailjs.sendForm('service_symimcd','template_qvqdyqk','#review','BHwjBClX4ICLqAq7x')
// .then(() => {
//     msgcontact.textContent = 'message sent successfully'
//     setTimeout(() =>{
//         msgcontact.textContent = ''
//     },5000)
// contactForm.reset()
// })
// }
// contactForm.addEventListener('submit',sendemail)

const icon = document.querySelector(".bar i");
const list = document.querySelector("nav");
const links = document.querySelectorAll("nav ul li a"); // Tous les liens du menu

// Clic sur l'icône hamburger
icon.onclick = () => {
  icon.classList.toggle('fa-xmark'); // Bascule l'icône
  list.classList.toggle('active');   // Affiche / cache le menu
};

// Clic sur un lien du menu : on ferme le menu
links.forEach(link => {
  link.onclick = () => {
    icon.classList.remove('fa-xmark'); // Restaure l'icône hamburger
    list.classList.remove('active');   // Cache le menu
  };
});
  
  