import React, { useState } from 'react';
import contactInfo, { siteInfo } from '@/data/contact-info';

const faqData = (email) => [
  {
    id: 1,
    question: 'How do I place an order?',
    answer: `Browse our Shop, add items to your cart, and proceed to checkout. You can pay securely online and track your order status. For help, contact us at ${email}.`,
  },
  {
    id: 2,
    question: 'Do you offer free delivery?',
    answer: 'Yes. We offer free delivery on orders over ₹499 across eligible locations. Delivery times and charges for other orders are shown at checkout.',
  },
  {
    id: 3,
    question: 'What is your shipping policy?',
    answer: 'Orders are typically processed within 1–2 business days. Delivery times depend on your location and the items ordered. You will receive tracking details once your order ships.',
  },
  {
    id: 4,
    question: `How can I contact ${siteInfo.companyName}?`,
    answer: `Reach us via the Contact page, by email at ${email}, or by phone at ${contactInfo.phone}. We are happy to help with orders, product questions, or any other enquiries.`,
  },
  {
    id: 5,
    question: 'What is your return or refund policy?',
    answer: `We want you to be fully satisfied with your purchase from ${siteInfo.companyName}. Our Return Policy covers returns, exchanges, and refunds within 7 days. Please see our Return Policy page for eligibility and steps.`,
  },
  {
    id: 6,
    question: 'Do I need an account to shop?',
    answer: 'No account is required to browse and place orders. Creating an account lets you save your wishlist and track orders more easily.',
  },
];

const FaqArea = () => {
  const [openId, setOpenId] = useState(null);
  const faqs = faqData(contactInfo.email);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <section className="tp-terms-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-terms-wrapper">
                <div className="tp-section-title-wrapper-4 mb-50">
                  <h3 className="tp-section-title-4 mb-20">Frequently Asked Questions</h3>
                  <p className="mb-0">
                    Find answers to common questions about shopping at {siteInfo.companyName} ({siteInfo.domain}).
                  </p>
                </div>
                <div className="tp-faq-content">
                  {faqs.map((item) => (
                    <div
                      key={item.id}
                      className={`tp-faq-item mb-15 ${openId === item.id ? 'active' : ''}`}
                      style={{
                        border: '1px solid #e5e5e5',
                        borderRadius: '8px',
                        overflow: 'hidden',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(item.id)}
                        className="tp-faq-question w-100 text-start d-flex align-items-center justify-content-between p-4"
                        style={{
                          background: openId === item.id ? '#f9f9f9' : '#fff',
                          border: 'none',
                          fontSize: '16px',
                          fontWeight: '600',
                          color: 'var(--tp-heading-secondary)',
                          cursor: 'pointer',
                        }}
                      >
                        {item.question}
                        <span style={{ fontSize: '20px', transition: 'transform 0.2s', transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0)' }}>
                          <i className="fa-solid fa-chevron-down" />
                        </span>
                      </button>
                      <div
                        className="tp-faq-answer"
                        style={{
                          maxHeight: openId === item.id ? '500px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.3s ease',
                        }}
                      >
                        <p className="p-4 pt-0 mb-0" style={{ fontSize: '15px', lineHeight: '1.8', color: '#555' }}>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
