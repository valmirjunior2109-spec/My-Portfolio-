const services = [
  {
    icon: <DesignIcon />,
    title: "Design moderno",
    description: "Layout limpo e profissional, adaptado pro seu nicho",
  },
  {
    icon: <MobileIcon />,
    title: "Mobile-first",
    description: "Funciona perfeitamente em qualquer celular",
  },
  {
    icon: <CopyIcon />,
    title: "Copy persuasiva",
    description: "Texto pensado pra converter visitante em cliente",
  },
  {
    icon: <DeployIcon />,
    title: "Deploy + domínio",
    description: "Cuido de tudo: hospedagem, SSL e configuração final",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-3">
          Incluso
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          O que está incluso
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex gap-5 p-7 rounded-2xl border border-gray-100 bg-gray-50 hover:border-green-100 hover:bg-green-50/40 transition-colors duration-200"
            >
              <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-green-100 text-green-700">
                {s.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function DeployIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}
