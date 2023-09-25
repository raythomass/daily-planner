// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");
var timeClass = document.querySelectorAll(".time-count");
var today = dayjs();

var nineAmTime = document.getElementById('nine-am');
var tenAmTime = document.getElementById('ten-am');
var elevenAmTime = document.getElementById('eleven-am');
var noonTime = document.getElementById('noon');
var onePmTime = document.getElementById('one-pm');
var twoPmTime = document.getElementById('two-pm');
var threePmTime = document.getElementById('three-pm');
var fourPmTime = document.getElementById('four-pm');
var fivePmTime = document.getElementById('five-pm');

var nineAmDiv = document.getElementById('nine-am-div');
var tenAmDiv = document.getElementById('ten-am-div');
var elevenAmDiv = document.getElementById('eleven-am-div');
var noonDiv = document.getElementById('noon-div');
var onePmDiv = document.getElementById('one-pm-div');
var twoPmDiv = document.getElementById('two-pm-div');
var threePmDiv = document.getElementById('three-pm-div');
var fourPmDiv = document.getElementById('four-pm-div');
var fivePmDiv = document.getElementById('five-pm-div');

var nineAmBtn = document.getElementById('btn-nine-am');
var tenAmBtn = document.getElementById('btn-ten-am');
var elevenAmBtn = document.getElementById('btn-eleven-am');
var noonBtn = document.getElementById('btn-noon');
var onePmBtn = document.getElementById('btn-one-pm');
var twoPmBtn = document.getElementById('btn-two-pm');
var threePmBtn = document.getElementById('btn-three-pm');
var fourPmBtn = document.getElementById('btn-four-pm');
var fivePmBtn = document.getElementById('btn-five-pm');

var nineAmInput = document.querySelector('.description-1');
var tenAmInput = document.querySelector('.description-2');
var elevenAmInput = document.querySelector('.description-3');
var noonInput = document.querySelector('.description-4');
var onePmInput = document.querySelector('.description-5');
var twoPmInput = document.querySelector('.description-6');
var threePmInput = document.querySelector('.description-7');
var fourPmInput = document.querySelector('.description-8');
var fivePmInput = document.querySelector('.description-9');

// var timesOfDay = [
//   nineAm.textContent,
//   tenAm.textContent,
//   elevenAm.textContent,
//   nineAm.textContent,
//   onePm.textContent,
//   twoPm.textContent,
//   threePm.textContent,
//   fourPm.textContent,
//   fivePm.textContent,
// ]



$(currentDay).text(today.format('MMM DD, YYYY'));
$(currentTime).text(today.format('h:m A'))

var time = $(currentTime).text(today.format('h:m A'));


