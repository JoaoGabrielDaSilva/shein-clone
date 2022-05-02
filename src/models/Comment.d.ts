export type Comment = {
  name: string;
  note: number;
  date: string;
  product: {
    color: string;
    size: string;
  };
  text: string;
  images?: string[];
  likes: number;
};
