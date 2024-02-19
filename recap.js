/**
 * 1. how to use js with html & CSS
 * 2. get element or element form DOM
 *      -> getElementById
 *      -> getElementsByClassName
 *      -> querySelector
 *      -> querySelectorAll
 * 
 * 3. Dynamically create element to the dom: document.createElement
 *      -> set value to innerHTML
 * 
 * 4. get/set value from/to a dom element
 *      -> use innerText (h1, p, h5, span div strong)
 *      -> use Value (input, textArea)
 * 
 * 5. add event listener (event handler)
 *      -> click, focus, blur, onchange, keyup
 *      -> addEventListener, onclick=""
 * 
 * 6. use function to reduce duplicate code
 * 
 * 7. event bubble, event delegate 
 */


// use querySelectorAll
//যদি element মধ্যে আরেকটা element খুজতে হয় তাহলে querySelectorAll use করতে হয়।

document.querySelectorAll('.users-container .disabled h2')
document.querySelectorAll('.my-users li');