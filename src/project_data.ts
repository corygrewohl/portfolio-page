import CSS from './assets/Skills/css.png';
import Firebase from './assets/Skills/firebase.png';
import HTML from './assets/Skills/html.png';
import JS from './assets/Skills/js.png';
import Node from './assets/Skills/node.png';
import React from './assets/Skills/react.png';
import Redux from './assets/Skills/redux.png';
import Sass from './assets/Skills/sass.png';
import StyledComponents from './assets/Skills/styled-components.png';
import TS from './assets/Skills/ts.png';
import Vite from './assets/Skills/vite.png';
import Webpack from './assets/Skills/webpack.png';

import ShoppingCart from './assets/Projects/shopping-cart.png'
import MemoryCard from './assets/Projects/memory-card.png'
import TicTacToe from './assets/Projects/tic-tac-toe.png'
import TodoList from './assets/Projects/todo-list.png'
import WeatherApp from './assets/Projects/weather-app.png'


const projects = [
    {
        id: 0,
        name: 'Shopping Cart',
        description: 'A fake store website. I built the cart functionality with context and redux in order to learn both!',
        image: ShoppingCart,
        skills: [React, TS, Redux, StyledComponents, Vite],
        date: 'Oct 2022 - Nov 2022',
        repo: 'https://github.com/corygrewohl/shopping-cart',
        demo: 'eloquent-muffin-227d49.netlify.app'
    },
    {
        id: 1,
        name: 'Memory Card Game',
        description: 'A memory testing game built in Typescript, React, and Sass',
        image: MemoryCard,
        skills: [React, TS, Sass, Webpack],
        date: 'Sept 2022 - Oct 2022',
        repo: 'https://github.com/corygrewohl/memory-card',
        demo: 'https://corygrewohl.github.io/memory-card/'
    },
    // {
    //     id: 2,
    //     name: 'Guavah 1.0',
    //     description: 'A mobile app built in React Native and AWS for ranking restaurants.',
    //     image: '',
    //     skills: [React, JS, CSS],
    //     date: 'Jan 2022 - Apr 2022',
    //     repo: 'https://github.com/Guavah-Team',
    //     demo: 'https://www.guavah.net/'
    // },
    // {
    //     id: 3,
    //     name: 'Guavah 2.0',
    //     description: 'Recreating Guavah with a Typescript/Node/Firebase backend.',
    //     image: '',
    //     skills: [TS, Node, Firebase ],
    //     date: 'Jan 2022 - Apr 2022',
    //     repo: 'https://github.com/orgs/Guavah-LLC/repositories',
    //     demo: 'https://www.guavah.net/'
    // },
    {
        id: 4,
        name: 'Weather App',
        description: 'A weather app created in HTML, Sass, and JS in order to learn how to handle API\'s',
        image: WeatherApp,
        skills: [HTML, Sass, JS],
        date: 'Jul 2022',
        repo: 'https://github.com/corygrewohl/weather-app',
        demo: 'https://corygrewohl.github.io/weather-app/'
    },
    {
        id: 5,
        name: 'Todo List',
        description: 'A todo list app built with HTML, CSS, JS, and Webpack.',
        image: TodoList,
        skills: [HTML, CSS, JS, Webpack],
        date: 'Jul 2022',
        repo: 'https://github.com/corygrewohl/todo-list',
        demo: 'https://corygrewohl.github.io/todo-list/'
    },
    {
        id: 6,
        name: 'Tic-Tac-Toe',
        description: 'A tic-tac-toe game built with HTML, CSS, and JS',
        image: TicTacToe,
        skills: [HTML, CSS, JS],
        date: 'Jun 2022',
        repo: 'https://github.com/corygrewohl/tic-tac-toe',
        demo: 'https://corygrewohl.github.io/tic-tac-toe/'
    }
]

export default projects;