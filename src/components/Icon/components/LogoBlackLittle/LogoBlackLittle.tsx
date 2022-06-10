import { FC } from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';

export const LogoBlackLittle: FC<SvgIconProps> = ({ sx, ...props }) => (
  <SvgIcon
    {...props}
    viewBox="0 0 119 34"
    sx={{
      ...sx,
      width: '119px',
      height: '34px',
    }}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.13224 4.31568L0.126822 8.34798L0.0632901 16.7264L0 25.1051L7.14287 29.1939C11.0715 31.4428 14.4155 33.28 14.5742 33.2769C14.7326 33.2736 18.0148 31.4572 21.8678 29.2403L28.8732 25.2094L28.9367 16.8286L29 8.44774L21.8571 4.35898C17.9285 2.11007 14.5845 0.273095 14.4258 0.276922C14.2674 0.280511 10.9852 2.09811 7.13224 4.31568ZM19.7253 8.10063L24.6458 10.9074L24.6417 16.7724L24.6373 22.6373L19.7973 25.3884C17.1352 26.9014 14.8012 28.1741 14.6104 28.2162C14.4196 28.2585 12.0346 27.0206 9.31068 25.4652L4.35785 22.6373L4.36099 16.7764L4.36413 10.9155L9.25077 8.11881C11.9387 6.58062 14.2877 5.31586 14.4713 5.30797C14.6546 5.30031 17.0191 6.55694 19.7253 8.10063ZM10.9393 10.9976L7.74074 12.8293L7.73929 16.7764L7.73784 20.7236L10.9248 22.5177C12.6776 23.5045 14.2357 24.3432 14.3872 24.3817C14.5916 24.4334 20.7041 21.1511 21.2259 20.7092C21.3549 20.6001 18.7644 19.1734 18.4325 19.1708C18.2701 19.1696 17.3208 19.6468 16.3226 20.231L14.508 21.2936L12.5713 20.1746L10.6349 19.0555V16.7764V14.4974L12.5713 13.3783L14.508 12.2592L16.3226 13.3219C17.3208 13.906 18.2701 14.3833 18.4325 14.3821C18.7644 14.3794 21.3549 12.9527 21.2259 12.8437C20.7906 12.475 14.6297 9.12665 14.4176 9.14363C14.2635 9.15559 12.6984 9.98999 10.9393 10.9976Z"
      fill="black"
    />
    <path
      d="M44.5284 26.0521C43.2086 26.0521 42.0722 25.7532 41.1193 25.1555C40.1723 24.5518 39.4444 23.7202 38.9354 22.6608C38.4264 21.6014 38.1719 20.3881 38.1719 19.0209C38.1719 17.6359 38.4323 16.4138 38.9531 15.3543C39.474 14.289 40.2079 13.4574 41.1548 12.8597C42.1018 12.2619 43.2174 11.963 44.5018 11.963C45.5375 11.963 46.4608 12.1553 47.2717 12.5401C48.0825 12.9188 48.7365 13.4515 49.2337 14.1381C49.7367 14.8246 50.0356 15.6266 50.1303 16.544H47.5469C47.4048 15.9048 47.0793 15.3543 46.5703 14.8927C46.0672 14.431 45.3925 14.2002 44.5462 14.2002C43.8063 14.2002 43.1583 14.3955 42.6019 14.7861C42.0515 15.1709 41.6224 15.7213 41.3146 16.4374C41.0069 17.1477 40.853 17.9881 40.853 18.9587C40.853 19.9531 41.0039 20.8112 41.3058 21.5333C41.6076 22.2554 42.0337 22.8147 42.5842 23.2112C43.1405 23.6078 43.7945 23.806 44.5462 23.806C45.0492 23.806 45.505 23.7143 45.9134 23.5308C46.3277 23.3414 46.6739 23.0721 46.9521 22.7229C47.2362 22.3737 47.4344 21.9535 47.5469 21.4623H50.1303C50.0356 22.3442 49.7486 23.1313 49.2692 23.8238C48.7898 24.5163 48.1476 25.0608 47.3427 25.4573C46.5437 25.8539 45.6056 26.0521 44.5284 26.0521ZM52.969 25.7769V12.1406H55.5347V14.3067H55.6768C55.9253 13.5728 56.3633 12.9958 56.9907 12.5756C57.624 12.1494 58.3401 11.9364 59.1391 11.9364C59.3048 11.9364 59.5001 11.9423 59.7251 11.9541C59.9559 11.966 60.1364 11.9808 60.2666 11.9985V14.5376C60.1601 14.508 59.9707 14.4754 59.6984 14.4399C59.4262 14.3985 59.1539 14.3778 58.8817 14.3778C58.2543 14.3778 57.695 14.5109 57.2037 14.7773C56.7184 15.0377 56.3337 15.4017 56.0496 15.8692C55.7655 16.3309 55.6235 16.8576 55.6235 17.4495V25.7769H52.969ZM67.8194 26.0521C66.541 26.0521 65.4254 25.7592 64.4725 25.1732C63.5196 24.5873 62.7798 23.7676 62.253 22.7141C61.7263 21.6606 61.4629 20.4295 61.4629 19.0209C61.4629 17.6063 61.7263 16.3694 62.253 15.3099C62.7798 14.2505 63.5196 13.4278 64.4725 12.8419C65.4254 12.256 66.541 11.963 67.8194 11.963C69.0978 11.963 70.2135 12.256 71.1664 12.8419C72.1193 13.4278 72.8591 14.2505 73.3858 15.3099C73.9126 16.3694 74.176 17.6063 74.176 19.0209C74.176 20.4295 73.9126 21.6606 73.3858 22.7141C72.8591 23.7676 72.1193 24.5873 71.1664 25.1732C70.2135 25.7592 69.0978 26.0521 67.8194 26.0521ZM67.8283 23.8238C68.6569 23.8238 69.3435 23.6048 69.888 23.1668C70.4325 22.7289 70.8349 22.1459 71.0953 21.4179C71.3617 20.6899 71.4949 19.8879 71.4949 19.012C71.4949 18.142 71.3617 17.343 71.0953 16.615C70.8349 15.8811 70.4325 15.2922 69.888 14.8483C69.3435 14.4044 68.6569 14.1825 67.8283 14.1825C66.9938 14.1825 66.3013 14.4044 65.7509 14.8483C65.2064 15.2922 64.801 15.8811 64.5346 16.615C64.2742 17.343 64.144 18.142 64.144 19.012C64.144 19.8879 64.2742 20.6899 64.5346 21.4179C64.801 22.1459 65.2064 22.7289 65.7509 23.1668C66.3013 23.6048 66.9938 23.8238 67.8283 23.8238ZM79.7934 17.6803V25.7769H77.1389V12.1406H79.6869V14.36H79.8556C80.1692 13.6379 80.6605 13.0579 81.3293 12.62C82.004 12.182 82.8533 11.963 83.8772 11.963C84.8064 11.963 85.6202 12.1583 86.3186 12.5489C87.017 12.9336 87.5586 13.5077 87.9433 14.2712C88.328 15.0347 88.5203 15.9787 88.5203 17.1033V25.7769H85.8659V17.4229C85.8659 16.4345 85.6084 15.6621 85.0935 15.1058C84.5786 14.5435 83.8713 14.2624 82.9717 14.2624C82.3561 14.2624 81.8087 14.3955 81.3293 14.6619C80.8558 14.9282 80.48 15.3188 80.2018 15.8337C79.9295 16.3427 79.7934 16.9583 79.7934 17.6803ZM97.8243 26.0521C96.5459 26.0521 95.4302 25.7592 94.4774 25.1732C93.5245 24.5873 92.7847 23.7676 92.2579 22.7141C91.7311 21.6606 91.4678 20.4295 91.4678 19.0209C91.4678 17.6063 91.7311 16.3694 92.2579 15.3099C92.7847 14.2505 93.5245 13.4278 94.4774 12.8419C95.4302 12.256 96.5459 11.963 97.8243 11.963C99.1027 11.963 100.218 12.256 101.171 12.8419C102.124 13.4278 102.864 14.2505 103.391 15.3099C103.917 16.3694 104.181 17.6063 104.181 19.0209C104.181 20.4295 103.917 21.6606 103.391 22.7141C102.864 23.7676 102.124 24.5873 101.171 25.1732C100.218 25.7592 99.1027 26.0521 97.8243 26.0521ZM97.8332 23.8238C98.6618 23.8238 99.3483 23.6048 99.8928 23.1668C100.437 22.7289 100.84 22.1459 101.1 21.4179C101.367 20.6899 101.5 19.8879 101.5 19.012C101.5 18.142 101.367 17.343 101.1 16.615C100.84 15.8811 100.437 15.2922 99.8928 14.8483C99.3483 14.4044 98.6618 14.1825 97.8332 14.1825C96.9987 14.1825 96.3062 14.4044 95.7558 14.8483C95.2113 15.2922 94.8058 15.8811 94.5395 16.615C94.2791 17.343 94.1489 18.142 94.1489 19.012C94.1489 19.8879 94.2791 20.6899 94.5395 21.4179C94.8058 22.1459 95.2113 22.7289 95.7558 23.1668C96.3062 23.6048 96.9987 23.8238 97.8332 23.8238ZM117.362 15.4697L114.956 15.8959C114.856 15.5881 114.696 15.2951 114.477 15.017C114.264 14.7388 113.974 14.5109 113.607 14.3334C113.24 14.1558 112.781 14.067 112.231 14.067C111.479 14.067 110.852 14.2357 110.349 14.5731C109.846 14.9045 109.594 15.3336 109.594 15.8604C109.594 16.3161 109.763 16.683 110.1 16.9612C110.438 17.2394 110.982 17.4673 111.734 17.6448L113.9 18.142C115.155 18.432 116.09 18.8788 116.705 19.4825C117.321 20.0862 117.629 20.8704 117.629 21.8352C117.629 22.6519 117.392 23.3799 116.918 24.0191C116.451 24.6524 115.797 25.1495 114.956 25.5106C114.122 25.8716 113.154 26.0521 112.053 26.0521C110.526 26.0521 109.28 25.7266 108.316 25.0756C107.351 24.4186 106.759 23.4864 106.54 22.279L109.106 21.8884C109.266 22.5572 109.594 23.0633 110.091 23.4065C110.588 23.7439 111.237 23.9126 112.036 23.9126C112.906 23.9126 113.601 23.7321 114.122 23.371C114.643 23.0041 114.903 22.5572 114.903 22.0305C114.903 21.6043 114.743 21.2463 114.424 20.9562C114.11 20.6662 113.628 20.4473 112.977 20.2993L110.668 19.7933C109.396 19.5032 108.455 19.0416 107.845 18.4083C107.241 17.775 106.94 16.9731 106.94 16.0024C106.94 15.1975 107.165 14.4932 107.614 13.8895C108.064 13.2858 108.686 12.8153 109.479 12.4779C110.272 12.1346 111.18 11.963 112.204 11.963C113.678 11.963 114.838 12.2826 115.684 12.9218C116.531 13.5551 117.09 14.4044 117.362 15.4697Z"
      fill="black"
    />
  </SvgIcon>
);
