"use strict";

const navBar = document.querySelector('.NavBar');
const Name = document.querySelector('.header-title').lastChild;
const line = document.querySelectorAll('.line');

// toogle menu for nav bar

navBar.addEventListener('click',() =>{
    line.forEach(item =>{
        item.classList.toggle('bar');
    })
});

// website preloader function
    let loader = document.getElementById('preLoader');
   window.addEventListener('load', ()=>{
    setTimeout(()=>{
        loader.style.display = "none";
    },2000)
   });
   
// onload funtion for text wrapping
window.onload = ()=>{

    const element = ['Web designer','Web developer'];
    const color = ['#a005a0','#036cd6'];
    // timer for speed
    const timer = 40;
    // declare set interval for running it continuously
    let textMove = setInterval(mainFunction, timer);
    // Initializing the Name element's innerHTML to an empty string
    Name.innerHTML= '';
    let count = 0;
    let countForColor = 1;
    let elementCount = 0;
    // Creating an array of characters from the element array
    let nameArray = Array.from(element[elementCount]);
    function mainFunction(){
        // adding each character from the array into the span tag
        Name.textContent += nameArray[count];
        count++;
        // if full name is appeared then reset it
        if(count == nameArray.length){
            // clear the set interval 
            clearInterval(textMove);
            count = 0;
            //set another SetInterVal after a second
            setTimeout(function() {
            // Creating a setInterval to call removeText function every 40ms
               const remove = setInterval(function(){removeText(remove)}, timer);
            }, 1000);
        }
    }

    function removeText(remove){
            // Getting the text content of Name element
        let content = Name.textContent;
        // Removing the last character from the text content
        let mainContent = content.slice(0,-1);
        // console.log(content.length)
        Name.textContent = mainContent;
         // If text content is empty, clear the setInterval and restart the process
        if(mainContent.length == 0){
            clearInterval(remove);
            // If the elementCount is at the last index, reset it to 0, otherwise increment it
            if(elementCount == 1){
                elementCount = 0;
                nameArray = Array.from(element[elementCount]);
            }else{
                elementCount++;
                nameArray = Array.from(element[elementCount]);
            }
            // adding color each time when it begins
            Name.style.color = color[countForColor];
            countForColor++
            if(countForColor == color.length){
                countForColor = 0;
            }
            // now restart the whole function   
            textMove = setInterval(mainFunction, timer);
        }
    }
};

// function for those page which is still under development
function underDevelopment(event){
    event.preventDefault();
    alert('This page is still under development!');
}

// Skill data array containing information for each skill
const skills = [
    { id: "html_count", barClass: "html", target: 85, count: { value: 0 }, barCount: { value: 0 } },
    { id: "css_count", barClass: "css", target: 80, count: { value: 0 }, barCount: { value: 0 } },
    { id: "bootstrap_count", barClass: "bootstrap", target: 75, count: { value: 0 }, barCount: { value: 0 } },
    { id: "js_count", barClass: "js", target: 70, count: { value: 0 }, barCount: { value: 0 } },
    { id: "tailwind_count", barClass: "tailwind", target: 10, count: { value: 0 }, barCount: { value: 0 } },
    { id: "react_count", barClass: "react", target: 5, count: { value: 0 }, barCount: { value: 0 } },
  ];
  
  // Loop through each skill and set up countdowns for skill count and progress bar
  skills.forEach(skill => {
    // Get the HTML element for the skill count
    const countItem = document.getElementById(skill.id);
    // Get the HTML element for the progress bar
    const progressBar = document.querySelector(`.${skill.barClass}`);
    
    // Set up interval for counting skill percentage
    const countInterval = setInterval(() => {
        if(countItem.id === "tailwind_count" || countItem.id === "react_count"){
            countItem.textContent = '';
        }else{
            skill.count.value++;
            countItem.textContent = skill.count.value + "%";
        }
      
      // Clear the interval and reset count if target is reached
      if (skill.count.value === skill.target) {
        clearInterval(countInterval);
        skill.count.value = 0;
      }
    }, 10);
    
    // Set up interval for updating progress bar width
    const barInterval = setInterval(() => {
      skill.barCount.value++;
      progressBar.style.width = skill.barCount.value + "%";
      
      // Clear the interval and reset bar count if target is reached
      if (skill.barCount.value === skill.target) {
        clearInterval(barInterval);
        skill.barCount.value = 0;
      }
    }, 10);
  });


