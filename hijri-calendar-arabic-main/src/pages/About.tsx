import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              من نحن
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              موقع متخصص في التقويم الهجري والتحويل بين التواريخ الهجرية والميلادية
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green flex items-center gap-3">
                  <Target className="h-8 w-8" />
                  رؤيتنا
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed">
                <p>
                  نسعى لأن نكون المرجع الأول والأكثر دقة للتقويم الهجري على الإنترنت، 
                  حيث نقدم خدمات شاملة ودقيقة للمسلمين حول العالم لمساعدتهم في معرفة التواريخ 
                  الهجرية والمناسبات الدينية المهمة.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green flex items-center gap-3">
                  <Heart className="h-8 w-8" />
                  رسالتنا
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed">
                <p>
                  تقديم أدوات عملية ودقيقة للتحويل بين التقويم الهجري والميلادي، 
                  مع واجهة سهلة الاستخدام باللغة العربية، وإثراء المحتوى بمعلومات 
                  تعليمية عن التراث الإسلامي والمناسبات الدينية.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-islamic-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic text-islamic-gold flex items-center gap-3">
                    <Calendar className="h-6 w-6" />
                    خدماتنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>عرض التاريخ الهجري والميلادي الحالي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>تحويل التواريخ بين النظامين</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>التقويم الشهري التفاعلي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-green rounded-full mt-2 flex-shrink-0"></span>
                      <span>لعبة تعليمية عن الثقافة الإسلامية</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-islamic-gold/20">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic text-islamic-gold flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    قيمنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>الدقة والموثوقية في المعلومات</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>سهولة الاستخدام والوصول</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>احترام التراث الإسلامي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-islamic-blue rounded-full mt-2 flex-shrink-0"></span>
                      <span>التحديث المستمر والتطوير</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-islamic-green/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  التقويم الهجري - أهميته وتاريخه
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  التقويم الهجري هو التقويم الإسلامي الذي يعتمد على دورة القمر، ويبدأ من 
                  هجرة الرسول محمد صلى الله عليه وسلم من مكة إلى المدينة في عام 622 ميلادية.
                </p>
                <p>
                  يتكون التقويم الهجري من 12 شهراً قمرياً، وتبلغ السنة الهجرية حوالي 354 يوماً، 
                  مما يجعلها أقصر من السنة الميلادية بحوالي 11 يوماً.
                </p>
                <p>
                  هذا التقويم له أهمية كبيرة في الحياة الإسلامية، حيث يحدد مواعيد الصيام 
                  والحج والأعياد الدينية، ولذلك نحن نسعى لتقديم أدوات دقيقة لحسابه ومتابعته.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  فريق العمل
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg leading-relaxed">
                <p>
                  نحن فريق من المتخصصين في التكنولوجيا والدراسات الإسلامية، نعمل بشغف 
                  على تطوير أدوات رقمية تخدم المجتمع المسلم وتساعد في الحفاظ على التراث الإسلامي.
                </p>
                <p className="mt-4">
                  نستخدم أحدث التقنيات والخوارزميات لضمان دقة الحسابات الفلكية والتحويلات 
                  بين التقويمين، مع مراعاة الاختلافات الطفيفة في بداية الأشهر حسب المناطق الجغرافية.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-gold/20 bg-islamic-gold/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-arabic text-islamic-gold mb-4">
                    شاركنا رأيك واقتراحاتك
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    نحن نقدر ملاحظاتكم ونسعى للتحسين المستمر لخدماتنا
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-islamic-gold text-foreground rounded-lg hover:bg-islamic-gold/90 transition-colors font-medium"
                    >
                      تواصل معنا
                    </a>
                    <a 
                      href="/"
                      className="inline-flex items-center justify-center px-6 py-3 border border-islamic-blue text-islamic-blue rounded-lg hover:bg-islamic-blue/10 transition-colors font-medium"
                    >
                      العودة للرئيسية
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;