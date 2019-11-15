const projects = [
    {
        name: "Lodgel",
        screenshot: require("../../img/p2screenshot.png"),
        description:
            "This is an application to allow property owners and guests to keep track of the progress of cleaning a property.",
        technologies: ["React", "Typescript", "Node.js", "express", "PostgreSQL"],
        github: "https://github.com/Lambda-School-Labs/labs10-cleaner-tool",
        live: "https://determined-tereshkova-b03c8b.netlify.com/"
    },
    {
        name: "Gotta Catch 'Em All",
        screenshot: require("../../img/p1screenshot.png"),
        description:
            "This is a little app I made for keeping track of your progress on a nationaldex. I plan to add some more features in the future enjoy!",
        technologies: ["React", "PokeAPI", "NodeJS"],
        github: "https://github.com/freitagdavid/national_dex_tracker",
        live: "https://pokedex.freitag.site/"
    },
    {
        name: "Django Blog",
        screenshot: require("../../img/p3screenshot.png"),
        description: "A multi-user blogging application.",
        technologies: ["Django Backend", "PostgreSQL", "Django Templating", "Bootstrap 4"],
        github: "https://github.com/freitagdavid/django_blog",
        live: "https://dfreitag-django-blog.herokuapp.com/"
    }
];

export default projects;