// service card popup box code

const popupContents = [
    {   'id': 'figmaToHtml',
        'content': `<h4 class="text-center text-uppercase">Figma To HTML</h3>
        <h6 class="text-start text-uppercase fw-bold">What You Will Get:</h6>
        <div class="list_box">
          <ul class="text-start navbar-nav">
            <li><i class="fa-solid fa-circle-check"></i>HTML5</li>
            <li><i class="fa-solid fa-circle-check"></i>CSS3</li>
            <li><i class="fa-solid fa-circle-check"></i>Letest Bootstrap</li>
            <li><i class="fa-solid fa-circle-check"></i>Javascript ES6</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Responsive</li>
            <li><i class="fa-solid fa-circle-check"></i>Pixel Perfect Conversion</li>
            <li><i class="fa-solid fa-circle-check"></i>Semantic Markup</li>
            <li><i class="fa-solid fa-circle-check"></i>W3C validated Code</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Hand coded</li>
          </ul>
          <button class="btn m-auto mt-3 mb-1 btn-primary w-100" id= "close">Close</button>
        </div>`
    },

    {   'id': 'psdToHtml',
        'content': `<h4 class="text-center text-uppercase">PSD To HTML</h3>
        <h6 class="text-start text-uppercase fw-bold">What You Will Get:</h6>
        <div class="list_box">
          <ul class="text-start navbar-nav">
            <li><i class="fa-solid fa-circle-check"></i>HTML5</li>
            <li><i class="fa-solid fa-circle-check"></i>CSS3</li>
            <li><i class="fa-solid fa-circle-check"></i>Letest Bootstrap</li>
            <li><i class="fa-solid fa-circle-check"></i>Javascript ES6</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Responsive</li>
            <li><i class="fa-solid fa-circle-check"></i>Pixel Perfect Conversion</li>
            <li><i class="fa-solid fa-circle-check"></i>Semantic Markup</li>
            <li><i class="fa-solid fa-circle-check"></i>W3C validated Code</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Hand coded</li>
          </ul>
          <button class="btn m-auto mt-3 mb-1 btn-primary w-100" id= "close">Close</button>
        </div>`
    },

    {   'id': 'responsiveDesign',
        'content': `<h4 class="text-center text-uppercase">Responsive Design</h3>
        <h6 class="text-start text-uppercase fw-bold">What You Will Get:</h6>
        <div class="list_box">
          <ul class="text-start navbar-nav">
            <li><i class="fa-solid fa-circle-check"></i>CSS3</li>
            <li><i class="fa-solid fa-circle-check"></i>Letest Bootstrap</li>
            <li><i class="fa-solid fa-circle-check"></i>Tailwind CSS</li>
            <li><i class="fa-solid fa-circle-check"></i>CSS Media Query</li>
            <li><i class="fa-solid fa-circle-check"></i>Semantic Markup</li>
          </ul>
          <button class="btn m-auto mt-3 mb-1 btn-primary w-100" id= "close">Close</button>
        </div>`
    },

    {   'id': 'customization',
        'content': `<h4 class="text-center text-uppercase">Website <br> Customization</h3>
        <h6 class="text-start text-uppercase fw-bold">What You Will Get:</h6>
        <div class="list_box">
          <ul class="text-start navbar-nav">
            <li><i class="fa-solid fa-circle-check"></i>HTML5</li>
            <li><i class="fa-solid fa-circle-check"></i>CSS3</li>
            <li><i class="fa-solid fa-circle-check"></i>Letest Bootstrap</li>
            <li><i class="fa-solid fa-circle-check"></i>Javascript ES6</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Responsive</li>
            <li><i class="fa-solid fa-circle-check"></i>Pixel Perfect Conversion</li>
            <li><i class="fa-solid fa-circle-check"></i>Semantic Markup</li>
            <li><i class="fa-solid fa-circle-check"></i>W3C validated Code</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Hand coded</li>
          </ul>
          <button class="btn m-auto mt-3 mb-1 btn-primary w-100" id= "close">Close</button>
        </div>`
    },

    {   'id': 'customDesign',
        'content': `<h4 class="text-center text-uppercase">Custom Design</h3>
        <h6 class="text-start text-uppercase fw-bold">What You Will Get:</h6>
        <div class="list_box">
          <ul class="text-start navbar-nav">
            <li><i class="fa-solid fa-circle-check"></i>HTML5</li>
            <li><i class="fa-solid fa-circle-check"></i>CSS3</li>
            <li><i class="fa-solid fa-circle-check"></i>Letest Bootstrap</li>
            <li><i class="fa-solid fa-circle-check"></i>Javascript ES6</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Responsive</li>
            <li><i class="fa-solid fa-circle-check"></i>Pixel Perfect Conversion</li>
            <li><i class="fa-solid fa-circle-check"></i>Semantic Markup</li>
            <li><i class="fa-solid fa-circle-check"></i>W3C validated Code</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Hand coded</li>
          </ul>
          <button class="btn m-auto mt-3 mb-1 btn-primary w-100" id= "close">Close</button>
        </div>`
    },

    {   'id': 'wpTheme',
        'content': `<h4 class="text-center text-uppercase">Wordpress Theme <br> Customization</h3>
        <h6 class="text-start text-uppercase fw-bold">What You Will Get:</h6>
        <div class="list_box">
          <ul class="text-start navbar-nav">
            <li><i class="fa-solid fa-circle-check"></i>Custom HTML5</li>
            <li><i class="fa-solid fa-circle-check"></i>Custom CSS3</li>
            <li><i class="fa-solid fa-circle-check"></i>WordPress landing page design</li>
            <li><i class="fa-solid fa-circle-check"></i> Modern landing page</li>
            <li><i class="fa-solid fa-circle-check"></i> Full Website Creation</li>
            <li><i class="fa-solid fa-circle-check"></i>Demo And Contents Upload</li>
            <li><i class="fa-solid fa-circle-check"></i>Contact Form</li>
            <li><i class="fa-solid fa-circle-check"></i>Design Website using Elementor</li>
            <li><i class="fa-solid fa-circle-check"></i>100% Responsive</li>
          </ul>
          <button class="btn m-auto mt-3 mb-1 btn-primary w-100" id= "close">Close</button>
        </div>`
    }
];

