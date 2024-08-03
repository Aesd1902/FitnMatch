let cont = document.querySelector(".cont");
let btn = document.querySelector(".btn");

function popUp() {
  btn.style.display = "none";
  cont.classList.add("popUpOn");

  setTimeout(() => {
    cont.classList.remove("popUpOn");
    cont.classList.add("popUpOut");
  
    setTimeout(() => {
      cont.classList.remove("popUpOut");
      btn.innerHTML = "submitted";
      btn.classList.add("btnAfter");
      btn.style.display = "block";
    }, 850);
  }, 3000);
}