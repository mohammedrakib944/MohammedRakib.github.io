    // navigation
    window.addEventListener("scroll", navFunction); 
    function navFunction(){
        let navigation = document.querySelector(".navUl");
        let navPosition = navigation.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;
        if(navPosition<screenPosition){
            navigation.classList.add('newnavUl');
        }
        if(navPosition>screenPosition){
            navigation.classList.remove('newnavUl');
        }
    }

    //about section
    window.addEventListener("scroll",function aboutFunction(){
        let aboutSec = document.querySelector(".about-section");
        let aboutPosition = aboutSec.getBoundingClientRect().top;
        let screenPosition = window.innerHeight/1.3;

        if(aboutPosition<screenPosition){
            aboutSec.classList.add("newAboutSec");
        }
    });

    //emoji face
    window.addEventListener("scroll", function newFace(){
        let face = document.querySelector(".face");
        let facePosition = face.getBoundingClientRect().top;
        let screenPosition = window.innerHeight/1.2;

        if(facePosition<screenPosition){
            face.classList.add("newFace");
        }
    });

    //clock section
    window.addEventListener("scroll", function newClock(){
        let clock = document.querySelector(".clock");
        let clockPosition = clock.getBoundingClientRect().top;
        let screenPosition = window.innerHeight/1.4;

        if(clockPosition<screenPosition){
            clock.classList.add("newClock");
        }
    });