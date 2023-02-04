export type CategoryItem = {
  userName: string;
  regDt: string;
  likeCount: number;
  CommentCount: number;
  contents: string;
}

export type CategoryProps = CategoryItem & { cateTitle: string };