const card = document.querySelectorAll('.card');
const popupBox = document.querySelector('.popup_box');

const popupContentTags = ['figmaToHtml','psdToHtml','responsiveDesign','customization','customDesign','wpTheme'];

card.forEach(item =>{
    item.addEventListener('click',()=>{
       let att = item.parentNode.getAttribute('data-item');
       for(let i = 0; i<popupContentTags.length; i++){
        if(att == popupContentTags[i] && att == popupContents[i].id){
            if(popupContents[i].id == 'wpTheme'){
                popupBox.style.width = 'max-content';
            }else{
                popupBox.style.width = '280px';
            }
            popupBox.innerHTML = popupContents[i].content;
            popupBox.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.getElementById('close').onclick = ()=>{
                popupBox.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            window.addEventListener("click",()=>{
                popupBox.style.display = 'none';
                document.body.style.overflow = 'auto';
            })
        }
       }
    })
});

const trigger = document.querySelector('.trigger_button');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 700){
        trigger.classList.add('active_trigger');
        trigger.classList.remove('hide_trigger');
    }else{
        trigger.classList.remove('active_trigger');
        trigger.classList.add('hide_trigger');
    }
});

const fullImage = document.querySelector('.img_container');
const imgMainTag = document.getElementById('img-tag');
const demo  = document.querySelector('.demo');
const closeImg = document.getElementById('x-mark');
const img = document.querySelectorAll('.img-container');
let imgLink;
const projectLink = document.querySelector('.project-link');

