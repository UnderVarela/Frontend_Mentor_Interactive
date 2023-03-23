const card1 = document.querySelector('.rating-state')
const card2 = document.querySelector('.thank-you-state')

document.querySelector('#rating-state-form').addEventListener('submit', e => {
  e.preventDefault()
const isChecked = document.querySelector('.btn-group input:checked')
if(!isChecked) return
card1.classList.add('none')
card2.classList.remove('none')

})

const stars = document.querySelectorAll('.btn-group input')

for (const star of stars) {
  star.addEventListener('change', (e) => {
    document.querySelector('#state').textContent = e.target.value
  })
}


const checkedEl = document.querySelector('.btn-group input:checked')
document.querySelector("#state").textContent = checkedEl ?  checkedEl.value : ' '