const api = "https://type.fit/api/quotes";
const feed = document.querySelector(".feed-container");

fetch("/src/js/post.json")
 .then((res) => res.json())
 .then((data) => {
  console.log(data);
  data = data.slice(0, 10); // Limit to 10
  data.forEach((e) => {
   const feedContent = document.createElement("div");
   const profileFeedContent = document.createElement("div");
   feedContent.classList.add("card");
   profileFeedContent.classList.add("card");
   feedContent.innerHTML = `
                          <div class="card-body me-2">
                            <div class="row">
                            <div class="col-2">
                                <img src="${e.image}" class="img-thumbnail image-small mb-2" />
                                <h6 class="card-title">${e.user}</h6>
                                <p class="card-subtitle mb-2 text-muted">${e.date} - ${e.time}</p>
                                </div>
                                <div class="col-10 card-body border rounded">
                                    <p class="card-text me-2">${e.post}</p>
                                </div>
                            </div>
                          </div>`;

   feed.append(feedContent);

  });
 })
 .catch((error) => {
  // <=== Don't forget to handle errors
  console.error(error);
 });



