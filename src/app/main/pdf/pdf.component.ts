import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import * as Chart from 'chart.js';
// import * as fs from 'fs'
import {PDFExtract, PDFExtractOptions} from 'pdf.js-extract';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
  imageToUpload: File = null;
  selectedPdf: string = 'https://dummyimage.com/400x400/000/fff';

  caption = 'Choose an image';

  captionPdf = 'Choose a PDF';
  captionSize


  canvas: any;
  ctx: any;
  data = [];


  constructor(private _formBuilder: FormBuilder, public sanitizer: DomSanitizer) { }

  ngOnInit() {

  }


onSelectPdfFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.imageToUpload = event.target.files[0];
      const reader = new FileReader();
      const reader1 = new FileReader();
      reader.readAsDataURL(this.imageToUpload);

      reader.onload = e => this.selectedPdf = reader.result.toString();
      this.captionPdf = event.target.files[0].name;
      this.captionSize = event.target.files[0].size;

console.log(event.target.files[0])
//       varthis.selectedPdf pdfExtract = new PDFExtract();
// var options: PDFExtractOptions = {}; /* see below */
// pdfExtract.extract(event)
//   .then(data => console.log(data))

    }
  }




// extractData(){

//   const fs = require('fs');
//   const reader = new FileReader();
// const pdf = require('pdf-parse');

// // let dataBuffer = fs.readFileSync(this.imageToUpload);
//  let dataBuffer =       reader.readAsDataURL(this.imageToUpload);

// }
// pdf(dataBuffer).then(function(data) {

//     // number of pages
//     console.log(data.numpages);
//     // number of rendered pages
//     console.log(data.numrender);
//     // PDF info
//     console.log(data.info);
//     // PDF metadata
//     console.log(data.metadata);
//     // PDF.js version
//     // check https://mozilla.github.io/pdf.js/getting_started/
//     console.log(data.version);
//     // PDF text
//     console.log(data.text);

// });
// }
// extractPdf(){
//   var pdfUtil = require('pdf-to-text');
// var pdf_path = "absolute_path/to/pdf_file.pdf";

// //option to extract text from page 0 to 10
// var option = {from: 0, to: 10};

// pdfUtil.pdfToText(this.captionPdf, option, function(err, data) {
//   if (err) throw(err);
//   console.log(data); //print text
// });

// //Omit option to extract all text from the pdf file
// pdfUtil.pdfToText(this.captionPdf, function(err, data) {
//   if (err) throw(err);
//   console.log(data); //print all text
// });
// }


getChart(){


  this.canvas = document.getElementById('myChart');
  this.ctx = this.canvas.getContext('2d');
  let myChart = new Chart(this.ctx, {
  type: 'bar',
  data: {
    labels: ['File Size'],
    datasets: [{
        label: 'File Size',
        data: [ this.captionSize],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(105, 106, 46, 1)',
            'rgba(254, 206, 76, 1)',
            'rgba(353, 324, 56, 1)',
        ],
        borderWidth: 1,
        responsive:true,
        maintainAspectRatio: false
    }]
},
options: {
  responsive: false,
  display:true
}
});


}

}
