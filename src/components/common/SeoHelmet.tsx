import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRecoilValue } from 'recoil';
import { siteSettingState } from '../../store/atom';

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
  url?: string;
}

const SeoHelmet: React.FC<SeoProps> = ({ title, description, keywords, imageUrl, url }) => {
  const { name, title: defaultTitle, description: defaultDesc, keywords: defaultKeywords } = useRecoilValue(siteSettingState);

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDesc,
    keywords: keywords || defaultKeywords,
    imageUrl: imageUrl || `${window.location.origin}/adminLoginLogo.png`,
    url: url || window.location.href,
  };

  return (
    <Helmet defaultTitle={defaultTitle} titleTemplate={`%s | ${name}`}>      
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={seo.imageUrl} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.imageUrl} />
    </Helmet>
  );
};

export default SeoHelmet;
