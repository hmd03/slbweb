import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { siteSettingState } from '../../store/atom';

export interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
  url?: string;
}

const pageMeta: Record<string, { title: string; description: string }> = {
  '/sub_1/1': {
    title: 'SLB 브랜드 소개',
    description: '한식X샐러드&포케 브랜드 SLB의 시작과 철학을 소개합니다.',
  },
  '/sub_2/1': {
    title: 'SLB 창업 기회',
    description: 'SLB 창업 성공을 위한 핵심 전략을 알아보세요.',
  },
  '/sub_3/1': {
    title: 'SLB 가맹점 성장 스토리',
    description: '끝까지 함께하는 SLB의 가맹점 지원 시스템을 소개합니다.',
  },
  '/sub_4/1': {
    title: 'SLB 창업 비용 안내',
    description: '성공적인 창업을 위한 SLB 개설 비용 정보를 확인하세요.',
  },
  '/inquiry': {
    title: 'SLB 창업 문의',
    description: 'SLB 창업 관련 문의를 온라인으로 쉽고 빠르게 남겨보세요.',
  },
  '/story': {
    title: '브랜드 스토리',
    description: 'SLB 브랜드의 철학과 성장 스토리를 확인하세요.',
  },
  '/board/notice': {
    title: '공지사항',
    description: 'SLB의 새로운 소식과 공지를 확인해보세요.',
  },
  '/board/event': {
    title: '이벤트',
    description: '고객을 위한 다양한 이벤트 정보를 확인하세요.',
  },
  '/store': {
    title: '매장 안내',
    description: '전국 SLB 매장을 한눈에 확인하세요.',
  },
};

const SeoHelmet: React.FC<SeoProps> = ({ title, description, keywords, imageUrl, url }) => {
  const location = useLocation();
  const setting = useRecoilValue(siteSettingState);
  const path = location.pathname;

  const defaultSeo = {
    name: 'SLB 샐러드',
    title: 'SLB 샐러드 [SALAD LOUNGE BAR]',
    description: '기분 좋은 변화의 시작! 한식 기반 샐러드&포케 창업 프랜차이즈',
    keywords: '샐러드, 포케, 창업, 프랜차이즈, 한식, 슬랩, SLB',
    imageUrl: `${window.location.origin}/adminLoginLogo.png`,
    url: window.location.href,
  };

  const fallbackMeta = pageMeta[path] || {
    title: defaultSeo.title,
    description: defaultSeo.description,
  };

  const seo = {
    title: title || setting.title || fallbackMeta.title,
    description: description || setting.description || fallbackMeta.description,
    keywords: keywords || setting.keywords || defaultSeo.keywords,
    imageUrl: imageUrl || `${window.location.origin}/adminLoginLogo.png`,
    url: url || window.location.href,
    name: setting.name || defaultSeo.name,
  };

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