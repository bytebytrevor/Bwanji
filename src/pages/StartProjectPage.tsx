import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

export default function StartProjectPage() {
  return (
    <div className="bg-[#ffffff] min-h-[calc(100vh-400px)] flex flex-col items-center justify-center py-32 px-5 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] text-[#000000] mb-6">Start a project</h1>
        <p className="text-lg text-[#4A4A47] mb-12 leading-relaxed">
          Watch this space for our briefing form! In the meantime, message us on WhatsApp or email info@bwanji.co.zm.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/260763628686"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-medium hover:bg-[#20bd5a] transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp us
          </a>
          <a
            href="mailto:info@bwanji.co.zm"
            className="flex items-center gap-3 border-2 border-[#000000] text-[#000000] px-8 py-4 font-medium hover:bg-[#000000]/5 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Email us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
