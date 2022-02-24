const bgsModule = import.meta.globEager("/src/assets/imgs/fox-*.png");

const bgs = Object.values(bgsModule).map((el) => el.default);

export const HOME_SLOGAN = [
  {
    title: "健康卫生",
    slogan:
      "餐厅做到自检自查，每日厨房卫生，餐饮区域卫生都有专人负责检查，做到干净卫生，是保障客户的健康的前提。",
    path: "https://assets5.lottiefiles.com/packages/lf20_g0aprwun.json",
  },
  {
    title: "服务至上",
    slogan: "满足每个客户的饮食需求，良好的服务是我们提供的最低保障。",
    path: "https://assets6.lottiefiles.com/packages/lf20_rg69wuwj.json",
  },
  {
    title: "精选食材",
    slogan:
      "餐厅做到自检自查，每日厨房卫生，餐饮区域卫生都有专人负责检查，做到干净卫生，是保障客户的健康的前提。",
    path: "https://assets5.lottiefiles.com/packages/lf20_mZWdIm.json",
  },
  {
    title: "美味创新",
    slogan:
      "餐厅做到自检自查，每日厨房卫生，餐饮区域卫生都有专人负责检查，做到干净卫生，是保障客户的健康的前提。",
    path: "https://assets9.lottiefiles.com/packages/lf20_2rgledpu.json",
  },
];
