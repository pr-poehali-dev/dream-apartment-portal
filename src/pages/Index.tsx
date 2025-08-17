import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-elegant-black">ЕМФЦ</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gold transition-colors">Главная</a>
              <a href="#prizes" className="text-gray-600 hover:text-gold transition-colors">Призы</a>
              <a href="#participate" className="text-gray-600 hover:text-gold transition-colors">Участие</a>
            </div>
            <Button className="bg-gold hover:bg-gold-dark text-white">
              Участвовать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-white to-elegant-gray overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-elegant-black mb-6 leading-tight">
                Выиграй<br />
                <span className="bg-gradient-to-r from-gold to-gold-dark bg-clip-text text-transparent">
                  квартиру мечты
                </span><br />
                с ЕМФЦ
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Участвуй в премиальном конкурсе и получи шанс выиграть роскошную квартиру 
                в престижном районе. Простая регистрация, честный розыгрыш. В розыгрыше участвуют обладатели абонентских карт Премиум.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon name="Trophy" className="mr-2" size={20} />
                  Участвовать в конкурсе
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-gold text-gold hover:bg-gold hover:text-white text-lg px-8 py-6 rounded-lg transition-all duration-300"
                >
                  <Icon name="Info" className="mr-2" size={20} />
                  Подробнее о призах
                </Button>
              </div>
            </div>

            {/* Right Animation */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Gift Box Base */}
              <div className="relative">
                {/* Box Bottom */}
                <div className="w-64 h-32 bg-gradient-to-br from-gold-dark to-gold rounded-lg shadow-2xl relative">
                  {/* Box Pattern */}
                  <div className="absolute inset-2 border-2 border-gold-light rounded opacity-50"></div>
                  <div className="absolute inset-4 border border-white/30 rounded opacity-30"></div>
                </div>

                {/* Box Lid - with opening animation */}
                <div className="absolute -top-4 left-0 w-64 h-8 bg-gradient-to-br from-gold to-gold-light rounded-lg shadow-lg transform-gpu animate-gift-open origin-bottom">
                  {/* Ribbon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-full bg-gradient-to-b from-gold-light to-gold"></div>
                </div>

                {/* Apartment Building emerging from box */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 animate-bounce-up" style={{animationDelay: '1s'}}>
                  <div className="relative animate-float" style={{animationDelay: '2s'}}>
                    {/* Building Image */}
                    <img 
                      src="/img/a70335d7-f147-43b7-be29-488a218ff6b8.jpg" 
                      alt="Квартира из коробки"
                      className="w-48 h-48 object-contain drop-shadow-2xl"
                    />
                    
                    {/* Sparkle Effects */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gold rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gold-light rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-1/2 -right-4 w-2 h-2 bg-gold rounded-full animate-pulse"></div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-0 left-1/4 w-1 h-1 bg-gold rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-gold-light rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
                    <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gold rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>

                {/* Prize Text Overlay */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-bounce-up" style={{animationDelay: '1.5s'}}>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gold/20">
                    <span className="text-gold font-bold text-sm">до 25 млн ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-elegant-black mb-6">Призы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Роскошные квартиры в лучших локациях города ждут своих счастливых обладателей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Main Prize */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 border-gold/20">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gradient-to-r from-gold to-gold-dark text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Главный приз
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/31b8c30a-3603-49c1-bec1-0d416c351a7b.jpg" 
                  alt="Роскошная квартира"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-elegant-black mb-4">
                  Пентхаус 180 м²
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={18} className="mr-3 text-gold" />
                    <span>Центральный район, панорамный вид</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Home" size={18} className="mr-3 text-gold" />
                    <span>4 комнаты, дизайнерский ремонт</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Car" size={18} className="mr-3 text-gold" />
                    <span>Паркинг и кладовая включены</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-3xl font-bold text-gold">25 000 000 ₽</span>
                </div>
              </CardContent>
            </Card>

            {/* Second Prize */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-200">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Второй приз
                </span>
              </div>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="/img/ab46991d-4890-486b-a74f-5e41c52850ee.jpg" 
                  alt="Современная квартира"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-elegant-black mb-4">
                  Квартира 120 м²
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Icon name="MapPin" size={18} className="mr-3 text-gold" />
                    <span>Престижный район, тихий центр</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Home" size={18} className="mr-3 text-gold" />
                    <span>3 комнаты, современный интерьер</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={18} className="mr-3 text-gold" />
                    <span>Охраняемая территория</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-3xl font-bold text-elegant-black">15 000 000 ₽</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Prizes */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-elegant-black mb-6">Дополнительные призы</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Car" size={24} className="text-gold" />
                </div>
                <h4 className="font-semibold text-elegant-black">Автомобиль</h4>
                <p className="text-sm text-gray-600">Премиум-класса</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Plane" size={24} className="text-gold" />
                </div>
                <h4 className="font-semibold text-elegant-black">Путешествие</h4>
                <p className="text-sm text-gray-600">На двоих</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Smartphone" size={24} className="text-gold" />
                </div>
                <h4 className="font-semibold text-elegant-black">Техника</h4>
                <p className="text-sm text-gray-600">Последние модели</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Gift" size={24} className="text-gold" />
                </div>
                <h4 className="font-semibold text-elegant-black">Сертификаты</h4>
                <p className="text-sm text-gray-600">До 500 000 ₽</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section id="participate" className="py-20 bg-elegant-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-elegant-black mb-6">Как участвовать</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простые шаги к квартире мечты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-elegant-black mb-4">Заполните форму</h3>
              <p className="text-gray-600">
                Укажите ваши контактные данные в форме регистрации ниже
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-elegant-black mb-4">Подтвердите участие</h3>
              <p className="text-gray-600">
                Получите SMS с подтверждением и номером вашего участника
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-elegant-black mb-4">Ждите розыгрыш</h3>
              <p className="text-gray-600">
                Следите за прямой трансляцией и узнайте результаты первыми
              </p>
            </div>
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-elegant-black mb-2">Регистрация участника</h3>
                  <p className="text-gray-600">Заполните форму и станьте участником конкурса</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-elegant-black font-semibold">Полное имя</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-2 h-12 text-lg"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-elegant-black font-semibold">Номер телефона</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2 h-12 text-lg"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-elegant-black font-semibold">Email адрес</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2 h-12 text-lg"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Icon name="Award" className="mr-2" size={20} />
                    Зарегистрироваться в конкурсе
                  </Button>
                </form>
                
                <div className="text-center mt-6 text-sm text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с условиями конкурса и обработкой персональных данных
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-elegant-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gold">ЕМФЦ</h3>
              <p className="text-gray-300 leading-relaxed">
                Премиальный конкурс квартир с честными условиями и прозрачным розыгрышем
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>info@emfc.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Розыгрыш</h4>
              <div className="text-gray-300">
                <p className="mb-2">Дата: 31 декабря 2024</p>
                <p className="mb-2">Время: 20:00 МСК</p>
                <p>Прямая трансляция</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЕМФЦ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}