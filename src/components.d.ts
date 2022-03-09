/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PdfComponent {
    }
    interface SvgTiger {
    }
}
declare global {
    interface HTMLPdfComponentElement extends Components.PdfComponent, HTMLStencilElement {
    }
    var HTMLPdfComponentElement: {
        prototype: HTMLPdfComponentElement;
        new (): HTMLPdfComponentElement;
    };
    interface HTMLSvgTigerElement extends Components.SvgTiger, HTMLStencilElement {
    }
    var HTMLSvgTigerElement: {
        prototype: HTMLSvgTigerElement;
        new (): HTMLSvgTigerElement;
    };
    interface HTMLElementTagNameMap {
        "pdf-component": HTMLPdfComponentElement;
        "svg-tiger": HTMLSvgTigerElement;
    }
}
declare namespace LocalJSX {
    interface PdfComponent {
    }
    interface SvgTiger {
    }
    interface IntrinsicElements {
        "pdf-component": PdfComponent;
        "svg-tiger": SvgTiger;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pdf-component": LocalJSX.PdfComponent & JSXBase.HTMLAttributes<HTMLPdfComponentElement>;
            "svg-tiger": LocalJSX.SvgTiger & JSXBase.HTMLAttributes<HTMLSvgTigerElement>;
        }
    }
}
