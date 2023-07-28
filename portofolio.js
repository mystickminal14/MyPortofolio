document.addEventListener('DOMContentLoaded', () => {
  const ham = document.getElementsByClassName('fa-bars')[0];
  ham.addEventListener('click', () => {
    const lists = document.getElementsByClassName('lists')[0];
    lists.style.left = '0';
    lists.style.transition = '0.3s ease';
  });


  const cross = document.getElementsByClassName('fa-xmark')[0]
  cross.addEventListener('click', () => {
    let crossLists = document.getElementsByClassName('lists')[0];
    crossLists.style.left = '-70%';
    crossLists.style.transition = '0.3s ease';
  });

  let counter = 0;
  const slide = document.querySelectorAll('.slide')
  console.log(slide)
  slide.forEach((sli, index) => {
    sli.style.left = `${index * 100}%`
  })
  const cn = document.getElementsByClassName('container')[0];
  const arrowLeft = document.getElementsByClassName('fa-arrow-left')[0]
  const arrowRight = document.getElementsByClassName('fa-arrow-right')[0]
  arrowLeft.addEventListener('click', () => {

    counter--
    if (counter < 0) {
      counter = slide.length - 1;
    }
    scroll()
  })
  arrowRight.addEventListener('click', () => {

    counter++
    if (counter >= slide.length) {
      counter = 0;
    }
    scroll()
  })

  let scroll = () => {
    slide.forEach((sli) => {
      cn.style.transition = 'transform 0.3s ease';
      sli.style.transform = `translateX(-${counter * 100}%)`

    })
  }
  const autoScroll = () => {
    counter++;
    if (counter >= slide.length) {
      counter = 0;
    }
    scroll();
  };

  setInterval(autoScroll, 3000);


});

const about = document.querySelector('.aboutt')
const abou = document.querySelector('.container')
about.addEventListener('click', (e) => {
  e.preventDefault();
  abou.scrollIntoView({ behavior: "smooth" })
})


const skil = document.querySelector('.skil')
const skillContainer = document.querySelector('.Skills-container')

skil.addEventListener('click', (e) => {
  e.preventDefault()
  skillContainer.scrollIntoView({ behavior: 'smooth' })
})


const round = document.querySelector('.circular')
const val = document.querySelector('.value')

let initial = 0;
let final = 78;
let inter = setInterval(() => {
  initial++
  val.innerHTML = `<h3 id='valw'>${initial}%</h3>`
  round.style.background = `conic-gradient(var(--text--color4) ${initial * 3.6}deg , #ededed 0deg)`
  if (initial == final) {
    clearInterval(inter)
  }


}, 50)
const round2 = document.querySelector('.circular2')
const val2 = document.querySelector('.value2')

let initial2 = 0;
let final2 = 83;
let inter2 = setInterval(() => {
  initial2++
  val2.innerHTML = `<h3 id='valw'>${initial2}%</h3>`
  round2.style.background = `conic-gradient(var(--text--color4) ${initial2 * 3.6}deg , #ededed 0deg)`
  if (initial2 == final2) {
    clearInterval(inter2)
  }


}, 50)


const round3 = document.querySelector('.circular3')
const val3 = document.querySelector('.value3')

let initial3 = 0;
let final3 = 65;
let inter3 = setInterval(() => {
  initial3++
  val3.innerHTML = `<h3 id='valw'>${initial3}%</h3>`
  round3.style.background = `conic-gradient(var(--text--color4) ${initial3 * 3.6}deg , #ededed 0deg)`
  if (initial3 == final3) {
    clearInterval(inter3)
  }


}, 70)


const gopro = document.querySelector('.gopro')
const hth = document.querySelector('.proje')

gopro.addEventListener('click', (e) => {
  e.preventDefault()
  hth.scrollIntoView({ behavior: 'smooth' })
})
const con = document.querySelector('.con');
const emu = document.querySelector('.gocon');

con.addEventListener('click', (e) => {
  e.preventDefault();
  emu.scrollIntoView({ behavior: 'smooth' });
});

const home = document.querySelector('.home');
const to = document.querySelector('.go-top');

to.addEventListener('click', (e) => {
  e.preventDefault();
  home.scrollIntoView({ behavior: 'smooth' });
});
let done = 0;
const container_scroll = document.querySelector('.attributrs');
const intersection = new IntersectionObserver(function (entries) {
  if (entries[0].isIntersecting && done !== 1) {
    done = 1;


    const round = document.querySelector('.circular')
    const val = document.querySelector('.value')

    let initial = 0;
    let final = 78;
    let inter = setInterval(() => {
      initial++
      val.innerHTML = `<h3 id='valw'>${initial}%</h3>`
      round.style.background = `conic-gradient(var(--text--color4) ${initial * 3.6}deg , #ededed 0deg)`
      if (initial == final) {
        clearInterval(inter)
      }


    }, 50)
    const round2 = document.querySelector('.circular2')
    const val2 = document.querySelector('.value2')

    let initial2 = 0;
    let final2 = 83;
    let inter2 = setInterval(() => {
      initial2++
      val2.innerHTML = `<h3 id='valw'>${initial2}%</h3>`
      round2.style.background = `conic-gradient(var(--text--color4) ${initial2 * 3.6}deg , #ededed 0deg)`
      if (initial2 == final2) {
        clearInterval(inter2)
      }


    }, 50)


    const round3 = document.querySelector('.circular3')
    const val3 = document.querySelector('.value3')

    let initial3 = 0;
    let final3 = 65;
    let inter3 = setInterval(() => {
      initial3++
      val3.innerHTML = `<h3 id='valw'>${initial3}%</h3>`
      round3.style.background = `conic-gradient(var(--text--color4) ${initial3 * 3.6}deg , #ededed 0deg)`
      if (initial3 == final3) {
        clearInterval(inter3)
      }


    }, 70)


  }
});
intersection.observe(container_scroll);


const proj = document.querySelector('.proje');
const link = document.getElementById('vcv');

vcv.addEventListener('click', (e) => {
  e.preventDefault();
  proj.scrollIntoView({ behavior: 'smooth' });
});