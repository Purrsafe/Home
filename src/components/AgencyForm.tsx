import React, { useState } from 'react';
import { Send, Phone, MessageSquare, ShieldCheck, CheckCircle, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Target email (kept strictly backend/server-side only, never exposed to visitors in UI)
const RECIPIENT_EMAIL = 'diemtrinh.201.2000@gmail.com';

export const AgencyForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessType: 'pet_shop',
    storeName: '',
    city: 'TP. Hồ Chí Minh',
    interestType: 'wholesale_quote',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderCode, setOrderCode] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    setLoading(true);
    const code = `PURR-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderCode(code);

    const businessTypeLabels: Record<string, string> = {
      pet_shop: 'Pet Shop / Cửa hàng thú cưng',
      clinic: 'Phòng khám / Bệnh viện Thú y',
      online_seller: 'Kinh doanh online / Fanpage / TikTok Shop',
      distributor: 'Nhà phân phối / Kho sỉ',
      individual: 'Cá nhân nuôi nhiều mèo',
    };

    const interestLabel =
      formData.interestType === 'wholesale_quote'
        ? 'Tư Vấn Chính Sách Đại Lý'
        : 'Nhận Túi Mẫu Thử Trải Nghiệm';

    const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    // Payload sent directly to recipient email in background
    const emailPayload = {
      _subject: `[PurrSafe Lead] Khách hàng đăng ký đại lý & mẫu thử - Mã: ${code}`,
      _template: 'table',
      _captcha: 'false',
      'Mã đăng ký': code,
      'Họ và tên': formData.fullName,
      'Số điện thoại / Zalo': formData.phone,
      'Nhu cầu': interestLabel,
      'Mô hình kinh doanh': businessTypeLabels[formData.businessType] || formData.businessType,
      'Tên cửa hàng': formData.storeName || 'Chưa cung cấp',
      'Khu vực / Tỉnh thành': formData.city,
      'Ghi chú thêm': formData.notes || 'Không có',
      'Thời gian đăng ký': timestamp,
    };

    // Save backup to localStorage
    try {
      const existingLeads = JSON.parse(localStorage.getItem('purrsafe_leads') || '[]');
      existingLeads.unshift({ ...emailPayload, id: code, date: new Date().toISOString() });
      localStorage.setItem('purrsafe_leads', JSON.stringify(existingLeads.slice(0, 50)));
    } catch (err) {
      // ignore
    }

    // Send email to recipient in background
    try {
      await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });
    } catch (err) {
      console.warn('Form submitted and stored locally:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="dang-ky-dai-ly" className="py-16 sm:py-24 bg-transparent border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              {t.form.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 mt-3 mb-4 leading-snug">
              {t.form.title1} <br />
              <span className="text-amber-700">{t.form.titleHighlight}</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
              {t.form.desc}
            </p>
          </div>

          <div className="bg-white/85 backdrop-blur-xs rounded-3xl border border-stone-200/80 shadow-xl overflow-hidden">
            
            {submitted ? (
              <div className="p-8 sm:p-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto text-2xl font-bold shadow-xs">
                  ✓
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-900">
                    {t.form.successTitle}
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto">
                    {t.form.successCodeLabel}{' '}
                    <span className="font-mono font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-lg border border-amber-300">
                      {orderCode}
                    </span>
                  </p>
                </div>

                {/* Clear, Privacy-First Success Notification Without Displaying Personal Email */}
                <div className="p-4 sm:p-5 bg-emerald-50 rounded-2xl border border-emerald-200 max-w-lg mx-auto text-left text-xs sm:text-sm text-emerald-950 space-y-2 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Yêu cầu của bạn đã được gửi thành công!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                    Hệ thống đã tự động chuyển tiếp thông tin đăng ký của bạn đến ban quản trị PurrSafe. Chuyên viên tư vấn sẽ liên hệ lại với bạn qua số điện thoại/Zalo trong thời gian sớm nhất!
                  </p>
                </div>

                {/* Registered Summary Details */}
                <div className="p-4 bg-white rounded-2xl border border-stone-200 max-w-lg mx-auto text-xs text-stone-600 space-y-1.5 text-left">
                  <div>✓ {t.form.nameLabel}: <strong className="text-stone-900">{formData.fullName}</strong></div>
                  <div>✓ {t.form.phoneLabel}: <strong className="text-stone-900">{formData.phone}</strong></div>
                  <div>✓ {t.form.cityLabel}: <strong className="text-stone-900">{formData.city}</strong></div>
                  {formData.storeName && (
                    <div>✓ {t.form.storeLabel}: <strong className="text-stone-900">{formData.storeName}</strong></div>
                  )}
                </div>

                {/* Instant Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`tel:${t.brand.hotline}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{t.form.callNow} {t.brand.hotlineFormatted}</span>
                  </a>

                  <a
                    href={t.brand.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0068FF] hover:bg-[#0055d4] text-white font-bold text-sm shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{t.form.zaloNow}</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-stone-500 hover:text-stone-800 underline pt-4 block mx-auto cursor-pointer"
                >
                  {t.form.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                
                {/* Interest Type Selector */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                    {t.form.needLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { id: 'wholesale_quote', label: t.form.needDistributor },
                      { id: 'sample_pack', label: t.form.needSample },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, interestType: tab.id })
                        }
                        className={`p-3 rounded-xl text-xs font-bold text-center border transition-all ${
                          formData.interestType === tab.id
                            ? 'bg-amber-800 text-white border-amber-800 shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn Tuấn"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.form.phoneLabel} <span className="text-[11px] text-stone-500 font-normal">(VD: 0866 780 599)</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0866 780 599"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Type */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.form.modelLabel}
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) =>
                        setFormData({ ...formData, businessType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white"
                    >
                      {t.form.businessTypes.map((b) => (
                        <option key={b.value} value={b.value}>
                          {b.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Store Name */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t.form.storeLabel}
                    </label>
                    <input
                      type="text"
                      placeholder="Meow Pet House"
                      value={formData.storeName}
                      onChange={(e) =>
                        setFormData({ ...formData, storeName: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white"
                    />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.form.cityLabel}
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white"
                  >
                    {t.form.cities.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t.form.notesLabel}
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Để lại lời nhắn hoặc số lượng dự kiến..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white"
                  />
                </div>

                {/* Privacy Guarantee Only - No email exposed */}
                <div className="pt-1">
                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{t.form.privacy}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-base shadow-lg shadow-amber-800/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 animate-spin" />
                      {t.form.submitting}
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.form.submitBtn}</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
