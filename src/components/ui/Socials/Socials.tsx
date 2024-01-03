import data from '@/data/contacts.json';

const { socials } = data;
const { text, links } = socials;

const Socials = () => {
  return (
    <div className="flex gap-[20px] xl:mr-[30px] xl:flex-row-reverse smOnly:mr-[15px] smOnly:justify-end">
      <p className="mt-[4px] text-[12px] xl:leading-loose">{text}</p>
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

export default Socials;
