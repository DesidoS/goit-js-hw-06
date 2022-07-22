const amountCategories = document.querySelector('#categories');
console.log(`'Number of categories:' ${amountCategories.children.length}`);

const titleCategories = document.querySelectorAll('.item')

titleCategories.forEach(item => {
    console.log('')
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})
