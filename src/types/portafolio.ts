export interface Portafolio {
    personal:   Personal;
    skills:     Skill[];
    experience: Experience[];
    contact:    Contact;
    seo:        SEO;
}

export interface Contact {
    email:   string;
    socials: Social[];
}

export interface Social {
    name: string;
    url:  string;
    icon: string;
}

export interface Experience {
    company:          string;
    role:             string;
    url?:             string;
    description?:     string;
    startDate:        string;
    endDate:          string;
    responsibilities: string[];
    skills?:          string[];
}

export interface Personal {
    name:       string;
    ubication:  string;
    avatar:     string;
    curriculum: string;
}

export interface SEO {
    title:       string;
    description: string;
    keywords:    string[];
    ogimage:     string;
}

export interface Skill {
    category: string;
    icon:     string;
    items:    string[];
}