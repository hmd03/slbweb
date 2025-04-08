import React, { useEffect, useState } from "react";
import axios from "axios";
import RollingBanner from "../../ui/RollingBanner/RollingBanner";
import useDeviceInfo from "../../../hooks/useDeviceInfo";
import Chip from "../../ui/chip/chip";
import DividerWithLabel from "../../ui/label/DividerWithLabel";
import RollingCard from "../../ui/RollingBanner/RollingCard";

const MainForm: React.FC = () => {
  const deviceInfo = useDeviceInfo();
  const [bannerList, setBannerList] = useState<
    Array<{
      media: string;
      fileType: string;
      duration: number;
      link: string;
    }>
  >([]);

  useEffect(() => {
    if (deviceInfo.isSmallScreen !== undefined) {
      const mobile = deviceInfo.isSmallScreen ? "true" : "false";
      fetchData(mobile);
    }
  }, [deviceInfo.isSmallScreen]);

  const fetchData = async (searchIsMobile: string) => {
    try {
      setBannerList([]);
      const url = `api/banners?page=1&searchIsMobile=${searchIsMobile}`;
      console.log("요청 URL:", url);

      const response = await axios.get(url);
      const bannerList = response.data.bannerList;

      console.log("응답 데이터:", response.data);

      const updatedBannerList = await Promise.all(
        bannerList.map(
          async (banner: {
            duration: number;
            link: string;
            media: { id: string; fileType: string };
          }) => {
            if (banner.media == null) {
              return banner;
            }
            const fileType = banner.media.fileType.split("/")[0];
            const fileSrc = await getFile(banner.media.id);

            return {
              link: banner.link,
              duration: banner.duration,
              fileType: fileType,
              media: fileSrc,
            };
          }
        )
      );

      setBannerList(updatedBannerList);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  const getFile = async (id: string) => {
    try {
      const response = await axios.get(`api/files/${id}`, {
        responseType: "arraybuffer",
      });

      const contentType = response.headers["content-type"];
      const base64String = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );

      return `data:${contentType};base64,${base64String}`;
    } catch (error) {
      console.log("error: " + error);
      return "";
    }
  };

  const imageList = [
    `${process.env.PUBLIC_URL}/main/rolling/point_3_rolling_1.webp`,
    `${process.env.PUBLIC_URL}/main/rolling/point_3_rolling_2.webp`,
    `${process.env.PUBLIC_URL}/main/rolling/point_3_rolling_3.webp`,
    `${process.env.PUBLIC_URL}/main/rolling/point_3_rolling_1.webp`,
    `${process.env.PUBLIC_URL}/main/rolling/point_3_rolling_3.webp`,
    `${process.env.PUBLIC_URL}/main/rolling/point_3_rolling_2.webp`,
  ];

  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="w-full h-full">
        <RollingBanner items={bannerList} />
      </div>
      {/* Point 1 */}
      <div className="flex flex-col items-center w-[1300px] pt-40 text-mainContent font-semibold">
        <Chip text="Point 1" type="black" />
        <div className="mt-2">샐러드 & 포케 창업 지금이 적기,</div>
        <div className="flex items-end leading-none mb-20">
          <p className="text-[#FF331F] font-black text-mainPoint leading-none">
            고민하지 말고 선점
          </p>
          하세요!
        </div>
        <img
          loading="lazy"
          className="mb-40 transition-opacity duration-500 opacity-0"
          onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
          alt="대한민국 국민 신체·정신 건강 우려도 1.8배 증가"
          src={`${process.env.PUBLIC_URL}/main/point_1_img.webp`}
        ></img>
        <DividerWithLabel label="Q. 식사 메뉴를 정할 때 고객은?" />
        <div className="flex items-center leading-none text-title mt-8">
          <p
            className="px-4 pt-2 pb-5 text-center text-[#FF331F] font-black text-mainPoint leading-none bg-no-repeat bg-bottom"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_1_line.webp)`,
              backgroundSize: "contain",
              textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white",
            }}
          >
            맛은 기본
          </p>
          다음은
        </div>
        <div className="flex items-center leading-none text-title mb-20 mt-5 font-bold">
          가격이 아닌
          <p
            className="px-4 pt-2 pb-5 text-center text-[#FF331F] font-black text-mainPoint leading-none bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_1_circle.webp)`,
              backgroundSize: "contain",
              textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white",
            }}
          >
            영양성분
          </p>
          이 더 중요!
        </div>
        <div className="text-[24px] font-normal flex">
          고객들의 외식 선택 요소의 변화로 '샐러드&포케' 시장{" "}
          <p className="font-bold ml-2">지속 성장 중!</p>
        </div>
      </div>
      {/* Point 2 */}
      <div
        className="mt-40 bg-no-repeat bg-center w-full flex flex-col items-center"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_2_background.webp)`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center w-[1300px] h-full pt-20 text-mainContent font-semibold">
          <Chip text="Point 2" type="white" />
          <div className="text-[#FDF8EA] font-black leading-none my-4">
            어떤 상권에도 매출 걱정 없는 SLB
          </div>
          <div className="text-White text-subContent font-black leading-none">
            매력적인 브랜드는 고객이 찾아오게 만든다!
          </div>
          <div className="mt-20 w-[1000px] mx-auto flex justify-around">
            <div className="w-[31%]">
              <img
                loading="lazy"
                className="w-full rounded-t transition-opacity duration-500 opacity-0"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                alt="평균매출 7,350만원 9천4백 최고매출"
                src={`${process.env.PUBLIC_URL}/main/point_2_store_1.webp`}
              />
            </div>
            <div className="w-[31%]">
              <img
                loading="lazy"
                className="w-full rounded-t transition-opacity duration-500 opacity-0"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                alt="평균매출 4,700만원 8천9백 최고매출"
                src={`${process.env.PUBLIC_URL}/main/point_2_store_2.webp`}
              />
            </div>
            <div className="w-[31%]">
              <img
                loading="lazy"
                className="w-full rounded-t transition-opacity duration-500 opacity-0"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                alt="평균매출 7,960만원 7천9백 최고매출"
                src={`${process.env.PUBLIC_URL}/main/point_2_store_3.webp`}
              />
            </div>
          </div>
          <button className="rounded-[4rem] bg-Point text-White text-title font-normal border border-black px-4 mt-10 mb-[8rem]">
            SLB 수익률 확인하기
          </button>
        </div>
      </div>
      {/* Point 3 */}
      <div className="flex flex-col items-center w-full text-mainContent font-semibold">
        <div className="flex flex-col items-center w-full text-mainContent font-semibold bg-[#F6F6F6]">
          <div className="flex flex-col items-center w-[1300px] pt-20 text-mainContent font-semibold">
            <Chip text="Point 3" type="black" />
            <div className="mt-2">SLB는 고객이 만든 #맛집</div>
            <div className="flex items-end leading-none mb-10">
              <p className="text-[#FF331F] font-black text-mainPoint leading-none">
                고객들의 후기
              </p>
              를 확인하세요!
            </div>
            <div className="text-[24px] font-normal flex">
              특별한 광고 없이도 매출이 높을 수 밖에 없는 이유는 고객!
            </div>
            <div className="text-[24px] font-normal flex mb-[8rem]">
              예비창업자님들의
              <p className="font-bold ml-2">창업문의가 끊이지 않는 이유</p>
              이기도 합니다.
            </div>
            <RollingCard images={imageList} />
            <div className="mb-[16rem]" />
          </div>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-center bg-cover w-full h-full"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_3_background_1.webp)`,
        }}
      />
      <div className="flex flex-col items-center w-full text-mainContent font-semibold bg-[#231F20] text-White">
        <div className="flex flex-col items-center w-[1300px] pt-20 pb-10 text-mainContent font-semibold">
          <div className="flex items-center leading-none text-title mb-3">
            블루오션, 샐러드 & 포케 시장에서 남다른 고집으로
          </div>
          <div className="flex items-center leading-none text-title">
            <p className="font-bold">특별한 브랜드</p>, 직원도 점주가 되는
            <p className="font-bold">힙한 브랜드</p>
          </div>
        </div>
        <img
          loading="lazy"
          alt="slb 로고"
          src={`${process.env.PUBLIC_URL}/main/logo.webp`}
          className="h-[8rem] mb-20 transition-opacity duration-500 opacity-0"
          onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
        />
      </div>
      <div
        className="bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-fit text-mainContent font-semibold"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_3_background_2.webp)`,
        }}
      >
        <div className="flex items-end leading-none mb-10 mt-40">
          <p className="text-[#FF331F] font-black text-mainPoint leading-none mr-2">
            더 나은 삶,
          </p>
          더 맛있는 경험
        </div>

        <div className="text-title font-normal flex">
          더 나은 음식 '맛'을 내기위해해
        </div>
        <div className="text-title font-normal flex">
          식재료 선택부터 진심을 담다!
        </div>

        <div
          className={`w-[1px]  border-r border-black  ${
            deviceInfo.isSmallScreen ? "h-5 my-2" : "h-20 my-10"
          }`}
        />

        <div className="flex items-end leading-none mb-10">
          더 나은 삶,
          <p className="text-[#FF331F] font-black text-mainPoint leading-none ml-2">
            더 맛있는 경험
          </p>
        </div>

        <div className="text-title font-normal flex">
          고객이 더 맛있는 경험을 할 수 있도록
        </div>
        <div className="text-title font-normal flex">
          한식의 익숙함을 담아 특별한 샐러드&포케를 완성했습니다
        </div>
        <img
          loading="lazy"
          alt="고객을 제대로 대접하겠다는 의지를 담아 정성껏 준비한 SLB만의 특별한 `한상차림` 마음까지 든든해지는 기분 좋은 경험이 시작됩니다"
          src={`${process.env.PUBLIC_URL}/main/point_3_salad.webp`}
          className="max-w-[1300px] h-[50%] mb-40 ml-[16rem] mt-40 transition-opacity duration-500 opacity-0"
          onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
        />
      </div>
      <div
        className="bg-no-repeat bg-center bg-cover flex flex-col items-center w-full h-full text-mainContent font-semibold text-White"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_3_footer.webp)`,
        }}
      >
        <div className="w-[1200px] flex flex-col">
          <div className="flex items-end leading-none mt-[12rem]">
            메뉴 개발에 노력한 결과!
          </div>
          <div className="flex items-end leading-none mt-1">
            SLB 가맹점 고객
            <p className="bg-[#FF331F] font-black text-mainPoint leading-none ml-2 p-1">
              재방문율 86%
            </p>
          </div>

          <div
            className={`w-[1px]  border-r border-White  ${
              deviceInfo.isSmallScreen ? "h-5 my-2" : "h-12 my-8 ml-4"
            }`}
          />

          <div className="flex items-center leading-none text-title font-normal mb-3">
            현재에 안주하지 않고 한식의 익숙함에
          </div>
          <div className="flex items-center leading-none text-title font-normal mb-3">
            샐러드&포케의 새로움을 더하기 위해 지금 이 순간에도도
          </div>
          <div className="flex items-center leading-none text-title font-normal mb-[10rem]">
            SLB R&D부서 전문가들은 연구에 연구를 거듭하고 있습니다
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
