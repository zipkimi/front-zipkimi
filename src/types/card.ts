export type CardProps = {
  id: number;
  title: string;
  contents: string;
  writer?: string;
  regDt?: string;
  comments?: number;
  likes?: number;
  onDetail: (id: number) => void;
};
