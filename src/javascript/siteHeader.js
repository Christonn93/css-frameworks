// Function to create the header and header content
export function generateHeader() {
 const header = document.querySelector("header");
 header.classList.add("page-header");

 // Generating the page brand name that is displaying in the header
 const brandContainer = document.createElement("div");
 brandContainer.classList.add("header-layout");
 const brandLabel = document.createElement("label");
 brandLabel.classList.add("brand-name");
 brandLabel.innerHTML = `<a href="/index.html" class="nav-link"><img src="../public/assets/image-1.png" class="image-small"/> &ensp;Release you anger</a>`;

 // Hamburger dropdown menu for mobile view
 const burger = document.createElement("div");
 burger.classList.add("hamburger");
 burger.innerHTML = `
       <span class="bar"></span>
       <span class="bar"></span>
       <span class="bar"></span>`;

 // Defining the skip nav option for WCAG
 const navSkip = document.createElement("a");
 navSkip.href = "#main";
 navSkip.classList.add("skip-nav");
 navSkip.innerHTML = "Skip navigation";

 // Setting up nav and nav links
 const nav = document.createElement("nav");
 nav.classList.add("page-navigation");

 // Array with links and endpoints
 const pages = [
  {
   id: "nav-link-1",
   name: "Home",
   url: "/index.html",
  },
  {
   id: "nav-link-2",
   name: "Login",
   url: "/",
  },
  {
   id: "nav-link-3",
   name: "Profile",
   url: "/",
  },
 ];

 for (let i = 0; i < pages.length; i++) {
  const navLink = document.createElement("a");

  navLink.classList.add("nav-link");
  navLink.id += `${pages[i].id}`
  navLink.innerText += `${pages[i].name}`;
  navLink.href += `${pages[i].url}`;
  nav.append(navLink);
 }

 //  console.log("Pages:", pages);
 brandContainer.append(brandLabel, burger, nav);
 header.append(navSkip, brandContainer);
}
