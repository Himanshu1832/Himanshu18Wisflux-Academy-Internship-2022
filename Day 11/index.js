var form = document.getElementById("myform");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var search = document.getElementById("search").value;

  var original = search.split(" ").join("");

  document.getElementById("result").innerHTML = "";

  fetch("https://api.github.com/users/" + original)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      fetch("https://api.github.com/users/" + original + "/events")
        .then((result) => result.json())
        .then((data) => {
          var result = document.getElementById("result");

          for (i = 0; i < 9; i++) {

            let li = document.createElement("h1");
            let a = document.createElement("a");
            // a=data[i].repo.url;
            var q = "https://www.github.com/" + original;
            a.href = q;
            a.innerText = "click";
            a.className = "ahref";
            li.className = "h1";
            console.log(a);
            li.innerText = data[i].repo.name;
            result.appendChild(a);
            result.appendChild(li);
            
          }
        });
    });
});

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}
// <img src = "${data.events_url}"/>
// main
