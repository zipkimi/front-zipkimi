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
  originalHover: "#3A00E555",
  originalDisabled: "#405b9e60",
  txtInfo: "#808080",
  gray: "#BCBCBC",
  red: "#EB1B0E",
};

const SIZE = {
  info: ".9rem",
  lg: "1.2rem",
  xl: "2rem",
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
