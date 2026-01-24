function ImageLink({ href, src, alt, ...props }) {
  return (
    <a href={href} {...props} className="cursor-pointer hover:scale-105 transition-all relative w-16 h-16 shadow-effect" target="_blank">
      <img src={src} alt={alt} className="block absolute w-full h-full" />
    </a>
  );
}

export default ImageLink;