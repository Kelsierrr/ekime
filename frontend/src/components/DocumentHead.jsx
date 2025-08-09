// React 19 hoists these tags to <head>
export default function DocumentHead({
    title = 'Ekime Digital Services',
    description,
    url,    // absolute URL is best
    image,  // absolute URL is best
    type = 'website',
    siteName = 'Ekime Digital Services',
  }) {
    const canonical =
      url || (typeof window !== 'undefined' ? window.location.href : undefined);
  
    return (
      <>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
  
        {/* Open Graph */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        {canonical && <meta property="og:url" content={canonical} />}
        {image && <meta property="og:image" content={image} />}
  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {description && <meta name="twitter:description" content={description} />}
        {image && <meta name="twitter:image" content={image} />}
      </>
    );
  }
  