"use client";

import { useState } from "react";

const TAGS = ["Next.js", "Tailwind", "Stripe", "Supabase"];

export default function Cases() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-3">
          Cases
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Trabalhos recentes
        </h2>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="w-full h-48 sm:h-56 flex items-center justify-center bg-white border-b border-gray-100 px-12">
            {imgFailed ? (
              <span className="text-gray-400 text-sm">Logo não encontrada</span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/droxly-logo.png"
                alt="Logo da Droxly"
                width={260}
                height={90}
                className="object-contain"
                onError={() => setImgFailed(true)}
              />
            )}
          </div>

          <div className="p-8 sm:p-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Droxly — SaaS pra afiliados de tráfego pago
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              Landing page completa pra ferramenta de cálculo de lucro real.
              Design responsivo, copy direta e integração com Stripe pra trial
              gratuito.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="https://droxly.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-green-700 hover:text-green-900 transition-colors"
            >
              Ver ao vivo
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
