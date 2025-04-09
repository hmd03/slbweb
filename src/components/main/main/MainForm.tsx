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
    console.log(deviceInfo);
    if (Object.keys(deviceInfo).length > 0) {
      const mobile = deviceInfo.isSmallScreen || deviceInfo.isMobile ? "true" : "false";
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
      <div
        className={`${
          deviceInfo.isSmallScreen || deviceInfo.isMobile
            ? "w-full"
            : "w-[1300px]"
        } flex flex-col items-center  pt-40 text-mainContent font-semibold`}
      >
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
            deviceInfo.isSmallScreen || deviceInfo.isMobile
              ? "h-5 my-2"
              : "h-20 my-10"
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
              deviceInfo.isSmallScreen || deviceInfo.isMobile
                ? "h-5 my-2"
                : "h-12 my-8 ml-4"
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
      {/* Point 4 */}
      <div className="flex flex-col items-center w-[1300px] pt-40 text-mainContent font-semibold">
        <Chip text="Point 4" type="black" />
        <div className="mt-2 text-subContent  font-black">
          성공한 맛집 = 인테리어도 좋다!
        </div>
        <div className="flex items-end leading-none mb-20 text-mainPoint">
          고객이 트렌디하다고 말하는
          <p className="text-[#FF331F] font-black leading-none ml-2">
            SLB 인테리어
          </p>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-center bg-cover flex flex-col items-center w-full text-title font-semibold aspect-[15/10] py-40 px-40 mb-40"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_4_background.webp)`,
        }}
      >
        <div className="bg-[#F1F2F2] py-2 px-20 w-fit ml-[25%] break-keep">
          SLB의 경쟁력 고객이 먼저 알아봅니다.
        </div>
        <div className="bg-[#F1F2F2] py-10 px-8 w-[35%] mt-auto mb-40 text-right mr-[30%] break-keep">
          SLB의 수익형 인테리어
          <p className="text-[28px] font-normal break-keep">
            오랜 기간 고객 동선과
          </p>
          <p className="text-[28px] font-normal break-keep">
            서비스 동선까지 고려한 과학적 설계와
          </p>
          <p className="text-[28px] font-normal break-keep">
            우리민족 고유의 절제와 비움에 미학을 반영한
          </p>
          <p className="text-[28px] font-normal break-keep">
            모던하고 감각적인 인테리어 디자인으로
          </p>
          <p className="text-[28px] font-normal break-keep">
            SLB만의 수익형 인테리어를 완성하였습니다.
          </p>
        </div>
      </div>
      <DividerWithLabel label="Q. 상권선점을 위해서는?" />
      <div className="flex flex-col items-center leading-none text-title mt-8 mb-40 font-black">
        <div className="mt-2 text-subContent mb-2">
          좋은 상권은 기다려주지 않습니다. 놓치지 마세요!
        </div>
        <p
          className="px-4 pt-2 pb-5 text-center text-[#FF331F] font-black text-mainPoint leading-none bg-no-repeat bg-bottom"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/main/point_4_line.webp)`,
            backgroundSize: "contain",
            textShadow: "0 0 1px white, 0 0 1px white, 0 0 1px white",
          }}
        >
          SLB를 선점할 수 있는 기회
        </p>
      </div>
      {/* Point 5 6 */}
      <div className="flex flex-col items-center w-full text-mainContent font-semibold">
        <div className="flex flex-col items-center w-full text-mainContent font-semibold bg-[#F6F6F6]">
          {/* Point 5*/}
          <div className="flex flex-col items-center w-[1300px] pt-20 text-mainContent font-semibold">
            <Chip text="Point 5" type="black" />
            <div className="mt-2">각 분야 10년 이상의 전문가가</div>
            <div className="flex items-end leading-none mb-10 text-mainPoint">
              <p className="text-[#FF331F] font-black leading-none">
                창업부터 운영까지 지원
              </p>
              하는 SLB
            </div>
            <div className="text-[24px] font-normal flex">
              매장을 직접 운영 했던 경험 보유자부터 홀, 배달 등
            </div>
            <div className="text-[24px] font-normal flex">
              다양한 외식아이템을 경험한
              <p className="font-bold ml-2">10년 이상의</p>
            </div>
            <div className="text-[24px] font-normal flex mb-[8rem]">
              <p className="font-bold mr-2">
                각 분야 전문가들이 예비 가맹점주님의 고충을 해결
              </p>
              해드립니다.
            </div>
            <div className="flex items-center gap-8">
              <div className="">
                <img
                  loading="lazy"
                  className="w-full rounded-t transition-opacity duration-500 opacity-0"
                  style={{ boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)" }}
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                  alt="메뉴 및 운영 노하우 교육육"
                  src={`${process.env.PUBLIC_URL}/main/point_5_1.webp`}
                />
              </div>
              <div className="">
                <img
                  loading="lazy"
                  className="w-full rounded-t transition-opacity duration-500 opacity-0"
                  style={{ boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)" }}
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                  alt="오픈 운영 지원"
                  src={`${process.env.PUBLIC_URL}/main/point_5_2.webp`}
                />
              </div>
            </div>

            <div className="mb-[16rem]" />
          </div>

          {/* Point 6 */}
          <div className="flex flex-col items-center w-[1300px] pt-20 text-mainContent font-semibold">
            <Chip text="Point 6" type="black" />
            <div className="mt-2">SLB만의 슈퍼바이징 시스템으로</div>
            <div className="flex items-end leading-none mb-20 text-mainPoint">
              오픈 이후에도
              <p className="text-[#FF331F] font-black leading-none ml-2">
                체계적으로 관리
              </p>
              합니다
            </div>
            <div className="flex items-center gap-8 mb-16">
              <div className="">
                <img
                  loading="lazy"
                  className="w-full rounded-t transition-opacity duration-500 opacity-0"
                  style={{ boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)" }}
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                  alt="가맹점 QSC 관리리"
                  src={`${process.env.PUBLIC_URL}/main/point_6_1.webp`}
                />
              </div>
              <div className="">
                <img
                  loading="lazy"
                  className="w-full rounded-t transition-opacity duration-500 opacity-0"
                  style={{ boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)" }}
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                  alt="매출&수익 관리리"
                  src={`${process.env.PUBLIC_URL}/main/point_6_2.webp`}
                />
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="">
                <img
                  loading="lazy"
                  className="w-full rounded-t transition-opacity duration-500 opacity-0"
                  style={{ boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)" }}
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                  alt="매출향상 LSM 지원원"
                  src={`${process.env.PUBLIC_URL}/main/point_6_3.webp`}
                />
              </div>
              <div className="">
                <img
                  loading="lazy"
                  className="w-full rounded-t transition-opacity duration-500 opacity-0"
                  style={{ boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)" }}
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                  alt="물품입출고 관리리"
                  src={`${process.env.PUBLIC_URL}/main/point_6_4.webp`}
                />
              </div>
              <div className="">
                <img
                  loading="lazy"
                  className="w-full rounded-t transition-opacity duration-500 opacity-0"
                  style={{ boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.2)" }}
                  onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
                  alt="매장인원 관리 지원"
                  src={`${process.env.PUBLIC_URL}/main/point_6_5.webp`}
                />
              </div>
            </div>
            <div className="mb-[16rem]" />
          </div>
        </div>
      </div>
      {/* Point 7 */}
      <div className="flex flex-col items-center w-[1300px] pt-40 text-mainContent font-semibold">
        <Chip text="Point 1" type="black" />
        <div className="mt-2">창업 및 운영 비용은 DOWN</div>
        <div className="flex items-end leading-none mb-20">
          <p className="text-[#FF331F] font-black text-mainPoint leading-none">
            수익률은 UP 시키는 SLB의 노력!
          </p>
        </div>
        <div className="text-[24px] font-normal flex">
          예비 창업자들의 최대 고민? 창업 비용!
        </div>
        <div className="text-[24px] font-normal flex mb-20">
          SLB는 초기 창업 비용을 줄이기 위해
          <p className="font-bold ml-2">'인테리어 직거래 시스템' 도입</p>
        </div>
        <img
          loading="lazy"
          className="mb-80 transition-opacity duration-500 opacity-0"
          onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
          alt="초기 인테리어 비용 최대 35% 이상 감소"
          src={`${process.env.PUBLIC_URL}/main/point_7.webp`}
        ></img>
        {/* Point 8 */}
        <Chip text="Point 8" type="black" />
        <div className="mt-2">물가상승으로 힘들어 하는</div>
        <div className="">가맹점주님들을 위해 매년 물류 비용</div>
        <div className="flex items-end leading-none mb-20 text-mainPoint">
          <p className="text-[#FF331F] font-black leading-none">
            유지 또는 낮추기 위해 SLB는 노력
          </p>
          합니다!
        </div>
        <div className="text-[24px] font-normal flex">
          채소의 안정된 공급과 수익률을 높이기 위해
        </div>
        <div className="text-[24px] font-normal flex mb-20">
          지속적인
          <p className="font-bold ml-2">무농약 인증 신규 농가 발굴</p>
        </div>
        <img
          loading="lazy"
          className="mb-80 transition-opacity duration-500 opacity-0"
          onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
          alt="주6회 배송은 기본! 친환경 무농약 인증 받은 농장과 계약 재배로 사시사철 균일한 가격으로 제공해드립니다."
          src={`${process.env.PUBLIC_URL}/main/point_8.webp`}
        ></img>
        {/* Point 9 */}
        <Chip text="Point 9" type="black" />
        <div className="mt-2">누구나 쉽게 쉽게!</div>
        <div className="flex items-end leading-none mb-20 text-mainPoint">
          <p className="text-[#FF331F] font-black leading-none mr-2">
            요리를 전혀 못해도
          </p>
          창업 가능
        </div>
        <div className="text-[24px] font-normal flex">
          예비 창업자들의 최대 고민? 창업 비용!
        </div>
        <div className="text-[24px] font-normal flex mb-20">
          SLB는 초기 창업 비용을 줄이기 위해
          <p className="font-bold ml-2">'인테리어 직거래 시스템' 도입</p>
        </div>
        <img
          loading="lazy"
          className="mb-80 transition-opacity duration-500 opacity-0"
          onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
          alt="주문 시스템 운영 인력 최소화를 위해 키오스크로 편하게! 
          > 원팩 시스템 - 주로 사용되는 원부자재 원팩화로 준비시간 짧게! 
          > 간단 조리 시스템 - 어려운 조리 스킬 필요 없이 모든 메뉴 쉽게 가능!
          > 빠른 메뉴 완성 - 고객 테이블 or 배달 전달 끝!"
          src={`${process.env.PUBLIC_URL}/main/point_9.webp`}
        ></img>
      </div>
    </div>
  );
};

export default MainForm;
