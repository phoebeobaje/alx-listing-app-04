
export interface CardProps {
  title:string;
  description: string;
  // Add props here later, e.g. title: string;
}

// Props for a Button component
export interface ButtonProps {
  text: string;
  // Add props here later, e.g. onClick: () => void;
}
 export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string; // Optional property
 }