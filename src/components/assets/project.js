import socialmedia from '../../imgs/socialmediademo.png'
import slimehack from '../../imgs/slimehack.webp'
import eventplanner from '../../imgs/eventplanner.webp'
import gifthub from '../../imgs/gifthub.webp'
import rpgsheet from '../../imgs/rpgsheet.png'
import techdeck from '../../imgs/techdeck.png'
import moviemash from '../../imgs/moviemash.png'

export const projects = [
    {
        title: "Social Media Demo",
        body: "This full stack social media demo is my first large project combining a complex mongo database with a typescript/react frontend. It allowed me to experiment with recursion and fetching within a react context. It was also my first foray into tailwind and really stretched the capabilities of my css skills. Feel free to make an account and post some comments!",
        img: socialmedia,
        github: "https://github.com/scicluna/socialfullstack",
        deploy: "https://social-media-demonstration.herokuapp.com/"
    },
    {
        title: "Slimehack",
        body: "This game was built with one thing in mind. How quickly can I pick up a totally new javascript library and use it to create something cool? In just four days I was able to create a simple arcade game using the library along with some free assets from the internet. I hope you enjoy the game as much as I did making it! Use arrowkeys to move and hold spacebar to attack!",
        img: slimehack,
        github: "https://github.com/scicluna/Slimehack",
        deploy: "https://alarice.itch.io/slimehack"
    },
    {
        title: "Eventplanner",
        body: "My first react project. I designed this app to be a replacement for a weekly planner app that I had created back during my first months of bootcamp. This event planner shows off my skills in animation and my ability to quickly pick up new technologies. I avoided making this a full stack application this time in favour of saving the state of events in local storage.",
        img: eventplanner,
        github: "https://github.com/scicluna/eventplanner",
        deploy: "https://scicluna.github.io/eventplanner/"
    },
    {
        title: "Gifthub",
        body: "Gifthub was my second ever group project. We really had to band together and make a full-stack application using everything we had learned until that point in bootcamp. It was here where I really feel that I got a hang of express and was able to master Handlebars. This project really allowed me to appreciate SQL and Sequelize and what they can do for an application since they allowed us to make complex interactions between database items trivially easy to see and utilize. It's possible that by the time you read this the API is offline - just shoot me an email if you would like to sample it and I'll buy another month of the service.",
        img: gifthub,
        github: "https://github.com/scicluna/giftlist",
        deploy: "https://gifthub.herokuapp.com/"
    },
    {
        title: "RPG Sheet",
        body: "My first large project using Typescript and React. I really pushed my knowledge of CSS and JSX here with powerful visual effects and scrolling forms. I also utilized the dnd 5e API to build out powerful generative objects and prefilled level one character sheets.",
        img: rpgsheet,
        github: "https://github.com/scicluna/rpgv2",
        deploy: "https://scicluna.github.io/rpgv2/"
    },
    {
        title: "Movie Mash",
        body: "Movie Mash was my first ever group project. It was built near the end of the first third of bootcamp after we had learned the basics of front-end development. I learned alot about how to work in a group on a coding project aswell as strugged my way through the git process. It was here where I really became comfortable with calling APIs from the front-end and learned how to lean on and help my teammates.",
        img: moviemash,
        github: "https://github.com/scicluna/movie-mash",
        deploy: "https://scicluna.github.io/movie-mash/"
    }

]