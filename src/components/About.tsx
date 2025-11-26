import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О нас</h2>
            <p className="text-xl text-muted-foreground">
              Эксперты в области космических раритетов с 2010 года
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-scale-in">
              <CardContent className="p-8">
                <Icon name="Rocket" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Сохранить и передать будущим поколениям уникальные артефакты космической эры. 
                  Мы тщательно отбираем каждый предмет, проверяя его подлинность и историю.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <Icon name="Award" size={48} className="text-accent mb-4" />
                <h3 className="text-2xl font-semibold mb-3">Гарантии</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Каждый автограф и карта проходят независимую экспертизу. 
                  Мы предоставляем сертификаты подлинности и полную документацию происхождения.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary text-primary-foreground animate-fade-in">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Info" size={32} className="text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-3">Почему мы?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                      <span>Работаем напрямую с космическими агентствами и частными коллекциями</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                      <span>Все предметы застрахованы и имеют документированную историю</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                      <span>Консультации экспертов и помощь в оформлении коллекций</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={18} className="text-accent mt-1 flex-shrink-0" />
                      <span>Конфиденциальность и безопасность всех сделок</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
