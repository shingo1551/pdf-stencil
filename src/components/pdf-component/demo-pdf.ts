import { PDFDocument } from 'pdf-lib';

import { demoFont } from './demo-font'
import { demoSVG } from './demo-svg';
import { demoText } from './demo-text';

export async function demoPdf(text = '何か入力して下さい') {
  const pdfDoc = await PDFDocument.create();
  const customFont = await demoFont(pdfDoc);

  const page = pdfDoc.addPage();
  demoSVG(page);
  demoText(customFont, page, text);

  return await pdfDoc.save();
}
