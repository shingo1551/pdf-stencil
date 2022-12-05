import { PDFDocument } from 'pdf-lib';

import fontkit from '@pdf-lib/fontkit'

// import { demoSVG } from './demo-svg';
import { demoText } from './demo-text';
import { demoTiger } from './demo-tiger';

export async function demoPdf(fontBytes: ArrayBuffer, text: string, tiger: string) {
  const pdfDoc = await PDFDocument.create();

  pdfDoc.registerFontkit(fontkit);
  const customFont = await pdfDoc.embedFont(fontBytes, { subset: true });

  const page = pdfDoc.addPage();
  // demoSVG(page);
  demoText(customFont, page, text);
  demoTiger(page, tiger);

  return await pdfDoc.save();
}
