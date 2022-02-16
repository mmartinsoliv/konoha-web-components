/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface KonohaButton {
        "appearance": string;
        "text": string;
    }
    interface KonohaComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLKonohaButtonElement extends Components.KonohaButton, HTMLStencilElement {
    }
    var HTMLKonohaButtonElement: {
        prototype: HTMLKonohaButtonElement;
        new (): HTMLKonohaButtonElement;
    };
    interface HTMLKonohaComponentElement extends Components.KonohaComponent, HTMLStencilElement {
    }
    var HTMLKonohaComponentElement: {
        prototype: HTMLKonohaComponentElement;
        new (): HTMLKonohaComponentElement;
    };
    interface HTMLElementTagNameMap {
        "konoha-button": HTMLKonohaButtonElement;
        "konoha-component": HTMLKonohaComponentElement;
    }
}
declare namespace LocalJSX {
    interface KonohaButton {
        "appearance"?: string;
        "text"?: string;
    }
    interface KonohaComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "konoha-button": KonohaButton;
        "konoha-component": KonohaComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "konoha-button": LocalJSX.KonohaButton & JSXBase.HTMLAttributes<HTMLKonohaButtonElement>;
            "konoha-component": LocalJSX.KonohaComponent & JSXBase.HTMLAttributes<HTMLKonohaComponentElement>;
        }
    }
}
