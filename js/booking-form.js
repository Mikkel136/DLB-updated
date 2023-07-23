/*
    THIS IS A VISUAL PROTOTYPE! NONE OF THIS ACTUALLY WORKS OR IS READY FOR PRODUCTION!
    This has been coded the way it is to simulate the user journeny from a design perspective. The right way to do this would be through PHP and databases, but we're not touching that in this project.
*/


// Make the "Projekttype" buttons appear to work

function selectProjectType(element) {
    element.classList.toggle("active");     /* This took me forever to figure out, BUT YOU CAN PASS THE CURRENT ELEMENT AS AN ARGUMENT?!!? Wish I knew earlier!!!! 😫😭😭😭😭😭 */
}


// End of user journey - after clicking on the "Submit" button

/* 
    I cannot do a function based on an onClick trigger because the page refreshes when submitting the form, 
    so I had to Google my way out of reading data from the address bar with JS.
        https://ui.dev/get-current-url-javascript
*/


// This part checks selected "Meeting Type"

var checkUrl = window.location.search;      // "Graps all "search" terms from the address bar
var params = new URLSearchParams(checkUrl);      // Starts query allowing us to lookup parameters in URL
let meetingType = params.get("meeting-type"); // Gets the correct parameters and saves it as variable


// If statement wrapping up user experience if the user has submitted to the form

if (meetingType != null ) {     /* Check if Meeting Type is defined. If it is, execute below */
    const testValue = document.querySelector("#booking-system form.container");

    // Define custom message based off of Meeting Type

    if (meetingType === "at-dlb") {
        var meetingTypeMessage = "Vi ser frem til dit besøg på vores kontor i Holbæk!"
    }
    else if (meetingType === "at-client") {
        var meetingTypeMessage = "Vi ser frem til at mødes på din oplyste adresse!"
    }
    else {
        var meetingTypeMessage = "Vi ser frem til at mødes med dig!"
    }

    testValue.innerHTML =   /* Modify HTML code of booking system */
    `
        <div class="complete">
            <img src="img/icons/checkmark.svg" alt="Flueben">
            <h1>Tusind tak! Dit møde er registreret.</h1>
            <p class="textbox">Du får en bekræftelse på din E-mail snarest. ${meetingTypeMessage}</p>
        </div>
    `
}
