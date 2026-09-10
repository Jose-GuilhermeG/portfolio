function ImageLink({ href, src, alt, external_site = false , ...props }) {
  const BASE_URL = import.meta.env.BASE_URL
  const site_url = external_site ? '' : BASE_URL
  
  return (
    <a href={site_url + href} {...props} className="cursor-pointer hover:scale-105 transition-all w-3/10 aspect-square shadow-effect item" target="_blank">
      <img src={BASE_URL + src} alt={alt} className="block w-full h-full" />
    </a>
  );
}

export default ImageLink;