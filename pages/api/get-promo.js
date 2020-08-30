import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet('1EI_GCUDdyA22ZmAIlNnMemqquMrFz2Uc5nBJBx0kTcc')

export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()

        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A3:B3')

        const mostrarPromocaoCell = sheet.getCell(2, 0)
        const textoCell = sheet.getCell(2, 1)

        res.json({
            showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
            message: textoCell.value
        })
    } catch (error) {
        res.json({
            showCoupon: false,
            message: ''
        })        
    }

    
}