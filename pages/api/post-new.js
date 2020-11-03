import { GoogleSpreadsheet } from "google-spreadsheet";
import { fromBase64 } from "../../lib/base64";

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID);

export default async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.SHEET_CLIENT_EMAIL,
    private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[3];
  const data = JSON.parse(req.body);

  await sheet.addRow({
    Pratos: data.Nome,
    Preços:
      "R$ " +
      data.Preco.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
    Desconto: "10%",
    PrecoFinal: (
      parseFloat(data.Preco) -
      (parseFloat(data.Preco) * 10) / 100
    ).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    Foto: data.Foto,
    InstaFoto: data.instaFoto,
    Descrição: data.descricao,
  });

  res.json({ status: true });
};
