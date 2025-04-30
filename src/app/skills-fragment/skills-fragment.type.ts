enum Intensity {
    Begginer = 1,
    Intermediate = 2,
    Advanced = 3,
    Expert = 4
}

export type Skill = {
    label: string;
    intensity: Intensity;
}

export type SkillSet = {
    groupLabel: string;
    skills: Skill[];
}

export type SkillSetArea = {
    skillAreaLabel: string;
    skillSets: SkillSet[];
}