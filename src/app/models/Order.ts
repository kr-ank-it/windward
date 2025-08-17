
export interface Order{
  id: Number,
  customerId: String,
  employeeId: Number,
  orderDate: Date,
  requiredDate: Date,
  shippedDate: Date,
  shipVia: Number,
  freight: Number,
  shipName: String,
  shipAddress: OrderAddress,
  details:OrderDetail[]
}

export interface OrderAddress {
  street: String,
  city: String,
  region: String,
  postalCode: Number,
  country: String
}
export interface OrderDetail {
  productId: number,
  unitPrice: number,
  quantity: number,
  discount: number
}
