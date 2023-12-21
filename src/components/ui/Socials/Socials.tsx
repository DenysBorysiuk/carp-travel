import data from '@/data/contacts.json';

const Socials = () => {
  return (
    <div className="mr-[15px] flex justify-end gap-[20px] xl:flex-row-reverse">
      <p className="text-[12px] xl:leading-loose">{data.socials.text}</p>
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
