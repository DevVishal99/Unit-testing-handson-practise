import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<customer-details></customer-details>`);
  });
  // Write test cases inside this blocks
  it('should render the component to dom',  () => {
    const header = element.shadowRoot.querySelector('h2');
    expect(header.innerText).to.equal('Customer Details');
    expect(element);
  });
  it('should call _toEmidetails when clicked on back button', async () => {
    const backBtn = element.shadowRoot.querySelector('.backbg-btn-color');
    const toEmidetailsSpy = Sinon.spy(element, '_toEmidetails');
    element.requestUpdate();
    await element.updateComplete;
    backBtn.click();
    expect(toEmidetailsSpy.calledOnce).to.be.true;
  });
  
});
