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
  video: string;
}

export type ProjectsType = {
  id: string;
  title: string;
  projectType: string;
  description: string;
  techs: string[];
  liveSite: string | null;
  repoLink: string | null;
  slug: string;
  cover: {
    width: number;
    height: number;
    url: string;
  };
  typeOfWork: string;
};
