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
            var q = "https://www.github.com/" + original;
            a.href = q;
            a.innerText = "click";
            console.log(a);
            li.innerText = data[i].repo.name;
            result.appendChild(a);
            result.appendChild(li);
          }
        });
    });
});


// HimanshuPatni