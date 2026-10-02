/**
 * MOHAMED KOTKAT - PORTFOLIO BILINGUAL & MOBILE CONTROLLER (2026)
 * Handles instant English/Arabic translation (RTL/LTR), mobile drawer, modal viewports, and WhatsApp triggers.
 */

const translations = {
  en: {
    nav_brand: "MOHAMED KOTKAT // 2026",
    nav_about: "About",
    nav_methodology: "Methodology",
    nav_services: "Services",
    nav_funnel: "5-Step Funnel",
    nav_projects: "Projects",
    nav_skills: "Skills Matrix",
    nav_contact: "Contact",
    nav_audit_btn: "Audit Request",
    hero_badge: "Performance Marketing & Quantitative Growth Engineering",
    hero_title_1: "Engineering Scalable Growth Through ",
    hero_title_cyan: "Data Rigor",
    hero_title_2: " & ",
    hero_title_indigo: "High-ROI Media Buying.",
    hero_sub: "Transforming ad spend into predictable revenue. Combining algorithmic campaign architectures (Meta & Google Ads) with conversion mechanics, AI automation, and unit economics modeling.",
    badge_meta: "Meta Ads Specialist",
    badge_google: "Google Ads Certified",
    badge_ga4: "GA4 & Looker Studio",
    badge_depi: "DEPI Scholar (MCIT)",
    btn_explore_projects: "Explore Projects",
    btn_visit_linktree: "Visit Linktree",
    avatar_name: "MOHAMED KOTKAT",
    avatar_role: "Media Buyer & Growth Specialist",
    avatar_available: "Available",
    chip_roas_label: "Target Multiplier",
    chip_roas_val: "3.8x - 6.2x Avg",
    chip_data_label: "Growth Model",
    chip_data_val: "Quantitative Engineering",
    particle_hint: "Move cursor across background to interact with zero-gravity growth particles",
    
    // Methodology
    methodology_badge: "Scientific Approach",
    methodology_title: "Quantitative Growth & Data-Driven Engineering",
    methodology_sub: "Growth isn't random guesswork. It is a controlled system governed by unit economics, conversion mechanics, statistical testing, and creative velocity.",
    card_1_title: "Quantitative Rigor",
    card_1_desc: "Statistical modeling, variance measurement, confidence intervals, and strict A/B significance tests (p < 0.05) to eliminate wasted ad spend.",
    card_2_title: "Full-Funnel Architecture",
    card_2_desc: "Seamlessly aligning high-converting ad hooks with landing page intent, reducing UX friction points, and optimizing conversion rates from impression to LTV.",
    card_3_title: "AI-Augmented Workflows",
    card_3_desc: "Leveraging advanced LLMs, rapid creative prompt engineering, automated webhook routing, and CRM integrations for aggressive creative velocity.",
    
    // Services
    services_badge: "Core Capabilities",
    services_title: "Specialized Growth Solutions",
    services_sub: "End-to-end acquisition engineering, conversion optimization, and marketing intelligence for scaling businesses.",
    service_1_title: "Paid Media Acquisition",
    service_1_desc: "Architecting full-funnel paid media campaigns across Meta Ads (FB & IG) and Google Ads (Search, Performance Max, Display). Strategic budget scaling, ad copy variations, and bid management.",
    service_2_title: "Conversion Rate Optimization (CRO)",
    service_2_desc: "High-converting landing page layouts, rigorous A/B split testing protocols, heatmaps user session analysis, micro-copy iteration, and checkout friction elimination.",
    service_3_title: "Analytics & Business Intelligence",
    service_3_desc: "Custom Looker Studio executive reporting dashboards, GA4 custom event tracking, conversion API setup, and unit economics modeling (ROAS, CPA, CPC, CPM, CAC, LTV).",
    service_4_title: "Marketing Tech & Automation",
    service_4_desc: "HubSpot CRM lead nurturing pipelines, automated webhook triggers, AI content creation workflows, and real-time lead notification routing to sales dashboards.",

    // Funnel
    funnel_badge: "Funnel Blueprint",
    funnel_title: "Interactive 5-Step Acquisition Funnel",
    funnel_sub: "Click through each acquisition stage to inspect strategic mechanics, metric targets, and quantitative formulas.",

    // Projects
    projects_badge: "Proven Track Record",
    projects_title: "Executed Projects & Deliverables",
    projects_sub: "Strategic brand launch plans, multi-channel lead generation funnels, content calendars, and professional personal branding deliverables.",
    project_1_tag: "DTC BRAND LAUNCH",
    project_1_title: "Coffelia — Specialty Coffee Launch Plan",
    project_1_desc: "Complete consumer journey mapping, 2-week teaser-to-launch content calendar, and high-conversion subscription funnels targeting lifestyle coffee enthusiasts.",
    project_2_tag: "MULTI-SECTOR STRATEGY",
    project_2_title: "Multi-Brand Campaign Strategies",
    project_2_desc: "Developing tailored content roadmaps, buyer personas, and ad creative positioning for brands in F&B, cosmetics, skincare, and pharmaceutical sectors.",
    project_3_tag: "LEAD GEN SIMULATION",
    project_3_title: "Multi-Channel Lead Gen Architecture",
    project_3_desc: "Designing full-funnel acquisition paths starting from Meta/Search hooks, landing page CRO, progressive qualification forms, and instant CRM webhook lead routing.",
    project_4_tag: "PERSONAL BRANDING & CAROUSELS",
    project_4_title: "Profile Optimization & Content Production",
    project_4_desc: "Meta Business Suite page setup, educational LinkedIn carousel post creation, and direct-response short-form video scripting (Reels/TikTok) applying pricing psychology.",

    // Skills Matrix
    skills_badge: "Professional Arsenal",
    skills_title: "Professional Skills & Technical Matrix",
    skills_sub: "A structured matrix of core capabilities spanning paid acquisition, growth analytics, AI workflows, content strategy, and business negotiation.",
    depi_title: "DEPI / MCIT Scholar",
    depi_sub: "Digital Marketing & Freelancing",
    depi_desc: "Ministry of Communications and Information Technology initiative covering media buying, campaign structuring, and client acquisition pipelines.",
    oracle_title: "Oracle MyLearn Certified",
    oracle_sub: "Cloud Infrastructure & Analytics",
    oracle_desc: "Technical modules in data visualization, structured query logic, and automated cloud reporting modules.",
    quant_title: "Quantitative Growth Focus",
    quant_sub: "Data & Unit Economics",
    quant_desc: "Data-driven problem solving, financial campaign modeling, variance control, and mathematical ROAS optimization.",

    // Contact
    contact_badge: "Initiate Collaboration",
    contact_title: "Ready to Scale Your Acquisition Funnels with Data-Backed Precision?",
    contact_sub: "Whether you are launching a DTC product or scaling a multi-channel B2B lead generation pipeline, let's analyze your unit economics and build your high-ROI media architecture.",
    contact_location_label: "LOCATION",
    contact_location_val: "Tanta, Gharbia, Egypt",
    contact_phone_label: "PHONE / WHATSAPP",
    contact_email_label: "EMAIL ADDRESS",
    contact_linkedin_label: "LINKEDIN PROFILE",
    contact_linktree_label: "LINKTREE HUB",
    form_title: "Request a Growth Audit",
    form_sub: "Fill out your details below to trigger an instant audit review via WhatsApp/Email.",
    form_name_label: "FULL NAME *",
    form_email_label: "EMAIL ADDRESS *",
    form_phone_label: "PHONE / WHATSAPP",
    form_spend_label: "MONTHLY AD BUDGET",
    form_message_label: "PROJECT OBJECTIVES & CURRENT FRICTION *",
    form_submit_btn: "Submit & Trigger Direct WhatsApp Audit",
    footer_copy: "Copyright © 2026 Mohamed Kotkat. All rights reserved.",
    back_to_top: "Back to Top ↑"
  },
  ar: {
    nav_brand: "محمد قطقط // 2026",
    nav_about: "نبذة عني",
    nav_methodology: "المنهجية",
    nav_services: "الخدمات",
    nav_funnel: "قمع المبيعات الـ 5",
    nav_projects: "المشاريع",
    nav_skills: "مصفوفة المهارات",
    nav_contact: "تواصل معي",
    nav_audit_btn: "طلب تدقيق مجاني",
    hero_badge: "تسويق الأداء وهندسة النمو الكمي",
    hero_title_1: "هندسة النمو المستدام عبر ",
    hero_title_cyan: "دقة البيانات",
    hero_title_2: " و ",
    hero_title_indigo: "شراء الوسائط عالية العائد.",
    hero_sub: "تحويل الإنفاق الإعلاني إلى إيرادات مضمونة وقابلة للتنبؤ. نجمع بين أتمتة الحملات الإعلانية (Meta & Google Ads) وميكانيكيات التحويل والذكاء الاصطناعي واقتصاديات الحملة.",
    badge_meta: "خبير إعلانات Meta",
    badge_google: "معتمد من إعلانات Google",
    badge_ga4: "GA4 و Looker Studio",
    badge_depi: "خريج مبادرة DEPI (وزارة الاتصالات)",
    btn_explore_projects: "استكشف المشاريع",
    btn_visit_linktree: "زيارة رابط Linktree",
    avatar_name: "محمد قطقط",
    avatar_role: "مشتري وسائط رقمية ومختص نمو",
    avatar_available: "متاح للاستشارات",
    chip_roas_label: "مضاعف العائد المتوقع",
    chip_roas_val: "3.8x - 6.2x متوسط",
    chip_data_label: "نموذج النمو",
    chip_data_val: "هندسة الأداء الكمي",
    particle_hint: "حرك الماوس عبر الخلفية للتفاعل مع جسيمات النمو الفيزيائية",
    
    // Methodology
    methodology_badge: "النهج العلمي للنمو",
    methodology_title: "النمو الكمي وهندسة البيانات التسويقية",
    methodology_sub: "النمو ليس ضرباً من الحظ. إنه نظام محكم محكوم باقتصاديات الوحدة، وميكانيكيات تحويل الزوار، وااختبارات الإعلانات التفاعلية.",
    card_1_title: "الصرامة الكمية (Quantitative Rigor)",
    card_1_desc: "تطبيق النمذجة الإحصائية، وقياس التباين، وااختبارات A/B الدقيقة للقضاء التام على الميزانيات الإعلانية المهدورة.",
    card_2_title: "بنية القمع الكامل (Full-Funnel Architecture)",
    card_2_desc: "الربط المباشر بين خطافات الإعلانات عالية التحويل وصفحات الهبوط السريعة لتقليل الاحتكاك وزيادة معدل التحويل.",
    card_3_title: "سير العمل المعزز بالذكاء الاصطناعي",
    card_3_desc: "استغلال نماذج الذكاء الاصطناعي التوليدي وهندسة الأوامر (Prompt Engineering) لإنتاج أفكار نصوص إعلانية متجددة وبناء الربط الآلي.",
    
    // Services
    services_badge: "القدرات الأساسية",
    services_title: "حلول النمو المتخصصة",
    services_sub: "هندسة كاملة لاكتساب العملاء، تحسين معدلات التحويل، وتقديم تقارير الذكاء التجاري للشركات.",
    service_1_title: "إعلانات الوسائط المدفوعة (Paid Media)",
    service_1_desc: "بناء وإدارة الحملات الإعلانية عبر Meta (فيسبوك وإنستغرام) وإعلانات Google (البحث، شبكة العرض، و Performance Max) وتكبير الميزانيات بدقة.",
    service_2_title: "تحسين معدل التحويل (CRO)",
    service_2_desc: "تصميم واجهات صفحات الهبوط، واختبارات A/B المتقدمة، وتحليل خرائط الحرارة لسلوك الزوار لتقليل تكلفة اكتساب العميل (CAC).",
    service_3_title: "التحليلات والذكاء التجاري (Analytics & BI)",
    service_3_desc: "بناء لوحات متابعة تفاعلية على Looker Studio، وربط أحداث GA4، وتطوير نموذج اقتصاديات الحملة (ROAS, CPA, CPC, CPM, CAC, LTV).",
    service_4_title: "تقنيات التسويق والأتمتة (MarTech)",
    service_4_desc: "إدارة خطوط العملاء عبر HubSpot CRM، وربط الـ Webhooks الفوري، وتوليد نصوص الإعلانات باستخدام أدوات الذكاء الاصطناعي.",

    // Funnel
    funnel_badge: "مخطط الأقماع",
    funnel_title: "قمع اكتساب العملاء التفاعلي ذو الـ 5 مراحل",
    funnel_sub: "اضغط على كل مرحلة لاستعراض الميكانيكيات والمقاييس المستهدفة والمعادلات الرياضية.",

    // Projects
    projects_badge: "سجل الإنجازات والأعمال",
    projects_title: "المشاريع المنفذة والمخرجات الاستراتيجية",
    projects_sub: "خطط إطلاق العلامات التجارية، أقماع توليد العملاء، جداول المحتوى، وبناء الهوية الرقمية الشخصية.",
    project_1_tag: "إطلاق علامة تجارية DTC",
    project_1_title: "كوفيليا (Coffelia) — خطة إطلاق القهوة الاختصاصية",
    project_1_desc: "خارطة رحلة العميل الكاملة، جدول محتوى لأسبوعين (تشويق / إطلاق / احتفاظ)، وأقماع اشتراك منخفضة التكلفة لعشاق القهوة.",
    project_2_tag: "استراتيجية متعددة القطاعات",
    project_2_title: "استراتيجيات المحتوى لعلامات تجارية متعددة",
    project_2_desc: "بناء خطط محتوى وتحديد Buyer Personas لعلامات تجارية في الأغذية والمشروبات ومستحضرات التجميل والعناية (مثل Dina Coffee, Honeyou, EVA Cosmetics, Infinity Clinic Pharma).",
    project_3_tag: "محاكاة أقماع توليد العملاء",
    project_3_title: "بنية توليد العملاء محاكية متعددة القنوات",
    project_3_desc: "تصميم مسارات اكتساب تبدأ من خطافات الإعلانات، مروراً بصفحات الهبوط المباشرة ونماذج التصفية، وصولاً للربط الفوري عبر الـ Webhooks.",
    project_4_tag: "بناء الهوية وتطوير الحسابات",
    project_4_title: "تطوير الحسابات وصناعة المحتوى الرقمي",
    project_4_desc: "تهيئة صفحات الأعمال على Meta Business Suite، كتابة سلاسل carousels تثقيفية على LinkedIn، وصناعة نصوص الفيديوهات القصيرة (Reels/TikTok) باستخدام علم نفس التسعير.",

    // Skills Matrix
    skills_badge: "الترسانة المهنية",
    skills_title: "مصفوفة المهارات والتقنيات الاحترافية",
    skills_sub: "مصفوفة منظمة تغطي إعلانات الاكتساب، التحليلات، الذكاء الاصطناعي، صناعة المحتوى، وإدارة علاقات العملاء والتفاوض.",
    depi_title: "خريج مبادرة DEPI (وزارة الاتصالات)",
    depi_sub: "مسار التسويق الرقمي والعمل الحر",
    depi_desc: "تدريب مكثف تحت إشراف وزارة الاتصالات وتكنولوجيا المعلومات يشمل إدارة الحملات، وهيكلة الإعلانات، واستراتيجيات الاستحواذ على العملاء.",
    oracle_title: "معتمد من Oracle MyLearn",
    oracle_sub: "البنية السحابية والتحليلات",
    oracle_desc: "وحدات تقنية متقدمة في تصور البيانات، منطق الاستعلام، وتطوير التقارير الآلية.",
    quant_title: "التركيز على النمو الكمي",
    quant_sub: "البيانات واقتصاديات الوحدة",
    quant_desc: "حل المشكلات بناءً على البيانات، النمذجة المالية للحملات، والتحكم في تباين النتائج لمضاعفة العائد.",

    // Contact
    contact_badge: "بدء التعاون المهني",
    contact_title: "هل أنت جاهز لتكبير أقماع اكتساب العملاء بدقة البيانات؟",
    contact_sub: "سواء كنت تطلق منتجاً جديداً أو تتوسع في حملات B2B، دعنا نحلل اقتصاديات حملتك ونبني بنية إعلانية عالية العائد.",
    contact_location_label: "الموقع الجغرافي",
    contact_location_val: "طنطا، الغربية، مصر",
    contact_phone_label: "الهاتف / الواتساب",
    contact_email_label: "البريد الإلكتروني",
    contact_linkedin_label: "حساب LinkedIn",
    contact_linktree_label: "رابط Linktree Hub",
    form_title: "طلب تدقيق وتقييم إعلاني",
    form_sub: "قم بتعبئة بياناتك أدناه لتفعيل مراجعة فورية لحساباتك عبر الواتساب والبريد.",
    form_name_label: "الاسم بالكامل *",
    form_email_label: "البريد الإلكتروني *",
    form_phone_label: "الهاتف / الواتساب",
    form_spend_label: "الميزانية الإعلانية الشهرية",
    form_message_label: "أهداف المشروع والتحديات الحالية *",
    form_submit_btn: "إرسال وتفعيل التدقيق المباشر عبر الواتساب",
    footer_copy: "جميع الحقوق محفوظة © 2026 محمد قطقط.",
    back_to_top: "العودة للأعلى ↑"
  }
};

