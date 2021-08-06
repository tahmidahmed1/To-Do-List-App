/*
Name: Tahmid Ahmed
Date: Februray 21st, 2019
Program: To-Do List App

RandomNumbers is found on line 219.
Decision structures is found in all the functions and some onEvents.
While loop is found on line 145.
For loops are found on lines 218 and 469.
Arrays are found on lines 27-30 and 51-54.
Functions are found starting at like 437.
Functions with return values is found on line 441 and more throughout code.
Array of objects is found on line 360 and throughout the code.
Complex Boolean Logic is found on lines 140-154.
Key events are found on lines 156-185.
*/

//DECLARING ALL GLOBAL VARIABLES:

//Here we are setting our global variables which are our arrays.
var users=[];

//This is for you Ms. Lal we saved 1 as username and password so you don't have to create a new 8 digit long password each time you login.
var usernames=[1];
var passwords=[1];

//Here we are creating a global variable which will users create random passwords.
var passGen="";

//Here we are getting the current date.
var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var dateTime = date ;

//Drop down code.
var dDValue;

//Declare seperate counter-variables for speperate arrays.
var uCurrIndex=0;
var cCurrIndex=0;
var dCurrIndex=0;
var doneCurrIndex=0;

//Declare all lists.
var urgentList = [];
var comingUpList = [];
var distantList = [];
var doneList= [];

//Individual bulletpoints that will be later added to one of the lists above.
var bullet ={};
bullet.toDo ;
bullet.dueDate ;


//SETTING ALL UI ELEMENTS:

//Here we are hiding the wrong password text until it has been called in our program.
hideElement("lbSlLbError");

//Here we are setting the background images of our screens.
setProperty("scrLogin","image","http://www.portoalegre.travel/upload/b/45/452395_inspirational-quotes-desktop-wallpaper.jpg");
setProperty("scrWelcome", "image", "https://s3.envato.com/files/224077567/1.%20Splash-1.png");
setProperty("scrLogout","image", "http://www.ville-saintnicolas.com/wp-content/uploads/2017/10/1297333137000_ORIGINAL.jpg");
setProperty("scrSignup", "image", "http://vivalifestyleandtravel.com/cached/download/v1479241358/vivafront/dfuhimmd9orhja0myayp.jpg");
setProperty("scrToDoList","image", "https://cdn.neow.in/news/images/uploaded/2016/07/1467855361_mozilla-context-graph_story.jpg");
setProperty("scrUrgent", "image", "https://i.ytimg.com/vi/Cv-PnPQ4DgY/maxresdefault.jpg");
setProperty("scrComingUp", "image","https://media.idownloadblog.com/wp-content/uploads/2016/02/Firewatch-iPhone-Wallpaper-orange.jpg");
setProperty("scrDistant", "image","https://www.pixelstalk.net/wp-content/uploads/2016/04/Everest-minimalist-wallpaper-light-620x388.png");
setProperty("scrDone","image","https://i.pinimg.com/originals/ab/26/b3/ab26b3739aee9bc1f4c9dcf0c795ae07.jpg");
setProperty("scrListCreation", "image", "https://i.pinimg.com/originals/bb/97/7b/bb977b16f01d5cd8bc6aa6e31f762e1a.png");

//Show Time UI.
setText("timeScrUrgent", dateTime);
setText("timeScrComingUp",dateTime);
setText("timeScrDistant",dateTime);
setText("timeScrDone",dateTime);
setText("lbStoDoListDate", dateTime);

//Here we are creating buttons for our welcome screen to go to either login or signup screen.
button("btnSwBtnLogin", "Login or press L on your keyboard" );
button("btnSwBtnSignup", "Sign Up! or press S on your keyboard");

//Here we are setting the position of where the buttons on the welcome screen will go.
setPosition("btnSwBtnLogin", 30, 340, 100, 85);
setPosition("btnSwBtnSignup", 190, 340,100, 85);

//Here we are setting the elements that will be hidden from view of the user.
hideElement("lbSloLbThx");
hideElement("btnSloBtnHome");
hideElement("invalidScrListCreation");

//ALL OUR OnEVENTS:

//Here the two events below we are setting the events that will take place once a button on the welcome screen in clicked.
onEvent("btnSwBtnLogin","click",function(){
  setScreen("scrLogin");
});

onEvent("btnSwBtnSignup","click",function(){
  setScreen("scrSignup");
});

//Here the two events below we are setting the events that will take place once a button on the signup screen in clicked.
onEvent("btnSsBtnBack", "click", function(){
  setScreen("scrWelcome");
});

