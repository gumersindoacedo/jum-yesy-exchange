import type { ButtonProps } from '@mui/material';
import { Avatar, Badge, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ButtonSecondary, ButtonTransparent } from 'src/components/Button';

export interface WalletButtonProps extends ButtonProps {
  colored?: boolean;
}

export const AvatarContainer = styled('div')(() => ({
  position: 'relative',
  width: 'fit-content',
  margin: 'auto',
}));

export const WalletAvatar = styled(Avatar)(({ theme }) => ({
  margin: 'auto',
  height: 88,
  width: 88,
  '> img': {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
}));

export const ChainAvatar = styled(Avatar)(({ theme }) => ({
  height: 44,
  width: 44,
  position: 'absolute',
  padding: theme.spacing(0.75),
  right: theme.spacing(-2.25),
  bottom: -6,
  borderRadius: '24px',
  background: 'white',
  img: {
    borderRadius: '23px',
  },
}));

export const WalletButton = styled(ButtonTransparent, {
  shouldForwardProp: (prop) => prop !== 'colored',
})<WalletButtonProps>(({ theme, colored }) => ({
  borderRadius: '24px',
  padding: '10px 24px',
  width: '100%',
}));

export const WalletButtonSecondary = styled(ButtonSecondary, {
  shouldForwardProp: (prop) => prop !== 'colored',
})<WalletButtonProps>(({ theme }) => ({
  borderRadius: '24px',
  padding: '10px 24px',
  width: '100%',
  gridColumn: '2/3',
  gridRow: '2/3',
}));

export const WalletCardContainer = styled(Container)(({ theme }) => ({
  boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.04)',
  padding: '24px',
  display: 'flex',
  background: theme.palette.surface2.main,
  borderRadius: '16px',
}));

export const WalletCardButtonContainer = styled(Container)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'repeat(2, auto)',
  gridTemplateColumns: 'repeat(2, auto)',
  gridGap: '12px',
  justifyItems: 'center',
  alignItems: 'center',
  width: 'fit-content',
  padding: '0 !important',
}));

export const WalletCardBadge = styled(Badge)(({ theme }) => ({
  borderRadius: '50%',
  // overflow: 'hidden',
  '> .MuiAvatar-root': {
    overflow: 'hidden',
    '--g': '#0000 98%,#000',
    '--s': '100% 100% no-repeat',
    '--mask':
      'radial-gradient(circle 23px at calc(100% - 8px) calc(100% - 8px),var(--g)) 100% 100%/var(--s)',
    mask: 'var(--mask)',
  },
}));
