minus = document.querySelector("#minus");
plus = document.querySelector("#plus");
amount = document.querySelector(".amount");
sectiontwo = document.querySelector(".maincont");
total = document.querySelector(".total");

minus.addEventListener("click", decrement);
plus.addEventListener("click", increment);
sectiontwo.addEventListener("click", clickhandler);
amount.addEventListener("click", sum);

val = document.querySelector("span");
a = Number(val.textContent);
function decrement() {
  if (a <= 0) {
  } else {
    --a;
    val.textContent = a;
  }
}
function increment() {
  ++a;
  val.textContent = a;
}

function clickhandler(event) {
  b = document.querySelectorAll(".size");
  b.forEach((x) => {
    x.style.background = "white";
    x.style.color = "black";
  });

  if (event.target.className == "size") {
    event.target.style.background = "green";
    event.target.style.color = "white";
  }
}

function sum() {
  value = document.querySelector("span");
  num = Number(value.textContent);
  s = document.querySelectorAll(".size");
  s.forEach((x) => {
    if (x.style.background == "green") {
      kgval = x.firstElementChild.textContent;
      if (kgval == "10kg") {
        total.textContent = "=Rs" + 399 * num;
      } else if (kgval == "05kg") {
        total.textContent = "=Rs" + 209 * num;
      }
    }
  });
}
