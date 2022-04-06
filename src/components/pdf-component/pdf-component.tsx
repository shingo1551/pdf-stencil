import { Component, Host, h, State } from '@stencil/core';
import { demoPdf } from './demo-pdf';

@Component({
  tag: 'pdf-component',
  styleUrl: 'pdf-component.css',
  shadow: true,
})
export class PdfComponent {
  @State() tiger: string;

  fontBytes: ArrayBuffer
  input: HTMLInputElement;

  async componentWillLoad() {
    const url = './assets/NotoSansJP-Regular.otf';
    this.fontBytes = await fetch(url).then((res) => res.arrayBuffer());
  }

  handleButton = async (event: MouseEvent) => {
    event.preventDefault();

    const url = './assets/Ghostscript_Tiger.svg';
    this.tiger = await fetch(url).then((res) => res.text());
    const pdfBytes = await demoPdf(this.fontBytes, this.input.value, this.tiger);
    download(pdfBytes, 'foo.pdf');
    // window.open(blobUrl, '_blank');
  }

  render() {
    return (
      <Host>
        <input type="text" ref={elm => this.input = elm} placeholder="何か入力して下さい"></input>
        <button onClick={this.handleButton}>Submit</button>
        <img src="./assets/Ghostscript_Tiger.svg" />
        {/* <div innerHTML={this.tiger}></div> */}
      </Host>
    );
  }

}

function download(pdfBytes: Uint8Array, filename: string) {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const blobUrl = URL.createObjectURL(blob);

  const a = document.createElement('a');
  document.body.appendChild(a);
  a.download = filename;
  a.href = blobUrl;
  a.click();
  a.remove();
  URL.revokeObjectURL(blobUrl);
}
