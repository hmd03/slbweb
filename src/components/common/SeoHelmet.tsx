import { Helmet } from "react-helmet-async";
import { useRecoilValue } from "recoil";
import { siteSettingState } from "../../store/atom";

const SeoHelmet = () => {
  const { name, title, description } = useRecoilValue(siteSettingState);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={name} />
      {/* <meta property='og:image' content='https://example.com/og-image.png' /> */}
      <meta property='og:url' content='https://slbmaster3.cafe24.com/' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      {/* <meta name='twitter:image' content='https://example.com/og-image.png' /> */}
    </Helmet>
  );
};

export default SeoHelmet;
