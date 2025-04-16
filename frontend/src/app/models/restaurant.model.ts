export interface Restaurant {
    id?: number;
    name: string;
    imageUrl: string;
    description: string;
    cuisine: string;
    price: number;           // ✅ THIS is the key line missing before
    location: string;
  }
  