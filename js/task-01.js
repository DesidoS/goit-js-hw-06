const amountCategories = document.querySelector('#categories');
console.log(`'Number of categories:' ${amountCategories.children.length}`);

const titleCategories = document.querySelectorAll('h2')

const listCategories = amountCategories.children

for (let i = 0; i < listCategories.length; i += 1){
    console.log('')
    console.log(`Category: ${titleCategories[i].textContent}`)
    console.log(`Elements: ${listCategories[i].lastElementChild.children.length}`)
}