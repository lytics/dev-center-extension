import { styled } from '@mui/material/styles';
import { Stack, Card, Typography, Link } from '@mui/material';
import { appColors } from '@root/src/theme/palette';

// Common Container - Used by both DisabledState and EnabledState
export const Container = styled(Stack)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(1.5),
  gap: theme.spacing(3),
}));

// Base Card - Common card styling used by both states
export const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  backgroundColor: appColors.common.white,
  borderRadius: theme.spacing(1),
  boxShadow: 'none',
  border: 'none',
  cursor: 'default',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    transform: 'none',
  },
}));

// Documentation Card - Used for bottom documentation sections in both states
export const DocCard = styled(StyledCard)(({ theme }) => ({
  padding: theme.spacing(2.5),
}));

// Typography Components - Shared text styling
export const Title = styled(Typography)(() => ({
  fontSize: appColors.common.fontSize.base,
  fontWeight: appColors.common.fontWeight.semiBold,
}));

export const Description = styled(Typography)(() => ({
  lineHeight: appColors.common.lineHeight.tight,
  fontSize: appColors.common.fontSize.small,
  color: appColors.common.colors.textSecondary,
  fontWeight: appColors.common.fontWeight.medium,
}));

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'underline',
  cursor: 'pointer',
  color: appColors.common.colors.textSecondary,
}));
