import { Helmet } from "react-helmet";
import { useRecoilValue } from "recoil";
import { siteSettingState } from "../../store/atom";

const SeoHelmet = () => {
  const { name, title, description } = useRecoilValue(siteSettingState);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={name} />
    </Helmet>
  );
};

export default SeoHelmet;
