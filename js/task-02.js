const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const menuList = document.querySelector("ul#ingredients");//знаходимо необхідний вузол, в цьому випадку список з id ingredients

// за допомогою forEach
// const ingredientsListMenu = [];                           // створюємо масив для зберігання нових елементів списку

// ingredients.forEach((ingredient) => {                     //циклом проходимося по всім елементам вхідного масиву, за яким будемо будувати новий список
//   let item = document.createElement("li");                // створюємо нову лішку
//   item.textContent = ingredient;                          // додаємо контент лішки
//   item.classList.add("item");                             // присвоюємо клас 
//   ingredientsListMenu.push(item);                         // додаємо елемент до нового масиву
// });
// menuList.append(...ingredientsListMenu);                  // створюємо всі лішки в розмітці  за одну операцію


// за допомогою map
const ingredientsListMenu = ingredients.map(ingredient => {
  const item = document.createElement("li");                // створюємо нову лішку
  item.textContent = ingredient;                            // додаємо контент лішки
  item.classList.add("item");                               // присвоюємо клас 
  return item;
});

menuList.append(...ingredientsListMenu); 