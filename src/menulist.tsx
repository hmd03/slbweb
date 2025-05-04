interface MenuResponse {
    id: number;
    title: string;
    description: string;
    media?: {
        id: string;
        fileName: string;
        filePath: string;
        fileType: string;
    } | null;
    category: {
        id: number;
        name: string;
    };
    src?: string;
}

export const menusByCategory: Record<number, MenuResponse[]> = {
  1: [
    // 샐러드 한상
    {
      id: 1,
      title: '힘내소부채살 샐러드한상',
      description:
        '스테미나 부족한 날? {{BR_MOBILE}}육즙가득 고소한{{BR_PC}}부채살로 에너지 충전! {{BR_MOBILE}}힘내소부채살 샐러드',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad1.webp`,
    },
    {
      id: 2,
      title: '힘돼지목살 샐러드한상',
      description:
        '스테미나 부족한 날?{{BR_MOBILE}}풍미가득 간장숙성 목살로{{BR_PC}}에너지 충전!{{BR_MOBILE}}힘돼지목살 샐러드',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad2.webp`,
    },
    {
      id: 3,
      title: '꾸덕리코타 샐러드한상',
      description:
        '주목! 리코타 맛은 SLB가 기준!{{BR_MOBILE}}매일 제조·숙성,{{BR_MOBILE}}{{BR_PC}}마성의 꾸덕리코타 샐러드(계란X)',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad3.webp`,
    },
    {
      id: 4,
      title: '훈제당한연어 샐러드한상',
      description:
        '주인장의 섬세한 손질로{{BR_MOBILE}}감칠맛을 높인{{BR_PC}}부드럽고 찰진{{BR_MOBILE}}훈제당한연어 샐러드!',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad4.webp`,
    },
    {
      id: 5,
      title: '몸보신오리 샐러드한상',
      description:
        '맛은 기본! 훈제오리&유러피안채소로{{BR_MOBILE}}{{BR_PC}}체중조절과 영양섭취 쌉가능~ {{BR_MOBILE}}몸보신오리 샐러드!',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad5.webp`,
    },
    {
      id: 6,
      title: '힙한바질파스타 샐러드한상',
      description:
        '바질=향긋함!{{BR_MOBILE}}올리브오일=고소함! 치즈=풍미!{{BR_PC}}세련된 맛궁합!{{BR_MOBILE}}힙한바질파스타 샐러드!',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad6.webp`,
    },
    {
      id: 7,
      title: '촉촉닭가슴살 샐러드한상',
      description:
        '촉촉하고 부드럽게 수비드한{{BR_MOBILE}}닭가슴살과 아삭한 채소의 조합!{{BR_PC}}{{BR_MOBILE}}질리지 않는 맛 촉촉닭가슴살 샐러드',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad7.webp`,
    },
    {
      id: 8,
      title: '우삼겹비빔게티 샐러드한상',
      description:
        '담백한 스파게티&고소한 우삼겹{{BR_MOBILE}}&신선한 채소를{{BR_PC}}단짠맵 소스에 비벼면{{BR_MOBILE}}최강의 맛경험 보장!',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad8.webp`,
    },
    {
      id: 9,
      title: '쌈보로제육 샐러드한상',
      description:
        '중독적인 맛! 약고추장으로{{BR_MOBILE}}조리한 소보로제육에{{BR_PC}}신선한 채소를 더해{{BR_MOBILE}}또띠아에 쌈싸먹는 샐러드',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad9.webp`,
    },
    {
      id: 10,
      title: '애간장오븐닭 샐러드한상',
      description:
        '담백함에 반했다! 부드러운{{BR_MOBILE}}유러피안채소,{{BR_PC}}특제 저염간장으로{{BR_MOBILE}}더 촉촉한 오븐치킨 샐러드',
      media: null,
      category: { id: 1, name: '샐러드 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/salad10.webp`,
    },
  ],

  2: [
    // 포케 한상
    {
      id: 11,
      title: '힘내소부채살 포케한상',
      description:
        '스테미나 부족한 날?{{BR_MOBILE}}15곡 잡곡밥을 더해{{BR_PC}}더 고소한{{BR_MOBILE}}육즙가득 힘내소부채살 포케',
      media: null,
      category: { id: 2, name: '포케 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/poke1.webp`,
    },
    {
      id: 12,
      title: '힘돼지목살 포케한상',
      description:
        '스테미나 부족한 날?{{BR_MOBILE}}15곡 잡곡밥을 더해{{BR_PC}}풍미가득한{{BR_MOBILE}}간장숙성 힘돼지목살 포케',
      media: null,
      category: { id: 2, name: '포케 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/poke2.webp`,
    },
    {
      id: 13,
      title: '애간장오븐닭 포케한상',
      description:
        '담백함에 반했다! 부드러운{{BR_MOBILE}}유러피안채소,{{BR_PC}}특제 저염간장으로{{BR_MOBILE}}더 촉촉한 오븐치킨 포케',
      media: null,
      category: { id: 2, name: '포케 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/poke3.webp`,
    },
    {
      id: 14,
      title: '입맛돈닭갈비 포케한상',
      description:
        '집나간 입맛도 돌아온다는{{BR_MOBILE}}중독적인 맛 입맛돈닭갈비!{{BR_PC}}{{BR_MOBILE}}잡곡밥과 함께라서 더 중독적인 포케',
      media: null,
      category: { id: 2, name: '포케 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/pok4.webp`,
    },
    {
      id: 15,
      title: '몸보신오리 포케한상',
      description:
        '맛은 기본! 훈제오리 & 잡곡밥으로{{BR_MOBILE}}{{BR_PC}}체중조절과 영양섭취까지 쌉가능~{{BR_MOBILE}}몸보신오리 포케',
      media: null,
      category: { id: 2, name: '포케 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/poke5.webp`,
    },
    {
      id: 16,
      title: '촉촉닭가슴살 포케한상',
      description:
        '수비드로 질리지 않는 담백함과{{BR_MOBILE}}촉촉닭가슴살 & 잡곡밥에{{BR_PC}}{{BR_MOBILE}}고소함을 더해 맛을 완성한 포케',
      media: null,
      category: { id: 2, name: '포케 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/poke6.webp`,
    },
    {
      id: 17,
      title: '통살가리비빔 포케한상',
      description:
        '씹을수록 오감 만족! 먹고 또 먹게하는{{BR_MOBILE}}통살가리비와{{BR_PC}}고소한 잡곡밥을{{BR_MOBILE}}비벼먹는 비법 포케!',
      media: null,
      category: { id: 2, name: '포케 한상' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/poke7.webp`,
    },
  ],

  3: [
    // 랩 메뉴
    {
      id: 18,
      title: '입맛이싹~에그마요랩',
      description:
        '고민하지마! 입안 가득 퍼지는{{BR_PC}}{{BR_MOBILE}}달콤한 고소함을 먹어봐!{{BR_MOBILE}}입맛이싹~에그마요랩!',
      media: null,
      category: { id: 3, name: '랩 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/wrap1.webp`,
    },
    {
      id: 19,
      title: '침샘이싹~제육소보로랩',
      description:
        '침고이는 맛! 한번만 먹을 수 없는 맛!{{BR_PC}}{{BR_MOBILE}}안먹으면 후회하는{{BR_MOBILE}}침샘이싹~제육소보로랩!',
      media: null,
      category: { id: 3, name: '랩 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/wrap2.webp`,
    },
    {
      id: 20,
      title: '바질이싹~닭가슴살랩',
      description:
        '향으로 먹고! 맛으로 먹는!{{BR_PC}}{{BR_MOBILE}}바질가득 촉촉 무염 수비드{{BR_MOBILE}}바질이싹~닭가슴살랩!',
      media: null,
      category: { id: 3, name: '랩 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/wrap3.webp`,
    },
    {
      id: 21,
      title: '군침이싹~불고기랩',
      description:
        '애 어른 가리지 않는 인기! 군침이 싹도는{{BR_PC}}{{BR_MOBILE}}불고기&신선한 채소의 꿀조합!{{BR_MOBILE}}군침이싹~불고기랩!',
      media: null,
      category: { id: 3, name: '랩 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/wrap4.webp`,
    },
  ],

  4: [
    // 샌드 메뉴
    {
      id: 22,
      title: '뚱에샌(뚱뚱에그마요 쨈샌드)',
      description:
        '고소함에 고소함을 더했다!{{BR_MOBILE}}뚱에그마요와{{BR_PC}}달콤한 달콤한 잼의{{BR_MOBILE}}미친조합 뚱에샌!',
      media: null,
      category: { id: 4, name: '샌드 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/sand1.webp`,
    },
    {
      id: 23,
      title: '리단샌(리코타VS단호박샌드)',
      description:
        '풍미가득 크리미한 수제 리코타치즈 VS{{BR_PC}}{{BR_MOBILE}}은은한 단맛의 최강자 단호박의{{BR_MOBILE}}중독적인 조합 리단샌!',
      media: null,
      category: { id: 4, name: '샌드 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/sand2.webp`,
    },
    {
      id: 24,
      title: '아치샌(아보카도VS치즈샌드)',
      description:
        '부드러운 고소함{{BR_MOBILE}}아보카도 VS 풍미가득 치즈{{BR_PC}}{{BR_MOBILE}}맛잘알 특제 조합 아치샌!',
      media: null,
      category: { id: 4, name: '샌드 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/sand3.webp`,
    },
  ],

  5: [
    // 추가 메뉴
    {
      id: 25,
      title: '애들입맛 불고기주먹밥',
      description:
        '영양가득 15곡 잡곡밥 & 단짠단짠 불고기!{{BR_PC}}{{BR_MOBILE}}숟가락이 멈추지 않는{{BR_MOBILE}}애들입맛 불고기주먹밥!',
      media: null,
      category: { id: 5, name: '추가 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/extra1.webp`,
    },
    {
      id: 26,
      title: '밥도둑 제육주먹밥',
      description:
        '영양가득 15곡 잡곡밥 & 단짠매콤{{BR_MOBILE}}제육소보루!{{BR_PC}}식욕자극 참을 수 없는{{BR_MOBILE}}밥도둑 제육주먹밥!',
      media: null,
      category: { id: 5, name: '추가 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/extra2.webp`,
    },
    {
      id: 27,
      title: '살안쩌! 호밀브레드',
      description:
        '살 걱정 끝~ 포만감 UP!{{BR_MOBILE}}다이어트 GOOD!{{BR_PC}}{{BR_MOBILE}}추가해도~ 살안쩌! 호밀브레드',
      media: null,
      category: { id: 5, name: '추가 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/extra3.webp`,
    },
    {
      id: 28,
      title: '청양파 계란국',
      description:
        '밥 먹을 때 국룰!{{BR_MOBILE}}국물은 많아야 제맛!{{BR_PC}}{{BR_MOBILE}}담백하고 뜨끈하게 청양파 계란국!',
      media: null,
      category: { id: 5, name: '추가 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/extra4.webp`,
    },
    {
      id: 29,
      title: '크리미 양송이스프',
      description:
        '따뜻함에 마음까지{{BR_MOBILE}}부드럽게 채워주는{{BR_PC}}{{BR_MOBILE}}크리미한 맛~ 크리미 양송이스프',
      media: null,
      category: { id: 5, name: '추가 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/extra5.webp`,
    },
    {
      id: 30,
      title: '비프스튜 굴라쉬',
      description:
        '입안가득 퍼지는 토마토의 상큼함,{{BR_PC}}{{BR_MOBILE}}버터와 소고기의 풍미까지~{{BR_MOBILE}}비프스튜 굴라쉬',
      media: null,
      category: { id: 5, name: '추가 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/extra6.webp`,
    },
    {
      id: 31,
      title: '도토리 떡갈비',
      description:
        '도토리를 넣어 더 건강한{{BR_MOBILE}}육즙가득 떡갈비와{{BR_PC}}양파,{{BR_MOBILE}}크림소스의 환상적인 궁합!',
      media: null,
      category: { id: 5, name: '추가 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/extra7.webp`,
    },
  ],
  6: [
    // 음료 메뉴
    {
      id: 32,
      title: 'SLB 아메리카노',
      description:
        '피곤함 몰려올 때!{{BR_MOBILE}}카페인 충전{{BR_PC}}{{BR_MOBILE}}꽉꽉 눌러담은 SLB 아메리카노~',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink1.webp`,
    },
    {
      id: 33,
      title: 'SLB 카페라떼',
      description:
        '밀크에 부드러움에 반한{{BR_MOBILE}}커피 한잔이면{{BR_PC}}활력충전 끝!{{BR_MOBILE}}SLB 카페라떼',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink2.webp`,
    },
    {
      id: 34,
      title: 'SLB 바닐라라떼',
      description:
        '식후 은은한 단맛 바닐라커피{{BR_MOBILE}}한잔이면{{BR_PC}}여유가 넘친다!{{BR_MOBILE}}SLB 바닐라라떼',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink3.webp`,
    },
    {
      id: 35,
      title: 'SLB 카라멜마끼아또',
      description:
        '기분전환이 필요할 때, 챙겨가자~{{BR_PC}}{{BR_MOBILE}}너를 위한 당충전{{BR_MOBILE}}카라멜마끼아또~',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink4.webp`,
    },
    {
      id: 36,
      title: '문경이키운 오미자에이드',
      description:
        '문명 김씨 아저씨가{{BR_MOBILE}}애지중지 키운{{BR_PC}}오미자에이드{{BR_MOBILE}}상큼하게 한잔 어때?',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink5.webp`,
    },
    {
      id: 37,
      title: '고흥이키운 유저에이드',
      description:
        '고흥 장씨 아주머니가{{BR_MOBILE}}애지중지 키운{{BR_PC}}유자에이드로{{BR_MOBILE}}비타민 충전 어때?',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink6.webp`,
    },
    {
      id: 38,
      title: '다이어트엔 그린착즙',
      description:
        '독소배출, 체중감량에 도움이 되는{{BR_MOBILE}}다이어트 특화 주스{{BR_PC}}{{BR_MOBILE}}(청포도, 케일, 밀싹, 사과, 레몬, 생강)',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink7.webp`,
    },
    {
      id: 39,
      title: '스트레스엔 옐로우착즙',
      description:
        '내 몸의 염증수치 Down 면역력 Up{{BR_PC}}{{BR_MOBILE}}스트레스해소 특화 디톡스 주스{{BR_MOBILE}}(파인애플, 자몽, 오렌지, 레몬, 사과)',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink8.webp`,
    },
    {
      id: 40,
      title: '맑은피부엔 스칼렛착즙',
      description:
        '피로회복, 장활성화, 노화방지로{{BR_MOBILE}}피부가 맑아지는{{BR_PC}}{{BR_MOBILE}}이너뷰티 특화 주스(오렌지, 당근, 사과, 유자)',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink9.webp`,
    },
    {
      id: 41,
      title: '빈속엔 12곡미숫가루',
      description:
        '빈속에 아무거나 먹지말자!{{BR_MOBILE}}달달고소한 맛으로{{BR_PC}}{{BR_MOBILE}}속까지 든든한 12곡 미숫가루~',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink10.webp`,
    },
    {
      id: 42,
      title: '코카콜라 ZERO',
      description:
        '탄산이 그리울 때~{{BR_MOBILE}}다이어터들을{{BR_PC}}위한{{BR_MOBILE}}코카콜라 ZERO',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink11.webp`,
    },
    {
      id: 43,
      title: '스프라이트 ZERO',
      description:
        '탄산이 그리울 때~{{BR_MOBILE}}다이어터들을{{BR_PC}}위한{{BR_MOBILE}}스프라이트 ZERO',
      media: null,
      category: { id: 6, name: '음료 메뉴' },
      src: `${process.env.PUBLIC_URL}/sub_2/menu/drink12.webp`,
    },
  ],
};
