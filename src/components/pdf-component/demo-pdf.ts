import { PDFDocument } from 'pdf-lib';

import { demoFont } from './demo-font'
// import { demoSVG } from './demo-svg';
import { demoText } from './demo-text';
import { demoTiger } from './demo-tiger';

export async function demoPdf(text: string, tiger: string) {
  const pdfDoc = await PDFDocument.create();
  const customFont = await demoFont(pdfDoc);

  const page = pdfDoc.addPage();
  // demoSVG(page);
  demoText(customFont, page, text);
  demoTiger(page, tiger);

  return await pdfDoc.save();
}
