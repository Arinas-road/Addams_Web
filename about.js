//film events
const films = document.querySelector('.film-films');
const filmsContainer = document.querySelector('.films-body');
console.log(films, filmsContainer);
let filmImage;
const blur = document.querySelector('.blur');

const film = document.querySelector('.film');
const filmHeader = document.querySelector('.film-header');

const hiddenFilm = document.querySelector('.hidden');
const closingIcon = document.querySelector('.film-close');

console.log(film.childNodes[1].childNodes[3]);

//film Description
const filmImageCur = document.querySelector('.film-image');
filmCurImg = film.childNodes[1].childNodes[3];
const filmDescription = document.querySelector('.film-text-1');
const filmName = document.querySelector('.film-about-name');
const filmYear = document.querySelector('.film-about-year');
const filmLink = document.querySelector('.film-link-a');
const filmLinkContainer = document.querySelector('.film-link');

const filmList = [
   {
      name: "Wednesday",
      year: 2022,
      img: '<img src="img/2022.jpg" alt="">',
      src: "img/2022.jpg",
      link: "https://kinogo.fm/1201-ujensdjej-2022-serial.html",
      desription: `Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her psychic powers, stop a monstrous killing spree of the town citizens, and solve the supernatural mystery that affected her family 25 years ago — all while navigating her new relationships.`,
   },
   {
      name: "The Addams Family",
      year: 2019,
      img: '<img src="img/2019-poster.jpg" alt="">',
      src: "img/2019-poster.jpg",
      link: 'https://kinogo.biz/10896-semejka-addams.html',
      desription: `Gomez and Morticia Addams move to a derelict asylum in New Jersey, surrounded by a marsh and hidden by a fog at the top of a mountain, to raise a family. Thirteen years later, teaching his son Pugsley the saber tradition of the Addams family while Wednesday is about the world outside the mansion , TV reality host Margaux Needler is busy designing and building the planned community of Ass when the marsh is drained and the Addams home is revealed, Margaux decides to get rid of the Addams Family.`,
   },
   {
      name: "The Addams Family, Tv Series",
      year: 1964,
      img: '<img src="img/1964.jpeg" alt="">',
      src: "img/1964.jpeg",
      link: 'https://kinogo.biz/9153-semejka-addams.html',
      desription: `TV Series  The Addams Family is not your typical family: it takes delight in most of the things of which normal people would be terrified. Gomez Addams is an extremely wealthy man and is able to indulge his wife Morticia's every desire, whether it's cultivation of poisonous plants or a candlelit dinner in a graveyard. People visiting the Addams Family just don't seem to appreciate the 7-foot-tall butler named Lurch or the helping hand (which is just a disembodied hand named Thing).`,
   },
   {
      name: "The Addams Family",
      year: 1991,
      img: '<img src="img/1991-cover.jpg" alt="">',
      src: "img/1991-cover.jpg",
      link: 'https://kinogo.biz/13870-semejka-addams.html',
      desription: `The Addams Family steps out of Charles Addams' cartoons. They live with all of the trappings of the macabre (including a detached hand for a servant) and are quite wealthy. Added to this mix is a crooked accountant and his loan shark and a plot to slip the shark's son into the family as their long-lost Uncle Fester. Can the false Fester find his way into the vault before he is discovered?`,
   },
   {
      name: "Addams Family Values",
      year: 1993,
      img: '<img src="img/1993.jpeg" alt="">',
      src: "img/1993.jpeg",
      link: 'https://kinogo.biz/28458-cennosti-semejki-addams.html',
      desription: `When an adorable baby boy is added to the Addams household, Wednesday and Pugsley do not hate him, they just aren't necessarily excited about his existence. OK...yeah, they do hate him. So they plot to get rid of him one way or another. Meanwhile, their parents hire a nanny for him and she charms Fester, but has evil intentions for him. The Addamses must stop her, but how?`,
   },
   {
      name: "Addams Family Reunion",
      year: 1998,
      img: '<img src="img/1998.jpg" alt="">',
      src: "img/1998.jpg",
      link: 'https://kinogo.sh/46542-vossoedinenie-semejki-addams.html',
      desription: `Gomez (Tim Curry) and Morticia Addams (Daryl Hannah) are horrified to discover that Grandpa (Kevin McCarthy) and Grandma Addams (Estelle Harris) have a rare disease that is slowly turning them "normal". The only chance they have of curing them is to organize a family reunion, hoping that someone knows a home remedy. Unfortunately, due to a printing error, the family arrives at the reunion of an ordinary family named Adams (with one D). While Gomez and Morticia, oblivious to the mistake, search for a cure amongst a family divided by the wish to inherit; Pugsley (Jerry Messing) and Wednesday (Nicole Fugere) are busy making new friends...explode; Uncle Fester (Patrick Thomas) and Thing (Christopher Hart) search for a vicious Chihuahua that lives on human hair; and Lurch (Carel Struycken) falls in love. Meanwhile, a couple going to the reunion are given the wrong address and end up at the Addams mansion, where Grandmama (Alice Ghostley) and Cousin Itt (Phil Fondacaro) are staying. No one's life will ever be the same.`,
   },
   {
      name: "The New Addams Family TV Series",
      year: 1998,
      img: '<img src="img/1998-newFamily.jpg" alt="">',
      src: "img/1998-newFamily.jpg",
      link: 'https://kinogo.vin/40151-novaja-semejka-addams-1998.html',
      desription: `Updated-for-the-'90s version of the original Addams Family show. The family remains the same: Gomez, Morticia, Wednesday, Pugsley, Uncle Fester, Granmama, Lurch, Thing, and Cousin Itt. They're still spooky, and they still have a lot of neighbors and other outsiders who show up and get freaked out by the family's macabre shenanigans.`,
   },
   {
      name: "The Addams Family 2",
      year: 2021,
      img: '<img src="img/2021.jpeg" alt="">',
      src: "img/2021.jpeg",
      link: '<a href="https://www.kinopoisk.ru/film/1313395/?ysclid=lfi7rs50v950308797">Check it out!</a>',
      desription: `Everyone's favorite spooky family is back in the animated comedy sequel, The Addams Family 2. In this all new movie we find Morticia and Gomez distraught that their children are growing up, skipping family dinners, and totally consumed with "scream time." To reclaim their bond they decide to cram Wednesday, Pugsley, Uncle Fester and the crew into their haunted camper and hit the road for one last miserable family vacation. Their adventure across America takes them out of their element and into hilarious run-ins with their iconic cousin. What could possibly go wrong?`,
   }
];


filmsContainer.addEventListener('click', function(e){
   if(e.target.parentNode.parentNode.firstElementChild.firstElementChild.src === undefined) return;
   hiddenFilm.style.display = 'block';
   const num = +e.target.parentNode.parentNode.getAttribute("num");
   const filmcur = filmList[num];
   filmImage = new Image;
   filmImage.src = filmcur.src;
   filmImageCur.replaceChild(filmImage, filmImageCur.firstElementChild);
   filmName.textContent = filmcur.name;
   filmYear.textContent = `year: ${filmcur.year}`;
   filmDescription.textContent = filmcur.desription;
   film.style.top = `${window.scrollY + 0.4*window.innerHeight}px` ;
   filmLink.href = filmcur.link;
   blur.style.display = 'block';
   console.log(blur);
})

closingIcon.addEventListener('click', function(e){
   hiddenFilm.style.display = 'none';
   blur.style.display = 'none';
});

window.addEventListener('scroll', function(e){
   film.style.top = `${window.scrollY + 0.4*window.innerHeight}px`;
})

blur.addEventListener('click', function(e){
   hiddenFilm.style.display = 'none';
   blur.style.display = 'none';
})