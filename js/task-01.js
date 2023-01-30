const listOfCategories = document.querySelector("#categories");     // знаходимо список
const listOfClassItem = listOfCategories.querySelectorAll(".item"); // обираємо всі елементи(лішки) батьківського списку тільки з класом item 
console.log(`Number of categories: ${listOfClassItem.length}`);     // виводимо кількість елементів відповідаючіх умовам (клас item)

listOfClassItem.forEach((item) => {                                    // перебираємо 
    console.log(`Category: ${item.firstElementChild.textContent}`);    // виводимо назву категоріі
    console.log(`Elements: ${item.lastElementChild.children.length}`)  // виводимо кількість елементіи в категоріі
});