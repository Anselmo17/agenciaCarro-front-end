import base from "./base";

export default {
  ...base,
  overrides: {
    fontSize: 14,
    MuiButton: {
      root: {
        border: 0,
        borderRadius: 5,
        boxShadow: 'none',
        fontSize: 12
      },
      contained: {
        boxShadow: 'none',
        minWidth: 100
      },
      containedPrimary: {
        color: base.palette.primary.contrastText,
        backgroundColor: base.palette.primary.main,
        '&:hover': {
          backgroundColor: base.palette.primary.dark,
          color: base.palette.primary.contrastText,
          '@media (hover: none)': {
            backgroundColor: base.palette.primary.main,
            color: base.palette.primary.contrastText,
          },
        },
        '&:focus': {
          outline: 'none'
        }
      },
      outlined: {
        color: 'rgba(0, 0, 0, 0.4)',
        minWidth: 100
      },
      outlinedPrimary: {
        color: base.palette.primary.main,
      },
      outlinedSecondary: {
        backgroundColor: '#FFFFFF',
      }
    },
    MuiButtonBase: {
      root: {
        boxShadow: '0',
        '&:focus': {
          outline: 'none',
        }
      },
    },
    MuiListItemIcon: {
      root: {
        '&:focus': {
          outline: 'none',
        }
      },
    },
    MuiPaper: {
      root: {
        boxShadow: '0',
        margin: '15px 0',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: base.palette.text.white,
      },
      elevation1: {
        boxShadow: '0',
      },
      elevation2: {
        boxShadow: '0',
      }
    },
    MuiTypography: {
      title: {
        fontSize: 16,
        fontFamily: '"NaturaSansRegular", Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      },
      h1: {
        fontSize: 22,
        fontFamily: '"NaturaSansRegular", Helvetica, Arial, sans-serif',
        color: '#111A2B',
        letterSpacing: 0
      },
      h2: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 17,
        fontFamily: '"NaturaSansRegular", Helvetica, Arial, sans-serif',
        color: '#000000',
        letterSpacing: 0
      },
      h3: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 16,
        color: '#000000',
        letterSpacing: 0,
        textTransform: 'uppercase'
      },
      h4: {
        fontSize: 14,
        letterSpacing: 0,
        textTransform: 'uppercase'
      },
      h5: {
        fontSize: 12,
        letterSpacing: 0,
        textTransform: 'uppercase',
        fontWeight: '600'
      }
    },
    MuiInputBase: {
      root: {
        fontSize: 14
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: 14,
        color: '#000'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: base.palette.primary.main,
        backgroundColor: base.palette.text.white,
      }
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        border: 0,
      }
    },
    MuiTab: {
      root: {
        maxWidth: 'unset'
      }
    },
    MuiTable: {
      root: {
        width: '100%'
      }
    },
    MuiTableHead: {
      root: {
        backgroundColor: '#eeeeee'
      }
    },
    MuiTableCell: {
      root: {
        padding: 8,
        '&:last-child': {
          paddingRight: 8
        }
      },
      head: {
        textTransform: 'uppercase',
        color: '#000000',
        fontSize: 12,
        fontWeight: 'bold'
      }
    },
    MuiCardContent: {
      root: {
        '&:last-child': {

        }
      }
    },
    MuiCardActions: {
      root: {
        justifyContent: 'flex-end'
      }
    }
  }
};
