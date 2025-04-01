// This script demonstrates basic DOM manipulation using JavaScript
  // Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const introText = document.getElementById('intro-text');
    introText.innerText = 'Content updated! JavaScript is awesome!';
});

// Modify CSS styles
document.getElementById('main-heading').style.color = 'white';
document.getElementById('main-heading').style.textAlign = 'center';

// Add or remove an element when a button is clicked with a 5-item limit
let itemCount = 0;
const maxItems = 5;

document.getElementById('add-item-btn').addEventListener('click', () => {
    if (itemCount < maxItems) {
        const itemList = document.getElementById('item-list');
        const newItem = document.createElement('li');
        itemCount++;
        newItem.innerText = `Item ${itemCount}`;
        itemList.appendChild(newItem);
    } else {
        alert('You can only add up to 5 items!');
    }
});

document.getElementById('remove-item-btn').addEventListener('click', () => {
    const itemList = document.getElementById('item-list');
    if (itemCount > 0) {
        itemList.removeChild(itemList.lastChild);
        itemCount--;
    } else {
        alert('No items to remove!');
    }
});
// Toggle visibility of an element
document.getElementById('toggle-btn').addEventListener('click', () => {
    const toggleText = document.getElementById('toggle-text');
    toggleText.style.display = toggleText.style.display === 'none' ? '' : 'none';
});