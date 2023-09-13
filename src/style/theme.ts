const TEXT = {
  hide: `
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  `,
  text13: `
    font-size: 0.93rem;
    line-height: 1.61;
  `,
  text15: `
    font-size: 1.07rem;
    line-height: 1.538;
  `,
  text18: `
    font-size: 1.28rem;
    line-height: 1.45;
  `,
};

const COLOR = {
  original: "#5330E0",
  originalBright: "#F1EDFF",
  whiteGray: "#F2F2F2",
  lightGray: "#DCDCDC",
  gray: "#BCBCBC",
  darkGray: "#949494",
  dimGray: "#4B4B4B",
  dark: "#333333",
  red: "#EB1B0E",
};

const FONT = {
  regular: 400,
  medium: 500,
  bold: 700,
  size12: "0.86rem",
  size13: "0.93rem",
  size15: "1.07rem",
  size16: "1.15rem",
  size18: "1.28rem",
  size20: "1.43rem",
};

const ROUND = {
  none: "0",
  xs: "4px",
  sm: "8px",
  md: "16px",
  mm: "24px",
  lg: "50%",
  xl: "100%",
};

const theme = {
  TEXT,
  COLOR,
  FONT,
  ROUND,
};

export default theme;
