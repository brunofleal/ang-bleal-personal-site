import { SkillSetArea } from "./skills-fragment.type";

export const skillsGroups: SkillSetArea []= [
    {
        skillAreaLabel:"Frontend",
        skillSets: [
            {
                groupLabel:"Languages",
                skills:[
                    {label:"JavaScript", intensity:4},
                    {label:"Typecript", intensity:3}
                ]
            },
            {
                groupLabel:"Frameworks",
                skills:[
                    {label:"React", intensity:4},
                    {label:"Vanilla JS", intensity:2},
                    {label:"VueJs", intensity:1},
                    {label:"Angular", intensity:1},
                ]
            },
            {
                groupLabel:"Libraries",
                skills:[
                    {label:"Chakra UI", intensity:3},
                    {label:"Ag Grid", intensity:3},
                    {label:"Axios", intensity:3},
                    {label:"Tailwind Css", intensity:2},
                    {label:"Jest", intensity:2},
                ]
            },
        ]
    },
    {
        skillAreaLabel:"Backend",
        skillSets: [
            {
                groupLabel:"Languages",
                skills:[
                    {label:"Javascript", intensity:4},
                    {label:"Python", intensity:3},
                    {label:"C#", intensity:2},
                    {label:"C++/C", intensity:1},
                    {label:"Java", intensity:1},
                ]
            },
            {
                groupLabel:"Frameworks",
                skills:[
                    {label:"NodeJs", intensity:3},
                    {label:"Django", intensity:2},
                    {label:"Flask", intensity:2},
                    {label:"Unity", intensity:2},
                    {label:"SpringBoot", intensity:1},
                ]
            },
            {
                groupLabel:"Libraries",
                skills:[
                    {label:"Pandas", intensity:2},
                    {label:"Express", intensity:2},
                    {label:"Pywin32", intensity:2},
                ]
            },
        ]
    },
    {
        skillAreaLabel: "Mobile/Desktop",
        skillSets: [
            {
                groupLabel:"Frameworks",
                skills:[
                    {label:"ElectronJs", intensity:3},
                    {label:"Android", intensity:2},
                    {label:"Xamarin Forms", intensity:1},
                    {label:"Flutter", intensity:1},
                ]
            },
        ]
    },
    {
        skillAreaLabel: "Other Tools",
        skillSets: [
            {
                groupLabel:"Version Control",
                skills:[
                    {label:"Git", intensity:3},
                ]
            },
            {
                groupLabel:"Deployment Tools",
                skills:[
                    {label:"Docker", intensity:2},
                    {label:"Nginx", intensity:2},
                ]
            },
            {
                groupLabel:"Agile Software",
                skills:[
                    {label:"Jira", intensity:3},
                    {label:"Confluence", intensity:3},
                ]
            },
        ]
    },

]