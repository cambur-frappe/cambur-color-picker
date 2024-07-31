import { LitElement, html, css } from "lit";
import { TWStyles } from "./tailwind/twlit";

export class CamburColorPicker extends LitElement {

  static styles = TWStyles;

  render() {
    return html`
      <div
        id="wrapper"
        class="flex justify-between flex-col items-center h-full"
      >
        <div>Hola Mundo!</div>
        <canvas class="border border-black" id="canvas" width="150" height="150"></canvas>
        <footer
          id="footer"
          class="flex justify-center items-center w-full h-12 bg-gray-100"
        >
          Made with 💙 by Frappé Team 🍧
        </footer>
      </div>
    `;
  }
}

customElements.define("cambur-color-picker", CamburColorPicker);