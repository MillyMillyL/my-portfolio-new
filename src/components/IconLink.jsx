function IconLink({ Icon, href, iconClass, title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="hover:scale-125"
    >
      <Icon className={iconClass} />
    </a>
  );
}

export default IconLink;
