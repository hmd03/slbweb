import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { siteSettingState } from "../../store/atom";

const SeoHelmet = () => {
  const { name, title, description } = useRecoilValue(siteSettingState);

  const keywords =
    'SLB, SLB샐러드, 샐러드, 포케, 샐러드창업, 포케창업, 외식창업, 프랜차이즈창업, 프레차이즈창업';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={name} />
      <meta property='og:image' content='%PUBLIC_URL%/adminLoginLogo.png' />
      <meta property='og:url' content='https://slbslb.com/' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='%PUBLIC_URL%/adminLoginLogo.png' />
    </Helmet>
  );
};

export default SeoHelmet;