img.forEach(eachImg => {
    eachImg.addEventListener('click', ()=>{
        let imgSrc = eachImg.firstElementChild.src;
            imgLink = eachImg.getAttribute('data-link');
            if(eachImg.getAttribute('data-link') == 'travel'){
                projectLink.href = '#';
                projectLink.setAttribute('id', 'notLive');
            }else{
                projectLink.href = `https://hasinur3813.github.io/${imgLink}`;
            }
        fullImage.style.opacity = '1';
        fullImage.style.pointerEvents = 'auto';

        imgMainTag.src = imgSrc;
        document.body.style.overflow = 'hidden';
    })
});

function checkLink(event){
    let href = projectLink.getAttribute('href');
    if(href == '#'){
        event.preventDefault();
        projectLink.innerHTML = 'This project is not live yet!';
    }
}
closeImg.onclick = ()=>{
    projectLink.innerHTML = 'Show Live';
    fullImage.style.opacity = '0';
    document.body.style.overflow = 'auto';
    fullImage.style.pointerEvents = 'none';
};

const imgFilterBtn = document.querySelectorAll('.filterBtn');
const imgContainer = document.querySelector('.img-galary');

imgFilterBtn.forEach(item =>{
    item.addEventListener('click', function (){imgFilter(item)})
});

let itemText = document.createElement('h2');
    itemText.innerHTML = 'Sorry! no items found.';

function imgFilter(item) {
    for(let i = 0; i<imgFilterBtn.length; i++){
        imgFilterBtn[i].classList.remove('active-filter')
    }
    item.classList.add('active-filter');
  if (item.getAttribute('data-filter') == 'wordpress') {
    if (!imgContainer.contains(itemText)) {
      imgContainer.appendChild(itemText);
    }
  } else {
    if (imgContainer.contains(itemText)) {
      imgContainer.removeChild(itemText);
    }
  };

  for (let i = 0; i < img.length; i++) {
    if (item.getAttribute('data-filter') == 'all') {
      img[i].style.display = 'block';
    } else if (item.getAttribute('data-filter') != img[i].getAttribute('data-filter')) {
      img[i].style.display = 'none';
    } else {
      img[i].style.display = 'block';
    }
  }
};

const contactForm = document.getElementById('contact-form');
const formContent = document.querySelector('.form-content');
const messageBox = document.getElementById('message-box');
const closeMessage = document.getElementById('closeMessage');
const errorMessage = document.getElementById('errorMessage');
const formInput = document.querySelectorAll('.input-box input,.input-box')

const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const message = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');

function sendMessage(event,btn){
    
    if(fName.value.length > 0 && lName.value.length > 0 && email.value.length > 0 && message.value.length > 0){
            event.preventDefault();
            btn.innerHTML = 'Sending...'
            setTimeout(()=>{
                formContent.style.display = 'none';
                messageBox.style.display = 'block';

            },2000);
    }else{
        errorMessage.innerHTML = 'All fields are required!';
        setTimeout(()=>{
            errorMessage.innerHTML = '';
        },2000)
    }
};

function closeMessageBox(event){
    event.preventDefault();
    sendBtn.innerHTML = 'Send';
    formContent.style.display = 'block';
    messageBox.style.display = 'none';
    for(let input of formInput){
        input.value = '';
    }
    message.value = ''
}
