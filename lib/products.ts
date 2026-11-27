export type Product = { id: string; name: string; category: string; price: string; description: string; image: string; tag?: string };
export const products: Product[] = [
 { id:'bamboo-chair', name:'Handwoven Bamboo Chair', category:'Seating', price:'Enquire for price', description:'A warm, handcrafted accent chair designed to bring natural texture into your home.', image:'https://images.unsplash.com/photo-1598300053653-5bbd4b2f6c5f?auto=format&fit=crop&w=1200&q=85', tag:'Handcrafted' },
 { id:'bamboo-lounge', name:'Bamboo Lounge Set', category:'Living room', price:'Enquire for price', description:'Relaxed, nature-inspired seating for verandas, patios and living spaces.', image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85' },
 { id:'woven-stool', name:'Woven Bamboo Stool', category:'Occasional', price:'Enquire for price', description:'A versatile handcrafted stool with an understated, timeless silhouette.', image:'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=1200&q=85' },
 { id:'bamboo-daybed', name:'Bamboo Daybed', category:'Bedroom', price:'Enquire for price', description:'A restful natural centrepiece made for slow afternoons and quiet corners.', image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85' },
];
