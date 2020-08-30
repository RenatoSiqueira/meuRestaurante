import { GoogleSpreadsheet } from "google-spreadsheet";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY,
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells(["B6:B7", "B10:B11"]);

    const title = sheet.getCellByA1("B6").value;
    const message = sheet.getCellByA1("B7").value;
    const twitter = sheet.getCellByA1("B10").value;
    const facebook = sheet.getCellByA1("B11").value;

    res.json({
      title,
      message,
      twitter,
      facebook,
    });
  } catch (error) {
    res.json({
      title: "Seja Bem Vindo",
      message: "Projeto FSM",
      twitter: false,
      facebook: false,
    });
  }
};
