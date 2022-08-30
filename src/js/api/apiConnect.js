// Resource = https://api-ninjas.com/api/quotes

const category = "knowledge";
const category2 = "jealousy";
const URL = `https://api.api-ninjas.com/v1/quotes?limit=10`;

export async function getQuotes() {
 try {
  const request = await fetch(URL, {
   headers: {
    "X-Api-Key": "w7lcGMwJzthfExtuAJg34Q==QBLkBzpmAAr3ifsH",
   },
  });
  const response = await request.json();
  console.log(response);
  response.forEach((e) => {
   // Posting posts
   const postArea = document.getElementById("postedPosts");

   const post = document.createElement("div");
   post.classList.add("card");

   post.innerHTML = `
   <div class="card-body d-flex flex-column">
   <div class="card-title">
   <h4 id="postCategory" class="text-secondary">${e.category}</h4>
   </div>
   <blockquote class="blockquote mb-0">
     <p>${e.quote}</p>
     <footer class="blockquote-footer mt-2">${e.author}</footer>
   </blockquote>
 </div>
`;
   postArea.append(post);
  });

  if (contactList) {
   response.forEach((e) => {
    // Posting contacts
    const contactList = document.getElementById("contactList");

    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");

    listItem.innerHTML = `<div class="d-flex justify-content-between align-items-center gap-10"><span>${e.author}</span><button class="btn btn-primary">Message</button></div>`;

    contactList.append(listItem);
   });
  }

  const loader = document.querySelector(".loader")
  loader.style = "display: none;"

  return response;
 } catch (err) {
  console.error(err);
 }
}
