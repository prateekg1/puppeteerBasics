const puppeteer = require("puppeteer")
let page
console.log("Before")
const browserOpenpromise = puppeteer.launch({
    headless:false,
    slowMo: 250,
    defaultViewport: null,
    args:["--start-maximized"],
})
browserOpenpromise
.then(function(browser){
    let pagesArrpromise = browser.pages()
    return pagesArrpromise
}).then(function(browserPages){
    page =  browserPages[0]
    let gotoPromise = page.goto("https://google.com/")
    
    return gotoPromise
})
.then(function(){
    // waiting for element to appear on page
    let elementWaitPromise = page.waitForSelector("#APjFqb", {visible: true})
    return elementWaitPromise
}).then(function (){
  //  console.log("Reached google home page ")
  //  type any element on that page -> selector
  let keysWillBeSendPromise = page.type("#APjFqb","pepcoding")
  return keysWillBeSendPromise
}).then(function(){
    // page.keyboard is used to type special character
    let enterWillBePressed = page.keyboard.press("Enter")
    return enterWillBePressed
}).then(function(){
    let elementWaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible : true})
    return elementWaitPromise
}).then(function(){
    let keysWillBeSendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md","pepcoding")
    return keysWillBeSendPromise
})

.catch(function(err){
    console.log(err)
})
console.log("After")
