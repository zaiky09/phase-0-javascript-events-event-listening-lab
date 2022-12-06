const btn = document.getElementById('button');
function clickAlert() {
    alert('I was clicked!');
  }

function addingEventListener() {
    btn.addEventListener("click", clickAlert);
}

addingEventListener();