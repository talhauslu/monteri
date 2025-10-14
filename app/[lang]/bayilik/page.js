"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import emailjs from "emailjs-com";

export default function Bayilik() {
  const t = useTranslations("bayilikler");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_caqysyj",   // senin EmailJS service ID
        "template_owvpndb",  // senin EmailJS template ID
        form.current,
        "_M4xsORGfCzGjVNAd"  // senin EmailJS public key’in
      )
      .then(
        () => {
          alert("✅ Başarıyla gönderildi!");
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("❌ Gönderim sırasında bir hata oluştu, lütfen tekrar dene.");
        }
      );
  };

  return (
    <div className="w-full flex flex-col items-center gap-8 p-8 md:p-16 bg-white">
      <div className="text-center">
        <h1 className="text-3xl text-logo font-bold">{t("title")}</h1>
        <p className="mt-4 max-w-2xl text-logolight-900">{t("subtitle")}</p>
      </div>

      <div className="w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg">
        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Adınız */}
          <div className="mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="firstName">
              {t("form.name")}
            </label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              required
              placeholder={t("form.name")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Soyadınız */}
          <div className="mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="lastName">
              {t("form.lastname")}
            </label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              required
              placeholder={t("form.lastname")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="email">
              {t("form.email")}
            </label>
            <input
              name="email"
              id="email"
              type="email"
              required
              placeholder={t("form.email")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Telefon */}
          <div className="mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="phone">
              {t("form.phone")}
            </label>
            <input
              name="phone"
              id="phone"
              type="tel"
              placeholder={t("form.phone")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Ünvan */}
          <div className="mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="title">
              {t("form.unvan")}
            </label>
            <input
              name="title"
              id="title"
              type="text"
              placeholder={t("form.unvan")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Metrekare */}
          <div className="mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="sqm">
              {t("form.m2")}
            </label>
            <input
              name="sqm"
              id="sqm"
              type="number"
              placeholder={t("form.m2")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Adres */}
          <div className="md:col-span-2 mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="address">
              {t("form.address")}
            </label>
            <input
              name="address"
              id="address"
              type="text"
              placeholder={t("form.address")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Mesaj */}
          <div className="md:col-span-2 mb-4">
            <label className="block text-logolight-700 text-sm font-bold mb-2" htmlFor="message">
              {t("form.message")}
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder={t("form.message")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-logolight-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          {/* Gönder Butonu */}
          <div className="md:col-span-2 flex items-center justify-end">
            <button
              type="submit"
              className="bg-logolight-900 hover:bg-logolight-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t("form.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
