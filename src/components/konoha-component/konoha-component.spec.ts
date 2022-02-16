import { newSpecPage } from '@stencil/core/testing';
import { konohaComponent } from './konoha-component';

describe('konoha-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [konohaComponent],
      html: '<konoha-component></konoha-component>',
    });
    expect(root).toEqualHtml(`
      <konoha-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </konoha-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [konohaComponent],
      html: `<konoha-component first="Stencil" last="'Don't call me a framework' JS"></konoha-component>`,
    });
    expect(root).toEqualHtml(`
      <konoha-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </konoha-component>
    `);
  });
});
