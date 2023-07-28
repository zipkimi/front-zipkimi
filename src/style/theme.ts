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
  original: "#405b9e",
  originalBright: "#3A00E545",
  originalHover: "#3A00E555",
  originalDisabled: "#405b9e60",
  secondWhite: "#AEAEAE",
  txtInfo: "#808080",
};

const SIZE = {
  info: ".9rem",
  xl: "2rem",
};

const ROUND = {
  none: "0",
  xs: "4px",
  sm: "8px",
  md: "16px",
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
