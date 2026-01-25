function ImageLink({ href, src, alt, external_site = false , ...props }) {
  const BASE_URL = import.meta.env.BASE_URL
  const site_url = external_site ? '' : BASE_URL
  
  return (
    <a href={site_url + href} {...props} className="cursor-pointer hover:scale-105 transition-all relative w-16 h-16 shadow-effect item max-lg:w-14 max-lg:h-14" target="_blank">
      <img src={BASE_URL + src} alt={alt} className="block absolute w-full h-full" />
    </a>
  );
}

export default ImageLink;