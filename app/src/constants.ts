/* ----------------------------------URLs------------------------------------ */
/**
 * @description Constante que tiene el dominio de la página, para poder enviar links correctamente.
 */
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

/* -------------------------------TextVariables-------------------------------- */
const mainPlayListName = "Todo el Catalogo";

/* ------------------------------Dictionaries------------------------------------ */

const beatStructure = {
  intro: {
    name: "Intro",
    color: "#A6A2A2",
  },
  verse: {
    name: "Verso",
    color: "#FFBC0A",
  },
  chorus: {
    name: "Coro",
    color: "#311847",
  },
  bridge: {
    name: "Puente",
    color: "#C200FB",
  },
  outro: {
    name: "Outro",
    color: "#A6A2A2",
  },
};

export { domain, baseUrl, mainPlayListName, beatStructure };
