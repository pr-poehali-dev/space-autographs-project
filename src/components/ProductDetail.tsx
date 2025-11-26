import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { Product } from './ProductCard';

interface ProductDetailProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetail({ product, open, onClose, onAddToCart }: ProductDetailProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{product.name}</DialogTitle>
          <DialogDescription>
            {product.category === 'autograph' ? 'Автограф космонавта' : 'Антикварная карта'}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-3xl font-bold text-accent mb-4">
                {product.price.toLocaleString('ru-RU')} ₽
              </p>
              
              <div className="flex gap-2 mb-4">
                {product.certified && (
                  <Badge className="bg-accent text-accent-foreground">
                    <Icon name="BadgeCheck" size={14} className="mr-1" />
                    Сертифицирован
                  </Badge>
                )}
                <Badge variant="outline">
                  {product.category === 'autograph' ? 'Автограф' : 'Карта'}
                </Badge>
              </div>

              {product.astronaut && (
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="User" size={18} className="text-muted-foreground" />
                  <span className="font-medium">{product.astronaut}</span>
                </div>
              )}

              {product.year && (
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Calendar" size={18} className="text-muted-foreground" />
                  <span>{product.year}</span>
                </div>
              )}
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-3">Описание</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-accent" />
                Подлинность
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-1" />
                  <p>Сертификат подлинности от независимой экспертизы</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-1" />
                  <p>Документированная история происхождения</p>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-accent mt-1" />
                  <p>Проверка подлинности автографа экспертами</p>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <Icon name="Package" size={20} className="text-accent" />
                Доставка
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Застрахованная доставка с трекингом по всей России
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Добавить в корзину
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