onEvent("btnSsBtnSignup", "click", function(){
  var passLength=getText("tiSsTiPass");
  passLength=passLength.length;
  if (passLength == 8){
    setScreen("scrLogin");
    //Below we coded how to store information about a new user.
    var newUser = {};
    newUser.name = getText("tiSsTiName");
    newUser.email = getText("tiSsTiEmail");
    newUser.birthday = getText("tiSsTiDob");
    appendItem(usernames, getText("tiSsTiUser"));
    appendItem(passwords, getText("tiSsTiPass"));
    appendItem(users, newUser);
    console.log(users);
  //Setting what to show user if password too short or too long.
  }else if (passLength < 8){setText("passLengthError", "Enter a longer password");
  }else if (passLength > 8){setText("passLengthError", "Enter a shorter password");
  }
});

//Here the two events below we are setting the events that will take place once a button on the login screen in clicked.
onEvent("btnSlBtnBack", "click", function(){
  setScreen("scrWelcome");
});

onEvent("btnSlBtnLogin", "click", function(){
  //Below we coded how the login system will work and how each password and username will be matched together.
  var user=getText("tiSlTiUser");
  var pass=getText("tiSlTiPass");
  var i=0;
  while (i<=usernames.length-1){
    if(user==usernames[i]&&pass==passwords[i]){
       setScreen("scrToDoList");
       console.log("going to to list");
    }
    else {showElement("lbSlLbError");
    }
  i++;
  }
});

//Here the three events below are key events that help the user navigate using his/her keyboard.
onEvent("scrWelcome", "keydown", function(event){
  if (event.key === "l"){
    setScreen("scrLogin");
  }
});

onEvent("scrWelcome", "keydown", function(event){
  if (event.key === "s") {
    setScreen("scrSignup");
  }
});

onEvent("scrLogin", "keydown", function(event){
  if (event.key === "Enter"){
    //Below we coded how the login system will work and how each password and username will be matched together.
  var user=getText("tiSlTiUser");
  var pass=getText("tiSlTiPass");
  var i=0;
  while (i<=usernames.length-1){
    if(user==usernames[i]&&pass==passwords[i]){
      setScreen("scrToDoList");
      console.log("going to to list");
    }
    else {showElement("lbSlLbError");
    }
  i++;
  }
  }
});

//Here we are coding to hide/show elements onces the button "rate" has been clicked on the logout screen.
onEvent("btnSloBtnRate", "click", function(){
  showElement("btnSloBtnHome");
  hideElement("btnSloBtnNT");
  hideElement("btnSloBtnRate");
  showElement("lbSloLbThx");
});

//Here we are setting the events that will take place once a button has been clickded on the logout screen.
onEvent("btnSloBtnNT","click",function(){
  clear();
  hideElement("lbSlLbError");
  setScreen("scrWelcome");
  showElement("btnSsBtnPG");
  passGen="";
});

onEvent("btnSloBtnHome","click",function(){
  clear();
  hideElement("lbSloLbThx");
  hideElement("btnSloBtnHome");
  showElement("btnSloBtnNT");
  showElement("btnSloBtnRate");
  hideElement("lbSlLbError");
  showElement("btnSsBtnPG");
  setScreen("scrWelcome");
  passGen="";
});

//Here we are coding how the password generator will work when the button is pressed.
onEvent("btnSsBtnPG", "click", function() {
  for(var i=0; i<8; i++){
   passGen=passGen+""+randomNumber(0,9);
  }
  setText("tiSsTiPass", passGen);
  hideElement("btnSsBtnPG");
  console.log("btnSsBtnRPG clicked!");
});

//Here the two events below we are coding the events for the buttons on the ToDoList screen.
onEvent("btnStoDoUrgent", "click", function() {
  setScreen("scrUrgent");
  //Setting Drop Down
  setText("dDScrUrgent","Urgent");
  console.log("btnStoDoUrgent clicked!");
});

onEvent("btnStoDoUpcoming", "click", function() {
  setScreen("scrComingUp");
  //Setting Drop Down
  setText("dDScrComingUp","Coming Up");
  console.log("btnStoDoUpcoming clicked!");
});

onEvent("btnStoDoDistant", "click", function() {
  setScreen("scrDistant");
  //Setting Drop Down
  setText("dDScrDistant","Distant");
  console.log("btnStoDoDistant clicked!");
});

//Creating on events so that the dropdown in the to-do list screens works.
onEvent("dDScrUrgent","change" , function() {dropDownOptions("dDScrUrgent")});
onEvent("dDScrComingUp", "change", function() {dropDownOptions("dDScrComingUp")});
onEvent("dDScrDistant", "change", function() {dropDownOptions("dDScrDistant")});
onEvent("dDScrDone","change",function() {dropDownOptions("dDScrDone")});

