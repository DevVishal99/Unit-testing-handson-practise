import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  let header;
  beforeEach(async () => {
    header = await fixture(html`<loan-header></loan-header>`);
  });
  it('should render header component to the dom', () => {
    expect(header).to.be.accessible();
  });
  it('should call localeChanged when clicked on nl-NL language change button', async () => {
    const localeChangedSpy = Sinon.spy(header, 'localeChanged');
    const lanBtn = header.shadowRoot.querySelector('.nl-NL');

    header.requestUpdate();
    await header.updateComplete;

    lanBtn.click();

    expect(localeChangedSpy.calledOnce).to.be.true;
  });
  it('should call localeChanged when clicked on en-GB language change button', async () => {
    const localeChangedSpy = Sinon.spy(header, 'localeChanged');
    const lanBtn = header.shadowRoot.querySelector('.en-GB');

    header.requestUpdate();
    await header.updateComplete;

    lanBtn.click();

    expect(localeChangedSpy.calledOnce).to.be.true;
  });
});
