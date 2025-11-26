import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <Icon name="Sparkles" size={64} className="text-accent animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            Прикоснитесь к истории космонавтики
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Уникальные автографы легендарных космонавтов и антикварные карты звёздного неба. 
            Каждый предмет сертифицирован и имеет подтверждённую историю происхождения.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать больше
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Icon name="Award" size={40} className="mx-auto mb-3 text-accent" />
              <h3 className="text-xl font-semibold mb-2">100% подлинность</h3>
              <p className="text-muted-foreground">Все предметы с сертификатами</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Icon name="History" size={40} className="mx-auto mb-3 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Проверенная история</h3>
              <p className="text-muted-foreground">Документированное происхождение</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Icon name="Shield" size={40} className="mx-auto mb-3 text-accent" />
              <h3 className="text-xl font-semibold mb-2">Безопасная доставка</h3>
              <p className="text-muted-foreground">Застрахованная транспортировка</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