//UrgentList scroll back & scroll next.
onEvent("scrollNextScrUrgent","click", function(){scrollNext("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",uCurrIndex,urgentList);
  uCurrIndex=scrollNext("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",uCurrIndex,urgentList);
  console.log(uCurrIndex)});

onEvent("scrollBackScrUrgent", "click",function(){scrollBack("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",uCurrIndex,urgentList);
  uCurrIndex=scrollBack("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",uCurrIndex,urgentList);});

//ComingUpList scroll back & scroll next.
onEvent("scrollNextScrComingUp","click", function(){scrollNext("toDoScrComingUp","dueDateScrComingUp","noTasksScrComingUp",cCurrIndex,comingUpList);
  cCurrIndex=scrollNext("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",cCurrIndex,comingUpList);});

onEvent("scrollBackScrComingUp", "click",function(){scrollBack("toDoScrComingUp","dueDateScrComingUp","noTasksScrComingUp",cCurrIndex,comingUpList);
  cCurrIndex=scrollBack("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",cCurrIndex,comingUpList)});

//DistantList scroll back & scroll next.
onEvent("scrollNextScrDistant","click", function(){scrollNext("toDoScrDistant","dueDateScrDistant","noTasksScrDistant",dCurrIndex,distantList);
  dCurrIndex=scrollNext("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",dCurrIndex,distantList)});

onEvent("scrollBackScrDistant", "click",function(){scrollBack("toDoScrDistant","dueDateScrDistant","noTasksScrDistant",dCurrIndex,distantList);
  dCurrIndex=scrollBack("toDoScrUrgent","dueDateScrUrgent","noTasksScrUrgent",dCurrIndex,distantList)});
  
//DoneList scroll back & scroll next.
onEvent("scrollNextScrDone","click", function(){scrollNext("toDoScrDone","dueDateScrDone","noTasksScrDone",doneCurrIndex,doneList);
  doneCurrIndex=scrollNext("toDoScrDone","dueDateScrDone","noTasksScrDone",doneCurrIndex,doneList)});

onEvent("scrollBackScrDone", "click",function(){scrollBack("toDoScrDone","dueDateScrDone","noTasksScrDone",doneCurrIndex,doneList);
  doneCurrIndex=scrollBack("toDoScrDone","dueDateScrDone","noTasksScrDone",doneCurrIndex,doneList)});

//Remove item from done list.
onEvent("removeScrDone","click",function(){removeItem(doneList,doneCurrIndex)});

//Set screen to listCreation.
onEvent("createScrUrgent","click",function(){ 
  setScreen("scrListCreation");
  });
  
onEvent("createScrComingUp","click",function(){ 
  setScreen("scrListCreation");
  });

onEvent("createScrDistant","click",function(){ 
  setScreen("scrListCreation");
  });

onEvent("createScrDone","click",function(){ 
  setScreen("scrListCreation");
  });

//Get out of listCreation screen.
onEvent("cancelScrListCreation","click",function() {setScreen("scrUrgent")});



//Code to save bullet into one of the lists.
onEvent("saveScrListCreation", "click", function() {
  var toDo = getText("toDoScrListCreation");
  var dueDate = getText("dueDateScrListCreation");
  var newBullet={};
  newBullet.toDo = toDo;
  newBullet.dueDate = dueDate;
  hideElement("invalidScrListCreation");
  
  //Shows invalid entry.
  if (dueDate> 31  ) {
    showElement("invalidScrListCreation");
  }
  //Appends Item to Distant List
  else if (dueDate<today.getDate()){
        insertItem(distantList,distantList.length-1, newBullet);
        hideElement("invalidScrListCreation");
        console.log( urgentList);
        console.log(  comingUpList);
        console.log(distantList);
        //Refresing UI elements.
        setText("toDoScrDistant",distantList[dCurrIndex].toDo);
        setText("dueDateScrDistant",distantList[dCurrIndex].dueDate);
        hideElement("noTasksScrDistant");
        //Refresing dropdown.
        dDValue == "Distant";
        setScreen("scrDistant");
           setText("dDScrDistant","Distant");
      }
  else if (dueDate>today.getDate()+7){
        insertItem(distantList,distantList.length-1, newBullet);
        hideElement("invalidScrListCreation");
        console.log( urgentList);
        console.log(  comingUpList);
        console.log(distantList);
        //Refresing UI elements.
        setText("toDoScrDistant",distantList[dCurrIndex].toDo);
        setText("dueDateScrDistant",distantList[dCurrIndex].dueDate);
        hideElement("noTasksScrDistant");
        //Refresing dropdown.
        dDValue == "Distant";
        setScreen("scrDistant");
        setText("dDScrDistant","Distant");
      }
       //Appends Item to Coming Up List
  else if (dueDate > today.getDate()+ 2) {
        insertItem(comingUpList, comingUpList.length-1, newBullet);
        hideElement("invalidScrListCreation");
        console.log(urgentList);
        console.log(comingUpList);
        console.log(distantList);
        //Refresing UI elements.
        setText("toDoScrComingUp",comingUpList[cCurrIndex].toDo);
        setText("dueDateScrComingUp",comingUpList[cCurrIndex].dueDate);
        hideElement("noTasksScrComingUp");
        //Refresing dropdown.
        dDValue == "ComingUp";
        setScreen("scrComingUp");
        setText("dDScrComingUp","Coming Up");}
        
   //Appends Item to Urgent List
  else{
      insertItem(urgentList,urgentList.length-1, newBullet);
      hideElement("invalidScrListCreation");
      console.log( urgentList);
      console.log( comingUpList);
      console.log(distantList);
      //Refresing UI elements.
      setText("toDoScrUrgent",urgentList[uCurrIndex].toDo);
      setText("dueDateScrUrgent",urgentList[uCurrIndex].dueDate);
      hideElement("noTasksScrUrgent");
      //Refresing dropdown.
      dDValue == "Urgent";
      setScreen("scrUrgent");
   setText("dDScrUrgent","Urgent");}
});


