const fs = require('fs');
const PDFParser = require('pdf-parse');

const inputFolderPath = './pdfs/';
const outputFolderPath = './pdfs_buenos/';
const damagedFolderPath = './pdfs_dañados/';

const files = fs.readdirSync(inputFolderPath);

run().catch(error => console.log(error));
async function run() {
    for (const file of files) {
        const filePath = `${inputFolderPath}${file}`;
        console.log(`Archivo: ${file}`);
        try {
            const dataBuffer = fs.readFileSync(filePath);
            await PDFParser(dataBuffer);
            console.log('Archivo en buen estado\n');
            const outputFile = `${outputFolderPath}${file}`;
            fs.copyFileSync(filePath, outputFile);
            fs.unlinkSync(filePath);
        } catch (error) {
            console.error(`No se puede leer el archivo PDF: ${error}\n`);
            //Copiar o mover a la ruta
            const damagedFilePath = `${damagedFolderPath}${file}`;
            fs.copyFileSync(filePath, damagedFilePath);
            // Opcionalmente, se puede borrar el archivo original
            fs.unlinkSync(filePath);
        }
    }
}