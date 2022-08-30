const contacts = document.querySelector("contact-list");

fetch("/src/js/contacts.json")
.then((res) => res.json())
.then((data) => {
 console.log(data);
 data = data.slice(0, 10); // Limit to 10
 data.forEach((e) => {
  const contactsList = document.createElement("li");
 
  contactsList.innerHTML = ``;
 
  contacts.append(contactsList);

 });
})
.catch((error) => {
 // <=== Don't forget to handle errors
 console.error(error);
});
