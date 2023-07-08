const categoryButtons = document.querySelectorAll('[data-category]');
const categoryContent = document.getElementById('category-content');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    loadCategory(category);
  });
});

async function loadCategory(category) {
  const response = await fetch(`${category}.html`);
  const categoryHTML = await response.text();
  categoryContent.innerHTML = categoryHTML;
}