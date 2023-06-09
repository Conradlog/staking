import { routes } from 'appConstants/routes';
import { CoinIcon, IdoIcon } from 'components/Icon/components';

export const accountLinkItems = [
  {
    title: 'My Investments',
    Icon: CoinIcon,
    link: routes['my-investments'].root.path,
  },
  {
    title: 'My IDOs',
    Icon: IdoIcon,
    link: routes['my-idos'].root.path,
  },
];

export const buyCryptoLink = 'https://app.uniswap.org/';
