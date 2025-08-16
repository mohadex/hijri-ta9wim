import Header from "@/components/Header";
import TodayDate from "@/components/TodayDate";
import DateConverter from "@/components/DateConverter";
import MonthlyCalendar from "@/components/MonthlyCalendar";
import IslamicGame from "@/components/IslamicGame";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-islamic-green/5 via-background to-islamic-blue/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-arabic bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              التقويم الهجري
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              موقع شامل لعرض التاريخ الهجري والميلادي مع أدوات التحويل والتقويم الشهري
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#converter"
                className="inline-flex items-center justify-center px-8 py-3 bg-islamic-green text-white rounded-lg hover:bg-islamic-green/90 transition-colors font-medium"
              >
                تحويل التاريخ
              </a>
              <a 
                href="#calendar"
                className="inline-flex items-center justify-center px-8 py-3 border border-islamic-blue text-islamic-blue rounded-lg hover:bg-islamic-blue/10 transition-colors font-medium"
              >
                عرض التقويم
              </a>
            </div>
          </div>
        </section>

        {/* Today's Date */}
        <TodayDate />

        {/* Monthly Calendar */}
        <MonthlyCalendar />

        {/* Date Converter */}
        <DateConverter />

        {/* Islamic Game */}
        <IslamicGame />

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 font-arabic">اتصل بنا</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              لديك استفسار أو اقتراح؟ نحن هنا لمساعدتك في جميع ما يتعلق بالتقويم الهجري
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@hijricalendar.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-islamic-gold text-foreground rounded-lg hover:bg-islamic-gold/90 transition-colors font-medium"
              >
                راسلنا عبر البريد الإلكتروني
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
