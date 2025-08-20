let content = document.getElementById('cdiv');


let inp=document.getElementById('inpbtn');
let a;

if (localStorage.getItem("a")) {
  a = JSON.parse(localStorage.getItem("a"));
} else {
  a = [
    { name: "Atomic habits", author: "James Clear", category: "Self help", likes: 180, id: 1 },
    { name: "clean code", author: "Robert C Martin", category: "Programming", likes: 165, id: 2 },
    { name: "1984", author: "George Orwell", category: "Fiction", likes: 140, id: 3 },
    { name: "sapiens", author: "Yuval Noah Harari", category: "Other", likes: 134, id: 4 },
    { name: "xxx", author: "yyyy", category: "Other", likes: 135, id: 5 },
    { name: "xxx", author: "yyyy", category: "Other", likes: 135, id: 6 },
    { name: "xxx", author: "yyyy", category: "Other", likes: 135, id: 7 },
    { name: "xxx", author: "yyyy", category: "Other", likes: 135, id: 8 }
  ];
}

for (let x in a) {
  content.innerHTML += `
    <div class="card" data-id="${a[x].id}">
      <div class="pic">${a[x].name}</div>
      <div class="info">
        <div class="author">${a[x].author}</div>
        <span class="type">${a[x].category}</span>
        <div class="likes">
          <div class="heart">
            <i class="fa-solid fa-heart"></i>
            <p class="count">${a[x].likes}</p>
          </div>
          <button class="like">LIKE</button>
        </div>
      </div>
    </div>
  `;
}

window.onload = function () {
  let likeButtons = document.getElementsByClassName('like');

  for (let button of likeButtons) {
    button.addEventListener('click', function () {
      let card = this.closest('.card');
      let countEl = card.querySelector('.count');
      let count = parseInt(countEl.textContent);
      countEl.textContent = count + 1;

      let idofc = card.dataset.id;  

      for (let x in a) {
        if (a[x].id == idofc) {
          a[x].likes = count + 1;
        }
      }

      localStorage.setItem("a", JSON.stringify(a));
    });
  }
};
inp.addEventListener('input', () => {
  let name = inp.value.toLowerCase().trim();

  if (name === "") {
    content.classList.remove('filterres');
  } else {
    content.classList.add('filterres');
  }

  let books = name === "" ? a : a.filter(x =>
    x.name.toLowerCase().includes(name) || x.author.toLowerCase().includes(name)
  );
  display(books,content);
});

function display(books,content) {
  content.innerHTML = "";
  books.forEach((ele) => {
    content.innerHTML += `
      <div class="card" data-id="${ele.id}">
        <div class="pic">${ele.name}</div>
        <div class="info">
          <div class="author">${ele.author}</div>
          <span class="type">${ele.category}</span>
          <div class="likes">
            <div class="heart">
              <i class="fa-solid fa-heart"></i>
              <p class="count">${ele.likes}</p>
            </div>
            <button class="like">LIKE</button>
          </div>
        </div>
      </div>
    `;
  });
  
}





// console.log("Found cat elements:", cat.length);
// for (let cards of cat) {
//   cards.addEventListener('click', (event) => {
//     let card = event.currentTarget;
//     let c = card.querySelector('.cat');
//     console.log("Clicked category:", c && c.innerText);
//     let res = a.filter(obj =>
//       c.innerText.trim().toLowerCase() === obj.category.trim().toLowerCase()
//     );
//     console.log("Matching books:", res);
//     display(res, catresdiv);
//   });
// }


