import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer id="contacts" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Sparkles" size={28} className="text-accent" />
              <h3 className="text-lg font-bold">Космические Раритеты</h3>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Уникальные предметы космической истории с подтверждённой подлинностью
            </p>
          </div>

          <div id="delivery">
            <h4 className="font-semibold mb-4">Доставка</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-accent mt-1" />
                <span>По всей России</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-accent mt-1" />
                <span>Застрахованная доставка</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-accent mt-1" />
                <span>Трекинг посылки</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={16} className="text-accent mt-1" />
                <span>Бесплатно от 100 000 ₽</span>
              </li>
            </ul>
          </div>

          <div id="collections">
            <h4 className="font-semibold mb-4">Коллекции</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Автографы космонавтов СССР</li>
              <li>Автографы астронавтов NASA</li>
              <li>Карты звёздного неба XIX века</li>
              <li>Атласы созвездий</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-accent" />
                <a href="mailto:info@space-rarities.ru" className="hover:text-accent transition-colors">
                  info@space-rarities.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-accent" />
                <a href="tel:+74951234567" className="hover:text-accent transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span>Москва, ул. Космонавтов, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© 2024 Космические Раритеты. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
