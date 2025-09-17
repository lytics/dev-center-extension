import type { Components, Theme } from '@mui/material/styles';
import { figmaColors } from './palette';

// Component style overrides to match Figma design
export const components: Components<Omit<Theme, 'components'>> = {
  // Global CSS baseline
  MuiCssBaseline: {
    styleOverrides: {
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      body: {
        margin: 0,
        padding: 0,
      },
      // Custom scrollbar styling
      '*::-webkit-scrollbar': {
        width: '6px',
        height: '6px',
      },
      '*::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: figmaColors.neutral[300],
        borderRadius: '3px',
        '&:hover': {
          backgroundColor: figmaColors.neutral[400],
        },
      },
    },
  },

  // Button customizations
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        textTransform: 'none',
        fontWeight: 500,
        boxShadow: 'none',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
          transform: 'translateY(-1px)',
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      },
      contained: {
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      },
      outlined: {
        borderWidth: '1.5px',
        '&:hover': {
          borderWidth: '1.5px',
        },
      },
    },
  },

  // Card customizations
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: '12px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24)',
          transform: 'translateY(-2px)',
        },
      },
    },
  },

  // Paper customizations
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
      },
      elevation1: {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
      },
      elevation2: {
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
      },
    },
  },

  // Tab customizations
  MuiTab: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: '6px',
        margin: '0 2px',
        minHeight: '40px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
        '&.Mui-selected': {
          fontWeight: 600,
        },
      },
    },
  },

  // Tabs customizations
  MuiTabs: {
    styleOverrides: {
      root: {
        minHeight: '48px',
      },
      indicator: {
        height: '3px',
        borderRadius: '2px',
      },
    },
  },

  // TextField/Input customizations
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: '8px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: '2px',
            },
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },

  // Chip customizations
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: '6px',
        fontWeight: 500,
      },
    },
  },

  // Dialog customizations
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.16)',
      },
    },
  },

  // Menu customizations
  MuiMenu: {
    styleOverrides: {
      paper: {
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        marginTop: '4px',
      },
    },
  },

  // MenuItem customizations
  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
        margin: '2px 4px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateX(2px)',
        },
      },
    },
  },

  // Tooltip customizations
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: '6px',
        fontSize: '0.75rem',
        fontWeight: 500,
        padding: '8px 12px',
      },
    },
  },

  // COMMENTED OUT: Switch customizations (moved to individual Toggle component to avoid conflicts)
  // MuiSwitch: {
  //   styleOverrides: {
  //     root: {
  //       width: '42px',
  //       height: '26px',
  //       padding: 0,
  //       '& .MuiSwitch-switchBase': {
  //         padding: 0,
  //         margin: '2px',
  //         transitionDuration: '300ms',
  //         '&.Mui-checked': {
  //           transform: 'translateX(16px)',
  //           color: '#fff',
  //           '& + .MuiSwitch-track': {
  //             opacity: 1,
  //             border: 0,
  //           },
  //         },
  //       },
  //       '& .MuiSwitch-thumb': {
  //         boxSizing: 'border-box',
  //         width: '22px',
  //         height: '22px',
  //       },
  //       '& .MuiSwitch-track': {
  //         borderRadius: '13px',
  //         opacity: 1,
  //         transition: 'background-color 300ms ease-in-out',
  //       },
  //     },
  //   },
  // },

  // Accordion customizations
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: '8px !important',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
        '&:before': {
          display: 'none',
        },
        '&.Mui-expanded': {
          margin: '8px 0',
        },
      },
    },
  },

  // Loading/Progress customizations
  MuiCircularProgress: {
    styleOverrides: {
      root: {
        animationDuration: '1.5s',
      },
    },
  },

  // Divider customizations
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: 'rgba(0, 0, 0, 0.08)',
      },
    },
  },
};
