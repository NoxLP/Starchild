const CATEGORIES = [
  {
    name: 'all',
    text: 'Todos',
    img: require('@/../public/assets/images/categories/imgCatAll.jpg'),
    icon: require('@/../public/assets/images/catIconAll.svg')
  },
  {
    name: 'eclipsesMoon',
    text: 'Eclipses lunares',
    img: require('@/../public/assets/images/categories/imgCatEclipseMoon.png'),
    icon: require('@/../public/assets/images/12-astronomy-and-space icons/SVG/10.svg')
  },
  {
    name: 'eclipsesSun',
    text: 'Eclipses solares',
    img: require('@/../public/assets/images/categories/imgCatEclipseSun.png'),
    icon: require('@/../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-09_Eclipse.svg')
  },
  {
    name: 'planets',
    text: 'Planetas',
    img: require('@/../public/assets/images/categories/imgCatPlanets.png'),
    icon: require('@/../public/assets/images/12-astronomy-and-space icons/SVG/7.svg')
  },
  {
    name: 'meteorShowers',
    text: 'Lluvia de estrellas',
    img: require('@/../public/assets/images/categories/imgCatMeteorShower.png'),
    icon: require('@/../public/assets/images/12-astronomy-and-space icons/SVG/3.svg')
  },
  {
    name: 'comets',
    text: 'Cometas',
    img: require('@/../public/assets/images/categories/imgCatComets.png'),
    icon: require('@/../public/assets/images/12-astronomy-and-space icons/SVG/8.svg')
  },
  {
    name: 'conjunctions',
    text: 'Alineación',
    img: require('@/../public/assets/images/categories/imgCatConjunction.png'),
    icon: require('@/../public/assets/images/12-astronomy-and-space icons/SVG/2.svg')
  }
]

const MOONPHASES = {
  'New Moon': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-05_NewMoon.svg'),
    translated: 'Luna nueva'
  },
  'Waxing Crescent': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-06_WaxingCrescent.svg'),
    translated: 'Media luna creciente'
  },
  '1st Quarter': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-07_FirstQuarter.svg'),
    translated: 'Luna creciente'
  },
  'Waxing Gibbous': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-08_WaxingGibbous.svg'),
    translated: 'Gibosa creciente'
  },
  'Full Moon': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-01_FullMoon.svg'),
    translated: 'Luna llena'
  },
  'Waning Gibbous': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-02_WaningBiggous.svg'),
    translated: 'Gibosa menguante'
  },
  '3rd Quarter': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-03_ThirdQuarter.svg'),
    translated: 'Luna menguante'
  },
  'Waning Crescent': {
    icon: require('../../public/assets/images/MoonPhasesIconPack_MarkieAnnCreative/SVGs/MoonPhases-04_WaningCrescent.svg'),
    translated: 'Media luna menguante'
  }
}

export { CATEGORIES, MOONPHASES }
