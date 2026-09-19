export interface TariffCardProps {
  imgUrl: string;
  title: string;
  cars: string[];
  features: string[];
  costs: string;
  hasBadge: boolean;
}

export interface ReviewCardProps {
  rating: number;
  text: string;  
  client: string;
}
