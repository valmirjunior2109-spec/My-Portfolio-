import { WA_URL } from "@/lib/constants";

export default function CtaFinal() {
  return (
    <section className="bg-green-700 py-24 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Pronto pra ter uma landing que vende?
        </h2>
        <p className="text-green-100 text-lg mb-10">
          Orçamento sem compromisso. Resposta em até 24h.
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-green-800 font-bold text-lg px-8 py-4 rounded-2xl hover:bg-green-50 transition-colors duration-200 shadow-xl shadow-green-900/20"
        >
          <WhatsAppIcon />
          Falar no WhatsApp →
        </a>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.114.554 4.1 1.524 5.824L.058 23.267a.5.5 0 0 0 .613.637l5.598-1.467A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.938a9.938 9.938 0 0 1-5.072-1.388l-.364-.216-3.764.987.988-3.67-.237-.38A9.938 9.938 0 0 1 2.063 12C2.063 6.51 6.51 2.063 12 2.063S21.938 6.51 21.938 12 17.49 21.938 12 21.938z" />
    </svg>
  );
}
