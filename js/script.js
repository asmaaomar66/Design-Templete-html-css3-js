// check if there's local storage color option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null){


    //console.log('local storage is not empty. you can set color on root now');
    //console.log(localStorage.getItem("color_option"));


    document.documentElement.style.setProperty('--main--color', mainColors);
    
    //remove active class from all color list items
    document.querySelectorAll(".colorsList li").forEach(element => {
    element.classList.remove("active");

    //add class active on element with data-color  === local storage item

    if(element.dataset.color === mainColors){

        // add active class 

        element.classList.add("active");
    }
    });

}


//random background option 
let backgroundOption = true ;

//variable to control background interval
let controlInterval;

//check there's local storage random background item

let backgroundLocalItem = localStorage.getItem("background_option");

//check if random background local storage is not empty 

if (backgroundLocalItem !== null){
    if(backgroundLocalItem === 'true'){
        backgroundOption = true;


    }else{

        backgroundOption = false;


    }

    //remove active class from all spans

    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");

    });

    if(backgroundLocalItem === 'true'){

        document.querySelector(".random-background .yes").classList.add("active");
    
    }else{
        document.querySelector(".random-background .no").classList.add("active");
    }
}

// toggel spin class icon
document.querySelector(".toggle-setting .fa-gear").onclick = function() {
    //toggel class fa-spin for rotation on self
    this.classList.toggle("fa-spin");
    //toggel class open on main setting box
    document.querySelector(".setting-box").classList.toggle("open");
};




//switch colors
const colorsLi = document.querySelectorAll(".colorsList li");
// loop on all list items
colorsLi.forEach(li => {
    //loop on list item
    li.addEventListener("click", (e) => {
        //set color on root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        // set color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);
        //remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // add active class on self
        e.target.classList.add("active");
    });
});



//switch random background option
const randomBackgroundEl = document.querySelectorAll(".random-background span");
// loop on all spans
randomBackgroundEl.forEach(span => {
    //loop on every span 
    span.addEventListener("click", (e) => {
        
        //remove active class from all span
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // add active class on self
        e.target.classList.add("active");

        if(e.target.dataset.background === 'yes'){
            backgroundOption = true;

            randomizeImgs();

            localStorage.setItem("background_option" , true);

        }else {

            backgroundOption = false;

            clearInterval(controlInterval);

            localStorage.setItem("background_option" , false);


        }
    });

});


// select landing page element
let landingPage = document.querySelector(".landing-page");



// accesories img 
let accesoriesImg = document.querySelector(".image-box");



// get array of imgs  accesories
let accesoriesImageArray = ["plant1.jpg" , "plant10.jpg" , "plant-03.jpg" , "acces-08.jpg" , "acces-07.jpg" , "acces-06.jpg" , "acces-05.jpg" , "acces-04.jpg" , "acces-03.jpg" , "acces-02.jpg" , "acces-01.jpg"]



// get array of imgs
let imgsArray = ["plant-04.jpg" , "plant-060.jpg" , "plant-070.jpg" , "plant-040.jpg" ,"plant-010.jpg" , "plant-020.jpg"]




// set iterval random img
setInterval(() => {

    //get random number
    let randomNumberImg = Math.floor(Math.random() * accesoriesImageArray.length);

    //change accesories img url
    
    accesoriesImg.style.backgroundImage = 'url("imgs/' + accesoriesImageArray[randomNumberImg] + '")';
}, 10000);



//function to randomize imgs 

function randomizeImgs () {

    if(backgroundOption === true){

            controlInterval = setInterval(() => {

            //get random number
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
            // change background img url 
            landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

        }, 10000);

    }
}



//select skills selector 

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    //skills offset top

    let skillOffsetTop = ourSkills.offsetTop;

    //skills outer height (offsetHeight)=> HtmlElement read only property calculat hight by pixels for specific element include border , padding 

    let skillsOuterHeight = ourSkills.offsetHeight;

    //window height (window.innerHeight) => read only property return height of my window or all layout of window by pixels include height of scrollbar *شاشة اللاب او الموبايل اللي بتعرض فيه يعني  هو ده الwindow اللي تقصده ^^  * 

    let windowHeight = this.innerHeight;


    // window scrollTop => ده الجزء اللي بعمل فيه اسكرول^^

    let windowScrollTop = this.pageYOffset;

    if(windowScrollTop > (skillOffsetTop + skillsOuterHeight - windowHeight)){

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;

        });
    }

}


// creat popup with the image
let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach(img => {

    img.addEventListener('click', (e) => {
        
        // create overlay element
        let overlay = document.createElement("div");

        //add class to overlay 
        overlay.className = 'popup-overlay';

        //append overlay to the body
        document.body.appendChild(overlay);

        //create popup box
        let popupBox = document.createElement("div");

        //add class to popup box
        popupBox.className = 'popup-box';

        if(img.alt !== null){

            //create heading
            let imgHeading = document.createElement("h3");
            
            //create text for heading
            let imgText = document.createTextNode(img.alt);

            //append text to heading
            imgHeading.appendChild(imgText);

            //append heading to popup-box
            popupBox.appendChild(imgHeading);

        }

        //create image 
        let popupImage = document.createElement("img");

        //set image source 
        popupImage.src = img.src;

        //add image to popup box
        popupBox.appendChild(popupImage);

        //append the popup box to body 
        document.body.appendChild(popupBox);

        //create close span
        let closeSpan = document.createElement("span");

        //create closeSpan text
        let closeSpanText = document.createTextNode("X");

        //append text to close span
        closeSpan.appendChild(closeSpanText);

        //add class to close span 
        closeSpan.className = 'close-span';

        //append close span to popup box
        popupBox.appendChild(closeSpan);


    });
});

//close popup
document.addEventListener("click", function (e){
    
    if(e.target.className == 'close-span') {

        //close current popup
        e.target.parentNode.remove();

        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
});