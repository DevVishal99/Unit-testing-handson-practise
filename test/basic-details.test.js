import { html, fixture, expect } from '@open-wc/testing';
import Sinon, { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';


describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('should render basic details commponent to the dom', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);
    expect(element).to.be.accessible();
  });
  it('has default values', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);
    expect(element.amount).to.equal(10000);
    expect(element.range).to.equal(2);
    expect(element.emiCalc).to.equal(0);
    expect(element.type).to.equal(null);
  });

  it('should call _toDashboard function when clicked on previous button', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);
    const prevtBtn = element.shadowRoot.querySelector('.btn-previous');
    const dashboardFnSpy = Sinon.spy(element, '_toDashboard');
    element.requestUpdate();
    await element.updateComplete;
    prevtBtn.click();
    expect(dashboardFnSpy.calledOnce).to.be.true;
    dashboardFnSpy.restore();
  });

  it('should call _captureDetails function when clicked on next button', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);
    const nextBtn = element.shadowRoot.querySelector('.btn-next');
    const captureDetailsSpay = Sinon.spy(element, '_captureDetails');
    element.requestUpdate();
    await element.updateComplete;
    nextBtn.click();
    
    expect(captureDetailsSpay.calledOnce).to.be.true;
    captureDetailsSpay.restore();
  });

  it('should call _numToWord functon on keyUp of input field', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);
    const inputAmount = element.shadowRoot.querySelector('.amount');
    const numToWordSpy = Sinon.spy(element, '_numToWord');
    inputAmount.value = '10000';
    element.requestUpdate();
    await element.updateComplete;
    inputAmount.dispatchEvent(new Event('keyup'));
    expect(numToWordSpy.calledOnce).to.be.true;
    numToWordSpy.restore();
  });
});
