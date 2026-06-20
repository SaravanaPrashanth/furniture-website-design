export interface Faq {
  id: string
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    id: 'wood-types',
    question: 'What wood types do you use?',
    answer:
      'We use only premium natural wood — primarily Kerala teak, sheesham, and select hardwoods. We never use MDF, compressed board, or any form of engineered wood. Every piece is built from solid timber sourced for grain quality and structural integrity.',
  },
  {
    id: 'custom-sizes',
    question: 'Do you offer custom sizes and designs?',
    answer:
      'Yes, all our pieces are fully customisable. You can choose dimensions, wood type, finish, upholstery fabric, and joinery style. Simply WhatsApp us at +91 97100 25248 with your requirements and we will provide a detailed quote.',
  },
  {
    id: 'delivery',
    question: 'How is delivery handled?',
    answer:
      'We have our own in-house delivery team covering all of Chennai and surrounding areas. Delivery charges are applicable and will be confirmed based on your delivery location at the time of order. We ensure safe, careful installation at your home.',
  },
  {
    id: 'showroom-visit',
    question: 'Can I visit your showroom before ordering?',
    answer:
      'Absolutely. Our workshop and showroom are at the same location — No.1 South VP Colony, Medavakkam Tank Road, Ayanavaram, Chennai 600 023. We are open Monday to Friday, 10 AM to 9 PM, and Saturday & Sunday, 11 AM to 7 PM. You can see the wood quality, ongoing pieces, and our craftsmanship firsthand.',
  },
  {
    id: 'how-to-order',
    question: 'How do I place an order?',
    answer:
      'The easiest way is to WhatsApp us at +91 97100 25248. Share your requirements — piece type, dimensions, wood preference, and any reference images. We will confirm specifications, estimated timeline, and final pricing within 24 hours.',
  },
]

/* JSON-LD for FAQ structured data (AEO) */
export const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}
