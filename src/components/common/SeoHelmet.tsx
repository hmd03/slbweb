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
  const setting = useRecoilValue(siteSettingState);

  // ✅ 기본값 설정
  const defaultSeo = {
    name: 'SLB 샐러드',
    title: 'SLB 샐러드 [SALAD LOUNGE BAR]',
    description: '기분 좋은 변화의 시작! 한식 기반 샐러드&포케 창업 프랜차이즈',
    keywords: '샐러드, 포케, 창업, 프랜차이즈, 한식, 슬랩, SLB',
    imageUrl: `${window.location.origin}/adminLoginLogo.png`,
    url: window.location.href,
  };

  // ✅ 설정된 값 + props 우선 적용
  const seo = {
    title: title || setting.title || defaultSeo.title,
    description: description || setting.description || defaultSeo.description,
    keywords: keywords || setting.keywords || defaultSeo.keywords,
    imageUrl: imageUrl || `${window.location.origin}/adminLoginLogo.png`,
    url: url || window.location.href,
    name: setting.name || defaultSeo.name,
  };

  console.log('SEO:', seo);

  return (
    <Helmet defaultTitle={seo.title} titleTemplate={`%s | ${seo.name}`}>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={seo.name} />
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
