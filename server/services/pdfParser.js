const fs = require("fs");
const { PDFParse } = require("pdf-parse");

const extractTextFromPDF = async (filePath) => {

    try {

        const dataBuffer = fs.readFileSync(filePath);

        const parser = new PDFParse({ data: dataBuffer });

        const result = await parser.getText();

        return result.text;

    } catch (error) {

        console.error("PDF Parser Error:", error.message);

        throw error;
    }
};

module.exports = {
    extractTextFromPDF,
};