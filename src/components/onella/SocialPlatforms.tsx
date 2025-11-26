import { FaGoogle, FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter, FaDribbble } from 'react-icons/fa';

const platforms = [
  { icon: <FaGoogle className="h-8 w-8 text-white" /> },
  { icon: <FaInstagram className="h-8 w-8 text-white" /> },
  { icon: <FaFacebookF className="h-8 w-8 text-white" /> },
  { icon: <FaWhatsapp className="h-8 w-8 text-white" /> },
  { icon: <FaTwitter className="h-8 w-8 text-white" /> },
  { icon: <FaDribbble className="h-8 w-8 text-white" /> },
];

export function SocialPlatforms() {
  return (
    <section>
      <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
        {platforms.map((platform, index) => (
          <div key={index} className="p-4 bg-glass rounded-full border border-primary/20">
            {platform.icon}
          </div>
        ))}
      </div>
    </section>
  );
}

    