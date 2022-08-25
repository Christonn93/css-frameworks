// Meta & links imports for heads on all pages

 // Creating description meta on each side
 let descriptionMeta = document.createElement("meta");
 descriptionMeta.setAttribute("name", `description`);
 descriptionMeta.content = ``;

 // Creating author meta on each side
 let authorMeta = document.createElement("meta");
 authorMeta.setAttribute("name", `author`);
 authorMeta.content = `Christopher Tønnesland`;

 // Creating Keywords meta on each side
 let keyWordsMeta = document.createElement("meta");
 keyWordsMeta.setAttribute("name", `keywords`);
 keyWordsMeta.content = ``;

 document.getElementsByTagName("head")[0].appendChild(descriptionMeta);
 document.getElementsByTagName("head")[0].appendChild(authorMeta);
 document.getElementsByTagName("head")[0].appendChild(keyWordsMeta);

 // Adding link tags inside header on each page
 const loadingFonts = (type) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = type.url + type.fam + type.display;
  document.head.appendChild(link);
 };

 // Fonts
 loadingFonts({
  url: "https://fonts.googleapis.com/css?family=",
  fam: "Newsreader:ital,opsz,wght@0,6..72,200;1,6..72,200",
  display: "&display=swap",
 });

 // Adding link tags inside header on each page
 const styleLinks = (type) => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = type.url;
  document.head.appendChild(link);
 };

 // CSS
 styleLinks({
  url: "/public/style/css/main.css",
 });