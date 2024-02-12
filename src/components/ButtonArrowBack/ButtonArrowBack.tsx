import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { SxProps, Theme } from '@mui/material';
import { useTheme } from '@mui/material';
import { getContrastAlphaColor } from 'src/utils';
import { ButtonBackArrowWrapper } from '.';

type ButtonBackArrowProps = {
  onClick?: () => void;
  styles?: SxProps<Theme>;
};

export const ButtonBackArrow: React.FC<ButtonBackArrowProps> = ({
  onClick,
  styles,
}) => {
  const theme = useTheme();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <ButtonBackArrowWrapper
      size="medium"
      aria-label="settings"
      edge="start"
      sx={{
        ...styles,
        '&:hover': {
          backgroundColor: getContrastAlphaColor(theme, '4%'),
        },
      }}
      onClick={handleClick}
    >
      <ArrowBackIcon />
    </ButtonBackArrowWrapper>
  );
};
