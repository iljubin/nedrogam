import type { ImageMetadata } from 'astro';
import ensembleImage from '../assets/dlaka/photo_2026-11-10_14-16-07.jpg';
import owlPerformanceImage from '../assets/dlaka/photo_2026-11-10_14-16-10.jpg';
import owlSceneImage from '../assets/dlaka/photo_2026-11-10_14-16-15.jpg';
import welcomeSignImage from '../assets/dlaka/photo_2026-11-10_14-16-18.jpg';

export interface TheatreCredit {
  label: string;
  value: string;
}

export interface TheatreProduction {
  slug: string;
  title: string;
  description: string;
  status: 'uprizorjena' | 'v pripravi';
  credits: TheatreCredit[];
  images: {
    src: ImageMetadata;
    alt: string;
    srCyrlAlt: string;
    caption?: { sl: string; srCyrl: string };
  }[];
  rightsNote?: string;
  supportInformation?: string;
  srCyrl: {
    description: string;
    credits: TheatreCredit[];
    rightsNote?: string;
  };
}

/** Add only verified production information and locally stored, rights-cleared images. */
export const productions: TheatreProduction[] = [
  {
    slug: 'grozon',
    title: 'Grozon',
    description:
      'Ljubiteljska gledališka uprizoritev po motivih priljubljene otroške slikanice Julie Donaldson, v kateri se majhna miška z iznajdljivostjo znajde v svetu velikih gozdnih živali.',
    status: 'uprizorjena',
    credits: [
      { label: 'Izvirno delo', value: 'Julia Donaldson, The Gruffalo' },
      { label: 'Srbski prevod', value: 'Zoran Penevski' },
      { label: 'Gledališka priredba', value: 'Dlaka' },
    ],
    images: [
      {
        src: ensembleImage,
        alt: 'Igralci Dlaka se po predstavi priklonijo občinstvu.',
        srCyrlAlt: 'Глумци Длаке се после представе поклањају публици.',
      },
      {
        src: owlPerformanceImage,
        alt: 'Sova v kostumu na odru z igralko v ozadju.',
        srCyrlAlt: 'Сова у костиму на сцени, са глумицом у позадини.',
      },
      {
        src: owlSceneImage,
        alt: 'Sova v kostumu in igralka med prizorom predstave.',
        srCyrlAlt: 'Сова у костиму и глумица током сцене из представе.',
      },
      {
        src: welcomeSignImage,
        alt: 'Kredna napisa pozdravljata obiskovalce gledališča Dlaka.',
        srCyrlAlt: 'Кредом исписани натписи поздрављају посетиоце позоришта Длака.',
      },
    ],
    rightsNote:
      'Pravice za gledališko priredbo in uporabo prevoda se še usklajujejo. Scenarij in celoten posnetek zato nista objavljena.',
    srCyrl: {
      description:
        'Аматерска позоришна представа настала по мотивима омиљене дечје сликовнице Julia Donaldson, у којој се мали миш довитљивошћу сналази међу великим шумским животињама.',
      credits: [
        { label: 'Оригинално дело', value: 'Julia Donaldson, The Gruffalo' },
        { label: 'Превод на српски', value: 'Zoran Penevski' },
        { label: 'Позоришна адаптација', value: 'Dlaka' },
      ],
      rightsNote:
        'Права за позоришну адаптацију и употребу превода још се усаглашавају. Сценарио и целокупан снимак зато нису објављени.',
    },
  },
];
