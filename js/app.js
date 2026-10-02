/**
 * MAIN PORTFOLIO APPLICATION CONTROLLER
 * Handles navigation glass state, mobile menu toggle, case study modal views, backdrop clicks, form validation, and direct WhatsApp triggers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons if available
  if (window.lucide) {
    lucide.createIcons();
  }

  // Navbar Sticky Backdrop Blur on Scroll
  const navbar = document.getElementById('main-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-3');
      navbar.classList.remove('py-5');
    } else {
      navbar.classList.remove('bg-slate-950/80', 'backdrop-blur-md', 'border-b', 'border-white/10');
      navbar.classList.add('py-5');
    }
  });

  // Mobile Drawer Toggle
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

  // Toast Notification Trigger
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

  // Contact Form Validation & Direct WhatsApp Submission
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
        showToast('Please fill out all required fields.', 'error');
        return;
      }

      // Format WhatsApp Message Trigger
      const waText = encodeURIComponent(
        `Hi Mohamed! My name is ${name}.\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || 'N/A'}\n` +
        `Current Monthly Ad Spend: ${spend}\n` +
        `Project Notes: ${message}`
      );

      const waUrl = `https://wa.me/201012620632?text=${waText}`;

      // Trigger success notification
      showToast('Redirecting to WhatsApp to send your growth audit request...', 'success');

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

