export type project = {
  id: number;
  name: string;
  description?: string;
  url: string;
  image_url?: string;
  created: string;
  categories: Array<string>;
}