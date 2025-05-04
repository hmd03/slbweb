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
}

const menusByCategory: Record<number, MenuResponse[]> = {
    1: [
        // 샐러드 한상
        {
            id: 1,
            title: '힘내소부채살 샐러드한상',
            description:
                '스테미나 부족한 날? 육즙가득 고소한\n부채살로 에너지 충전! 힘내소부채살 샐러드',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 2,
            title: '힘돼지목살 샐러드한상',
            description:
                '스테미나 부족한 날? 풍미가득 간장숙성 목살로\n에너지 충전! 힘돼지목살 샐러드',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 3,
            title: '꾸덕리코타 샐러드한상',
            description:
                '주목! 리코타 맛은 SLB가 기준! 매일 제조·숙성,\n마성의 꾸덕리코타 샐러드(계란X)',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 4,
            title: '훈제당한연어 샐러드한상',
            description:
                '주인장의 섬세한 손질로 감칠맛을 높인\n부드럽고 찰진 훈제당한연어 샐러드!',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 5,
            title: '몸보신오리 샐러드한상',
            description:
                '맛은 기본! 훈제오리&유러피안채소로\n체중조절과 영양섭취 삽가능~ 몸보신오리 샐러드!',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 6,
            title: '힙한바질파스타 샐러드한상',
            description:
                '바질=향긋함! 올리브오일=고소함! 치즈=풍미!\n세련된 맛궁합! 힙한바질파스타 샐러드!',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 7,
            title: '촉촉닭가슴살 샐러드한상',
            description:
                '촉촉하고 부드럽게 수비드한 닭가슴살과 아삭한 채소의 조합!\n질리지 않는 맛 촉촉닭가슴살 샐러드',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 8,
            title: '우삼겹비빔게티 샐러드한상',
            description:
                '담백한 스파게티&고소한 우삼겹&신선한 채소를\n단짠맵 소스에 비벼면 최강의 맛경험 보장!',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 9,
            title: '쌈보로제육 샐러드한상',
            description:
                '중독적인 맛! 약고추장으로 조리한 소보로제육에\n신선한 채소를 더해 또띠아에 쌈싸먹는 샐러드',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
        {
            id: 10,
            title: '애간장오븐닭 샐러드한상',
            description:
                '담백함에 반했다! 부드러운 유러피안채소,\n특제 저염간장으로 더 촉촉한 오븐치킨 샐러드',
            media: null,
            category: { id: 1, name: '샐러드 한상' },
        },
    ],

    2: [
        // 포케 한상
        {
            id: 11,
            title: '힘내소부채살 포케한상',
            description:
                '스테미나 부족한 날? 15곡 잡곡밥을 더해\n더 고소한 육즙가득 힘내소부채살 포케',
            media: null,
            category: { id: 2, name: '포케 한상' },
        },
        {
            id: 12,
            title: '힘돼지목살 포케한상',
            description:
                '스테미나 부족한 날? 15곡 잡곡밥을 더해\n풍미가득한 간장숙성 힘돼지목살 포케',
            media: null,
            category: { id: 2, name: '포케 한상' },
        },
        {
            id: 13,
            title: '애간장오븐닭 포케한상',
            description:
                '담백함에 반했다! 부드러운 유러피안채소,\n특제 저염간장으로 더 촉촉한 오븐치킨 포케',
            media: null,
            category: { id: 2, name: '포케 한상' },
        },
        {
            id: 14,
            title: '입맛돈닭갈비 포케한상',
            description:
                '집나간 입맛도 돌아온다는 중독적인 맛 입맛돈닭갈비!\n잡곡밥과 함께라서 더 중독적인 포케',
            media: null,
            category: { id: 2, name: '포케 한상' },
        },
        {
            id: 15,
            title: '몸보신오리 포케한상',
            description:
                '맛은 기본! 훈제오리 & 잡곡밥으로\n체중조절과 영양섭취까지 삽가능~ 몸보신오리 포케',
            media: null,
            category: { id: 2, name: '포케 한상' },
        },
        {
            id: 16,
            title: '촉촉닭가슴살 포케한상',
            description:
                '수비드로 질리지 않는 담백함과 촉촉닭가슴살 & 잡곡밥에\n고소함을 더해 맛을 완성한 포케',
            media: null,
            category: { id: 2, name: '포케 한상' },
        },
        {
            id: 17,
            title: '통살가리비빔 포케한상',
            description:
                '씹을수록 오감 만족! 먹고 또 먹게하는 통살가리비와\n고소한 잡곡밥을 비벼먹는 비법 포케!',
            media: null,
            category: { id: 2, name: '포케 한상' },
        },
    ],

    3: [
        // 랩 메뉴
        {
            id: 18,
            title: '입맛이싹~에그마요랩',
            description:
                '고민하지마! 입안 가득 퍼지는\n달콤한 고소함을 먹어봐! 입맛이싹~에그마요랩!',
            media: null,
            category: { id: 3, name: '랩 메뉴' },
        },
        {
            id: 19,
            title: '침샘이싹~제육소보로랩',
            description:
                '침고이는 맛! 한번만 먹을 수 없는 맛!\n안먹으면 후회하는 침샘이싹~제육소보로랩!',
            media: null,
            category: { id: 3, name: '랩 메뉴' },
        },
        {
            id: 20,
            title: '바질이싹~닭가슴살랩',
            description:
                '향으로 먹고! 맛으로 먹는!\n바질가득 촉촉 무염 수비드 바질이싹~닭가슴살랩!',
            media: null,
            category: { id: 3, name: '랩 메뉴' },
        },
        {
            id: 21,
            title: '군침이싹~불고기랩',
            description:
                '애 어른 가리지 않는 인기! 군침이 싹도는\n불고기&신선한 채소의 꿀조합! 군침이싹~불고기랩!',
            media: null,
            category: { id: 3, name: '랩 메뉴' },
        },
    ],

    4: [
        // 샌드 메뉴
        {
            id: 22,
            title: '뚱에샌(뚱뚱에그마요 쨈샌드)',
            description:
                '고소함에 고소함을 더했다! 뚱에그마요와\n달콤한 달콤한 잼의 미친조합 뚱에샌!',
            media: null,
            category: { id: 4, name: '샌드 메뉴' },
        },
        {
            id: 23,
            title: '리단샌(리코타VS단호박샌드)',
            description:
                '풍미가득 크리미한 수제 리코타치즈 VS\n은은한 단맛의 최강자 단호박의 중독적인 조합 리단샌!',
            media: null,
            category: { id: 4, name: '샌드 메뉴' },
        },
        {
            id: 24,
            title: '아치샌(아보카도VS치즈샌드)',
            description:
                '부드러운 고소함 아보카도 VS 풍미가득 치즈\n맛잘알 특제 조합 아치샌!',
            media: null,
            category: { id: 4, name: '샌드 메뉴' },
        },
    ],

    5: [
        // 추가 메뉴
        {
            id: 25,
            title: '애들입맛 불고기주먹밥',
            description:
                '영양가득 15곡 잡곡밥 & 단짠단짠 불고기!\n숟가락이 멈추지 않는 애들입맛 불고기주먹밥!',
            media: null,
            category: { id: 5, name: '추가 메뉴' },
        },
        {
            id: 26,
            title: '밥도둑 제육주먹밥',
            description:
                '영양가득 15곡 잡곡밥 & 단짠매콤 제육소보루!\n식욕자극 참을 수 없는 밥도둑 제육주먹밥!',
            media: null,
            category: { id: 5, name: '추가 메뉴' },
        },
        {
            id: 27,
            title: '살안쩌! 호밀브레드',
            description:
                '살 걱정 끝~ 포만감 UP! 다이어트 GOOD!\n추가해도~ 살안쩌! 호밀브레드',
            media: null,
            category: { id: 5, name: '추가 메뉴' },
        },
        {
            id: 28,
            title: '청양파 계란국',
            description:
                '밥 먹을 때 국룰! 국물은 많아야 제맛!\n담백하고 뜨끈하게 청양파 계란국!',
            media: null,
            category: { id: 5, name: '추가 메뉴' },
        },
        {
            id: 29,
            title: '크리미 양송이스프',
            description:
                '따뜻함에 마음까지 부드럽게 채워주는\n크리미한 맛~ 크리미 양송이스프',
            media: null,
            category: { id: 5, name: '추가 메뉴' },
        },
        {
            id: 30,
            title: '비프스튜 굴라쉬',
            description:
                '입안가득 퍼지는 토마토의 상큼함,\n버터와 소고기의 풍미까지~ 비프스튜 굴라쉬',
            media: null,
            category: { id: 5, name: '추가 메뉴' },
        },
        {
            id: 31,
            title: '도토리 떡갈비',
            description:
                '도토리를 넣어 더 건강한 육즙가득 떡갈비와\n양파, 크림소스의 환상적인 궁합!',
            media: null,
            category: { id: 5, name: '추가 메뉴' },
        },
    ],
};
