import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeftRight, Loader2 } from "lucide-react";
import moment from "moment-hijri";

const DateConverter = () => {
  const [gregorianDate, setGregorianDate] = useState("");
  const [hijriDate, setHijriDate] = useState("");
  const [convertedResult, setConvertedResult] = useState("");
  const [conversionType, setConversionType] = useState("gToH");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const convertDate = () => {
    if (!gregorianDate && !hijriDate) {
      setError("يرجى إدخال تاريخ للتحويل");
      return;
    }

    setIsLoading(true);
    setError("");
    
    try {
      if (conversionType === "gToH" && gregorianDate) {
        // Convert Gregorian to Hijri
        const hijriMoment = moment(gregorianDate);
        const result = hijriMoment.format('iD iMMMM iYYYY') + " هـ";
        setConvertedResult(result);
      } else if (conversionType === "hToG" && hijriDate) {
        // Convert Hijri to Gregorian
        const parts = hijriDate.split('-');
        if (parts.length === 3) {
          const gregorianMoment = moment(`${parts[0]}-${parts[1]}-${parts[2]}`, 'iYYYY-iMM-iDD');
          const result = gregorianMoment.format('D MMMM YYYY') + " م";
          setConvertedResult(result);
        } else {
          setError("صيغة التاريخ الهجري غير صحيحة (استخدم: YYYY-MM-DD)");
        }
      }
    } catch (err) {
      setError("حدث خطأ أثناء تحويل التاريخ");
    } finally {
      setIsLoading(false);
    }
  };

  const swapConversionType = () => {
    setConversionType(conversionType === "gToH" ? "hToG" : "gToH");
    setGregorianDate("");
    setHijriDate("");
    setConvertedResult("");
    setError("");
  };

  return (
    <section id="converter" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-arabic">محول التاريخ</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            تحويل سهل ودقيق بين التاريخ الهجري والميلادي
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-islamic-green/20">
            <CardHeader className="text-center">
              <CardTitle className="font-arabic text-2xl">أداة تحويل التاريخ</CardTitle>
              <CardDescription>
                اختر نوع التحويل وأدخل التاريخ للحصول على النتيجة
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Conversion Type Selector */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={conversionType === "gToH" ? "default" : "outline"}
                  onClick={() => setConversionType("gToH")}
                  className="min-w-32"
                >
                  ميلادي إلى هجري
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={swapConversionType}
                  className="hover:bg-islamic-green/10"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
                <Button
                  variant={conversionType === "hToG" ? "default" : "outline"}
                  onClick={() => setConversionType("hToG")}
                  className="min-w-32"
                >
                  هجري إلى ميلادي
                </Button>
              </div>

              {/* Input Section */}
              <div className="grid md:grid-cols-2 gap-6">
                {conversionType === "gToH" ? (
                  <div className="space-y-2">
                    <Label htmlFor="gregorian-input" className="font-arabic">التاريخ الميلادي</Label>
                    <Input
                      id="gregorian-input"
                      type="date"
                      value={gregorianDate}
                      onChange={(e) => setGregorianDate(e.target.value)}
                      className="text-right"
                    />
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="hijri-input" className="font-arabic">التاريخ الهجري</Label>
                    <Input
                      id="hijri-input"
                      type="text"
                      placeholder="YYYY-MM-DD (مثال: 1445-01-15)"
                      value={hijriDate}
                      onChange={(e) => setHijriDate(e.target.value)}
                      className="text-right"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label className="font-arabic">النتيجة</Label>
                  <div className="p-3 bg-muted/50 rounded-md min-h-[40px] flex items-center justify-center text-center">
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>جاري التحويل...</span>
                      </div>
                    ) : convertedResult ? (
                      <span className="font-arabic text-lg">{convertedResult}</span>
                    ) : (
                      <span className="text-muted-foreground">النتيجة ستظهر هنا</span>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <div className="text-center text-destructive text-sm bg-destructive/10 p-3 rounded-md">
                  {error}
                </div>
              )}

              {/* Convert Button */}
              <div className="text-center">
                <Button
                  onClick={convertDate}
                  disabled={isLoading || (!gregorianDate && !hijriDate)}
                  className="px-8 py-3 bg-islamic-green hover:bg-islamic-green/90"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      جاري التحويل...
                    </>
                  ) : (
                    "تحويل التاريخ"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DateConverter;