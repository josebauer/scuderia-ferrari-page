const navbar = document.getElementById('navbar')

document.addEventListener('scroll', function () {
  if(scrollY > 0) {
    navbar.classList.add('bg-black')
    navbar.classList.remove('bg-transparent')

  } else {
    navbar.classList.remove('bg-black')
  }
})