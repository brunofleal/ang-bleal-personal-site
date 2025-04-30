import { WorkExperience } from "./work-experience.type";

export const workExperience: WorkExperience = {
    company: 'Cesar',
    companyLogoSrc: 'https://media.licdn.com/dms/image/v2/C4D0BAQEuUnVFeTxb3g/company-logo_200_200/company-logo_200_200/0/1656948837235/cesar_logo?e=1751500800&v=beta&t=cWq58Y_w-wIKMmerYLKJOSvpSvmcDHWgxrVcFg0ul24',
    projects:[
        {
            title: "Data loss prevention System for Tizen and Android embedded environments;",
            description: `
            Tizen is an operating system developed by the Linux Foundation that runs on a wide range of Samsung devices, including TV, smartphones, tablets, etc;
            worked on Development of Chromium based web interface to interact with the DLP Service(TV), implemented VueJs Framework;
            worked on Development of Native interface to interact with the DLP Service(TV), implemented using Xamarin.Forms;
            worked on Development of software to prevent data loss on TVs and mobile devices using the Tizen/Android OS;
            worked on Development of test applications to aid the development of the DLP System`,
            tags: ["Text Processing","C++", "C", "Javascript", "VueJs", "C#", "Java", "Android"],
            period: {
                start: "2018",
                end: "2020"
            }
        },
        {
            title: "Desktop Privacy Data Search engine",
            description: `Desktop(Windows) application for scanning local file system for sensitive/private data and provide Data report;
            Development of command line and graphical interfaces;
            Data extraction from most common document files, microsoft office file formats and pdf;
            Development of Desktop(Windows) GUI using React + EletronJs
            - Development of search engine using NodeJs + Dedicated Python libraries;
            - Pattern matching optimization;
            - Software architecture and technologies decision making;
            - Lead and provide support to other developers`,
            tags: ["Data Processing", "Pattern Matching", "Python", "Pywin32", "Javascript", "NodeJs", "React"],
            period: {
                start: "2020",
                end: "2021"
            }
        },
        {
            title: "Local Differential Privacy Benchmarking system",
            description: `Local differential privacy (LDP) is a model of differential privacy with the added requirement that if an adversary has access to the personal responses of an individual in the database, that adversary will still be unable to learn much of the user's personal data;
            This project primary objective was to obtain performance metrics on LDP techniques applied to a Client-Server environment;

            Further details publicly available on the published IEEE Conference paper: https://ieeexplore.ieee.org/document/9767402;
            - Research LDP academic literature;
            - Implement LDP Client Android application for running LDP client simulations, sending LDP Data;
            - Implement LDP Server Spring(Java) server processing LDP Data and benchmarking its operations;
            - Execute LDP simulations and process resulting benchmarking data;
            - Collaborate with academic partners.`,
            tags: ["Local Differential Privacy", "Java", "Android", "Springboot"],
            period: {
                start: "2021",
                end: "2022"
            }
        },
        {
            title: "Image Bucket Manager",
            description: `
            Web application for managing sets of images stored in AWS S3 Bucket service, for Machine learning purposes;
            Development of Web Interface using Typescript + ChakraUI;
            Development of docker container for serving web application;
            Development of Backend Flask(Python) server;
            Project research & development;
            Code Review

            `,
            tags: ["AWS S3", "Typescript", "React", "ChakraUI", "Python", "Flask", "Docker"],
            period: {
                start: "2022",
                end: "2022"
            }
        },
        {
            title: "Project: Eletronics data manager",
            description: `
            Web application for managing eletronic projects related data. Tabular data;
            Interface overhaul from legacy Bootstrap + JQuery SSR interface;
            - Development of Web Interface using React + Typescript + ChakraUI + AgGrid;
            - Development of docker container for serving web application;
            - Development of Backend Django(Python) server;
            - Project research & development;
            - Code Review

            `,
            tags: ["React", "Typescript", "ChakraUI", "Python", "Django", "Docker", "JQuery", "AgGrid"],
            period: {
                start: "2023",
                end: "2025"
            }
        }
    ],
}