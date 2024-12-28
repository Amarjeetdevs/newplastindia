import imgfe from "../assets/WA_ICON.png"
import Image from 'next/image';
const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/YOUR_NUMBER" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
    >
      <Image src={imgfe} alt="Not found"  />
    </a>
  );
};

export default WhatsAppIcon;
