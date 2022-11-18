var  mybutton = document.querySelector("button");

//This section cleans the screen
mybutton.addEventListener("click", function(event) {
var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events.  The stopPropagation method on the event object to prevent handlers “further up” from receiving the event. 
event.stopPropagation();
  });

//This will add the event "Click" to the document (page). So anytime the user click, a new dot is going to be added.
addEventListener("click", function(event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
  
    document.getElementById("colordots").onchange=function changecolor(){
      var color=document.getElementById("colordots").value;
      dot.style.backgroundColor=color;
    };
    document.getElementById("sizedots").onchange=function changesize(){
      var size=document.getElementById("sizedots").value;
      dot.style.borderRadius=size;
      dot.style.height=size;
      dot.style.width=size;
    };

  }); 
