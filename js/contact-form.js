/*
    THIS IS A VISUAL PROTOTYPE! NONE OF THIS ACTUALLY WORKS OR IS READY FOR PRODUCTION!
    This has been coded the way it is to simulate the user journeny from a design perspective. The right way to do this would be through PHP and databases, but we're not touching that in this project.
*/


// This part checks the URL to see if the user submitted something

var checkUrl = window.location.search;      // "Graps all "search" terms from the address bar
var params = new URLSearchParams(checkUrl);      // Starts query allowing us to lookup parameters in URL
let message = params.get("message"); // Gets the "Message" content and saves it as variable


// This part finishes the User Journey (on the contact page) only if the user tapped "Send" with data available in the URL

if (message != null ) {     /* Check if Meeting Type is defined. If it is, execute below */
    const contactForm = document.querySelector("#contact-form");
    contactForm.innerHTML =   /* Modify HTML code of booking system */
    `
        <div class="complete">
            <img src="img/icons/checkmark.svg" alt="Flueben">
            <h1>Tak! Det er modtaget.</h1>
            <p class="textbox">Vi vender tilbage til din henvendelse så hurtigt som muligt.</p>
        </div>
    `
}
