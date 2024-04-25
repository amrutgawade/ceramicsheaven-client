export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "bathroomtiles", label: "Bathroom Tiles" },
      { value: "roomtiles", label: "Room Tiles" },
      { value: "kitchentiles", label: "Kitchen Tiles" },
      { value: "halltiles", label: "Hall Tiles" },
      { value: "indoor", label: "Indoor Tiles" },
      { value: "outdoortiles", label: "Outdoor Tiles" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "gray", label: "Gray" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
      { value: "red", label: "Red" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "100x200", label: "100 X 200" },
      { value: "200x400", label: "200 X 400" },
      { value: "400x600", label: "400 X 600" },
    ],
  },
];
export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "*159 To *399" },
      { value: "399-999", label: "*399 To *999" },
      { value: "999-1999", label: "*999 To *1999" },
      { value: "1999-2999", label: "*1999 To *2999" },
      { value: "3999-4999", label: "3999 To 4999" },
    ],
  },
  {
    id: "disccout",
    name: "Discount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];
export const sortOptions = [
  // { name: "Most Popular", href: "#", current: true },
  // { name: "Best Rating", href: "#", current: false },
  // { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "/store?sort=price_low", current: false },
  { name: "Price: High to Low", href: "/store?sort=price_high", current: false },
];