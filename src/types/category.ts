export type CategoryItem = {
  userName: string;
  regDt: string;
  likeCount: number;
  CommentCount: number;
  contents: string;
}

type CategoryInfo = {
  cateTitle: string;
  catePath: string;
}

export type CategoryProps = CategoryItem & CategoryInfo;