import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ЮТЛ
            </h1>
            <div className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-primary transition-colors font-semibold"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-primary transition-colors font-semibold"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-gray-600 hover:text-primary transition-colors font-semibold"
              >
                Контакты
              </button>
            </div>
            <Button
              onClick={() => scrollToSection("contacts")}
              className="bg-primary hover:bg-primary/90"
            >
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              ЮТЛ
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Транспортная компания
            </p>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ваш надежный партнер в сфере грузоперевозок по всей России и странам СНГ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              >
                <Icon name="Truck" className="mr-2" size={24} />
                Наши услуги
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacts")}
                className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                <Icon name="Phone" className="mr-2" size={24} />
                Заказать звонок
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-slide-up">
            <img
              src="https://cdn.poehali.dev/projects/85a91597-aaf9-42be-b1f7-9041294b0a5e/files/97c1c476-72db-4432-922f-693a66ea967e.jpg"
              alt="Транспортная компания ЮТЛ"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр транспортных и логистических решений для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Truck",
                title: "Грузоперевозки",
                description: "Перевозка грузов любой сложности по России и СНГ с гарантией сохранности",
                color: "from-primary/10 to-primary/5",
              },
              {
                icon: "Package",
                title: "Складская логистика",
                description: "Современные складские комплексы для хранения и обработки ваших товаров",
                color: "from-secondary/10 to-secondary/5",
              },
              {
                icon: "Globe",
                title: "Международные перевозки",
                description: "Доставка грузов в любую точку мира с таможенным оформлением",
                color: "from-accent/10 to-accent/5",
              },
              {
                icon: "Clock",
                title: "Срочная доставка",
                description: "Экспресс-доставка грузов в кратчайшие сроки 24/7",
                color: "from-primary/10 to-primary/5",
              },
              {
                icon: "Shield",
                title: "Страхование грузов",
                description: "Полное страхование груза на всех этапах транспортировки",
                color: "from-secondary/10 to-secondary/5",
              },
              {
                icon: "Route",
                title: "Логистические решения",
                description: "Оптимизация маршрутов и комплексные логистические проекты",
                color: "from-accent/10 to-accent/5",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className={`p-8 bg-gradient-to-br ${service.color}`}>
                  <div className="mb-4 inline-block p-4 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name={service.icon as any}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 text-gray-800">О компании</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                ЮТЛ — современная транспортная компания с многолетним опытом работы
                в сфере логистики и грузоперевозок. Мы объединяем надежность,
                инновационные технологии и профессиональный подход.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: "Award",
                    title: "15+ лет опыта",
                    description: "На рынке транспортных услуг",
                  },
                  {
                    icon: "Users",
                    title: "500+ клиентов",
                    description: "Доверяют нам свои грузы",
                  },
                  {
                    icon: "MapPin",
                    title: "50+ городов",
                    description: "География наших перевозок",
                  },
                  {
                    icon: "TrendingUp",
                    title: "99.8% точность",
                    description: "Доставки в срок",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        name={stat.icon as any}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">
                        {stat.title}
                      </h3>
                      <p className="text-gray-600">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/85a91597-aaf9-42be-b1f7-9041294b0a5e/files/7f149b06-4974-4d7b-b5aa-f0aaa5367420.jpg"
                alt="О компании ЮТЛ"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-bold mb-4 text-gray-800">Контакты</h2>
              <p className="text-xl text-gray-600">
                Свяжитесь с нами удобным для вас способом
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8 animate-slide-up">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
                    <Icon name="Phone" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Телефон</h3>
                    <p className="text-gray-600 text-lg">+7 (800) 123-45-67</p>
                    <p className="text-gray-600">Круглосуточно, без выходных</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
                    <Icon name="Mail" size={28} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg">info@utl-logistics.ru</p>
                    <p className="text-gray-600">Ответим в течение часа</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
                    <Icon name="MapPin" size={28} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Адрес</h3>
                    <p className="text-gray-600 text-lg">
                      г. Москва, ул. Транспортная, д. 15
                    </p>
                    <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
                <div className="pt-4">
                  <img
                    src="https://cdn.poehali.dev/projects/85a91597-aaf9-42be-b1f7-9041294b0a5e/files/243d98cf-0baf-4a33-a27f-5a4e853af030.jpg"
                    alt="Склад ЮТЛ"
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
              <Card className="border-0 shadow-xl animate-scale-in">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">
                    Оставьте заявку
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <Input
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="ivan@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Телефон
                      </label>
                      <Input
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Сообщение
                      </label>
                      <Textarea
                        placeholder="Расскажите о вашем грузе и требованиях..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={4}
                        className="border-gray-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                    >
                      <Icon name="Send" className="mr-2" size={20} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ЮТЛ
              </h3>
              <p className="text-gray-400">
                Надежные транспортные решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Услуги
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  О компании
                </button>
                <button
                  onClick={() => scrollToSection("contacts")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 123-45-67</p>
                <p>info@utl-logistics.ru</p>
                <p>г. Москва, ул. Транспортная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ЮТЛ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
