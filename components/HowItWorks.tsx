const steps = [
  {
    number: "01",
    title: "Conversa inicial",
    description: "Entendo seu negócio e objetivo",
  },
  {
    number: "02",
    title: "Desenvolvimento",
    description: "Crio a landing em até 7 dias",
  },
  {
    number: "03",
    title: "Entrega",
    description: "Site no ar, pronto pra receber tráfego",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-green-700 uppercase mb-3">
          Processo
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Como funciona
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex sm:flex-col gap-5 sm:gap-4 pb-10 sm:pb-0 sm:pr-8">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <>
                  {/* vertical line (mobile) */}
                  <div className="absolute left-[22px] top-12 bottom-0 w-px bg-green-100 sm:hidden" />
                  {/* horizontal line (desktop) */}
                  <div className="hidden sm:block absolute top-[22px] left-12 right-0 h-px bg-green-100" />
                </>
              )}

              <div className="relative shrink-0 w-11 h-11 rounded-full bg-green-700 text-white flex items-center justify-center text-sm font-bold z-10">
                {step.number}
              </div>

              <div className="pt-1 sm:pt-0">
                <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
