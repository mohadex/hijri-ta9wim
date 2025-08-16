import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "خطأ في الإرسال",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "تم إرسال الرسالة بنجاح! 📧",
      description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن",
      className: "bg-islamic-green text-white border-islamic-green",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-arabic bg-gradient-to-r from-islamic-green via-islamic-blue to-islamic-gold bg-clip-text text-transparent">
              اتصل بنا
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار أو اقتراح
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-islamic-blue/20">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic text-islamic-green flex items-center gap-3">
                    <MessageSquare className="h-6 w-6" />
                    معلومات التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">البريد الإلكتروني</h4>
                      <a 
                        href="mailto:info@hijricalendar.com" 
                        className="text-muted-foreground hover:text-islamic-blue transition-colors"
                      >
                        info@hijricalendar.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">الهاتف</h4>
                      <p className="text-muted-foreground">+966 50 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">العنوان</h4>
                      <p className="text-muted-foreground">
                        المملكة العربية السعودية<br />
                        الرياض، حي الملك فهد
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-islamic-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">ساعات العمل</h4>
                      <p className="text-muted-foreground">
                        الأحد - الخميس: 9:00 ص - 6:00 م<br />
                        الجمعة - السبت: مغلق
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-islamic-gold/20 bg-islamic-gold/5">
                <CardHeader>
                  <CardTitle className="text-lg font-arabic text-islamic-gold">
                    الأسئلة الشائعة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2">كيف يتم حساب التاريخ الهجري؟</h5>
                      <p className="text-muted-foreground">
                        نستخدم خوارزميات فلكية دقيقة تعتمد على دورة القمر لحساب التواريخ الهجرية.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">هل البيانات دقيقة؟</h5>
                      <p className="text-muted-foreground">
                        نعم، نستخدم مصادر موثقة ونحدث البيانات بانتظام لضمان الدقة.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-islamic-green/20">
                <CardHeader>
                  <CardTitle className="text-2xl font-arabic text-islamic-green">
                    أرسل لنا رسالة
                  </CardTitle>
                  <p className="text-muted-foreground">
                    املأ النموذج أدناه وسنتواصل معك في أقرب وقت ممكن
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-right font-arabic">
                          الاسم الكامل *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="اكتب اسمك الكامل"
                          className="text-right"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-right font-arabic">
                          البريد الإلكتروني *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="example@email.com"
                          className="text-right"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-right font-arabic">
                        موضوع الرسالة
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="اكتب موضوع رسالتك"
                        className="text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-right font-arabic">
                        نص الرسالة *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="اكتب رسالتك هنا..."
                        className="text-right min-h-[120px]"
                        required
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-islamic-green hover:bg-islamic-green/90 text-white font-arabic text-lg px-8 py-3"
                      >
                        إرسال الرسالة 📧
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Support Information */}
              <Card className="mt-6 border-islamic-blue/20">
                <CardHeader>
                  <CardTitle className="text-xl font-arabic text-islamic-blue">
                    طرق أخرى للحصول على المساعدة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-4 border border-islamic-gold/20 rounded-lg">
                      <h4 className="font-semibold mb-2 text-islamic-gold">المساعدة السريعة</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        للاستفسارات البسيطة حول استخدام الموقع
                      </p>
                      <Button variant="outline" className="border-islamic-gold text-islamic-gold hover:bg-islamic-gold/10">
                        دليل الاستخدام
                      </Button>
                    </div>
                    <div className="text-center p-4 border border-islamic-green/20 rounded-lg">
                      <h4 className="font-semibold mb-2 text-islamic-green">تقرير خطأ</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        إذا واجهت مشكلة تقنية في الموقع
                      </p>
                      <Button variant="outline" className="border-islamic-green text-islamic-green hover:bg-islamic-green/10">
                        الإبلاغ عن خطأ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;