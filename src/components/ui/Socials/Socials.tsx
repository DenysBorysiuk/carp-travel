import data from '@/data/contacts.json';

const Socials = () => {
  return (
    <div className="flex gap-[20px] xl:mr-[30px] xl:flex-row-reverse smOnly:mr-[15px] smOnly:justify-end">
      <p className="mt-[4px] text-[12px] xl:leading-loose">{data.socials.text}</p>
      <ul>
        {data.socials.links.map(link => (
          <li key={link.label}>
            <a
              className="contacts-link"
              href={link.href}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
