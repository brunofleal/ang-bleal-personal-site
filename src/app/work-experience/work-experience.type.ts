export type WorkProject = {
    title: string;
    description: string;
    tags: string[];
    period: {
        start: string;
        end: string;
    }
}

export type WorkExperience = {
    company: string;
    projects: WorkProject[];
    companyLogoSrc?: string;
}