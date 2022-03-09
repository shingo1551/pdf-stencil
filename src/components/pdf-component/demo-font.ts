import { PDFDocument } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'

export async function demoFont(pdfDoc: PDFDocument) {
  const url = './assets/NotoSansJP-Regular.otf';
  const fontBytes = await fetch(url).then((res) => res.arrayBuffer());

  pdfDoc.registerFontkit(fontkit);
  return await pdfDoc.embedFont(fontBytes);
}
