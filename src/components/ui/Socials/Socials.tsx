import data from '@/data/contacts.json';

const Socials = () => {
  return (
    <div className="flex justify-end gap-[20px] xl:flex-row-reverse">
      <p>{data.socials.text}</p>
      <ul>
        {data.socials.links.map(link => (
          <li key={link.label}>
            <a className="" href={link.href} rel="noopener noreferrer nofollow" target="_blank">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
