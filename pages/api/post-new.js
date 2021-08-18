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

  const transformToReal = (value) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })
  }

  await sheet.addRow({
    Prato: data.nome,
    Preco: transformToReal(parseFloat(data.preco)),
    Imagem: data.imagem,
    Descrição: data.descricao,
  });

  res.json({ status: true });
};
