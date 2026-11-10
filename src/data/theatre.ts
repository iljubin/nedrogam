import type { ImageMetadata } from 'astro';
import ensembleImage from '../assets/dlaka/photo_2026-11-10_14-16-07.jpg';
import owlPerformanceImage from '../assets/dlaka/photo_2026-11-10_14-16-10.jpg';
import owlSceneImage from '../assets/dlaka/photo_2026-11-10_14-16-15.jpg';
import welcomeSignImage from '../assets/dlaka/photo_2026-11-10_14-16-18.jpg';
import preparationImage1 from '../assets/dlaka/photo_2026-11-10_18-00-42.jpg';
import preparationImage2 from '../assets/dlaka/photo_2026-11-10_18-00-44.jpg';
import preparationImage3 from '../assets/dlaka/photo_2026-11-10_18-00-50.jpg';
import preparationImage4 from '../assets/dlaka/photo_2026-11-10_18-00-52.jpg';
import preparationImage5 from '../assets/dlaka/photo_2026-11-10_18-00-54.jpg';
import preparationImage6 from '../assets/dlaka/photo_2026-11-10_18-00-56.jpg';
import preparationImage7 from '../assets/dlaka/photo_2026-11-10_18-00-57.jpg';
import owlVideo from '../assets/dlaka/video_2026-11-10_14-16-21.mp4';
import spaceVideo from '../assets/dlaka/video_2026-11-10_18-00-43.mp4';
import eveningVideo from '../assets/dlaka/video_2026-11-10_18-00-47.mp4';
import salonVideo from '../assets/dlaka/video_2026-11-10_18-00-59.mp4';
import owlPoster from '../assets/dlaka/owl-poster.jpg?url';

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
  media: TheatreMedia[];
  rightsNote?: string;
  supportInformation?: string;
  srCyrl: {
    description: string;
    credits: TheatreCredit[];
    rightsNote?: string;
  };
}

export type TheatreMedia =
  | {
      type: 'photo';
      filename: string;
      src: ImageMetadata;
      alt: string;
      srCyrlAlt: string;
    }
  | {
      type: 'video';
      filename: string;
      src: string;
      poster?: string;
      alt: string;
      srCyrlAlt: string;
      caption: { sl: string; srCyrl: string };
    };

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
    media: [
      {
        type: 'photo',
        filename: 'photo_2026-11-10_14-16-07.jpg',
        src: ensembleImage,
        alt: 'Igralci Dlaka se po predstavi priklonijo občinstvu.',
        srCyrlAlt: 'Глумци Длаке се после представе поклањају публици.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_14-16-10.jpg',
        src: owlPerformanceImage,
        alt: 'Sova v kostumu na odru z igralko v ozadju.',
        srCyrlAlt: 'Сова у костиму на сцени, са глумицом у позадини.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_14-16-15.jpg',
        src: owlSceneImage,
        alt: 'Sova v kostumu in igralka med prizorom predstave.',
        srCyrlAlt: 'Сова у костиму и глумица током сцене из представе.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_14-16-18.jpg',
        src: welcomeSignImage,
        alt: 'Kredna napisa pozdravljata obiskovalce gledališča Dlaka.',
        srCyrlAlt: 'Кредом исписани натписи поздрављају посетиоце позоришта Длака.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_18-00-42.jpg',
        src: preparationImage1,
        alt: 'Skupina se zbere okoli papirnatih trakov na tleh.',
        srCyrlAlt: 'Група се окупља око папирних трака на поду.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_18-00-44.jpg',
        src: preparationImage2,
        alt: 'Oseba v zeleni kostumski glavi pripravlja papirnate okraske.',
        srCyrlAlt: 'Особа са зеленом костимском главом припрема папирне украсе.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_18-00-50.jpg',
        src: preparationImage3,
        alt: 'Priprava kostumskih ušes pred ogledalom.',
        srCyrlAlt: 'Припрема костимских ушију испред огледала.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_18-00-52.jpg',
        src: preparationImage4,
        alt: 'Oseba pred ogledalom nosi kostumska ušesa in poslikan smrček.',
        srCyrlAlt: 'Особа испред огледала носи костимске уши и насликану њушкицу.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_18-00-54.jpg',
        src: preparationImage5,
        alt: 'Veje zelenja v kartonski škatli.',
        srCyrlAlt: 'Гранчице зеленила у картонској кутији.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_18-00-56.jpg',
        src: preparationImage6,
        alt: 'Oseba nosi kostumska ušesa in poslikan smrček.',
        srCyrlAlt: 'Особа носи костимске уши и насликану њушкицу.',
      },
      {
        type: 'photo',
        filename: 'photo_2026-11-10_18-00-57.jpg',
        src: preparationImage7,
        alt: 'Nastopajoča vadi prizor na tleh ob črnem gledališkem elementu.',
        srCyrlAlt: 'Извођачица увежбава сцену на поду поред црног позоришног елемента.',
      },
      {
        type: 'video',
        filename: 'video_2026-11-10_14-16-21.mp4',
        src: owlVideo,
        poster: owlPoster,
        alt: 'Sova v kostumu pozdravlja občinstvo.',
        srCyrlAlt: 'Сова у костиму поздравља публику.',
        caption: {
          sl: 'Naša sova pozdravlja občinstvo!',
          srCyrl: 'Наша сова поздравља публику!',
        },
      },
      {
        type: 'video',
        filename: 'video_2026-11-10_18-00-43.mp4',
        src: spaceVideo,
        alt: 'Pogled na prostor salona Malter.',
        srCyrlAlt: 'Поглед на простор салона Малтер.',
        caption: {
          sl: 'Pogled na prostor salona Malter.',
          srCyrl: 'Поглед на простор салона Малтер.',
        },
      },
      {
        type: 'video',
        filename: 'video_2026-11-10_18-00-47.mp4',
        src: eveningVideo,
        alt: 'Kratek videoposnetek iz prostora salona Malter.',
        srCyrlAlt: 'Кратак видео-снимак из простора салона Малтер.',
        caption: {
          sl: 'Kratek videoposnetek iz prostora salona Malter.',
          srCyrl: 'Кратак видео-снимак из простора салона Малтер.',
        },
      },
      {
        type: 'video',
        filename: 'video_2026-11-10_18-00-59.mp4',
        src: salonVideo,
        alt: 'Frizerski stoli in oprema v prostoru salona Malter.',
        srCyrlAlt: 'Фризерске столице и опрема у простору салона Малтер.',
        caption: {
          sl: 'Frizerski stoli in oprema v prostoru salona Malter.',
          srCyrl: 'Фризерске столице и опрема у простору салона Малтер.',
        },
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
