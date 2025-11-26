import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ProductDetail from '@/components/ProductDetail';
import Cart from '@/components/Cart';
import { Product } from '@/components/ProductCard';

interface CartItem extends Product {
  quantity: number;
}

export default function Index() {
  const [cartOpen, setCartOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: 'Автограф Юрия Гагарина',
      category: 'autograph',
      price: 2500000,
      image: 'https://cdn.poehali.dev/projects/2a65e1cb-a466-4304-bd18-69873427fc20/files/118e1910-1c17-4357-97c2-02814748774d.jpg',
      year: '1961',
      astronaut: 'Юрий Гагарин',
      description: 'Уникальный автограф первого человека в космосе на официальном бланке. Редчайший экземпляр с полной документацией происхождения.',
      certified: true
    },
    {
      id: 3,
      name: 'Автограф экипажа Аполлон-11',
      category: 'autograph',
      price: 3800000,
      image: 'https://cdn.poehali.dev/projects/2a65e1cb-a466-4304-bd18-69873427fc20/files/14a97481-80c5-435a-93dc-567333fac268.jpg',
      year: '1969',
      astronaut: 'Нил Армстронг, Базз Олдрин, Майкл Коллинз',
      description: 'Автографы всех членов легендарной миссии Аполлон-11 на фотографии лунной миссии. Полный комплект сертификатов.',
      certified: true
    },
    {
      id: 4,
      name: 'Автограф Валентины Терешковой',
      category: 'autograph',
      price: 1200000,
      image: 'https://cdn.poehali.dev/projects/2a65e1cb-a466-4304-bd18-69873427fc20/files/118e1910-1c17-4357-97c2-02814748774d.jpg',
      year: '1963',
      astronaut: 'Валентина Терешкова',
      description: 'Автограф первой женщины-космонавта на памятной открытке полёта Восток-6.',
      certified: true
    },
    {
      id: 6,
      name: 'Автограф Алексея Леонова',
      category: 'autograph',
      price: 950000,
      image: 'https://cdn.poehali.dev/projects/2a65e1cb-a466-4304-bd18-69873427fc20/files/14a97481-80c5-435a-93dc-567333fac268.jpg',
      year: '1965',
      astronaut: 'Алексей Леонов',
      description: 'Автограф первого человека, совершившего выход в открытый космос. На фотографии исторического момента.',
      certified: true
    }
  ];

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setDetailOpen(true);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <Hero />
      <Catalog
        products={products}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />
      <About />
      <Footer />
      
      <ProductDetail
        product={selectedProduct}
        open={detailOpen}
        onClose={() => setDetailOpen(false)}
        onAddToCart={handleAddToCart}
      />
      
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
      />
    </div>
  );
}