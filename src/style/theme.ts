const TEXT = {
  hide: `
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  `,
};

const COLOR = {
  original: "#3617CD",
  originalBright: "#3A00E545",
  lightGray: "#DCDCDC",
  gray: "#BCBCBC",
  darkGray: "#949494",
  dimGray: "#4B4B4B",
  red: "#EB1B0E",
};

const SIZE = {
  font13: "0.93rem",
  font15: "1.07rem",
  font18: "1.28rem",
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
  SIZE,
  ROUND,
};

export default theme;
