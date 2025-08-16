import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              سياسة الخصوصية
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نحن ملتزمون بحماية خصوصيتك وأمان معلوماتك الشخصية
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  المعلومات التي نجمعها
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  موقع التقويم الهجري يجمع الحد الأدنى من المعلومات اللازمة لتقديم خدماته:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>معلومات التصفح الأساسية (نوع المتصفح، عنوان IP)</li>
                  <li>تفضيلات المستخدم (الموضوع المفضل، إعدادات العرض)</li>
                  <li>بيانات الاستخدام (الصفحات المزارة، مدة الجلسة)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  كيف نستخدم معلوماتك
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>نستخدم المعلومات المجمعة للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>تحسين تجربة المستخدم وجودة الخدمة</li>
                  <li>تخصيص المحتوى وفقاً لتفضيلاتك</li>
                  <li>تحليل الاستخدام لتطوير الموقع</li>
                  <li>ضمان أمان وحماية الموقع</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  حماية البيانات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  نتخذ تدابير أمنية صارمة لحماية معلوماتك:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>تشفير جميع البيانات المنقولة عبر الموقع</li>
                  <li>عدم مشاركة المعلومات مع أطراف ثالثة</li>
                  <li>تحديث دوري لأنظمة الأمان</li>
                  <li>الوصول المحدود للبيانات من قبل الفريق المختص فقط</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  ملفات تعريف الارتباط (Cookies)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع. هذه الملفات تساعدنا في:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>حفظ تفضيلاتك وإعداداتك</li>
                  <li>تذكر اختياراتك في الزيارات المستقبلية</li>
                  <li>تحليل أداء الموقع واستخدامه</li>
                </ul>
                <p className="text-sm text-muted-foreground">
                  يمكنك تعطيل ملفات تعريف الارتباط من إعدادات متصفحك، لكن قد يؤثر ذلك على بعض وظائف الموقع.
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  حقوقك
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>لديك الحق في:</p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>معرفة البيانات التي نحتفظ بها عنك</li>
                  <li>طلب تصحيح أو حذف بياناتك</li>
                  <li>الاعتراض على معالجة بياناتك</li>
                  <li>نقل بياناتك إلى خدمة أخرى</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-islamic-blue/20">
              <CardHeader>
                <CardTitle className="text-2xl font-arabic text-islamic-green">
                  التحديثات
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg leading-relaxed">
                <p>
                  قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم إشعارك بأي تغييرات جوهرية 
                  عبر الموقع أو البريد الإلكتروني إذا كان متوفراً.
                </p>
                <p className="text-sm text-muted-foreground">
                  آخر تحديث: {new Date().toLocaleDateString('ar-SA')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-islamic-gold/20 bg-islamic-gold/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-arabic text-islamic-gold mb-4">
                    هل لديك أسئلة حول سياسة الخصوصية؟
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    لا تتردد في التواصل معنا للحصول على توضيحات إضافية
                  </p>
                  <a 
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-islamic-gold text-foreground rounded-lg hover:bg-islamic-gold/90 transition-colors font-medium"
                  >
                    اتصل بنا
                  </a>
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

export default PrivacyPolicy;