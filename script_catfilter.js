let catresdiv = document.getElementById('catresdiv');
let cat=document.getElementsByClassName('countcardc');
let contentc=document.getElementById('contentc');

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


// for (let cards of cat) {
//   cards.addEventListener('click', (event) => {
//     let card = event.currentTarget;
//     let c = card.querySelector('.cat');
//     let res = a.filter(obj =>
//       c.innerText.trim().toLowerCase() === obj.category.trim().toLowerCase()
//     );

//     // Step 1: shrink to 40%
//     contentc.classList.remove('incrheight');

//     // Step 2: wait a tiny bit, then expand to 80%
//     setTimeout(() => {
//       contentc.classList.add('incrheight');
//       display(res, catresdiv);
//     }, 100); // 50ms delay is enough
//   });
// }
// Add this ONCE
contentc.addEventListener("transitionend", () => {
  if (contentc.style.height !== "40%") {
    contentc.style.height = "auto";
  }
});

for (let cards of cat) {
  cards.addEventListener("click", (event) => {
    let card = event.currentTarget;
    let c = card.querySelector(".cat");
    let res = a.filter(
      (obj) =>
        c.innerText.trim().toLowerCase() ===
        obj.category.trim().toLowerCase()
    );

    // Replace content
    catresdiv.innerHTML = "";
    display(res, catresdiv);

    // Step 1: collapse
    contentc.style.height = "40%";

    // Step 2: expand after small delay
    setTimeout(() => {
      contentc.style.height = contentc.scrollHeight + "px";
    }, 50);
  });
}

