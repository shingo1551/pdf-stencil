import { Component, Host, h } from '@stencil/core';
import { demoPdf } from './demo-pdf';

@Component({
  tag: 'pdf-component',
  styleUrl: 'pdf-component.css',
  shadow: true,
})
export class PdfComponent {
  input: HTMLInputElement;

  handleButton = async (event: MouseEvent) => {
    event.preventDefault();

    const pdfBytes = await demoPdf(this.input.value);
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    download(blobUrl, 'foo.pdf');
    // window.open(blobUrl, '_blank');
  }

  render() {
    return (
      <Host>
        <input type="text" ref={elm => this.input = elm} placeholder="何か入力して下さい"></input>
        <button onClick={this.handleButton}>Submit</button>
      </Host>
    );
  }

}

function download(blobUrl: string, filename: string) {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.download = filename;
  a.href = blobUrl;
  a.click();
  a.remove();
  URL.revokeObjectURL(blobUrl);
}
