/**
 * INTERACTIVE MEDIA BUYING ROAS & UNIT ECONOMICS CALCULATOR
 * Demonstrates quantitative growth engineering through live statistical parameter manipulation
 */

class GrowthCalculator {
  constructor() {
    this.spendInput = document.getElementById('calc-spend');
    this.cpcInput = document.getElementById('calc-cpc');
    this.cvrInput = document.getElementById('calc-cvr');
    this.aovInput = document.getElementById('calc-aov');

    if (!this.spendInput) return;

    this.init();
  }

  init() {
    const inputs = [this.spendInput, this.cpcInput, this.cvrInput, this.aovInput];
    
    inputs.forEach(input => {
      if (input) {
        input.addEventListener('input', () => this.calculate());
      }
    });

    this.calculate();
  }

  calculate() {
    const spend = parseFloat(this.spendInput.value) || 5000;
    const cpc = parseFloat(this.cpcInput.value) || 1.20;
    const cvr = parseFloat(this.cvrInput.value) || 3.5;
    const aov = parseFloat(this.aovInput.value) || 120;

    // Update Slider Labels
    document.getElementById('spend-val').textContent = `$${spend.toLocaleString()}`;
    document.getElementById('cpc-val').textContent = `$${cpc.toFixed(2)}`;
    document.getElementById('cvr-val').textContent = `${cvr.toFixed(1)}%`;
    document.getElementById('aov-val').textContent = `$${aov.toLocaleString()}`;

    // Quantitative Formulas
    const clicks = Math.floor(spend / cpc);
    const conversions = Math.floor(clicks * (cvr / 100));
    const cpa = conversions > 0 ? (spend / conversions) : 0;
    const revenue = conversions * aov;
    const roas = spend > 0 ? (revenue / spend) : 0;
    const netProfit = revenue - spend;

    // Render Outputs
    document.getElementById('out-conversions').textContent = conversions.toLocaleString();
    document.getElementById('out-cpa').textContent = `$${cpa.toFixed(2)}`;
    document.getElementById('out-revenue').textContent = `$${revenue.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
    document.getElementById('out-roas').textContent = `${roas.toFixed(2)}x`;
    
    const profitEl = document.getElementById('out-profit');
    if (profitEl) {
      profitEl.textContent = `${netProfit >= 0 ? '+' : ''}$${netProfit.toLocaleString(undefined, {maximumFractionDigits: 0})}`;
      profitEl.className = `text-xl font-bold font-mono ${netProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GrowthCalculator();
});
