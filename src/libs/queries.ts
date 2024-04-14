export const getCategoryOfProjects = async () => {
  const items = [
    {
      id: 1,
      title: "React Projects",
      img: "/images/category/react-js.png",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      categoryLink: "/react",
    },
    {
      id: 2,
      title: "Next JS Projects",
      img: "/images/category/next-js.png",
      // img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      categoryLink: "/nextjs",
    },
    {
      id: 3,
      title: "MERN Projects",
      img: "/images/category/mern.jpg",
      // img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      categoryLink: "/mern",
    },
    {
      id: 4,
      title: "Node JS Projects",
      img: "/images/category/node-js.png",
      // img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      categoryLink: "/node",
    },
    {
      id: 5,
      title: "HTML, CSS, JS Projects",
      img: "/images/category/html-css-js.png",
      // img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      categoryLink: "/html-css",
    },
  ];

  return items;
};

export const getReactProjects = async () => {
  const items = [
    {
      id: 1,
      title: "The Wild Oasis",
      img: "/images/react/the-wild-oasis/home.JPG",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A User Friendly Hotel Management Application designed to manage hotel operations like Sales Statistics, Cabin, User and Booking management",
      githubLink: "https://github.com/Ryuga8150/the-wild-oasis",
      hostLink: "https://the-wild-oasis-ryuga8150.netlify.app",
    },
    {
      id: 2,
      title: "Worldwise",
      img: "/images/react/worldwise/home.JPG",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A User Friendly Hotel Management Application designed to manage hotel operations like Sales Statistics, Cabin, User and Booking management",
      githubLink: "https://github.com/Ryuga8150/Apna-Kissan",
      hostLink: "https://the-wild-oasis-ryuga8150.netlify.app",
    },
    {
      id: 3,
      title: "Apna Kissan",
      img: "/images/react/apna-kissan/home.JPG",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A User Friendly Hotel Management Application designed to manage hotel operations like Sales Statistics, Cabin, User and Booking management",
      githubLink: "https://github.com/Ryuga8150/Apna-Kissan",
      hostLink: "https://the-wild-oasis-ryuga8150.netlify.app",
    },
  ];

  return items;
};

export const getMernProjects = async () => {
  const items = [
    {
      id: 1,
      title: "Mern Estate",
      img: "/images/mern/mern-estate/home.JPG",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A Modern MERN Real Estate platform where users can search, list, book, and explore various properties, whether for sale or rent.",
      githubLink: "https://github.com/Ryuga8150/Mern-Estate",
      hostLink: "https://mern-estate-ryuga.onrender.com/",
    },
  ];

  return items;
};

export const getNodeProjects = async () => {
  const items = [
    {
      id: 1,
      title: "Natours",
      img: "/images/nodejs/natours/home.JPG",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A site which offers a variety of tours that combine outdoor adventure, cultural and experimental learning.",
      githubLink: "https://github.com/Ryuga8150/Natours-v1",
      hostLink: "https://natours-ryuga.onrender.com/",
    },
  ];

  return items;
};

export const getNextProjects = async () => {
  const items = [
    {
      id: 1,
      title: "Digital Hippo",
      img: "/images/nextjs/digital-hippo/home.JPG",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A Modern Fullstack E-Commerce MarketPlace for Digital products where users can purchase and sell their own products like UI kits.",
      githubLink: "https://github.com/Ryuga8150/digital-hippo",
      hostLink: "https://digital-hippo-ryuga.onrender.com/",
    },
  ];

  return items;
};

export const getHtmlCssJsProjects = async () => {
  const items = [
    {
      id: 1,
      title: "Feastry Foods",
      img: "/images/html-css-js/feastry-foods/home.JPG",
      // img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A MVC Architectured website, Feastry Foods where people can order as well as book for catering events amongst the menu offerings",
      githubLink: "https://github.com/Ryuga8150/Feastry-Foods-v1",
      hostLink: "https://feastry-foods.netlify.app/",
    },
    {
      id: 2,
      title: "Forkify",
      // img: "/images/category/react-js.png",
      img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      desc: "A MVC Architectured website, Feastry Foods where people can order as well as book for catering events amongst the menu offerings",
      githubLink: "https://github.com/Ryuga8150/Forkify",
      hostLink: "https://forkify-ryuga8150.netlify.app/",
    },
  ];

  return items;
};
