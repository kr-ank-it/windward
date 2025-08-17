
export interface Material {
  id: number;
  name: string;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  discontinued: boolean;
  category: {
    id: number;
    name: string;
  };
  supplier: {
    id: number;
    companyName: string;
  };
}
