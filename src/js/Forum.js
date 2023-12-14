//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
let id = params.get("id");
let aPerfil = document.getElementById("a-Perfil");
aPerfil.href = `Perfil.Freelancer.html?id=${id}`;
let aVagas = document.getElementById("a-Vagas");
aVagas.href = `VagasDisponiveis.html?id=${id}`;
let aDenuncia = document.getElementById("a-Denuncia");
aDenuncia.href = `Denuncia.html?id=${id}`;

//Recuperando ID do usuario
function returnToMainPage() {
  window.location.href = "URL_da_tela_principal";
}
function showForm() {
  document.getElementById("createPostForm").style.display = "block";
}

function closeForm() {
  document.getElementById("createPostForm").style.display = "none";
}

function filterAll() {
  fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((posts) => {
      updateUI(posts);
    });
}

<<<<<<< HEAD
// Inclusão json
{
  "posts": [
    { "id": 1, "title": "Post 1", "content": "Conteúdo do Post 1" },
    { "id": 2, "title": "Post 2", "content": "Conteúdo do Post 2" },
    { "id": 3, "title": "Post 3", "content": "Conteúdo do Post 3" },
    { "id": 4, "title": "Post 4", "content": "Conteúdo do Post 4" },
    { "id": 5, "title": "Post 5", "content": "Conteúdo do Post 5" }
  ]
}

json-server --watch db.json --port 3000

{
"posts": [
  {
    "id": 1,
    "title": "Desenvolvedor Web Sênior",
    "content": "O TechMatch está procurando um desenvolvedor web sênior com experiência em...",
    "commentsCount": 1,
    "likesCount": 15,
    "viewsCount": 100,
    "date": "2023-11-30T12:00:00Z"
  },

  {
    "id": 2,
    "title": "Desenvolvedor Web Sênior",
    "content": "O TechMatch está procurando um desenvolvedor web sênior com experiência em...",
    "commentsCount": 1,
    "likesCount": 8,
    "viewsCount": 80,
    "date": "2023-11-05T12:20:00Z"
  },

   {
    "id": 3,
    "title": "Desenvolvedor Web Sênior",
    "content": "O TechMatch está procurando um desenvolvedor web sênior com experiência em...",
    "commentsCount": 1,
    "likesCount": 1,
    "viewsCount": 17,
    "date": "2023-11-09T12:17:00Z"
  },

  {
    "id": 4,
    "title": "Desenvolvedor Web Sênior",
    "content": "O TechMatch está procurando um desenvolvedor web sênior com experiência em...",
    "commentsCount": 1,
    "likesCount": 8,
    "viewsCount": 56,
    "date": "2023-11-12T12:15:00Z"
  },

  {
    "id": 5,
    "title": "Desenvolvedor Web Sênior",
    "content": "O TechMatch está procurando um desenvolvedor web sênior com experiência em...",
    "commentsCount": 1,
    "likesCount": 11,
    "viewsCount": 45,
    "date": "2023-11-18T12:09:00Z"  //
  }
],

  "comments": [
  {
    "id": 1,
    "postId": 1,
    "text": "Ótima op ortunidade! Estou interessado."
  },

  {
    "id": 2,
    "postId": 1,
    "text": "Ótima oportunidade! Estou interessado."
  },

    {
      "id": 3,
      "postId": 1,
      "text": "Ótima oportunidade! Estou interessado."
    },

      {
        "id": 4,
        "postId": 1,
        "text": "Ótima oportunidade! Estou interessado."
      },

          {
          "id": 5,
          "postId": 1,
          "text": "Ótima oportunidade! Estou interessado."
        },
  
],

        "likes": [
          {
            "id": 1,
            "postId": 15
          },

        {
          "id": 2,
          "postId": 8
        },

        {
          "id": 3,
          "postId": 1
        },

          {
          "id": 4,
          "postId": 8
        },

        {
          "id": 5,
          "postId": 11
        },
        
],

      "views": [
          {
            "id": 1,
            "postId": 100
          },

        {
        "id": 2,
        "postId": 80
      },

      {
        "id": 3,
        "postId": 17
      },

      {
        "id": 4,
        "postId": 46
      },

      {
        "id": 5,
        "postId": 55
      },

  ]
}
=======
// function updateUI(posts) {
//   var forumContainer = document.querySelector(".container");
//   forumContainer.innerHTML = "";

//   posts.forEach((post) => {
//     var forumDiv = document.createElement("div");
//     forumDiv.className = "forum";

//     var titleHeading = document.createElement("h2");
//     titleHeading.textContent = post.title;

//     var contentParagraph = document.createElement("p");
//     contentParagraph.textContent = post.content;

//     var infoDiv = document.createElement("div");
//     infoDiv.className = "info";

//     var commentsSpan = document.createElement("span");
//     commentsSpan.textContent = "Comentários: " + post.commentsCount;

//     var likesSpan = document.createElement("span");
//     likesSpan.textContent = "Curtidas: " + post.likesCount;

//     var viewsSpan = document.createElement("span");
//     viewsSpan.textContent = "Visualizações: " + post.viewsCount;

//     infoDiv.appendChild(commentsSpan);
//     infoDiv.appendChild(likesSpan);
//     infoDiv.appendChild(viewsSpan);

//     forumDiv.appendChild(titleHeading);
//     forumDiv.appendChild(contentParagraph);
//     forumDiv.appendChild(infoDiv);

//     forumContainer.appendChild(forumDiv);
//   });
// }

// function filterRecent() {
//   fetch("http://localhost:3000/posts?_sort=date&_order=desc")
//     .then((response) => response.json())
//     .then((recentPosts) => {
//       updateUI(recentPosts);
//     });
// }

// document.addEventListener("DOMContentLoaded", function () {
//   filterAll();
//   setupEventListeners();
// });

// function renderPosts(posts) {
//   var forumContainer = document.querySelector(".container");
//   forumContainer.innerHTML = "";

//   posts.forEach((post) => {
//     var forumDiv = document.createElement("div");
//     forumDiv.className = "forum";

//     var titleHeading = document.createElement("h2");
//     titleHeading.textContent = post.title;

//     var contentParagraph = document.createElement("p");
//     contentParagraph.textContent = post.content;

//     var infoDiv = document.createElement("div");
//     infoDiv.className = "info";

//     var commentsSpan = document.createElement("span");
//     commentsSpan.textContent = "Comentários: " + post.commentsCount;

//     var likesSpan = document.createElement("span");
//     likesSpan.textContent = "Curtidas: " + post.likesCount;

//     var viewsSpan = document.createElement("span");
//     viewsSpan.textContent = "Visualizações: " + post.viewsCount;

//     infoDiv.appendChild(commentsSpan);
//     infoDiv.appendChild(likesSpan);
//     infoDiv.appendChild(viewsSpan);

//     forumDiv.appendChild(titleHeading);
//     forumDiv.appendChild(contentParagraph);
//     forumDiv.appendChild(infoDiv);

//     forumContainer.appendChild(forumDiv);
//   });
// }

// function fetchAndRenderPosts(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((posts) => {
//       renderPosts(posts);
//     })
//     .catch((error) => {
//       console.error("Erro ao buscar posts:", error);
//     });
// }

// function setupEventListeners() {}
>>>>>>> Develop
