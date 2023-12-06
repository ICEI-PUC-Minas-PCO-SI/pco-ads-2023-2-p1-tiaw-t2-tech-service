//Recuperando ID do usuario
let params = new URLSearchParams(location.search);
console.log(params);
let id = params.get("id");
console.log(id);

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
  fetch('http://localhost:3000/posts')
  .then(response => response.json())
      .then(posts => {
              updateUI(posts);
            });
  }

function updateUI(posts) {

  var forumContainer = document.querySelector('.container');
    forumContainer.innerHTML = '';

  posts.forEach(post => {
        var forumDiv = document.createElement('div');
        forumDiv.className = 'forum';

                    var titleHeading = document.createElement('h2');
        titleHeading.textContent = post.title;

                    var contentParagraph = document.createElement('p');
        contentParagraph.textContent = post.content;

                    var infoDiv = document.createElement('div');
        infoDiv.className = 'info';

                    var commentsSpan = document.createElement('span');
        commentsSpan.textContent = 'Comentários: ' + post.commentsCount; 

                    var likesSpan = document.createElement('span');
        likesSpan.textContent = 'Curtidas: ' + post.likesCount; 

                    var viewsSpan = document.createElement('span');
        viewsSpan.textContent = 'Visualizações: ' + post.viewsCount;

                    infoDiv.appendChild(commentsSpan);
        infoDiv.appendChild(likesSpan);
        infoDiv.appendChild(viewsSpan);

                    forumDiv.appendChild(titleHeading);
        forumDiv.appendChild(contentParagraph);
        forumDiv.appendChild(infoDiv);

                    forumContainer.appendChild(forumDiv);
      });
  }

function filterRecent() {

  fetch('http://localhost:3000/posts?_sort=date&_order=desc')
      .then(response => response.json())
      .then(recentPosts => {

                  updateUI(recentPosts);
            });
  }


document.addEventListener('DOMContentLoaded', function () {

                            filterAll(); 
                            setupEventListeners(); 
                          });

function renderPosts(posts) {

  var forumContainer = document.querySelector('.container');
    forumContainer.innerHTML = '';

  posts.forEach(post => {
        var forumDiv = document.createElement('div');
        forumDiv.className = 'forum';

                    var titleHeading = document.createElement('h2');
        titleHeading.textContent = post.title;

                    var contentParagraph = document.createElement('p');
        contentParagraph.textContent = post.content;

                    var infoDiv = document.createElement('div');
        infoDiv.className = 'info';

                    var commentsSpan = document.createElement('span');
        commentsSpan.textContent = 'Comentários: ' + post.commentsCount;

                    var likesSpan = document.createElement('span');
        likesSpan.textContent = 'Curtidas: ' + post.likesCount;

                    var viewsSpan = document.createElement('span');
        viewsSpan.textContent = 'Visualizações: ' + post.viewsCount;

                    infoDiv.appendChild(commentsSpan);
        infoDiv.appendChild(likesSpan);
        infoDiv.appendChild(viewsSpan);

                    forumDiv.appendChild(titleHeading);
        forumDiv.appendChild(contentParagraph);
        forumDiv.appendChild(infoDiv);

                    forumContainer.appendChild(forumDiv);
      });
  }

function fetchAndRenderPosts(url) {
    fetch(url)
      .then(response => response.json())
      .then(posts => {
              renderPosts(posts);
            })
      .catch(error => {
              console.error('Erro ao buscar posts:', error);
            });
  }

function setupEventListeners() {

}
