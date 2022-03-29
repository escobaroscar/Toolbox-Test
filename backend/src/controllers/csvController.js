const csvController = {};
const { getFilesService, downlandFileCsv } = require('../services/toolBoxService');

csvController.getFiles = async (_, res) => {
    try {
        const data = await getFilesService();
        if (data && data.files && Array.isArray(data.files)) {
            let dataCSV = [];
            let dataParse = [];
            for (const file of data.files) {
                dataCSV = await downlandFileCsv(file);
                if (dataCSV) {
                    let lines = [];
                    let namefile = null;
                    dataCSV.forEach((item, i) => {
                        if (i > 0) {
                            if (item.length == 4) {
                                if (namefile == null) {
                                    namefile = item[0];
                                }
                                lines.push({
                                    text: item[1],
                                    number: item[2],
                                    hex: item[3]
                                });
                            }
                        }
                    });
                    if (namefile && lines) {
                        dataParse.push(
                            {
                                file: namefile,
                                lines: lines
                            }
                        );
                    }
                }

            }
            if (dataParse.length > 0) {
                res.status(200).json({ status: 'success', data: dataParse });
            } else {
                res.status(202).json({ status: 'info', msg: 'Files no encontrados' });
            }
        } else { res.status(202).json({ status: 'info', msg: 'Files no encontrados' }); }
    } catch (error) {
        res.status(500).json({ status: 'error', msg: 'Servicio no disponible, vuelva intentar en breve.' });
    }
}
module.exports = csvController;