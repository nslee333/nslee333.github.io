let fullname = 
"    _   __      __    __                 __             \n" +
"   / | / /___ _/ /_  / /_____ _____     / /   ___  ___  \n" +
"  /  |/ / __ `/ __ \\/ __/ __ `/ __ \\   / /   / _ \\/ _ \\ \n" +
" / /|  / /_/ / / / / /_/ /_/ / / / /  / /___/  __/  __/ \n" +
"/_/ |_/\\__,_/_/ /_/\\__/\\__,_/_/ /_/  /_____/\\___/\\___/    " ;
                                                      
let initials = 
"    _   ____   \n" +
"   / | / / /   \n" +
"  /  |/ / /    \n" +
" / /|  / /___  \n" +
"/_/ |_/_____/  \n";

window.onload = function () {

  let ele = document.getElementById("ascii");
  
  if (window.innerWidth < 570) {
    ele.textContent = initials;
  } else {
    ele.textContent = fullname;
  }
  
}

addEventListener("resize", (event) => {

  let ele = document.getElementById("ascii");
  

  if (window.innerWidth < 570) {
    ele.textContent = initials;
  } else {
    ele.textContent = fullname;
  }
  
});


