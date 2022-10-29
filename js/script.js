const mario = document.querySelector('.mario'); /* getting the class "mario" through a css selector */

const jump = () => {
    mario.classList.add('jump'); /* adding the jump class in the Mario image */
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); /* function to remove the jump class, after 
    500 ms. this function allows Mario to jump again and not just 1 time */
}
document.addEventListener('keydown', jump); /* adding a event to execute the function "jump"
after the user press a key */