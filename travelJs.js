const photo1 = document.getElementById('photo1')
const photo2 = document.getElementById('photo2')
const photo3 = document.getElementById('photo3')
const photo4 = document.getElementById('photo4')
const photo5 = document.getElementById('photo5')
const photo6 = document.getElementById('photo6')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')
const content3 = document.getElementById('content3')






photo1.addEventListener("click", function(){

	document.body.style.backgroundImage = `url(${this.src})`

	content1.innerHTML = 'welcome to egypt'
	content2.innerHTML = `Discover the Heart of Ancient<br> Civilization`
	content3.innerHTML = `Egypt is a country rich in history, culture, and natural beauty.const Known as <br> the cradle of ancient civilization, it is home to the world-famous<br> Pyramids of Giza, the Sphinx, and the majestic Nile River. `
})

photo2.addEventListener("click", function(){

	document.body.style.backgroundImage = `url(${this.src})`
	
	content1.innerHTML = 'welcome to england'
	content2.innerHTML = `Discover the Land of Heritage<br> and Charm`
	content3.innerHTML = `England is a country full of history, culture, and beautiful landscapes.<br> From the bustling streets of London to the peaceful countryside, <br>England offers a mix of modern life and traditional charm.`
})

photo3.addEventListener("click", function(){

	document.body.style.backgroundImage = `url(${this.src})`
	
	content1.innerHTML = 'welcome to paris'
	content2.innerHTML = `Discover Paris: Romance, Art,<br> and History`
	content3.innerHTML = `Paris, the capital of France, is famous for its art, culture, and history.<br> The city is home to iconic landmarks like the Eiffel Tower,<br> the Louvre Museum, and Notre-Dame Cathedral. `
})

photo4.addEventListener("click", function(){

	document.body.style.backgroundImage = `url(${this.src})`
	
	content1.innerHTML = 'welcome Taj Mahal'
	content2.innerHTML = `Experience the Majesty of the <br> Taj Mahal`
	content3.innerHTML = `The Taj Mahal is one of the most famous landmarks in India and the world.<br> Built in the 17th century by Emperor Shah Jahan in memory of his<br> wife Mumtaz Mahal, it is a symbol of love and devotion. `
})

photo5.addEventListener("click", function(){

	document.body.style.backgroundImage = `url(${this.src})`
	
	content1.innerHTML = 'welcome to china'
	content2.innerHTML = `Land of Ancient Wonders`
	content3.innerHTML = `China is a country with a rich history, diverse culture, and breathtaking<br> landscapes. From the Great Wall and the Forbidden City to modern cities like<br> Beijing and Shanghai, China offers a unique blend of ancient traditions and modern life. `
})

photo6.addEventListener("click", function(){

	document.body.style.backgroundImage = `url(${this.src})`
	
	content1.innerHTML = 'welcome to italy'
	content2.innerHTML = `Land of Art, Culture, and Cuisine`
	content3.innerHTML = `Italy is a country known for its rich history, stunning architecture, and delicious food. From <br>the ancient ruins of Rome to the canals of Venice and the art of<br> Florence, Italy offers a unique blend of culture and beauty. `
})