let currentLang = localStorage.getItem('mk_portfolio_lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mk_portfolio_lang', lang);

  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update text of all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update language toggle buttons text
  document.querySelectorAll('.lang-btn-text').forEach(el => {
    el.textContent = lang === 'ar' ? 'English' : 'العربية';
  });

  // Re-initialize Lucide Icons if needed
  if (window.lucide) {
    lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Apply stored/default language on load
  applyLanguage(currentLang);

  // Attach toggle click handlers to desktop and mobile buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      applyLanguage(nextLang);
    });
  });

  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Sticky Navbar Blur
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('bg-[#0a0f1d]/90', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
        navbar.classList.remove('py-5');
      } else {
        navbar.classList.remove('bg-[#0a0f1d]/90', 'backdrop-blur-md', 'border-b', 'border-white/10');
        navbar.classList.add('py-5');
      }
    });
  }

  // Mobile Drawer Controller
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileCloseBtn = document.getElementById('mobile-close-btn');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.remove('translate-x-full');
    });

    if (mobileCloseBtn) {
      mobileCloseBtn.addEventListener('click', () => {
        mobileDrawer.classList.add('translate-x-full');
      });
    }

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('translate-x-full');
      });
    });
  }

  // Toast Notification System
  window.showToast = function(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="w-2.5 h-2.5 rounded-full ${type === 'success' ? 'bg-cyan-400 shadow-[0_0_10px_#00D2FF]' : 'bg-rose-500'}"></div>
      <span class="text-sm font-medium text-slate-200">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  };

  // Case Study & Project Breakdown Modals
  window.openCaseModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
      if (window.lucide) lucide.createIcons();
    }
  };

  window.closeCaseModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  };

  // Close modals when clicking backdrop or pressing Escape
  document.querySelectorAll('.fixed.inset-0').forEach(modal => {
    if (modal.id !== 'mobile-drawer') {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          window.closeCaseModal(modal.id);
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.fixed.inset-0:not(.hidden)').forEach(modal => {
        if (modal.id === 'mobile-drawer') {
          modal.classList.add('translate-x-full');
        } else {
          window.closeCaseModal(modal.id);
        }
      });
    }
  });

  // Contact Form Submission & WhatsApp Trigger
  const contactForm = document.getElementById('audit-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const spend = document.getElementById('form-spend').value;
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast(currentLang === 'ar' ? 'يرجى تعبئة الحقول المطلوبة.' : 'Please fill out all required fields.', 'error');
        return;
      }

      const waText = encodeURIComponent(
        `Hello Mohamed! Growth Audit Request:\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'N/A'}\n` +
        `Ad Budget: ${spend}\n` +
        `Project Goals: ${message}`
      );

      const waUrl = `https://wa.me/201012620632?text=${waText}`;

      showToast(currentLang === 'ar' ? 'جاري تحويلك إلى الواتساب...' : 'Redirecting to WhatsApp...', 'success');

      setTimeout(() => {
        window.open(waUrl, '_blank');
        contactForm.reset();
      }, 1000);
    });
  }

  // Direct Mailto Trigger Button
  const mailtoBtn = document.getElementById('direct-mailto-btn');
  if (mailtoBtn) {
    mailtoBtn.addEventListener('click', () => {
      window.location.href = 'mailto:mohamedkotkat3@gmail.com?subject=Growth%20Audit%20Inquiry%20-%20Mohamed%20Kotkat';
    });
  }
});
