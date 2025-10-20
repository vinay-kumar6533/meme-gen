const Btn = document.querySelector('.btn')
const Title = document.querySelector('.title')
const Img = document.querySelector('.meme-img')
const Authorr = document.querySelector('.author')

Btn.addEventListener('click',() => {
  fetch('https://meme-api.com/gimme/wholesomememes')
  .then((res) => res.json())
  .then((data)  => {
    const {author, title, url} = data
    Title.innerText = title
    Authorr.innerText = author
    Img.src = url
  })
})

