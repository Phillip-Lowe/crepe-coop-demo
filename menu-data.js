// ===================== DATA — Crepe Coop Menu =====================
// Savory + Sweet crepe menu for the Little Rock food truck
// ================================================================

const MENU = {
  savory: [
    {
      id: 'caramelized-bacon',
      name: "Caramelized Bacon Crepe",
      price: 800,
      desc: "House-smoked bacon, caramelized onions, mozzarella, and our secret maple glaze folded in a golden crepe.",
      photo: 'images/crepe_bacon.jpg',
      modifiers: {
        extras: [
          { code: 'SAV_XTRA_BACON', label: 'Extra Bacon', price: 150 },
          { code: 'SAV_XTRA_CHEESE', label: 'Extra Cheese', price: 100 },
          { code: 'SAV_XTRA_EGG', label: 'Add Fried Egg', price: 150 },
        ],
        sauce: [
          { code: 'SAV_SAUCE_MAPLE', label: 'Maple Glaze', price: 0 },
          { code: 'SAV_SAUCE_SRIRACHA', label: 'Sriracha Drizzle', price: 0 },
          { code: 'SAV_SAUCE_RANCH', label: 'House Ranch', price: 0 },
        ],
      }
    },
    {
      id: 'sweet-potato',
      name: "Sweet Potato & Sausage Crepe",
      price: 800,
      desc: "Roasted sweet potato, breakfast sausage, spinach, and goat cheese with a chipotle crema drizzle.",
      photo: 'images/crepe_sweetpotato.jpg',
      modifiers: {
        extras: [
          { code: 'SAV2_XTRA_SAUAGE', label: 'Extra Sausage', price: 150 },
          { code: 'SAV2_XTRA_CHEESE', label: 'Extra Goat Cheese', price: 100 },
          { code: 'SAV2_XTRA_EGG', label: 'Add Fried Egg', price: 150 },
        ],
        sauce: [
          { code: 'SAV2_SAUCE_CHIPOTLE', label: 'Chipotle Crema', price: 0 },
          { code: 'SAV2_SAUCE_HONEY', label: 'Hot Honey', price: 0 },
        ],
      }
    },
    {
      id: 'breakfast-sausage',
      name: "Breakfast Sausage Crepe",
      price: 750,
      desc: "Savory breakfast sausage, scrambled egg, sharp cheddar, and fresh chives in a buttery crepe.",
      photo: 'images/crepe_sausage.jpg',
      modifiers: {
        extras: [
          { code: 'SAV3_XTRA_SAUAGE', label: 'Extra Sausage', price: 150 },
          { code: 'SAV3_XTRA_EGG', label: 'Extra Egg', price: 100 },
          { code: 'SAV3_XTRA_CHEESE', label: 'Extra Cheddar', price: 100 },
        ],
        sauce: [
          { code: 'SAV3_SAUCE_KETCHUP', label: 'Ketchup', price: 0 },
          { code: 'SAV3_SAUCE_SRIRACHA', label: 'Sriracha', price: 0 },
          { code: 'SAV3_SAUCE_HOTSAUCE', label: 'House Hot Sauce', price: 0 },
        ],
      }
    },
    {
      id: 'ham-swiss',
      name: "Ham & Swiss Crepe",
      price: 750,
      desc: "Smoked ham, melted Swiss, Dijon mustard, and baby spinach — a brunch classic.",
      photo: 'images/crepe_ham.jpg',
      modifiers: {
        extras: [
          { code: 'SAV4_XTRA_HAM', label: 'Extra Ham', price: 150 },
          { code: 'SAV4_XTRA_CHEESE', label: 'Extra Swiss', price: 100 },
          { code: 'SAV4_XTRA_EGG', label: 'Add Fried Egg', price: 150 },
        ],
        sauce: [
          { code: 'SAV4_SAUCE_DIJON', label: 'Dijon Mustard', price: 0 },
          { code: 'SAV4_SAUCE_HONEY', label: 'Honey Mustard', price: 0 },
        ],
      }
    },
    {
      id: 'veggie-delight',
      name: "Veggie Delight Crepe",
      price: 750,
      desc: "Sautéed mushrooms, roasted peppers, caramelized onion, arugula, and feta cheese.",
      photo: 'images/crepe_veggie.jpg',
      modifiers: {
        extras: [
          { code: 'SAV5_XTRA_MUSH', label: 'Extra Mushrooms', price: 100 },
          { code: 'SAV5_XTRA_FETA', label: 'Extra Feta', price: 100 },
          { code: 'SAV5_XTRA_AVOCADO', label: 'Add Avocado', price: 150 },
        ],
        sauce: [
          { code: 'SAV5_SAUCE_PESTO', label: 'Basil Pesto', price: 0 },
          { code: 'SAV5_SAUCE_BALSAMIC', label: 'Balsamic Glaze', price: 0 },
        ],
      }
    },
  ],
  sweet: [
    {
      id: 'og-strawberry',
      name: "OG Strawberry Crepe",
      price: 700,
      desc: "Fresh strawberries, bananas, and a dusting of powdered sugar in a classic sweet crepe.",
      photo: 'images/crepe_strawberry.jpg',
      modifiers: {
        spread: [
          { code: 'SWT_SPREAD_NUTELLA', label: 'Nutella', price: 0 },
          { code: 'SWT_SPREAD_ALMOND', label: 'Almond Butter', price: 0 },
          { code: 'SWT_SPREAD_CREAM', label: 'Whipped Cream Cheese', price: 0 },
        ],
        toppings: [
          { code: 'SWT_TOP_GRANOLA', label: 'Add Granola', price: 100 },
          { code: 'SWT_TOP_CHOCO', label: 'Chocolate Chips', price: 100 },
          { code: 'SWT_TOP_COCO', label: 'Toasted Coconut', price: 100 },
        ],
        drizzle: [
          { code: 'SWT_DRIZ_CHOCOLATE', label: 'Chocolate Drizzle', price: 0 },
          { code: 'SWT_DRIZ_CARAMEL', label: 'Caramel Drizzle', price: 0 },
          { code: 'SWT_DRIZ_HONEY', label: 'Local Honey', price: 0 },
        ],
      }
    },
    {
      id: 'bananas-nutella',
      name: "Bananas & Nutella Crepe",
      price: 750,
      desc: "Warm Nutella spread, fresh sliced bananas, and a hint of cinnamon — the fan favorite.",
      photo: 'images/crepe_nutella.jpg',
      modifiers: {
        toppings: [
          { code: 'SWT2_TOP_STRAWBERRY', label: 'Add Strawberries', price: 100 },
          { code: 'SWT2_TOP_CHOCO', label: 'Chocolate Chips', price: 100 },
          { code: 'SWT2_TOP_COCO', label: 'Toasted Coconut', price: 100 },
        ],
        drizzle: [
          { code: 'SWT2_DRIZ_CHOCOLATE', label: 'Chocolate Drizzle', price: 0 },
          { code: 'SWT2_DRIZ_CARAMEL', label: 'Caramel Drizzle', price: 0 },
          { code: 'SWT2_DRIZ_HONEY', label: 'Local Honey', price: 0 },
        ],
      }
    },
    {
      id: 'cinnamon-peach',
      name: "Cinnamon Peach Crepe",
      price: 750,
      desc: "Grilled peaches, brown sugar, cinnamon butter, and a dollop of whipped cream.",
      photo: 'images/crepe_peach.jpg',
      modifiers: {
        toppings: [
          { code: 'SWT3_TOP_PECANS', label: 'Candied Pecans', price: 100 },
          { code: 'SWT3_TOP_GRANOLA', label: 'Add Granola', price: 100 },
          { code: 'SWT3_TOP_COCO', label: 'Toasted Coconut', price: 100 },
        ],
        drizzle: [
          { code: 'SWT3_DRIZ_CARAMEL', label: 'Caramel Drizzle', price: 0 },
          { code: 'SWT3_DRIZ_HONEY', label: 'Local Honey', price: 0 },
        ],
      }
    },
    {
      id: 'lemon-blueberry',
      name: "Lemon Blueberry Crepe",
      price: 700,
      desc: "Fresh blueberries, lemon curd, and a light glaze of vanilla icing.",
      photo: 'images/crepe_blueberry.jpg',
      modifiers: {
        toppings: [
          { code: 'SWT4_TOP_GRANOLA', label: 'Add Granola', price: 100 },
          { code: 'SWT4_TOP_CHOCO', label: 'White Chocolate Chips', price: 100 },
          { code: 'SWT4_TOP_COCO', label: 'Toasted Coconut', price: 100 },
        ],
        drizzle: [
          { code: 'SWT4_DRIZ_VANILLA', label: 'Vanilla Icing', price: 0 },
          { code: 'SWT4_DRIZ_HONEY', label: 'Local Honey', price: 0 },
        ],
      }
    },
    {
      id: 's-mores',
      name: "S'mores Crepe",
      price: 800,
      desc: "Toasted marshmallow, melted milk chocolate, and graham cracker crumble — campfire in a crepe.",
      photo: 'images/crepe_smores.jpg',
      modifiers: {
        toppings: [
          { code: 'SWT5_TOP_CHOCO', label: 'Extra Chocolate', price: 100 },
          { code: 'SWT5_TOP_COCO', label: 'Toasted Coconut', price: 100 },
          { code: 'SWT5_TOP_PECANS', label: 'Candied Pecans', price: 100 },
        ],
        drizzle: [
          { code: 'SWT5_DRIZ_CHOCOLATE', label: 'Chocolate Drizzle', price: 0 },
          { code: 'SWT5_DRIZ_CARAMEL', label: 'Caramel Drizzle', price: 0 },
        ],
      }
    },
  ]
};