$(function checkTime() {
  if(nineAmTime.textContent < time){
    nineAmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(nineAmTime.textContent == time){
    nineAmDiv.classList.add("present");
  }
  else if(nineAmTime.textContent > time){
    nineAmDiv.classList.add("future");
  }
// -------------------------------------------------
  if(tenAmTime.textContent < time){
    tenAmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(tenAmTime.textContent == time){
    tenAmDiv.classList.add("present");
  }
  else if(tenAmTime.textContent > time){
    tenAmDiv.classList.add("future");
  }
  // -------------------------------------------------
  if(elevenAmTime.textContent < time){
    elevenAmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(elevenAmTime.textContent == time){
    elevenAmDiv.classList.add("present");
  }
  else if(elevenAmTime.textContent > time){
    elevenAmDiv.classList.add("future");
  }
  // -------------------------------------------------
  if(noonTime.textContent < time){
    noonDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(noonTime.textContent == time){
    noonDiv.classList.add("present");
  }
  else if(noonTime.textContent > time){
    noonDiv.classList.add("future");
  }
  // -------------------------------------------------
  if(onePmTime.textContent < time){
    onePmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(onePmTime.textContent == time){
    onePmDiv.classList.add("present");
  }
  else if(onePmTime.textContent > time){
    onePmDiv.classList.add("future");
  }
  // -------------------------------------------------
  if(twoPmTime.textContent < time){
    twoPmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(twoPmTime.textContent == time){
    twoPmDiv.classList.add("present");
  }
  else if(twoPmTime.textContent > time){
    twoPmDiv.classList.add("future");
  }
  // -------------------------------------------------
  if(threePmTime.textContent < time){
    threePmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(threePmTime.textContent == time){
    threePmDiv.classList.add("present");
  }
  else if(threePmTime.textContent > time){
    threePmDiv.classList.add("future");
  }
  // -------------------------------------------------
  if(fourPmTime.textContent < time){
    fourPmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(fourPmTime.textContent == time){
    fourPmDiv.classList.add("present");
  }
  else if(fourPmTime.textContent > time){
    fourPmDiv.classList.add("future");
  }
  // -------------------------------------------------
  if(fivePmTime.textContent < time){
    fivePmDiv.classList.add("past");
    // console.log("Linked");
  } 
  else if(fivePmTime.textContent == time){
    fivePmDiv.classList.add("present");
  }
  else if(fivePmTime.textContent > time){
    fivePmDiv.classList.add("future");
  }
  // -------------------------------------------------
});

nineAmBtn.addEventListener('click',function(){
  localStorage.setItem('nine-am', nineAmInput.value);
  if(nineAmInput.textContent === localStorage.getItem('nine-am', nineAmInput.value)){
    localStorage.removeItem('nine-am');
    nineAmInput.textContent = null;
    // console.log("same");
  }
});

tenAmBtn.addEventListener('click',function(){
  localStorage.setItem('ten-am', tenAmInput.value);
  if(tenAmInput.textContent === localStorage.getItem('ten-am', tenAmInput.value)){
    localStorage.removeItem('ten-am');
    tenAmInput.textContent = null;
    // console.log("same");
  }
});

elevenAmBtn.addEventListener('click',function(){
  localStorage.setItem('eleven-am', elevenAmInput.value);
  if(elevenAmInput.textContent === localStorage.getItem('eleven-am', elevenAmInput.value)){
    localStorage.removeItem('eleven-am');
    elevenAmInput.textContent = null;
    // console.log("same");
  }
});

noonBtn.addEventListener('click',function(){
  localStorage.setItem('noon', noonInput.value);
  if(noonInput.textContent === localStorage.getItem('noon', noonInput.value)){
    localStorage.removeItem('noon');
    noonInput.textContent = null;
    // console.log("same");
  }
});

onePmBtn.addEventListener('click',function(){
  localStorage.setItem('one-pm', onePmInput.value);
  if(onePmInput.textContent === localStorage.getItem('one-pm', onePmInput.value)){
    localStorage.removeItem('one-pm');
    onePmInput.textContent = null;
    // console.log("same");
  }
});

twoPmBtn.addEventListener('click',function(){
  localStorage.setItem('two-pm', twoPmInput.value);
  if(twoPmInput.textContent === localStorage.getItem('two-pm', twoPmInput.value)){
    localStorage.removeItem('two-pm');
    twoPmInput.textContent = null;
    // console.log("same");
  }
});

threePmBtn.addEventListener('click',function(){
  localStorage.setItem('three-pm', threePmInput.value);
  if(threePmInput.textContent === localStorage.getItem('three-pm', threePmInput.value)){
    localStorage.removeItem('three-pm');
    threePmInput.textContent = null;
    // console.log("same");
  }
});

fourPmBtn.addEventListener('click',function(){
  localStorage.setItem('four-pm', fourPmInput.value);
  if(fourPmInput.textContent === localStorage.getItem('four-pm', fourPmInput.value)){
    localStorage.removeItem('four-pm');
    fourPmInput.textContent = null;
    // console.log("same");
  }
});

fivePmBtn.addEventListener('click',function(){
  localStorage.setItem('five-pm', fivePmInput.value);
  if(fivePmInput.textContent === localStorage.getItem('five-pm', fivePmInput.value)){
    localStorage.removeItem('five-pm');
    fivePmInput.textContent = null;
    // console.log("same");
  }
});

$(function getItemsOnRefresh() {
  localStorage.getItem('nine-am', nineAmInput.value);
});


$(window).on('load', function(){
  nineAmInput.textContent = localStorage.getItem('nine-am',nineAmInput.value );
  tenAmInput.textContent = localStorage.getItem('ten-am',tenAmInput.value );
  elevenAmInput.textContent = localStorage.getItem('eleven-am',elevenAmInput.value );
  noonInput.textContent = localStorage.getItem('noon',noonInput.value );
  onePmInput.textContent = localStorage.getItem('one-pm',onePmInput.value );
  twoPmInput.textContent = localStorage.getItem('two-pm',twoPmInput.value );
  threePmInput.textContent = localStorage.getItem('three-pm',threePmInput.value );
  fourPmInput.textContent = localStorage.getItem('four-pm',fourPmInput.value );
  fivePmInput.textContent = localStorage.getItem('five-pm',fivePmInput.value );
});


