//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
// import pic from ""
export const userinfo = {
    logoText: "ALI BURHAN", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'aliburhan42000@email.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '30161499488', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+92' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'linkedin', link: '', icon: faLinkedinIn },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hey there, I am Burhan.",
        subtitle: "Ali Burhan is a student of BSCS(HONS) currenlty in 3rd year. I am exploring with time and i had also explored things a bit."
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Front-end", // eg.frontend, backend, devops etc
            skills: ["HTML", "CSS", "Javascript"] //eg. react, html, python etc.
        },
        {
            category: "frameworks/Library",
            skills: ["React", "Next","Tailwind","Bootstrap"]
        },
        {
            category: "Smart Contract",
            skills: ["Solidity", "Hardhat"]
        },
        {
            category: "Data Science (to be) ",
            skills: ["Python", "Sci-py", "sci-kit"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "'Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked. But it’s not like this compulsive need like my need to be praised.' Whatever the situation or conflict might be, it can almost always be traced back to this need. His conference room characters, fun runs, and copious amounts of office parties are all aimed at his need to be praised.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2016 - 2018', //timespan
                title: 'Matric (Biology)', //eg. BTech in Compuster Engineering
                organization: 'Dar-e-arkam Sheikhupura', //eg. VJTI, Mumbai
                description: 'secured 85% in my annual matriculation result' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2018 - 2020',
                title: 'FSC(Pre-Engineering)',
                organization: 'Aspire Group of colleges',
                description: 'secured 80% in my inter exam results'
            },
            {
                time: '2020 onward',
                title: 'Bs Computer Science (HONS)',
                organization: 'NFC institute of engineering and fertilizer research',
                description: 'secured total of 3.3 CGPA so far every semester'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Mandiali Paper Mill', //company name eg.Microsoft
                companylogo: '../styles/projects/about', //companylogo
                position: 'Regional Manager', //post you held eg.Senior SDE
                time: 'March 2020 - May 2020', //timespan
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}