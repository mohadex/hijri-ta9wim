import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Logo and Description */}
          <div className="text-center md:text-start">
            <h3 className="text-xl font-bold font-arabic mb-2 bg-gradient-to-r from-islamic-green to-islamic-blue bg-clip-text text-transparent">
              التقويم الهجري
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              موقع شامل لعرض التاريخ الهجري والميلادي مع أدوات التحويل والتقويم الشهري
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4 font-arabic">روابط سريعة</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                الرئيسية
              </a>
              <a href="#converter" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                تحويل التاريخ
              </a>
              <a href="#calendar" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                التقويم الشهري
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-end">
            <h4 className="font-semibold mb-4 font-arabic">معلومات قانونية</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                سياسة الخصوصية
              </a>
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                من نحن
              </a>
              <a href="/contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                اتصل بنا
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>تم تطوير الموقع بـ</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>• جميع الحقوق محفوظة {new Date().getFullYear()}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            ملاحظة: هذا الموقع للأغراض التعليمية والتوضيحية. للحصول على تواريخ دقيقة، يرجى مراجعة المصادر الرسمية.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;