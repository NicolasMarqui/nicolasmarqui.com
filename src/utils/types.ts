export interface TechProps {
    id: number;
    name: string;
    icon: React.ReactElement;
}

export interface WorkProps {
    id: number;
    title: string;
    type: string;
    description: string;
    cover: string;
    tech: TechProps[];
    repo: string;
    live: string;
}
