const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "5.jpg", "6.JPG", "9.jpg"]

const chosenImage = `img/${images[Math.floor(Math.random() * images.length)]}`

document.body.style.backgroundImage = `url(${chosenImage})`
