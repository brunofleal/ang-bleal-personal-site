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
            tags: [],
            period: {
                start: "07/18",
                end: "02/20"
            }
        },
        {
            title: "",
            description: "",
            tags: [],
            period: {
                start: "",
                end: ""
            }
        }
    ],
}