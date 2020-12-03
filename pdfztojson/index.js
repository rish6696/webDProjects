let fs = require('fs'),
PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
     fs.writeFile("./jsonoutput.json", JSON.stringify(pdfData),(data)=>{
         console.log("completed");
     });
});

pdfParser.loadPDF("./pdf/result.pdf");