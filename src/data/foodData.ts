
export interface FoodLocation {
  id: string;
  name: string;
  category: string;
  address: string;
  latitude: number;
  longitude: number;
  rating: number;
  image: string;
  description?: string;
  phone?: string;
  website?: string;
  hours?: string[];
}

export const foodLocations: FoodLocation[] = [
  {
    id: 'play-food-wine',
    name: 'Play Food & Wine',
    category: 'Restaurant',
    address: '1 York St, Ottawa, ON',
    latitude: 45.4287,
    longitude: -75.6929,
    rating: 4.5,
    image: 'https://lh3.googleusercontent.com/p/AF1QipOhWz7Vq-XwTbEKcXKrmMyfCSRjksMimvPmKHF6=s1360-w1360-h1020',
    phone: '(613) 667-9207',
    website: 'https://playfood.ca',
    description: 'Upscale small plates restaurant offering seasonal local ingredients with wine pairings in a relaxed setting.',
    hours: [
      'Monday: 11:30AM–2PM, 5–10PM',
      'Tuesday: 11:30AM–2PM, 5–10PM',
      'Wednesday: 11:30AM–2PM, 5–10PM',
      'Thursday: 11:30AM–2PM, 5–10PM',
      'Friday: 11:30AM–2PM, 5–10PM',
      'Saturday: 5–10PM',
      'Sunday: 5–9PM'
    ]
  },
  {
    id: 'riviera',
    name: 'Riviera',
    category: 'Restaurant',
    address: '62 Sparks St, Ottawa, ON',
    latitude: 45.4229,
    longitude: -75.6976,
    rating: 4.6,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMqFonvk-EuA3KY1LvV2UTACRoNm6G9H6ykfPPJ=s1360-w1360-h1020',
    phone: '(613) 233-6262',
    website: 'https://dineriviera.com',
    description: 'Sophisticated dining in a former bank with an elegant art deco vibe, serving modern cuisine and craft cocktails.',
    hours: [
      'Monday: 11:30AM–1:30PM, 5:30–11PM',
      'Tuesday: 11:30AM–1:30PM, 5:30–11PM',
      'Wednesday: 11:30AM–1:30PM, 5:30–11PM',
      'Thursday: 11:30AM–1:30PM, 5:30–11PM',
      'Friday: 11:30AM–1:30PM, 5:30–11PM',
      'Saturday: 5:30–11PM',
      'Sunday: Closed'
    ]
  },
  {
    id: 'ministry-of-coffee',
    name: 'Ministry of Coffee',
    category: 'Cafe',
    address: '279 Elgin St, Ottawa, ON',
    latitude: 45.4178,
    longitude: -75.6896,
    rating: 4.4,
    image: 'https://lh3.googleusercontent.com/p/AF1QipPmFpFxPlKkZVIKDJiXUJLfOvbDFWWjwOg__iNr=s1360-w1360-h1020',
    phone: '(613) 255-9919',
    website: 'https://theministryofcoffee.com',
    description: 'Trendy coffee shop with expertly crafted espresso drinks, pour-overs, and a selection of pastries and light bites.',
    hours: [
      'Monday: 7AM–7PM',
      'Tuesday: 7AM–7PM',
      'Wednesday: 7AM–7PM',
      'Thursday: 7AM–7PM',
      'Friday: 7AM–7PM',
      'Saturday: 8AM–7PM',
      'Sunday: 8AM–7PM'
    ]
  },
  {
    id: 'kettlemans-bagel',
    name: 'Kettlemans Bagel',
    category: 'Bakery',
    address: '912 Bank St, Ottawa, ON',
    latitude: 45.4034,
    longitude: -75.6819,
    rating: 4.5,
    image: 'https://lh3.googleusercontent.com/p/AF1QipNgNyL7PzlvZb9O2yFrZCBARfuVLmL1yAsUx5zI=s1360-w1360-h1020',
    phone: '(613) 567-7100',
    website: 'https://kettlemansbagels.ca',
    description: 'Montreal-style bagels baked in a wood-fired oven with a variety of spreads and sandwich options.',
    hours: [
      'Open 24 hours'
    ]
  },
  {
    id: 'elgin-street-diner',
    name: 'Elgin Street Diner',
    category: 'Restaurant',
    address: '374 Elgin St, Ottawa, ON',
    latitude: 45.4152,
    longitude: -75.6889,
    rating: 4.2,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMv6zrAffrgf3S_l_L0-Qo5-YuDkd8NjRRCxWI-=s1360-w1360-h1020',
    phone: '(613) 237-9700',
    website: 'https://elginstreetdiner.com',
    description: 'Classic 24-hour diner known for poutine, breakfast plates, and milkshakes in a retro setting.',
    hours: [
      'Open 24 hours'
    ]
  },
  {
    id: 'brothers-beer-bistro',
    name: 'Brothers Beer Bistro',
    category: 'Pub',
    address: '366 Dalhousie St, Ottawa, ON',
    latitude: 45.4297,
    longitude: -75.6896,
    rating: 4.3,
    image: 'https://lh3.googleusercontent.com/p/AF1QipM43QlO6MtYkJnBk4HuXUaIb7g2YOl-W6y2N-x6=s1360-w1360-h1020',
    phone: '(613) 695-6500',
    website: 'https://brothersbeerbistro.ca',
    description: 'Craft beer-focused gastropub with beer-infused dishes and an excellent selection of local and international brews.',
    hours: [
      'Monday: Closed',
      'Tuesday: 11:30AM–11PM',
      'Wednesday: 11:30AM–11PM',
      'Thursday: 11:30AM–12AM',
      'Friday: 11:30AM–12AM',
      'Saturday: 11:30AM–12AM',
      'Sunday: 11:30AM–10PM'
    ]
  },
  {
    id: 'happy-goat-coffee',
    name: 'Happy Goat Coffee',
    category: 'Cafe',
    address: '35 Laurel St, Ottawa, ON',
    latitude: 45.4103,
    longitude: -75.7023,
    rating: 4.5,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMwC9hcYzAku2bxMIQGkbT8d9eSLvfXZHLhQHOB=s1360-w1360-h1020',
    phone: '(613) 792-1309',
    website: 'https://happygoatcoffee.com',
    description: 'Local roaster and cafe serving specialty coffee, light meals, and baked goods in a cozy atmosphere.',
    hours: [
      'Monday: 7:30AM–6PM',
      'Tuesday: 7:30AM–6PM',
      'Wednesday: 7:30AM–6PM',
      'Thursday: 7:30AM–6PM',
      'Friday: 7:30AM–6PM',
      'Saturday: 8AM–6PM',
      'Sunday: 8AM–6PM'
    ]
  },
  {
    id: 'el-camino',
    name: 'El Camino',
    category: 'Restaurant',
    address: '380 Elgin St, Ottawa, ON',
    latitude: 45.415,
    longitude: -75.6891,
    rating: 4.4,
    image: 'https://lh3.googleusercontent.com/p/AF1QipNrxU9s8-udbcyLD9GGtCU4dRGQKdEkOJ66izQd=s1360-w1360-h1020',
    phone: '(613) 422-2800',
    website: 'https://eatelcamino.com',
    description: 'Hip taco joint with a takeout window, featuring creative tacos, cocktails, and a vibrant atmosphere.',
    hours: [
      'Monday: 12–10PM',
      'Tuesday: 12–10PM',
      'Wednesday: 12–10PM',
      'Thursday: 12–12AM',
      'Friday: 12–2AM',
      'Saturday: 12–2AM',
      'Sunday: 12–10PM'
    ]
  },
  {
    id: 'wild-oat-bakery',
    name: 'The Wild Oat Bakery',
    category: 'Bakery',
    address: '817 Bank St, Ottawa, ON',
    latitude: 45.4056,
    longitude: -75.6851,
    rating: 4.5,
    image: 'https://lh3.googleusercontent.com/p/AF1QipPCw5HZ_tYiKWn13b72JvJ2-RvF5DZPp9iAR68w=s1360-w1360-h1020',
    phone: '(613) 232-6232',
    website: 'https://thewildoat.ca',
    description: 'Organic cafe and bakery offering vegetarian and vegan options, fresh baked goods, and fair-trade coffee.',
    hours: [
      'Monday: 7:30AM–7PM',
      'Tuesday: 7:30AM–7PM',
      'Wednesday: 7:30AM–7PM',
      'Thursday: 7:30AM–7PM',
      'Friday: 7:30AM–7PM',
      'Saturday: 7:30AM–7PM',
      'Sunday: 9AM–6PM'
    ]
  },
  {
    id: 'five-guys',
    name: 'Five Guys',
    category: 'Fast Food',
    address: '96 Gloucester St, Ottawa, ON',
    latitude: 45.421,
    longitude: -75.6877,
    rating: 4.1,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMpwCvmfnVLzCjCL0f6ORaePb5KkDOUdNrGfrzQ=s1360-w1360-h1020',
    phone: '(613) 656-1950',
    website: 'https://fiveguys.ca',
    description: 'Popular burger chain known for handcrafted burgers, fresh-cut fries, and customizable toppings.',
    hours: [
      'Monday: 11AM–10PM',
      'Tuesday: 11AM–10PM',
      'Wednesday: 11AM–10PM',
      'Thursday: 11AM–10PM',
      'Friday: 11AM–10PM',
      'Saturday: 11AM–10PM',
      'Sunday: 11AM–10PM'
    ]
  },
  {
    id: 'the-manx',
    name: 'The Manx',
    category: 'Pub',
    address: '370 Elgin St, Ottawa, ON',
    latitude: 45.4155,
    longitude: -75.6887,
    rating: 4.4,
    image: 'https://lh3.googleusercontent.com/p/AF1QipPKPnTnLH-YgKgEcjXXz21r9-QgcMX8V2wbNf0G=s1360-w1360-h1020',
    phone: '(613) 231-2070',
    website: 'https://manxpub.com',
    description: 'Underground pub with a cozy atmosphere, serving craft beers and elevated pub fare with vegetarian options.',
    hours: [
      'Monday: 11AM–2AM',
      'Tuesday: 11AM–2AM',
      'Wednesday: 11AM–2AM',
      'Thursday: 11AM–2AM',
      'Friday: 11AM–2AM',
      'Saturday: 10:30AM–2AM',
      'Sunday: 10:30AM–2AM'
    ]
  },
  {
    id: 'the-king-eddy',
    name: 'The King Eddy',
    category: 'Restaurant',
    address: '45 Clarence St, Ottawa, ON',
    latitude: 45.4284,
    longitude: -75.6925,
    rating: 4.2,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMgZ30o7DT_8DYP_gZ_vwrI1Y0MywBFDL8PZ-AH=s1360-w1360-h1020',
    phone: '(613) 789-7355',
    website: 'https://thekingeddyottawa.com',
    description: 'Modern diner with a retro feel, serving classic burgers, all-day breakfast, and boozy milkshakes.',
    hours: [
      'Monday: 9AM–1AM',
      'Tuesday: 9AM–1AM',
      'Wednesday: 9AM–1AM',
      'Thursday: 9AM–1AM',
      'Friday: 9AM–2AM',
      'Saturday: 9AM–2AM',
      'Sunday: 9AM–1AM'
    ]
  },
  {
    id: 'moo-shu-ice-cream',
    name: 'Moo Shu Ice Cream',
    category: 'Cafe',
    address: '477 Bank St, Ottawa, ON',
    latitude: 45.4123,
    longitude: -75.6906,
    rating: 4.7,
    image: 'https://lh3.googleusercontent.com/p/AF1QipMwgkFxzEAuBlKmvDvTAMnzDjsP0D29PJvNv-79=s1360-w1360-h1020',
    phone: '(613) 656-4156',
    website: 'https://mooshuicecream.com',
    description: 'Small-batch ice cream shop with innovative Asian-inspired flavors, made with local and seasonal ingredients.',
    hours: [
      'Monday: Closed',
      'Tuesday: Closed',
      'Wednesday: 1–9PM',
      'Thursday: 1–9PM',
      'Friday: 1–9PM',
      'Saturday: 1–9PM',
      'Sunday: 1–9PM'
    ]
  }
];
