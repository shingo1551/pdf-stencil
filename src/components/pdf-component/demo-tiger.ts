import { PDFPage, PDFPageDrawSVGOptions, rgb } from 'pdf-lib';

export function demoTiger(page: PDFPage, tiger: string) {
  const dom = new DOMParser();
  const doc = dom.parseFromString(tiger, 'image/svg+xml');
  const list = doc.querySelectorAll('g g');

  page.moveTo(200, 500)
  list.forEach(g => {
    const color = g.getAttribute('fill');
    const borderColor = g.getAttribute('stroke');
    const borderWidth = g.getAttribute('stroke-width');

    const option: PDFPageDrawSVGOptions = {}
    if (borderWidth) option.borderWidth = +borderWidth;
    if (color) option.color = _rgb(color);
    if (borderColor) option.borderColor = _rgb(borderColor);

    const path = g.querySelector('path');
    const d = path.getAttribute('d');
    page.drawSvgPath(d, option);
  });
}

function _rgb(hex: string) {
  if (hex.length === 4) {
    const r = _hex(hex.slice(1, 2));
    const g = _hex(hex.slice(2, 3));
    const b = _hex(hex.slice(3, 4));
    return rgb(r / 15, g / 15, b / 15);
  } else {
    const r = _hex(hex.slice(1, 3));
    const g = _hex(hex.slice(3, 5));
    const b = _hex(hex.slice(5, 7));
    return rgb(r / 255, g / 255, b / 255);
  }
}

function _hex(hex: string) {
  return parseInt('0x' + hex, 16);
}
