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
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color)
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