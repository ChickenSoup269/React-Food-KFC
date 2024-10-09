const products = [
  // ?Aktionen
  {
    id: 1,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/b/4/csm_crosslinker_originaltwistermn_aaa7f28dc3.png',
    name: 'Original Twister® Wrap',
    description: 'Special offer on Original Twister',
    price: '8.00',
    category: 'Aktionen',
    size: ['xs', 's', 'xl'],
    discount: 0,
  },
  {
    id: 2,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/0/a/csm_crosslinker_dipsbucket_5785f75896.png',
    name: 'Dips Bucket',
    description: 'Special offer on Dips Bucket',
    price: '19.99',
    category: 'Aktionen',
    size: ['s', 'm', 'l'],
    discount: 10,
  },
  {
    id: 3,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/7/f/csm_crosslinker_oreomilkshake_3c56f950da.png',
    name: 'Milkshake OREO®-Style',
    description: 'Special offer on Milkshake OREO®',
    price: '19.99',
    category: 'Aktionen',
    size: ['m', 'l'],
    discount: 0,
  },
  {
    id: 4,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Veggie/veggie-kids.png',
    name: 'Veggie Kids Menu',
    description: 'Special offer on Veggie Kids Menu',
    price: '19.99',
    category: 'Aktionen',
    size: ['xs', 's'],
    discount: 15,
  },
  {
    id: 5,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/8/2/csm_crosslinker_superdealbox_fec4f2feee.png',
    name: 'Super Deal Box',
    description: 'Special offer on Super Deal Box',
    price: '19.99',
    category: 'Aktionen',
    size: ['l', 'xl'],
    discount: 0,
  },
  {
    id: 6,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Kids/thumb_kids.png',
    name: 'Kid Menu',
    description: 'Special offer on Kid Menu',
    price: '19.99',
    category: 'Aktionen',
    size: ['xs'],
    discount: 10,
  },
  {
    id: 7,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Aktionen/kfc_deals/thumb-deals-alle.png',
    name: 'KFC Deals',
    description: 'Special offer on KFC Deals',
    price: '19.99',
    category: 'Aktionen',
    size: ['m', 'l', 'xl'],
    discount: 15,
  },
  // ?Burger & Wraps
  {
    id: 8,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/4/9/csm_crosslinker_originaltwister_9d24aa86a8.png',
    name: 'Original Twister® Wrap',
    description: 'This is a great product',
    price: '29.99',
    category: 'Burger & Wraps',
    size: ['s', 'm', 'l'],
    discount: 17,
  },
  {
    id: 9,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/2/d/csm_crosslinker_twister_44dd1dbfde.png',
    name: 'Twister® Wrap',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['m', 'l'],
    discount: 0,
  },
  {
    id: 10,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/2/a/csm_colonel-original_8da5a5f58e.png',
    name: 'Colonel Original Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['s', 'm', 'l'],
    discount: 12,
  },
  {
    id: 11,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/b/f/csm_bbq-zinger_f6d44fda63.png',
    name: 'Kentucky BBQ Zinger Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['m', 'l'],
    discount: 0,
  },
  {
    id: 12,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/c/7/csm_classic-zinger_657ed2d4ee.png',
    name: 'Classic Zinger Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['l'],
    discount: 10,
  },
  {
    id: 13,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/e/6/csm_dbl-cheese-bacon-original_6e71267b0a.png',
    name: 'Double Cheese & Bacon Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['s', 'm'],
    discount: 5,
  },
  {
    id: 14,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/b/3/csm_cheese-bacon-original_914bfb59c7.png',
    name: 'Cheese & Bacon Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['m', 'l'],
    discount: 5,
  },
  {
    id: 15,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/f/b/csm_crosslinker_crispycheese_69ddaeaea7.png',
    name: 'Crispy Cheese Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['l'],
    discount: 7,
  },
  {
    id: 16,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/0/4/csm_double-crunch-classic_541c5c0c50.png',
    name: 'Double Crispy Classic Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['m', 'l'],
    discount: 5,
  },
  {
    id: 17,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/5/9/csm_crosslinker_crispychilicheese_7ef5b8985c.png',
    name: 'Crispy Chili Cheese Burger',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Burger & Wraps',
    size: ['m', 'l'],
    discount: 5,
  },

  // ?Chicken
  {
    id: 18,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Chicken/Preview_Image/kfc_thumb_haehnchenteile.png',
    name: 'Original Pouletteile',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Chicken',
    size: ['s', 'm', 'l'],
    discount: 12,
  },
  {
    id: 19,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Chicken/Preview_Image/kfc_thumb_chicken_hotwings.png',
    name: 'Hot Wings®',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Chicken',
    size: ['m', 'l'],
    discount: 8,
  },
  {
    id: 20,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Chicken/Preview_Image/kfc_thumb_chicken_crispys.png',
    name: 'Crispys',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Chicken',
    size: ['s', 'm'],
    discount: 0,
  },
  {
    id: 21,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Chicken/Preview_Image/kfc_thumb_chicken_filetbites.png',
    name: 'Filet Bites',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'Chicken',
    size: ['m', 'l'],
    discount: 5,
  },

  // ?All in the box
  {
    id: 22,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/1/9/csm_colonel-original-box_e0479a14d9.png',
    name: 'Colonel Original Burger Box',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'All in the box',
    size: ['s', 'm', 'l'],
    discount: 0,
  },
  {
    id: 23,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/All_in_the_Box/thumb_box_9hotwingsbox.png',
    name: '9er Hot Wings® Box',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'All in the box',
    size: ['m', 'l'],
    discount: 8,
  },
  {
    id: 24,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/All_in_the_Box/thumb_box_3er.png',
    name: '3er Box',
    description: 'Twist of flavor in every bite.',
    price: '18.99',
    category: 'All in the box',
    size: ['s'],
    discount: 25,
  },
  {
    id: 25,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/All_in_the_Box/thumb_box_kombi.png',
    name: 'Kombibox',
    description: 'Twist of flavor in every bite.',
    price: '39.99',
    category: 'All in the box',
    size: ['s', 'm'],
    discount: 12,
  },

  // ?Salate & Saucen
  {
    id: 31,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Salate_und_Dressing/kfc_thumb_filetbitessalad.png',
    name: 'KFC Filet Bites Salad',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['m'],
    discount: 20,
  },
  {
    id: 32,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Veggie/veggie-tender-salad.png',
    name: 'Veggie KFC Salad',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['m'],
    discount: 50,
  },
  {
    id: 33,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Beilagen/kfc_thumb_beilagen_coleslaw.png',
    name: 'Coleslaw',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['m'],
    discount: 0,
  },
  {
    id: 34,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/c/6/csm_dip-original_9ef5691e72.png',
    name: 'Original Dip',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 20,
  },
  {
    id: 35,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/2/e/csm_dip-garlicsauce_749dc8c793.png',
    name: 'Garlic Sauce Dip',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 99,
  },
  {
    id: 36,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/d/7/csm_dip-sweetsour_c122c60636.png',
    name: 'Sweet & Sour Dip',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },
  {
    id: 37,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/1/d/csm_dip-smookybbq_e9d2db47b0.png',
    name: 'Smoky BBQ Dip',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },
  {
    id: 38,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/b/8/csm_dip-spicycreamy_52ad374d61.png',
    name: 'Spicy Creamy Dip',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },
  {
    id: 39,
    image:
      'https://www.kfc-suisse.ch/fileadmin/_processed_/9/c/csm_dip-creamycurry_7cc17b14c0.png',
    name: 'Creamy Curry Dip',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },
  {
    id: 40,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Dips/Preview_Image/kfc_thumb_dips_frittensauce.png',
    name: 'Heinz Pommes Frites Sauce',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 2,
  },
  {
    id: 41,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Dips/Preview_Image/kfc_thumb_dips_ketchup.png',
    name: 'Heinz Tomato Ketchup',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 10,
  },
  {
    id: 42,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Beilagen/Preview_Image/kfc_thumb_beilagen_gravy.png',
    name: 'Gravy',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 9,
  },
  {
    id: 43,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Beilagen/Preview_Image/kfc_thumb_beilagen_butter.png',
    name: 'Butter',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },
  {
    id: 44,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Dips/Preview_Image/kfc_thumb_dressing_balsamico.png',
    name: 'Balsamico-Dressing',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },
  {
    id: 45,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Dips/Preview_Image/kfc_thumb_dressing_joghurt.png',
    name: 'Joghurt-Dressing',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },
  {
    id: 46,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Dips/Preview_Image/kfc_thumb_dressing_french.png',
    name: 'French Dressing',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Salate & Saucen',
    size: ['s'],
    discount: 0,
  },

  // ?Beilagen & Desserts
  {
    id: 47,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Beilagen/Preview_Image/kfc_thumb_beilagen_maiskolben.png',
    name: 'Maiskolben',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Beilagen & Desserts',
    size: ['m'],
    discount: 0,
  },
  {
    id: 48,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Beilagen/kfc_thumb_beilagen_kapue.png',
    name: 'Kartoffelstock',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Beilagen & Desserts',
    size: ['m'],
    discount: 0,
  },
  {
    id: 49,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Beilagen/kfc_thumb_beilagen_pommes_frites.png',
    name: 'Pommes Frites',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Beilagen & Desserts',
    size: ['m'],
    discount: 0,
  },
  {
    id: 50,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Desserts/Preview_Image/kfc_thumb_cookiescake_choclatecookie.png',
    name: 'Cookie Chocolate',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Beilagen & Desserts',
    size: ['m'],
    discount: 0,
  },
  {
    id: 51,
    image:
      'https://www.kfc-suisse.ch/fileadmin/media/images/Produkte/Desserts/Preview_Image/kfc_thumb_cookiescake_doublechoclatecookie.png',
    name: 'Cookie Double Chocolate',
    description: 'Twist of flavor in every bite.',
    price: '0.99',
    category: 'Beilagen & Desserts',
    size: ['m'],
    discount: 0,
  },
];

export default products;
