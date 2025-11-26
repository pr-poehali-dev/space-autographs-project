import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface Product {
  id: number;
  name: string;
  category: 'autograph' | 'map';
  price: number;
  image: string;
  year?: string;
  astronaut?: string;
  description: string;
  certified: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in">
      <div className="relative overflow-hidden aspect-[3/4] bg-muted">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.certified && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            <Icon name="BadgeCheck" size={14} className="mr-1" />
            Сертифицирован
          </Badge>
        )}
        {product.category === 'autograph' && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Автограф
          </Badge>
        )}
        {product.category === 'map' && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Карта
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{product.name}</h3>
        
        {product.astronaut && (
          <p className="text-sm text-muted-foreground mb-2">
            <Icon name="User" size={14} className="inline mr-1" />
            {product.astronaut}
          </p>
        )}
        
        {product.year && (
          <p className="text-sm text-muted-foreground mb-2">
            <Icon name="Calendar" size={14} className="inline mr-1" />
            {product.year}
          </p>
        )}
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <p className="text-2xl font-bold text-accent">
          {product.price.toLocaleString('ru-RU')} ₽
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-2">
        <Button 
          className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => onAddToCart(product)}
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          В корзину
        </Button>
        <Button 
          variant="outline" 
          onClick={() => onViewDetails(product)}
        >
          <Icon name="Eye" size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
}
