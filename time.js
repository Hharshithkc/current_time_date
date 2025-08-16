let  mydate= new Date();
document.getElementById("date").value=mydate.toDateString();
document.getElementById("time").value=mydate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

