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



// select landing page element
let landingPage = document.querySelector(".landing-page");
// get array of imgs
let imgsArray = ["plant-04.jpg" , "plant-060.jpg" , "plant-070.jpg" , "plant-040.jpg" ,"plant-010.jpg" , "plant-020.jpg"]
setInterval(() => {
    //get random number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    // change background img url 
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
}, 10000);