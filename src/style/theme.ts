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
  original: "#3A00E5",
  originalBright: "#3A00E545",
  originalHover: "#3A00E555",
  originalDisabled: "#3A00E520",
  secondWhite: "#AEAEAE",
  txtInfo: "#5E5E5E",
};

const SIZE = {
  info: ".9rem",
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
