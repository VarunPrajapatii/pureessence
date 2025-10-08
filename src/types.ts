export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface CategoryWithBillboards {
  id: string;
  name: string;
  storeId: string;
  CreatedAt: string;
  updatedAt: string;
  billboards: Billboard[];
}

export interface Category {
  id: string;
  name: string;
  billboard?: Billboard;
  storeId?: string;
  billboardId?: string;
  CreatedAt?: string;
  updatedAt?: string;
}


export interface Product {
  id: string
  name: string
  description: string
  bulletPoints: string[]
  price: string
  isFeatured: boolean
  isArchived: boolean
  category: Category
  size: Size
  images: Image[]
  relatedItems: Product[]
}

export interface Image {
  id: string
  url: string
}

export interface Size {
  id: string
  name: string
  value: string
}

export interface UpcomingProduct {
  id: string
  name: string
  price: string
  imageUrl: string
  storeId: string
  categoryId: string
  CreatedAt: string
  updatedAt: string
  category: Category
}