import PageContentWrapper from "../layouts/PageContentWrapper";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const email = "petrea@connective.co.nz";
  const phone = "+64 027 757 6000";
  const phoneLink = "+640277576000";

  return (
    <PageContentWrapper>
      <div className="relative max-w-4xl mx-auto text-center pt-12 sm:pt-16 md:pt-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl mb-6 tracking-tight text-[#2C3E50] animate-fade-in-up">
          Get in touch{" "}
        </h1>

        <p className="text-slate-600 sm:text-lg md:text-2xl mb-10 animate-fade-in-up-delayed max-w-2xl mx-auto">
          We're here to help you grow your business. Call or email Petrea to
          book a coffee or a chat with <strong>Penny</strong> or just to get a
          bit more information. Let's start a conversation.
        </p>

        <div className="mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-[#27A65D] to-transparent opacity-60 mb-12" />
      </div>

      <div className="max-w-2xl mx-auto px-4 pb-16 sm:pb-20">
        <div className="grid sm:grid-cols-2 gap-8">
          <a
            href={`mailto:${email}`}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-7 bg-white border border-slate-100 rounded-2xl shadow-[0_14px_35px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="mb-4 p-3 bg-gradient-to-br from-[#27A65D]/10 to-[#27A65D]/5 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-[#27A65D]" />
            </div>

            <h3 className="text-slate-700 mb-2">Email Petrea</h3>

            <p className="text-[#27A65D] sm:text-lg group-hover:underline">
              {email}
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-[#27A65D] to-transparent group-hover:w-3/4 transition-all duration-300" />
          </a>

          <a
            href={`tel:${phoneLink}`}
            className="group relative flex flex-col items-center justify-center p-6 sm:p-7 bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50] border border-white/10 rounded-2xl shadow-[0_14px_35px_rgba(15,23,42,0.12)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-bl from-[#27A65D] via-transparent to-transparent rotate-12" />
            </div>

            <div className="relative mb-4 p-3 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-white" />
            </div>

            <h3 className="relative text-white mb-2">Call Petrea</h3>

            <p className="relative text-[#27A65D] sm:text-lg group-hover:underline">
              {phone}
            </p>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-[#27A65D] to-transparent group-hover:w-3/4 transition-all duration-300" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </PageContentWrapper>
  );
}
