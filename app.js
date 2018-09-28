var cardTemplate = function (name, email, city, state) {
  return `
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">${name}</h4>
          <p class="card-text">${email}</p>
          <p class="card-text">${city}, ${state}</p>
        </div>
      </div>
    </div>
  `
}

document.addEventListener('DOMContentLoaded', function () {
	var btn = document.querySelector('button')
  btn.addEventListener('click', function () {
  	var cards = document.querySelector('#cards')
    // Instead of hardcoding the values, randomly generate them using faker.js!
    var name = faker.name.findName()
    var email = faker.internet.email()
    var city = faker.address.city()
    var state = faker.address.state()

		cards.innerHTML = cardTemplate(name, email, city, state)
  })
})
