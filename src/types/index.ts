export interface DistributorTier {
  id: string;
  name: string;
  tagline: string;
  minQuantity: number;
  discountRate: string;
  retailPrice: number;
  wholesalePrice: number;
  profitPerBag: number;
  perks: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface IngredientInfo {
  id: string;
  name: string;
  englishName: string;
  ratio: string;
  badge: string;
  shortDesc: string;
  detailedBenefits: string[];
  icon: string;
  color: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  businessType: 'pet_shop' | 'clinic' | 'online_seller' | 'individual' | 'other';
  storeName?: string;
  city: string;
  district?: string;
  intendedQuantity: string;
  interestType: 'sample_pack' | 'wholesale_quote' | 'direct_order';
  notes?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location?: string;
  avatar: string;
  stars: number;
  content: string;
  verified: boolean;
  date: string;
  category?: 'all' | 'odor' | 'dust' | 'clump' | 'distributor';
  likes?: number;
}
