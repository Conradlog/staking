import { FC, ReactNode, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { useShallowSelector, useSmoothTopScroll, useWindowState } from 'hooks';
import { useBreadcrumbs } from 'modules/layout/hooks';
import { useWalletConnectorContext } from 'services';
import { updateUserData } from 'store/user/actions';
import userSelector from 'store/user/selectors';
import { BG_MAIN, HOME_IMAGE_BG, HOME_IMAGE_BG_MOBILE } from 'theme/variables';

import { Breadcrumbs, Footer, Header, NotificationModal } from '..';

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [breadcrumbs] = useBreadcrumbs();
  const { pathname } = useLocation();
  const { width } = useWindowState();
  const dispatch = useDispatch();

  const { walletService } = useWalletConnectorContext();
  const address = useShallowSelector(userSelector.getProp('address'));

  const mediaBreakpointsValue = 900;
  const HOIME_BG = +width > mediaBreakpointsValue ? HOME_IMAGE_BG : HOME_IMAGE_BG_MOBILE;

  const firstPathAtPathname = useMemo(() => pathname.split('/')[1], [pathname]);
  const isHomePage = pathname === '/';
  useSmoothTopScroll(firstPathAtPathname);

  useEffect(() => {
    if (address.length) {
      dispatch(
        updateUserData({
          web3Provider: walletService.Web3(),
          updateParams: ['nativeBalance', 'tokenBalance', 'rankId'],
        }),
      );
    }
  }, [address.length, dispatch, walletService]);

  return (
    <Box
      sx={{
        height: '100%',
        background: isHomePage ? HOIME_BG : BG_MAIN,
        overflowX: 'hidden',
      }}
    >
      <Header />
      <NotificationModal />
      <Container
        sx={{
          pt: 15,
          px: { xs: 3, sm: 3, md: 1 },
        }}
      >
        {!isHomePage && <Breadcrumbs routesBreadcrumbs={breadcrumbs} />}
        {children}
      </Container>
      <Footer />
    </Box>
  );
};
