function toggleMode() {
  const  html = document.documentElement;

  //if (html.classList.contains('light')){
  //  html.classList.remove('light')
 // } else{
 //   html.classList.add('light')
  //}

  // A função a cima pode ser simplicado de fomra mais simples pelo código abaixo, mas na função a cima poder servir de como funciona a logica 

  html.classList.toggle('light')

  const img = document.querySelector('#profile img')
  if (html.classList.contains("light")) {
    img.setAttribute('src', "./assets/bibi.jpeg")
  }else{
    img.setAttribute('src', "./assets/avatar.png")
  }

}