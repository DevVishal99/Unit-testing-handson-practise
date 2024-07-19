import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';
import Sinon from 'sinon';

describe('Success screen ', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<loan-success></loan-success>`);
  });
  // Write test cases inside this block
  it('should render success screen', () => {
    expect(element).to.be.accessible();
  });

  it('should call _toHome funcion when clicked on home button', async () => {
    const homeBtn = element.shadowRoot.querySelector('.home-btn');
    const toHomeSpy = Sinon.spy(element, '_toHome');

    element.requestUpdate();
    await element.updateComplete;
    homeBtn.click();

    expect(toHomeSpy.calledOnce).to.be.true;
  });
});

describe('error screen', () => {
  // Write test cases inside this block
  let element;

  beforeEach(async () => {
    element = await fixture(html`<loan-error></loan-error>`);
  });
  // Write test cases inside this block
  it('should render error screen', () => {
    expect(element).to.be.accessible();
  });

  it('should call _toHome funcion when clicked on home button', async () => {
    const homeBtn = element.shadowRoot.querySelector('.home-btn');
    const toHomeSpy = Sinon.spy(element, '_toHome');

    element.requestUpdate();
    await element.updateComplete;
    homeBtn.click();

    expect(toHomeSpy.calledOnce).to.be.true;
  });
});
