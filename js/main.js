const url = "https://api.sampleapis.com/coffee/hot";
fetch(url)
  .then((response) => response.json())
  .then((res) => {
    res.forEach((res) => {
      card(res);
    });
  });

function header() {
  const header = document.querySelector('header')
  const h2 = document.createElement('h2')
  h2.textContent = "Coffee Memory"
  const home = document.createElement('p')
  home.textContent = "Home"
  home.style.cursor = "pointer"
  home.addEventListener("click", () => {
    alert('fitur belum tersedia')
  })
  const shop = document.createElement('p')
  shop.textContent = "Shop"
  shop.style.cursor = "pointer"
  shop.addEventListener("click", () => {
    alert('silahkan pilih pesanan anda')
  })
  const magazine = document.createElement('p')
  magazine.textContent = "Magazine"
  magazine.style.cursor = "pointer"
  magazine.addEventListener("click", () => {
    alert('fitur belum tersedia')
  })
  const nav = document.createElement('div')
  nav.classList.add('nav')

  header.appendChild(h2)
  header.appendChild(nav)
  nav.appendChild(home)
  nav.appendChild(shop)
  nav.appendChild(magazine)
}
header();

function footer() {
  const footer = document.querySelector('footer')
  const h2 = document.createElement('h2')
  h2.textContent = "Coffee Memory"
  const follow = document.createElement('p')
  follow.textContent = "Follow Us"
  const ig = document.createElement('a')
  ig.setAttribute('href', "https://www.instagram.com/ajengazr/")
  const imgIg = document.createElement('img')
  imgIg.setAttribute('src', "https://cdn-icons-png.flaticon.com/128/3955/3955024.png")
  const fb = document.createElement('a')
  fb.setAttribute('href', "https://www.facebook.com/ajeng.a.maharani.750")
  const imgFb = document.createElement('img')
  imgFb.setAttribute('src', "https://cdn-icons-png.flaticon.com/128/145/145802.png")
  const tw = document.createElement('a')
  tw.setAttribute('href', "https://x.com/pyccol0")
  const imgTw = document.createElement('img')
  imgTw.setAttribute('src', "https://cdn-icons-png.flaticon.com/128/5969/5969020.png")
  const icon = document.createElement('div')
  icon.classList.add('icon')
  const spg = document.createElement('div')
  spg.classList.add('footer-spg')

  footer.appendChild(h2)
  footer.appendChild(spg)
  spg.appendChild(follow)
  spg.appendChild(icon)
  tw.appendChild(imgTw)
  icon.appendChild(tw)
  fb.appendChild(imgFb)
  icon.appendChild(fb)
  ig.appendChild(imgIg)
  icon.appendChild(ig)
}
footer();

function card(res) {
  const main = document.querySelector('main');
  const a = document.createElement('a');
  a.setAttribute('href', "../html/detail.html")
  const figure = document.createElement('figure');
  const figcaption = document.createElement('figcaption');
  const img = document.createElement('img');
  img.setAttribute('src', res.image);
  const h1 = document.createElement('h1');
  h1.textContent = res.title;
  const desc = document.createElement('p');
  desc.textContent = res.description;
  const ul = document.createElement('ul');
  res.ingredients.forEach((r) => {
    const li = document.createElement('li');
    li.textContent = r
    ul.appendChild(li)
  })
  const buy = document.createElement('button')
  buy.textContent = "pesan"
  buy.style.marginLeft = "48px"
  buy.style.marginTop = "10px"
  buy.style.width = "150px"
  buy.style.height = "25px"
  buy.style.backgroundColor = "chocolate"

  buy.addEventListener("click", () => {
    confirm(`apakah anda yakin ingin membeli produk ini ?`)
  })
  buy.addEventListener("mouseover", () => {
    buy.style.backgroundColor = "beige"
  })
  buy.addEventListener("mouseout", () => {
    buy.style.backgroundColor = "chocolate"
  })
  figcaption.appendChild(h1);
  figcaption.appendChild(desc);
  figcaption.appendChild(ul)
  figcaption.appendChild(buy)
  a.appendChild(img)
  figure.appendChild(a)
  figure.appendChild(figcaption);
  main.appendChild(figure);
  figure.addEventListener('click', () => {
    // menyimpan data yang terdapat di variabel res ke dalam localStorage dengan kunci 'coffee' dam coffee_id. 
    // Sebelum disimpan, data diubah terlebih dahulu menjadi format JSON string menggunakan fungsi JSON.stringify().
    localStorage.setItem('coffee', JSON.stringify(res));
    localStorage.setItem('coffee_id', JSON.stringify(res.id));
  });
}

