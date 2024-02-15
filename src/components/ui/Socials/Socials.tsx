import data from '@/data/contacts.json';

const { socials } = data;
const { text, links } = socials;

export const Socials = () => {
  return (
    <div className="flex gap-[20px] xl:mr-[30px] xl:flex-row-reverse smOnly:mr-[15px] smOnly:justify-end">
      <p className="mt-[2px] text-[12px] leading-[1.66] md:mt-[4px] xl:leading-loose">{text}</p>

      <ul className=" xl:text-right">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              className="contacts-link link-anim relative"
              href={href}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
