import { GoogleSpreadsheet } from "google-spreadsheet";
import { fromBase64 } from "../../lib/base64";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[3];

    const rows = await sheet.getRows();
    const pratos = rows.map((each) => ({
      prato: each.Pratos,
      preco: each.Preços,
      desc: each.Descrição,
      teste: each.Teste,
      foto: each.Foto,
      instaFoto: each.InstaFoto,
    }));

    res.json(pratos);
  } catch (error) {
    res.json({
      title: "Seja Bem Vindo -",
      message: "Projeto FSM",
    });
  }
};
