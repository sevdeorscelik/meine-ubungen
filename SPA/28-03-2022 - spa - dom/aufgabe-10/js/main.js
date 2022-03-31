//navs
const navHomeElem = document.querySelector('#home')
const navInfoElem = document.querySelector('#info')
const navReportElem = document.querySelector('#report')
const navAboutElem = document.querySelector('#about')

//pages
const pageHomeElem = document.querySelector('.home-page')
const pageInfoElem = document.querySelector('.info-page')
const pageReportElem = document.querySelector('.report-page')
const pageAboutElem = document.querySelector('.about-page')

hideAllPages()
pageHomeElem.style.display = 'block'

navHomeElem.addEventListener('click', ()=>{
    hideAllPages()
    pageHomeElem.style.display = 'block'
    
})
navInfoElem.addEventListener('click', ()=>{
    hideAllPages()
    pageInfoElem.style.display  = 'block'
    
})
navReportElem.addEventListener('click', ()=>{
    hideAllPages()
    pageReportElem.style.display = 'block'
    
})
navAboutElem.addEventListener('click', ()=>{
    hideAllPages()
    pageAboutElem.style.display  = 'block'
})



function hideAllPages(){
    pageHomeElem.style.display = 'none'
    pageInfoElem.style.display = 'none'
    pageReportElem.style.display = 'none'
    pageAboutElem.style.display = 'none'
}



