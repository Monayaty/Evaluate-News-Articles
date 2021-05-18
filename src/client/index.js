import handleSubmit from './js/formHandler'
import { validURL } from './js/checkURL'
import './styles/style.scss'

window.addEventListener('DOMContentLoaded', () => {
    console.log('Dom has been loaded and parsed, Thank you!');
    const myFrom = document.getElementById('form')
    myFrom.addEventListener('submit', (e) => {
        e.preventDefault()
        handleSubmit()
    })
});
export {handleSubmit}