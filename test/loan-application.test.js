import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('should render loan application component to the dom', async () => {
    const element = await fixture(html`<loan-application></loan-application>`);
    expect(element).to.be.accessible();
  });
});
