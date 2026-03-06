export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  team: 'yonsei' | 'korea';
  badge?: string;
  soldCount: number;
}

export const products: Product[] = [
  {
    id: 'y1',
    name: '연세 블루 말차쿠키',
    description: '연세 블루를 담은 진한 말차 두쫀쿠키. 쫀득한 식감에 말차의 깊은 풍미가 가득!',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1722969345811-653f6da3edf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGNvb2tpZXxlbnwxfHx8fDE3NzI4MjM0NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'yonsei',
    badge: 'BEST',
    soldCount: 1247,
  },
  {
    id: 'y2',
    name: '독수리 블루베리쿠키',
    description: '독수리의 날카로운 눈빛처럼 강렬한 블루베리 치즈 두쫀쿠키.',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1578294178279-bb0fac077249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlYmVycnklMjBjaGVlc2VjYWtlJTIwY29va2llfGVufDF8fHx8MTc3MjgyMzQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'yonsei',
    soldCount: 983,
  },
  {
    id: 'y3',
    name: '아이비리그 버터쿠키',
    description: '연세의 품격을 담은 클래식 버터 두쫀쿠키. 고소함의 정석.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1716441393004-ba76378fe9dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXR0ZXIlMjBjb29raWUlMjBhc3NvcnRlZHxlbnwxfHx8fDE3NzI4MjM0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'yonsei',
    soldCount: 756,
  },
  {
    id: 'y4',
    name: '신촌 딸기크림쿠키',
    description: '신촌의 달콤함을 담은 딸기크림 두쫀쿠키. 상큼하고 부드러운 맛!',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwY3JlYW0lMjBjb29raWUlMjBwaW5rfGVufDF8fHx8MTc3MjgyMzQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'yonsei',
    badge: 'NEW',
    soldCount: 621,
  },
  {
    id: 'k1',
    name: '고대 크림슨 레드벨벳',
    description: '고대의 열정을 담은 레드벨벳 두쫀쿠키. 진한 크림치즈와 환상의 조합!',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1714386148315-2f0e3eebcd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjB2ZWx2ZXQlMjBjb29raWUlMjBkZXNzZXJ0fGVufDF8fHx8MTc3MjgyMzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'korea',
    badge: 'BEST',
    soldCount: 1189,
  },
  {
    id: 'k2',
    name: '호랑이 초코쿠키',
    description: '호랑이의 힘을 담은 진한 다크초코 두쫀쿠키. 묵직한 카카오의 깊이.',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1637646681555-e866bfb1780f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjb29raWUlMjBkZXNzZXJ0JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NzI4MjM0NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'korea',
    soldCount: 1102,
  },
  {
    id: 'k3',
    name: '안암동 캐러멜쿠키',
    description: '안암동의 따뜻함을 담은 캐러멜 브라우니 두쫀쿠키. 달콤 짭짤한 중독성!',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1607920591398-1bc01ecbad17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJhbWVsJTIwYnJvd25pZSUyMGNvb2tpZXxlbnwxfHx8fDE3NzI4MjM0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'korea',
    badge: 'HOT',
    soldCount: 894,
  },
  {
    id: 'k4',
    name: '민족의 아이싱쿠키',
    description: '고려대의 자부심을 담은 특별 아이싱 두쫀쿠키. 예쁘고 맛있는 한 입!',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1767083928595-926e263febe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMGNvb2tpZSUyMGljaW5nJTIwZGVjb3JhdGVkfGVufDF8fHx8MTc3MjgyMzQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    team: 'korea',
    badge: 'NEW',
    soldCount: 567,
  },
];

export interface CartItem {
  product: Product;
  quantity: number;
}
