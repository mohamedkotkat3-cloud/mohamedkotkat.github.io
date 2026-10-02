/**
 * INTERACTIVE 5-STEP FUNNEL VISUALIZER CONTROLLER
 * Manages performance marketing stage selection, animated transitions, and quantitative metrics breakdown
 */

const funnelData = [
  {
    step: 1,
    title: "1. Acquire Attention",
    channel: "Meta & Search Ads",
    badge: "Top of Funnel (TOFU)",
    formula: "CTR_calc = (Clicks / Impressions) × 100",
    metrics: [
      { label: "Target CPM", value: "$8.50 - $14.20" },
      { label: "Thumb-Stop Rate", value: "35% - 48%" },
      { label: "Outbound CTR", value: "2.8% - 4.5%" }
    ],
    overview: "Capturing high-intent prospective buyers using algorithmic broad & interest targeting on Meta Ads (FB/IG) and high-commercial-intent Search campaigns on Google.",
    deliverables: [
      "Dynamic creative testing (3x3 matrix: Hooks, Body Copy, CTAs)",
      "Bid cap & Cost cap scaling structures for CAC control",
      "Negative keyword exclusion lists & audience overlap scrubbing"
    ]
  },
  {
    step: 2,
    title: "2. Match Hook to Landing Intent",
    channel: "Landing Page CRO",
    badge: "Middle of Funnel (MOFU)",
    formula: "Intent_Match = (Landing_Page_Views / Ad_Clicks) × 100",
    metrics: [
      { label: "Page Load Time", value: "< 1.4s (Mobile)" },
      { label: "Hero Bounce Rate", value: "< 28%" },
      { label: "Vulnerability-to-Hook", value: "98% Symmetry" }
    ],
    overview: "Eliminating message disconnect between ad creative promise and landing page hero content. Directing high-temperature traffic into friction-free, fast-loading destination pages.",
    deliverables: [
      "Contextual sub-headline matching ad copy hooks",
      "Mobile-first responsive hero section above the fold",
      "Instant social proof overlays (reviews, trust badges, media mentions)"
    ]
  },
  {
    step: 3,
    title: "3. Qualify High-Intent Leads",
    channel: "Conversion Mechanics",
    badge: "Middle to Bottom (MOFU/BOFU)",
    formula: "CVR_lead = (Qualified_Submissions / Unique_Visitors) × 100",
    metrics: [
      { label: "Opt-In Rate", value: "18% - 32%" },
      { label: "Form Completion", value: "84%" },
      { label: "Cost Per Lead (CPL)", value: "-35% Lower" }
    ],
    overview: "Deploying interactive multi-step qualification questionnaires and micro-friction logic to filter tire-kickers while maximizing qualified lead captures.",
    deliverables: [
      "Dynamic multi-step progressive form architecture",
      "Real-time phone/email syntax validation and phone OTP option",
      "Custom GA4 trigger events (`lead_qualify_tier_1`, `checkout_start`)"
    ]
  },
  {
    step: 4,
    title: "4. Nurture via CRM & Upsells",
    channel: "HubSpot & Automation",
    badge: "Bottom of Funnel (BOFU)",
    formula: "LTV_expansion = Initial_Order_Value + (Retention_Rate × Recurring_Rev)",
    metrics: [
      { label: "Email Open Rate", value: "42% - 58%" },
      { label: "Sales Call Booking", value: "24% Rate" },
      { label: "Instant Routing Time", value: "< 2 seconds" },
    ],
    overview: "Automating instant lead ingestion via webhooks into HubSpot CRM, triggering immediate SMS/WhatsApp response workflows and tailored email nurture sequences.",
    deliverables: [
      "Zapier / Make / Direct Webhook pipeline to sales pipelines",
      "Automated lead scoring based on lead responses & page engagement",
      "Post-purchase DTC 1-click upsell sequences & subscription conversion"
    ]
  },
  {
    step: 5,
    title: "5. Measure & Scale Iterations",
    channel: "Analytics & Looker Studio",
    badge: "Quantitative Growth Engine",
    formula: "ROAS = Revenue / Total_Ad_Spend | MER = Total_Revenue / Total_Marketing",
    metrics: [
      { label: "Blended ROAS", value: "3.8x - 6.2x" },
      { label: "CAC payback", value: "< 21 Days" },
      { label: "Statistical Sig.", value: "p < 0.05 (95% Conf.)" }
    ],
    overview: "Running rigorous A/B statistical significance tests on attribution data in Looker Studio and GA4 to allocate budget toward winning ad sets and audience cohorts.",
    deliverables: [
      "Live automated Looker Studio executive dashboard",
      "Variance measurement & A/B hypothesis validation testing",
      "Aggressive horizontal & vertical budget scaling protocol"
    ]
  }
];

class FunnelVisualizer {
  constructor() {
    this.currentStep = 1;
    this.init();
  }

  init() {
    const stepCards = document.querySelectorAll('.funnel-step');
    if (!stepCards.length) return;

    stepCards.forEach(card => {
      card.addEventListener('click', () => {
        const stepNum = parseInt(card.getAttribute('data-step'));
        this.selectStep(stepNum);
      });
    });

    this.selectStep(1);
  }

  selectStep(stepNum) {
    this.currentStep = stepNum;

    // Update active UI classes
    document.querySelectorAll('.funnel-step').forEach(card => {
      const step = parseInt(card.getAttribute('data-step'));
      if (step === stepNum) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Render step details in the display panel
    const data = funnelData.find(item => item.step === stepNum);
    if (!data) return;

    const detailBox = document.getElementById('funnel-detail-display');
    if (!detailBox) return;

    detailBox.innerHTML = `
      <div class="glass-panel p-6 md:p-8 border-cyan-glow relative overflow-hidden transition-all duration-500">
        <div class="absolute top-0 right-0 p-4 opacity-10 font-mono text-7xl font-bold text-cyan-400 select-none">
          0${data.step}
        </div>
        
        <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <span class="badge-pill mb-2">${data.badge}</span>
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              ${data.title}
            </h3>
          </div>
          <span class="text-sm font-mono text-cyan-400 px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
            ${data.channel}
          </span>
        </div>

        <p class="text-slate-300 mb-6 text-base leading-relaxed">
          ${data.overview}
        </p>

        <!-- Mathematical Growth Formula -->
        <div class="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs md:text-sm text-cyan-300 flex items-center gap-3">
          <span class="text-indigo-400 font-bold">FORMULA:</span>
          <code>${data.formula}</code>
        </div>

        <!-- Metric Benchmarks Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          ${data.metrics.map(m => `
            <div class="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center">
              <div class="text-xs text-slate-400 font-medium mb-1">${m.label}</div>
              <div class="text-lg font-bold font-mono text-white">${m.value}</div>
            </div>
          `).join('')}
        </div>

        <!-- Strategic Deliverables -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">Key Technical Mechanics & Deliverables</h4>
          <ul class="space-y-2">
            ${data.deliverables.map(d => `
              <li class="flex items-start gap-2.5 text-sm text-slate-300">
                <svg class="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>${d}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FunnelVisualizer();
});
