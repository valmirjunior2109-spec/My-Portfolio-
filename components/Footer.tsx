import { WA_URL, EMAIL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span className="font-medium text-gray-300">Valmir · 2026</span>

        <div className="flex items-center gap-6">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="hover:text-green-400 transition-colors"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
