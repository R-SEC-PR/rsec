export interface LayoutProps {
  title?: string;
  description?: string;
  pageType?: "website" | "article";
  image?: string;
  imageAlt?: string;
}

export type newsJson = Array<{
  title: string;
  created: string;
  content: string;
}>;
export type projectsJson = Array<{
  id: number;
  title: string;
  description: string;
  imgpath: string;
  pagepath?: string;
}>;