//SEARCH FOR OVERDUE ITEMS:

search (urgentList,uCurrIndex);
search (comingUpList,cCurrIndex);
search (distantList,dCurrIndex);


//ALL OUR FUNCTIONS:

//Here we created a fuction to clear the username and password from the login screen.
function clear(){
  setText("tiSlTiUser", "");
  setText("tiSloTiSug", "");
  setText("tiSlTiPass", "");
  setText("tiSsTiDob", "");
  setText("tiSsTiEmail", "");
  setText("tiSsTiName", "");
  setText("tiSsTiPass", "");
  setText("tiSsTiUser", "");
  setText("dDScrUrgent", "Urgent");
  setText("dDScrComingUp", "Coming Up");
  setText("dDScrDistant", "Distant");
  setProperty("slSloSlRate", "value", 50);
}

//Drop down function (to make dropdowns work).
function dropDownOptions (dD) {
  if (getText(dD)== "Logout"){
    setScreen("scrLogout");}
  else if (getText(dD) == "Urgent"){
        setScreen("scrUrgent");
        setText("dDScrUrgent","Urgent");
  }

  else if (getText(dD) == "Coming Up"){
        setText("dDScrComingUp","Coming Up");
        setScreen("scrComingUp");
  }

  else if (getText(dD) == "Distant") {
        setText("dDScrDistant","Distant");
        setScreen("scrDistant");
  }

  else if(getText(dD)== "Done"){
        setScreen("scrDone"); 
        setText("dDScrDone","Done");
 }
}

//Scroll next function(scroll next for, to do and due date, in the array of choice).
function scrollNext(toDo,dueDate,noTasks,currIndex,list) {
  console.log(currIndex);
  if (list.length==0){
    showElement(noTasks);
    return;}
  hideElement(noTasks); 
  setText(toDo, list[currIndex].toDo);
  setText(dueDate, list[currIndex].dueDate);
  currIndex++;
  if (currIndex> list.length-1){
    currIndex=0;}
  console.log(currIndex);
  //Return value of currIndex.
  return currIndex;
}

//Scroll back function (scroll back for, to do and due date, in the array of choice).
function scrollBack (toDo,dueDate,noTasks,currIndex,list) {
  if (list.length==0){
    showElement(noTasks);
    return;}
  hideElement(noTasks);
  setText(toDo, list[currIndex].toDo);
  setText(dueDate, list[currIndex].dueDate);
  currIndex--;
   if (currIndex<0){
    currIndex=list.length-1;} 
  //Return value of currIndex. 
  return currIndex;}

//Search function ( search if any item in any array is past it's due date).
function search (list,currIndex){
  for (currIndex = 0; currIndex<list.length;currIndex++){
    if (list[currIndex].dueDate<today.getDate()){
      appendItem(doneList,list[currIndex].toDo);
      appendItem(doneList,list[currIndex].dueDate); 
      removeItem(list[currIndex].toDo);
      removeItem(list[currIndex].dueDate);
     
      hideElement("noTasksScrDone");
    }  
  }
}
  
  
//REFRESH TIME:

today = new Date();
date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
dateTime = date ;

///END OF CODE.
