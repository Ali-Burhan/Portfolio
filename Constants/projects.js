// import project demo images as follows.
import PROJECT1_1 from '../styles/projects/Project1_1.jpg';
import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
    //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
    //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
    {
        name: 'Fams Food', //project name
        description: 'I have created a website for a food company that deals with the rice field. Enjoyed being working with that project but that was a basic project to start with.', //project description
        githubLink: '', //github repo link
        projectLink: 'https://www.famfood.com', //deployed project link
        tech: ['Wordpress', 'Plugins', 'Elementor'], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], //list of names of images from above imports.
    },
    {
        name: 'React Todo',
        description: 'Yes! That is a basic project or you can say the beginners guide but that was cool experience learning with react.',
        githubLink: 'https://github.com/Ali-Burhan/ReactNavbar/tree/master',
        projectLink: '',
        tech: ['React', 'Tailwind'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Weather App',
        description: 'Weather fetching API in react that was a nice journey in learning with react. That is again is a short project or you can saya app but i\'m currently exploring with onward with my degree in computer science',
        githubLink: 'https://github.com/Ali-Burhan/ReactNavbar/tree/master',
        projectLink: '/',
        tech: ['React', 'Tailwind'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]
