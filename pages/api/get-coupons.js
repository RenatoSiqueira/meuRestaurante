import { GoogleSpreadsheet } from "google-spreadsheet";
import fromBase64 from "../../lib/base64";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells("B6:B7");

    const title = sheet.getCellByA1("B6").value;
    const message = sheet.getCellByA1("B7").value;

    res.json({
      title,
      message,
    });
  } catch (error) {
    res.json({
      title: "",
      message: "Projeto FSM",
    });
  }
};
