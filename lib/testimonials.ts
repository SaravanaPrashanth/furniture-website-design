export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  quote: string
  initials: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Karthik Rajan',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    quote:
      'I ordered a full Kerala teak bedroom set — bed, wardrobe, and side tables. The quality is exceptional. The wood grain is beautiful and every joint is immaculate. My family has been using it for three years with zero issues. Highly recommend.',
    initials: 'KR',
  },
  {
    id: 't2',
    name: 'Priya Subramaniam',
    location: 'Adyar, Chennai',
    rating: 5,
    quote:
      'What sets Sri Vetrivel apart is their honesty about materials. I visited three other furniture shops before coming here — they all used MDF mixed with wood. Here, everything is solid wood, no compromise. The 3+2 sofa we bought is outstanding.',
    initials: 'PS',
  },
  {
    id: 't3',
    name: 'Ramesh Balaji',
    location: 'Velachery, Chennai',
    rating: 5,
    quote:
      'The custom dining table they made for us is a masterpiece. I gave them unusual dimensions and a specific teak finish requirement. They delivered exactly what I envisioned, on time, and the price was very fair for the quality. Will definitely order again.',
    initials: 'RB',
  },
]
