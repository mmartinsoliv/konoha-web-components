import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'konoha-button',
  styleUrl: 'konoha-button.css',
  shadow: true,
})
export class KonohaButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    );
  }

}