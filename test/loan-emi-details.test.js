import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import Sinon from 'sinon';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  let element;
  beforeEach(async () => {
    element = await fixture(html`<loanemi-details></loanemi-details>`);
  });
  it('should render loanemi detailscomponent to the dom', async () => {
    expect(element).to.be.accessible;
  });
  it('should call toBasicDetails when clicked on cancel button', async () => {
    const cancelBtn = element.shadowRoot.querySelector('.cancel-btn');
    const toBasicDetailsSpy = Sinon.spy(element, '_toBasicDetails');

    element.requestUpdate();
    await element.updateComplete;
    cancelBtn.click();
    expect(toBasicDetailsSpy.calledOnce).to.be.true;
  });
  it('should call toCustomer when clicked on continue button', async () => {
    const continueBtn = element.shadowRoot.querySelector('.continue-btn');
    const toCustomerSpy = Sinon.spy(element, '_toCustomer');

    element.requestUpdate();
    await element.updateComplete;
    continueBtn.click();
    expect(toCustomerSpy.calledOnce).to.be.true;
  });
});
