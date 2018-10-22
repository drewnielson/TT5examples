//ANDI Tool
void((function(){andiScript=document.createElement('script');andiScript.setAttribute('src','https://www.ssa.gov/accessibility/andi/andi.js');document.body.appendChild(andiScript)})());

// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Get DIVs for Show All Instruction Detail
var ShowInstructionDetails = document.getElementsByClassName("InstructionDetail");

// Get DIVs for Web Tests
var WebDIVs = document.getElementsByClassName("WebTest");

//Get DIVs for SW Tests
var SWDIVs = document.getElementsByClassName("SWTest");

// Get spans for Show detail section links
var ShowInstructions = document.getElementsByClassName("InstructionShow");

// Get spans for Hide detail section links
var HideInstructions = document.getElementsByClassName("InstructionHide");

// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
        overlayBg.style.display = "none";
    } else {
        mySidebar.style.display = 'block';
        overlayBg.style.display = "block";
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
    overlayBg.style.display = "none";
}

// Hide all instruction detail
function HideAll() {
  for(var i = 0; i < ShowInstructionDetails.length; i++){
    ShowInstructionDetails[i].style.display = "none";
  }
  for(var i = 0; i < ShowInstructions.length; i++){
    ShowInstructions[i].style.display = "inline";
  }
  for(var i = 0; i < HideInstructions.length; i++){
    HideInstructions[i].style.display = "none";
  }
}

// Show all instruction detail
function ShowAll() {
  for(var i = 0; i < ShowInstructionDetails.length; i++){
    ShowInstructionDetails[i].style.display = "block";
  }
  for(var i = 0; i < ShowInstructions.length; i++){
    ShowInstructions[i].style.display = "none";
  }
  for(var i = 0; i < HideInstructions.length; i++){
    HideInstructions[i].style.display = "inline";
  }
}

// Show test instruction detail web
function ShowDetail(that) {
  var strThisID = that.parentNode.id
  var pos = strThisID.indexOf("-") + 1;
  var strFirst = strThisID.slice(0, pos);
  document.getElementById(strFirst + "Hide").style.display = "inline";
  document.getElementById(strFirst + "Detail").style.display = "block";
  that.parentNode.style.display = "none";
}

// Hide test instruction detail web
function HideDetail(that) {
  var strThisID = that.parentNode.id
  var pos = strThisID.indexOf("-") + 1;
  var strFirst = strThisID.slice(0, pos);
  document.getElementById(strFirst + "Show").style.display = "inline";
  document.getElementById(strFirst + "Detail").style.display = "none";
  that.parentNode.style.display = "none";
}

// Show/Hide Failure-description
function ShowHide_description(that) {
  var HideDesc = that.id + "-description-div";  
  if (that.value == "Fail") {
    //alert("check");
    document.getElementById(HideDesc).style.display = "block"
  }
  else {
    document.getElementById(HideDesc).style.display = "none"
  }
}

// Filter SW Only, Web Only, or All
function WebSWFilter(that) {
  if (that.value == "SW ONLY") {
    for(var i = 0; i < WebDIVs.length; i++){
    WebDIVs[i].style.display = "none";
      }
    for(var i = 0; i < SWDIVs.length; i++){
    SWDIVs[i].style.display = "block";
      }
    document.getElementById("divweb1").style.display = "none";
  }
  if (that.value == "ALL (SW and WEB)") {
    for(var i = 0; i < WebDIVs.length; i++){
    WebDIVs[i].style.display = "block";
      }
    for(var i = 0; i < SWDIVs.length; i++){
    SWDIVs[i].style.display = "block";
      }
  }
  if (that.value == "WEB ONLY") {
    for(var i = 0; i < WebDIVs.length; i++){
    WebDIVs[i].style.display = "block";
      }
    for(var i = 0; i < SWDIVs.length; i++){
    SWDIVs[i].style.display = "none";
      }
  }
}