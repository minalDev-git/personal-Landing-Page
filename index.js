window.addEventListener('scroll',
    function () {
        const navbar = this.document.getElementById('navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        }
        else {
            navbar.classList.remove('scrolled');
        }
    }
);
window.addEventListener("DOMContentLoaded", function () {
    let contactform = document.getElementById("contact");
    contactform.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.getElementById("name");
        let useremail = document.getElementById("email");
        let subject = document.getElementById("subject");
        let msg = document.getElementById("message");
        if (username.value == "" || useremail.value == "" || msg == "") {
            alert("Ensure you input a value in both fields!");
        } else {
            document.getElementById("btn").innerHTML="Message Sent";
            alert("This form has been successfully submitted!");
            let credentials = {
                "name" : username.value,
                "email" : useremail.value,
                "subj" :   subject.value,
                "message" : msg.value,
            };
            console.log(credentials);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const phrases=["Web Developer","Coder","Student"];
    const writingCursor = document.getElementById("typing");
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const pauseBetweenPhrases = 2000;
    
    function type() {
        if (currentCharIndex < phrases[currentPhraseIndex].length && !isDeleting) {
            writingCursor.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type,typingSpeed);
        }
        else if (isDeleting){
            writingCursor.textContent = phrases[currentPhraseIndex].substring(0,currentCharIndex);
            currentCharIndex--;
            if (currentCharIndex < 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                setTimeout(type,typingSpeed);
            }
            else{
                setTimeout(type,erasingSpeed);
            }
        }
        else{
            isDeleting = true;
            setTimeout(type,pauseBetweenPhrases);
        }
    }
    type();
});