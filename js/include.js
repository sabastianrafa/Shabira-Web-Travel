async function loadComponent(id, file) {
  const element = document.getElementById(id);

  const response = await fetch(file);
  const html = await response.text();

  element.innerHTML = html;
}

// Load component
loadComponent("navbar", "../components/navbar.html");