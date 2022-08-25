 
const profileFeed = document.querySelector(".feed-container-2");

fetch("/src/js/post.json")
.then((res) => res.json())
.then((data) => {
 console.log(data);
 data = data.slice(0, 10); // Limit to 10
 data.forEach((e) => {
  const profileFeedContent = document.createElement("div");
  profileFeedContent.classList.add("card");
 
  profileFeedContent.innerHTML = `
  <div class="card-body me-2">
  <div class="row">
  <div class="col-2">
      <p class="card-subtitle mb-2 text-muted">${e.date} - ${e.time}</p>
      </div>
      <div class="col-10 card-body border rounded">
          <p class="card-text me-2">${e.post}</p>
      </div>
  </div>
 </div>
  `;
 
  profileFeed.append(profileFeedContent);

 });
})
.catch((error) => {
 // <=== Don't forget to handle errors
 console.error(error);
});
