import { PDFDocument } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit'

const url = './assets/NotoSansJP-Regular.otf';
const fontBytes = await fetch(url).then((res) => res.arrayBuffer());

export async function demoFont(pdfDoc: PDFDocument) {
  pdfDoc.registerFontkit(fontkit);
  return await pdfDoc.embedFont(fontBytes);
}
