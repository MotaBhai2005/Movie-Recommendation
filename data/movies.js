const movies = [
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.7,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    year: 2014,
    duration: "169 min"
  },
  {
    title: "The Hangover",
    genre: "Comedy",
    rating: 7.7,
    description: "Three friends retrace a wild bachelor party to find the missing groom.",
    poster: "https://i.pinimg.com/webp85/1200x/5d/43/8e/5d438ee05ed50368d643346a85d1e86b.webp",
    year: 2009,
    duration: "100 min"
  },
  {
    title: "Tumbbad",
    genre: "Horror",
    rating: 8.2,
    description: "A man searches for hidden treasure guarded by an ancient curse.",
    poster: "https://i.pinimg.com/736x/05/0d/b2/050db2f45725831bd09a50a364a59ee3.jpg",
    year: 2018,
    duration: "104 min"
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    description: "Batman faces the Joker in a battle that tests his limits and Gotham's hope.",
    poster: "https://i.pinimg.com/736x/cd/01/da/cd01da13e987da625780ce1daa59b7aa.jpg",
    year: 2008,
    duration: "152 min"
  },
  {
    title: "John Wick",
    genre: "Action",
    rating: 8.4,
    description: "A retired assassin returns to the criminal underworld seeking revenge.",
    poster: "https://i.pinimg.com/webp85/1200x/25/82/b4/2582b4a9b2174193380ad366886ee5a3.webp",
    year: 2014,
    duration: "101 min"
  },
  {
    title: "RRR",
    genre: "Action",
    rating: 7.8,
    description: "Two legendary revolutionaries fight against British rule in India.",
    poster: "https://i.pinimg.com/736x/05/bb/9c/05bb9c85af0dc632b6fc7c84e32fb500.jpg",
    year: 2022,
    duration: "182 min"
  },
  {
    title: "3 Idiots",
    genre: "Comedy",
    rating: 8.4,
    description: "Three engineering students discover friendship and redefine success.",
    poster: "https://i.pinimg.com/736x/ca/4a/12/ca4a128a5a54d5b5e35ceba622636c83.jpg",
    year: 2009,
    duration: "170 min"
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    description: "A thief enters dreams to steal secrets from the subconscious.",
    poster: "https://i.pinimg.com/webp85/1200x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.webp",
    year: 2010,
    duration: "148 min"
  },
  {
    title: "Hera Pheri",
    genre: "Comedy",
    rating: 8.2,
    description: "Three men become involved in a hilarious kidnapping adventure.",
    poster: "https://i.pinimg.com/736x/f5/26/f3/f526f3ffc657b4f7121f78673551821b.jpg",
    year: 2000,
    duration: "156 min"
  },
  {
    title: "Pathaan",
    genre: "Action",
    rating: 6.0,
    description: "An elite RAW agent returns to stop a dangerous terrorist mission.",
    poster: "https://i.pinimg.com/736x/27/9b/58/279b58fb4d788e1fb28055e61e2fdd35.jpg",
    year: 2023,
    duration: "146 min"
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    description: "A banker forms an unlikely friendship while serving a life sentence.",
    poster: "https://i.pinimg.com/webp85/1200x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.webp",
    year: 1994,
    duration: "142 min"
  },
  {
    title: "12th Fail",
    genre: "Drama",
    rating: 9.0,
    description: "A young man battles failure and poverty to chase his dream.",
    poster: "https://i.pinimg.com/736x/97/92/15/9792154bb86de51a8212e13f3f890a8d.jpg",
    year: 2023,
    duration: "147 min"
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
    description: "A simple man witnesses and influences extraordinary events.",
    poster: "https://i.pinimg.com/webp85/1200x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.webp",
    year: 1994,
    duration: "142 min"
  },
  {
    title: "The Matrix",
    genre: "Sci-Fi",
    rating: 8.7,
    description: "A hacker discovers the shocking truth about reality.",
    poster: "https://i.pinimg.com/webp85/736x/ed/45/16/ed4516338fa5df348c13a2a7ce1e7998.webp",
    year: 1999,
    duration: "136 min"
  },
  {
    title: "The Conjuring",
    genre: "Horror",
    rating: 7.5,
    description: "Paranormal investigators help a family haunted by dark forces.",
    poster: "https://i.pinimg.com/1200x/8a/3a/af/8a3aafa14f02b87086b844762cb78a7e.jpg",
    year: 2013,
    duration: "112 min"
  },
  {
    title: "Get Out",
    genre: "Horror",
    rating: 7.8,
    description: "A visit to a girlfriend's family uncovers horrifying secrets.",
    poster: "https://i.pinimg.com/1200x/16/d2/53/16d2536e9553ac74157ffa9c193a8a0b.jpg",
    year: 2017,
    duration: "104 min"
  },
  {
    title: "Oppenheimer",
    genre: "Drama",
    rating: 8.3,
    description: "The story of J. Robert Oppenheimer and the creation of the atomic bomb.",
    poster: "https://i.pinimg.com/webp85/1200x/b5/09/78/b509782194dda9b57a69d08f3afc7be4.webp",
    year: 2023,
    duration: "180 min"
  },
  {
    title: "Dangal",
    genre: "Drama",
    rating: 8.3,
    description: "A former wrestler trains his daughters to become world-class champions.",
    poster: "https://i.pinimg.com/736x/af/de/37/afde3751c64eab6a269ff37881f6a38e.jpg",
    year: 2016,
    duration: "161 min"
  },
  {
    title: "Taare Zameen Par",
    genre: "Drama",
    rating: 8.3,
    description: "A teacher helps a dyslexic child discover his hidden talent.",
    poster: "https://i.pinimg.com/736x/dc/7e/ef/dc7eefe8398a60683f7aae77c8a52ba7.jpg",
    year: 2007,
    duration: "165 min"
  },
  {
    title: "Avatar",
    genre: "Sci-Fi",
    rating: 7.9,
    description: "A marine on Pandora finds himself torn between duty and love.",
    poster: "https://i.pinimg.com/736x/66/ec/b5/66ecb58a7db3308030eac58dbb3d39c3.jpg",
    year: 2009,
    duration: "162 min"
  },
  {
    title: "Dune",
    genre: "Sci-Fi",
    rating: 8.0,
    description: "A gifted young man embraces his destiny on the desert planet Arrakis.",
    poster: "https://i.pinimg.com/webp85/1200x/6a/ca/58/6aca58c43f149d1016587ad7fbedc621.webp",
    year: 2021,
    duration: "155 min"
  },
  {
    title: "Blade Runner 2049",
    genre: "Sci-Fi",
    rating: 8.0,
    description: "A blade runner uncovers a secret that could change humanity forever.",
    poster: "https://i.pinimg.com/webp85/1200x/3f/9e/4a/3f9e4a6ce52076610f43014819062e99.webp",
    year: 2017,
    duration: "164 min"
  },
  {
    title: "Mission: Impossible - Fallout",
    genre: "Action",
    rating: 7.7,
    description: "Ethan Hunt races against time to stop a nuclear disaster.",
    poster: "https://i.pinimg.com/webp85/1200x/a9/8c/b6/a98cb6d14371d1978ccefb838c505798.webp",
    year: 2018,
    duration: "147 min"
  },
  {
    title: "Mad Max: Fury Road",
    genre: "Action",
    rating: 8.1,
    description: "A drifter joins rebels escaping across a post-apocalyptic wasteland.",
    poster: "https://i.pinimg.com/736x/95/dc/ba/95dcba45d8022c22c834db61d7632d6d.jpg",
    year: 2015,
    duration: "120 min"
  },
  {
    title: "Free Guy",
    genre: "Comedy",
    rating: 7.1,
    description: "A bank teller discovers he's an NPC in a video game.",
    poster: "https://i.pinimg.com/736x/39/bf/b5/39bfb5b2b52554602210352dd4044ff0.jpg",
    year: 2021,
    duration: "115 min"
  },
  {
    title: "Jumanji: Welcome to the Jungle",
    genre: "Comedy",
    rating: 6.9,
    description: "Teenagers get trapped inside a magical video game.",
    poster: "https://i.pinimg.com/736x/68/03/e9/6803e927550b18896e42be794ed34dfc.jpg",
    year: 2017,
    duration: "119 min"
  },
  {
    title: "Golmaal: Fun Unlimited",
    genre: "Comedy",
    rating: 7.4,
    description: "Four friends get caught in hilarious situations while chasing money.",
    poster: "https://i.pinimg.com/1200x/6f/2f/e0/6f2fe01486d36f0af50e722c389b9ead.jpg",
    year: 2006,
    duration: "150 min"
  },
  {
    title: "IT",
    genre: "Horror",
    rating: 7.3,
    description: "A group of children confront a terrifying shape-shifting clown.",
    poster: "https://i.pinimg.com/736x/2c/a3/34/2ca33449d7592e2736e19f6f5796531d.jpg",
    year: 2017,
    duration: "135 min"
  },
  {
    title: "A Quiet Place",
    genre: "Horror",
    rating: 7.5,
    description: "A family must live in silence to survive deadly creatures.",
    poster: "https://i.pinimg.com/236x/36/f5/57/36f557aa79de891808fd6cbeaad359ba.jpg",
    year: 2018,
    duration: "90 min"
  },
  {
    title: "The Babadook",
    genre: "Horror",
    rating: 6.8,
    description: "A mysterious storybook unleashes terrifying events inside a grieving family's home.",
    poster: "https://i.pinimg.com/736x/05/87/e8/0587e867bee335d77989de5a5777acab.jpg",
    year: 2014,
    duration: "94 min"
  }
];