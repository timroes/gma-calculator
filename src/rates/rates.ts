export interface Rate {
  since: number;
  full: number;
  reduced: number;
}

interface Rates {
  fromYear: number;
  toYear: number;
  countries: { [year: string]: Rate[] };
}

export const rates: Rates = {
  fromYear: 2017,
  toYear: 2022,
  countries: { 
    "AD": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      },
      {
        "since": 2021,
        "full": 41,
        "reduced": 28 
      }
    ], 
    "AE": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      },
      {
        "since": 2020,
        "full": 65,
        "reduced": 44
      }
    ], 
    "AF": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      } 
    ], 
    "AG": [ 
      { 
        "since": 2017, 
        "full": 53, 
        "reduced": 36 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "AL": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      },
      {
        "since": 2021,
        "full": 27,
        "reduced": 18
      } 
    ], 
    "AM": [ 
      { 
        "since": 2017, 
        "full": 23, 
        "reduced": 16 
      },
      {
        "since": 2020,
        "full": 24,
        "reduced": 16,
      }
    ], 
    "AO": [ 
      { 
        "since": 2017, 
        "full": 77, 
        "reduced": 52 
      },
      {
        "since": 2020,
        "full": 52,
        "reduced": 35
      }
    ], 
    "AR": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      },
      {
        "since": 2020,
        "full": 35,
        "reduced": 24,
      }
    ], 
    "AT": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      }, 
      { 
        "since": 2019, 
        "full": 40, 
        "reduced": 27 
      } 
    ], 
    "AU": [ 
      { 
        "since": 2017, 
        "full": 56, 
        "reduced": 37 
      }, 
      { 
        "since": 2018, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "AU_CA": [ 
      { 
        "since": 2017, 
        "full": 58, 
        "reduced": 39 
      }, 
      { 
        "since": 2018, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "AU_SY": [ 
      { 
        "since": 2017, 
        "full": 59, 
        "reduced": 40 
      }, 
      { 
        "since": 2018, 
        "full": 68, 
        "reduced": 45 
      } 
    ], 
    "AZ": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      } 
    ], 
    "BA": [ 
      { 
        "since": 2017, 
        "full": 18, 
        "reduced": 12 
      },
      {
        "since": 2020,
        "full": 23,
        "reduced": 16,
      }
    ], 
    "BB": [ 
      { 
        "since": 2017, 
        "full": 58, 
        "reduced": 39 
      }, 
      { 
        "since": 2019, 
        "full": 52, 
        "reduced": 35 
      } 
    ], 
    "BD": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      },
      {
        "since": 2020,
        "full": 50,
        "reduced": 33,
      }
    ], 
    "BE": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      }, 
      { 
        "since": 2018, 
        "full": 42, 
        "reduced": 28 
      } 
    ], 
    "BF": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      },
      {
        "since": 2020,
        "full": 38,
        "reduced": 25,
      }
    ], 
    "BG": [ 
      { 
        "since": 2017, 
        "full": 22, 
        "reduced": 15 
      } 
    ], 
    "BH": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "BI": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      },
      {
        "since": 2021,
        "full": 36,
        "reduced": 24
      }
    ], 
    "BJ": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      },
      {
        "since": 2020,
        "full": 52,
        "reduced": 35,
      }
    ], 
    "BN": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      },
      {
        "since": 2020,
        "full": 52,
        "reduced": 35,
      }
    ], 
    "BO": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      } 
    ], 
    "BR": [ 
      { 
        "since": 2017, 
        "full": 54, 
        "reduced": 36 
      }, 
      { 
        "since": 2018, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "BR_BR": [ 
      { 
        "since": 2017, 
        "full": 53, 
        "reduced": 36 
      }, 
      { 
        "since": 2018, 
        "full": 57, 
        "reduced": 38 
      } 
    ], 
    "BR_RI": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 57, 
        "reduced": 38 
      } 
    ], 
    "BR_SP": [ 
      { 
        "since": 2017, 
        "full": 53, 
        "reduced": 36 
      } 
    ], 
    "BW": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      },
      {
        "since": 2021,
        "full": 46,
        "reduced": 31
      }
    ], 
    "BY": [ 
      { 
        "since": 2017, 
        "full": 27, 
        "reduced": 18 
      }, 
      { 
        "since": 2018, 
        "full": 20, 
        "reduced": 13 
      } 
    ], 
    "CA": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      }, 
      { 
        "since": 2018, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "CA_OT": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      }, 
      { 
        "since": 2018, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "CA_TO": [ 
      { 
        "since": 2017, 
        "full": 52, 
        "reduced": 35 
      }, 
      { 
        "since": 2018, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "CA_VA": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 50, 
        "reduced": 33 
      } 
    ], 
    "CD": [ 
      { 
        "since": 2017, 
        "full": 68, 
        "reduced": 45 
      },
      {
        "since": 2020,
        "full": 70,
        "reduced": 47
      } 
    ], 
    "CF": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "CG": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      },
      {
        "since": 2021,
        "full": 62,
        "reduced": 41
      }
    ], 
    "CH": [ 
      { 
        "since": 2017, 
        "full": 62, 
        "reduced": 41 
      },
      {
        "since": 2021,
        "full": 64,
        "reduced": 43
      }
    ], 
    "CH_GE": [ 
      { 
        "since": 2017, 
        "full": 64, 
        "reduced": 43 
      },
      {
        "since": 2021,
        "full": 66,
        "reduced": 44
      }
    ], 
    "CI": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      },
      {
        "since": 2021,
        "full": 59,
        "reduced": 40
      }
    ], 
    "CL": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      }, 
      { 
        "since": 2018, 
        "full": 44, 
        "reduced": 29 
      } 
    ], 
    "CM": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      } 
    ], 
    "CN": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      },
      {
        "since": 2021,
        "full": 48,
        "reduced": 32
      }
    ], 
    "CN_CH": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      },
      {
        "since": 2021,
        "full": 41,
        "reduced": 28
      }
    ], 
    "CN_HK": [ 
      { 
        "since": 2017, 
        "full": 74, 
        "reduced": 49 
      }
    ], 
    "CN_KN": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      },
      {
        "since": 2021,
        "full": 36,
        "reduced": 24
      }
    ], 
    "CN_PK": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      },
      {
        "since": 2021,
        "full": 30,
        "reduced": 20
      }
    ], 
    "CN_SH": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      },
      {
        "since": 2021,
        "full": 58,
        "reduced": 39
      }
    ], 
    "CO": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      },
      {
        "since": 2020,
        "full": 46,
        "reduced": 31
      } 
    ], 
    "CR": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      }, 
      { 
        "since": 2019, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "CU": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      }, 
      { 
        "since": 2018, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "CV": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      } 
    ], 
    "CY": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "CZ": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      } 
    ], 
    "DE": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 12 
      },
      {
        "since": 2020,
        "full": 28,
        "reduced": 14
      }
    ], 
    "DJ": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 65, 
        "reduced": 44 
      } 
    ], 
    "DK": [ 
      { 
        "since": 2017, 
        "full": 60, 
        "reduced": 40 
      }, 
      { 
        "since": 2018, 
        "full": 58, 
        "reduced": 39 
      } 
    ], 
    "DM": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "DO": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      }, 
      { 
        "since": 2018, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "DZ": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "EC": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      } 
    ], 
    "EE": [ 
      { 
        "since": 2017, 
        "full": 27, 
        "reduced": 18 
      },
      {
        "since": 2020,
        "full": 29,
        "reduced": 20,
      }
    ], 
    "EG": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      }, 
      { 
        "since": 2018, 
        "full": 41, 
        "reduced": 28 
      } 
    ], 
    "ER": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      }, 
      { 
        "since": 2019, 
        "full": 50, 
        "reduced": 33 
      } 
    ], 
    "ES": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      }, 
      { 
        "since": 2019, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "ES_BC": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      }, 
      { 
        "since": 2019, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "ES_CA": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      }, 
      { 
        "since": 2019, 
        "full": 40, 
        "reduced": 27 
      } 
    ], 
    "ES_MA": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      }, 
      { 
        "since": 2019, 
        "full": 40, 
        "reduced": 27 
      } 
    ], 
    "ES_PM": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      }, 
      { 
        "since": 2019, 
        "full": 35, 
        "reduced": 24 
      } 
    ], 
    "ET": [ 
      { 
        "since": 2017, 
        "full": 27, 
        "reduced": 18 
      },
      {
        "since": 2020,
        "full": 39,
        "reduced": 26
      }
    ], 
    "FI": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      }, 
      { 
        "since": 2018, 
        "full": 50, 
        "reduced": 33 
      } 
    ], 
    "FJ": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "FM": [ 
      { 
        "since": 2017, 
        "full": 56, 
        "reduced": 37 
      }, 
      { 
        "since": 2019, 
        "full": 33, 
        "reduced": 22 
      } 
    ], 
    "FR": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      } 
    ], 
    "FR_LY": [ 
      { 
        "since": 2017, 
        "full": 53, 
        "reduced": 36 
      } 
    ], 
    "FR_MA": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      }, 
      { 
        "since": 2018, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "FR_PA": [ 
      { 
        "since": 2017, 
        "full": 58, 
        "reduced": 39 
      } 
    ], 
    "FR_ST": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "GA": [ 
      { 
        "since": 2017, 
        "full": 62, 
        "reduced": 41 
      },
      {
        "since": 2020,
        "full": 52,
        "reduced": 35,
      } 
    ], 
    "GB": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "GB_L": [ 
      { 
        "since": 2017, 
        "full": 62, 
        "reduced": 41 
      } 
    ], 
    "GD": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "GE": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      }, 
      { 
        "since": 2018, 
        "full": 35, 
        "reduced": 24 
      } 
    ], 
    "GH": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "GM": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      },
      {
        "since": 2021,
        "full": 40,
        "reduced": 27
      }
    ], 
    "GN": [ 
      { 
        "since": 2017, 
        "full": 38, 
        "reduced": 25 
      }, 
      { 
        "since": 2018, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "GQ": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      } 
    ], 
    "GR": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      } 
    ], 
    "GR_AT": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "GT": [ 
      { 
        "since": 2017, 
        "full": 28, 
        "reduced": 19 
      }, 
      { 
        "since": 2019, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "GW": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      } 
    ], 
    "GY": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "HN": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      } 
    ], 
    "HR": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 19 
      },
      {
        "since": 2020,
        "full": 35,
        "reduced": 24
      }
    ], 
    "HT": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      } 
    ], 
    "HU": [ 
      { 
        "since": 2017, 
        "full": 22, 
        "reduced": 15 
      } 
    ], 
    "ID": [ 
      { 
        "since": 2017, 
        "full": 38, 
        "reduced": 25 
      },
      {
        "since": 2020,
        "full": 36,
        "reduced": 24,
      }
    ], 
    "IE": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      },
      {
        "since": 2021,
        "full": 58,
        "reduced": 39
      }
    ], 
    "IL": [ 
      { 
        "since": 2017, 
        "full": 56, 
        "reduced": 37 
      },
      {
        "since": 2020,
        "full": 66,
        "reduced": 44,
      }
    ], 
    "IN": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      }, 
      { 
        "since": 2019, 
        "full": 32, 
        "reduced": 21 
      } 
    ],
    "IN_BA": [
      {
        "since": 2020,
        "full": 42,
        "reduced": 28
      }
    ],
    "IN_CH": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      }, 
      { 
        "since": 2019, 
        "full": 32, 
        "reduced": 21 
      } 
    ], 
    "IN_KO": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      }, 
      { 
        "since": 2019, 
        "full": 35, 
        "reduced": 24 
      } 
    ], 
    "IN_MB": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      }, 
      { 
        "since": 2019, 
        "full": 50, 
        "reduced": 33 
      } 
    ], 
    "IN_ND": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      }, 
      { 
        "since": 2019, 
        "full": 38, 
        "reduced": 25 
      } 
    ], 
    "IR": [ 
      { 
        "since": 2017, 
        "full": 28, 
        "reduced": 19 
      }, 
      { 
        "since": 2018, 
        "full": 33, 
        "reduced": 22 
      } 
    ], 
    "IS": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "IT": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      }, 
      { 
        "since": 2019, 
        "full": 40, 
        "reduced": 27 
      } 
    ], 
    "IT_MI": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "IT_RO": [ 
      { 
        "since": 2017, 
        "full": 52, 
        "reduced": 35 
      }, 
      { 
        "since": 2019, 
        "full": 40, 
        "reduced": 27 
      } 
    ], 
    "JM": [ 
      { 
        "since": 2017, 
        "full": 54, 
        "reduced": 36 
      } 
    ], 
    "JO": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "JP": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      },
      {
        "since": 2020,
        "full": 52,
        "reduced": 35,
      }
    ], 
    "JP_TK": [ 
      { 
        "since": 2017, 
        "full": 53, 
        "reduced": 36 
      }, 
      { 
        "since": 2018, 
        "full": 66, 
        "reduced": 44 
      } 
    ], 
    "KE": [ 
      { 
        "since": 2017, 
        "full": 42, 
        "reduced": 28 
      },
      {
        "since": 2021,
        "full": 51,
        "reduced": 34
      }
    ], 
    "KG": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      },
      {
        "since": 2020,
        "full": 27,
        "reduced": 18
      }
    ], 
    "KH": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      }, 
      { 
        "since": 2019, 
        "full": 38, 
        "reduced": 25 
      } 
    ], 
    "KN": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "KP": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      },
      {
        "since": 2020,
        "full": 28,
        "reduced": 19
      } 
    ], 
    "KR": [ 
      { 
        "since": 2017, 
        "full": 58, 
        "reduced": 39 
      },
      {
        "since": 2021,
        "full": 48,
        "reduced": 32
      }
    ], 
    "KW": [ 
      { 
        "since": 2017, 
        "full": 42, 
        "reduced": 28 
      },
      {
        "since": 2021,
        "full": 56,
        "reduced": 37
      }
    ], 
    "KZ": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "LA": [ 
      { 
        "since": 2017, 
        "full": 33, 
        "reduced": 22 
      } 
    ], 
    "LB": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      }, 
      { 
        "since": 2019, 
        "full": 59, 
        "reduced": 40 
      } 
    ], 
    "LC": [ 
      { 
        "since": 2017, 
        "full": 54, 
        "reduced": 36 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "LI": [ 
      { 
        "since": 2017, 
        "full": 53, 
        "reduced": 36 
      },
      {
        "since": 2021,
        "full": 56,
        "reduced": 37
      }
    ], 
    "LK": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      }, 
      { 
        "since": 2018, 
        "full": 42, 
        "reduced": 28 
      } 
    ], 
    "LS": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      } 
    ], 
    "LT": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      },
      {
        "since": 2020,
        "full": 26,
        "reduced": 17
      } 
    ], 
    "LU": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "LV": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      },
      {
        "since": 2020,
        "full": 35,
        "reduced": 24
      }
    ], 
    "LY": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      }, 
      { 
        "since": 2019, 
        "full": 63, 
        "reduced": 42 
      } 
    ], 
    "MA": [ 
      { 
        "since": 2017, 
        "full": 42, 
        "reduced": 28 
      } 
    ], 
    "MC": [ 
      { 
        "since": 2017, 
        "full": 42, 
        "reduced": 28 
      } 
    ], 
    "MD": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      } 
    ], 
    "ME": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      } 
    ], 
    "MG": [ 
      { 
        "since": 2017, 
        "full": 38, 
        "reduced": 25 
      }, 
      { 
        "since": 2018, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "MH": [ 
      { 
        "since": 2017, 
        "full": 63, 
        "reduced": 42 
      } 
    ], 
    "MK": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      }, 
      { 
        "since": 2018, 
        "full": 29, 
        "reduced": 20 
      } 
    ], 
    "ML": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      },
      {
        "since": 2020,
        "full": 38,
        "reduced": 25
      }
    ], 
    "MM": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      } 
    ], 
    "MN": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      }, 
      { 
        "since": 2018, 
        "full": 27, 
        "reduced": 18 
      } 
    ], 
    "MR": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      } 
    ], 
    "MT": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      },
      {
        "since": 2020,
        "full": 46,
        "reduced": 31
      }
    ], 
    "MU": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 54, 
        "reduced": 36 
      } 
    ], 
    "MV": [ 
      { 
        "since": 2017, 
        "full": 38, 
        "reduced": 25 
      }, 
      { 
        "since": 2018, 
        "full": 52, 
        "reduced": 35 
      } 
    ], 
    "MW": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "MX": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      },
      {
        "since": 2020,
        "full": 48,
        "reduced": 32
      }
    ], 
    "MY": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "MZ": [ 
      { 
        "since": 2017, 
        "full": 42, 
        "reduced": 28 
      }, 
      { 
        "since": 2019, 
        "full": 38, 
        "reduced": 25 
      } 
    ], 
    "NA": [ 
      { 
        "since": 2017, 
        "full": 23, 
        "reduced": 16 
      },
      {
        "since": 2020,
        "full": 30,
        "reduced": 20
      } 
    ], 
    "NE": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      }, 
      { 
        "since": 2018, 
        "full": 41, 
        "reduced": 28 
      },
      {
        "since": 2021,
        "full": 42,
        "reduced": 28
      }
    ], 
    "NG": [ 
      { 
        "since": 2017, 
        "full": 63, 
        "reduced": 42 
      },
      {
        "since": 2020,
        "full": 46,
        "reduced": 31
      }
    ], 
    "NI": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      } 
    ], 
    "NL": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      },
      {
        "since": 2020,
        "full": 47,
        "reduced": 32
      }
    ], 
    "NO": [ 
      { 
        "since": 2017, 
        "full": 64, 
        "reduced": 43 
      }, 
      { 
        "since": 2018, 
        "full": 80, 
        "reduced": 53 
      } 
    ], 
    "NP": [ 
      { 
        "since": 2017, 
        "full": 28, 
        "reduced": 19 
      },
      {
        "since": 2021,
        "full": 36,
        "reduced": 24
      }
    ], 
    "NZ": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 56, 
        "reduced": 37 
      } 
    ], 
    "OM": [ 
      { 
        "since": 2017, 
        "full": 60, 
        "reduced": 40 
      } 
    ], 
    "PA": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      } 
    ], 
    "PE": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      },
      {
        "since": 2020,
        "full": 34,
        "reduced": 23
      }
    ], 
    "PG": [ 
      { 
        "since": 2017, 
        "full": 60, 
        "reduced": 40 
      } 
    ], 
    "PH": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      }, 
      { 
        "since": 2019, 
        "full": 33, 
        "reduced": 22 
      } 
    ], 
    "PK": [ 
      { 
        "since": 2017, 
        "full": 27, 
        "reduced": 18 
      },
      {
        "since": 2020,
        "full": 34,
        "reduced": 23
      }
    ], 
    "PK_IS": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      },
      {
        "since": 2020,
        "full": 23,
        "reduced": 16
      }
    ], 
    "PL": [ 
      { 
        "since": 2017, 
        "full": 27, 
        "reduced": 18 
      }, 
      { 
        "since": 2019, 
        "full": 29, 
        "reduced": 20 
      } 
    ], 
    "PL_BR": [ 
      { 
        "since": 2017, 
        "full": 33, 
        "reduced": 22 
      } 
    ], 
    "PL_GD": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      }, 
      { 
        "since": 2019, 
        "full": 30, 
        "reduced": 20 
      } 
    ], 
    "PL_KR": [ 
      { 
        "since": 2017, 
        "full": 28, 
        "reduced": 19 
      }, 
      { 
        "since": 2019, 
        "full": 27, 
        "reduced": 18 
      } 
    ], 
    "PL_WA": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      }, 
      { 
        "since": 2019, 
        "full": 29, 
        "reduced": 20 
      } 
    ], 
    "PT": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      } 
    ], 
    "PW": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "PY": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      }, 
      { 
        "since": 2018, 
        "full": 38, 
        "reduced": 25 
      } 
    ], 
    "QA": [ 
      { 
        "since": 2017, 
        "full": 56, 
        "reduced": 37 
      } 
    ], 
    "RO": [ 
      { 
        "since": 2017, 
        "full": 26, 
        "reduced": 17 
      },
      {
        "since": 2021,
        "full": 27,
        "reduced": 18
      }
    ], 
    "RO_BU": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      } 
    ], 
    "RS": [ 
      { 
        "since": 2017, 
        "full": 20, 
        "reduced": 13 
      } 
    ], 
    "RU": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      } 
    ], 
    "RU_MO": [ 
      { 
        "since": 2017, 
        "full": 30, 
        "reduced": 20 
      } 
    ], 
    "RU_SP": [ 
      { 
        "since": 2017, 
        "full": 26, 
        "reduced": 17 
      } 
    ], 
    "RU_YK": [ 
      { 
        "since": 2017, 
        "full": 28, 
        "reduced": 19 
      } 
    ], 
    "RW": [ 
      { 
        "since": 2017, 
        "full": 46, 
        "reduced": 31 
      } 
    ], 
    "SA": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      } 
    ], 
    "SA_JD": [ 
      { 
        "since": 2017, 
        "full": 38, 
        "reduced": 25 
      } 
    ], 
    "SA_RD": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      } 
    ], 
    "SD": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      },
      {
        "since": 2020,
        "full": 33,
        "reduced": 22
      }
    ], 
    "SE": [ 
      { 
        "since": 2017, 
        "full": 50, 
        "reduced": 33 
      } 
    ], 
    "SG": [ 
      { 
        "since": 2017, 
        "full": 53, 
        "reduced": 36 
      }, 
      { 
        "since": 2019, 
        "full": 54, 
        "reduced": 36 
      } 
    ], 
    "SI": [ 
      { 
        "since": 2017, 
        "full": 33, 
        "reduced": 22 
      } 
    ], 
    "SK": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      } 
    ], 
    "SL": [ 
      { 
        "since": 2017, 
        "full": 39, 
        "reduced": 26 
      }, 
      { 
        "since": 2019, 
        "full": 48, 
        "reduced": 32 
      } 
    ], 
    "SM": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "SN": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      },
      {
        "since": 2021,
        "full": 42,
        "reduced": 28
      }
    ], 
    "SR": [ 
      { 
        "since": 2017, 
        "full": 41, 
        "reduced": 28 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "SS": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "ST": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "SV": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      } 
    ], 
    "SY": [ 
      { 
        "since": 2017, 
        "full": 38, 
        "reduced": 25 
      } 
    ], 
    "TD": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 64, 
        "reduced": 43 
      } 
    ], 
    "TG": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      }, 
      { 
        "since": 2018, 
        "full": 39, 
        "reduced": 26 
      },
      {
        // Excactly the same as the year before, but since it
        // was highlighted in the original announcement added it again,
        // for better clarity.
        "since": 2020,
        "full": 39,
        "reduced": 26
      }
    ], 
    "TH": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      }, 
      { 
        "since": 2019, 
        "full": 38, 
        "reduced": 25 
      } 
    ], 
    "TJ": [ 
      { 
        "since": 2017, 
        "full": 26, 
        "reduced": 17 
      }, 
      { 
        "since": 2019, 
        "full": 27, 
        "reduced": 18 
      } 
    ], 
    "TM": [ 
      { 
        "since": 2017, 
        "full": 33, 
        "reduced": 22 
      } 
    ], 
    "TN": [ 
      { 
        "since": 2017, 
        "full": 33, 
        "reduced": 22 
      }, 
      { 
        "since": 2018, 
        "full": 40, 
        "reduced": 27 
      } 
    ], 
    "TO": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      } 
    ], 
    "TR": [ 
      { 
        "since": 2017, 
        "full": 40, 
        "reduced": 27 
      },
      {
        "since": 2020,
        "full": 17,
        "reduced": 12
      }
    ], 
    "TR_IS": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      },
      {
        "since": 2020,
        "full": 26,
        "reduced": 17
      }
    ], 
    "TR_IZ": [ 
      { 
        "since": 2017, 
        "full": 42, 
        "reduced": 28 
      },
      {
        "since": 2020,
        "full": 29,
        "reduced": 20
      }
    ], 
    "TT": [ 
      { 
        "since": 2017, 
        "full": 54, 
        "reduced": 36 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "TW": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      },
      {
        "since": 2020,
        "full": 46,
        "reduced": 31
      }
    ], 
    "TZ": [ 
      { 
        "since": 2017, 
        "full": 47, 
        "reduced": 32 
      } 
    ], 
    "UA": [ 
      { 
        "since": 2017, 
        "full": 32, 
        "reduced": 21 
      },
      {
        "since": 2020,
        "full": 26,
        "reduced": 17
      }
    ], 
    "UG": [ 
      { 
        "since": 2017, 
        "full": 35, 
        "reduced": 24 
      },
      {
        "since": 2020,
        "full": 41,
        "reduced": 28
      }
    ], 
    "US": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "US_AT": [ 
      { 
        "since": 2017, 
        "full": 62, 
        "reduced": 41 
      } 
    ], 
    "US_BS": [ 
      { 
        "since": 2017, 
        "full": 58, 
        "reduced": 39 
      } 
    ], 
    "US_CH": [ 
      { 
        "since": 2017, 
        "full": 54, 
        "reduced": 36 
      } 
    ], 
    "US_HU": [ 
      { 
        "since": 2017, 
        "full": 63, 
        "reduced": 42 
      } 
    ], 
    "US_LA": [ 
      { 
        "since": 2017, 
        "full": 56, 
        "reduced": 37 
      } 
    ], 
    "US_MI": [ 
      { 
        "since": 2017, 
        "full": 64, 
        "reduced": 43 
      } 
    ], 
    "US_NYC": [ 
      { 
        "since": 2017, 
        "full": 58, 
        "reduced": 39 
      } 
    ], 
    "US_SF": [ 
      { 
        "since": 2017, 
        "full": 51, 
        "reduced": 34 
      } 
    ], 
    "US_WDC": [ 
      { 
        "since": 2017, 
        "full": 62, 
        "reduced": 41 
      } 
    ], 
    "UY": [ 
      { 
        "since": 2017, 
        "full": 44, 
        "reduced": 29 
      },
      {
        "since": 2020,
        "full": 48,
        "reduced": 32
      }
    ], 
    "UZ": [ 
      { 
        "since": 2017, 
        "full": 34, 
        "reduced": 23 
      } 
    ], 
    "VA": [ 
      { 
        "since": 2017, 
        "full": 52, 
        "reduced": 35 
      } 
    ], 
    "VC": [ 
      { 
        "since": 2017, 
        "full": 52, 
        "reduced": 35 
      }, 
      { 
        "since": 2019, 
        "full": 45, 
        "reduced": 30 
      } 
    ], 
    "VE": [ 
      { 
        "since": 2017, 
        "full": 48, 
        "reduced": 32 
      }, 
      { 
        "since": 2018, 
        "full": 47, 
        "reduced": 32 
      }, 
      { 
        "since": 2019, 
        "full": 69, 
        "reduced": 46 
      },
      {
        "since": 2020,
        "full": 45,
        "reduced": 30
      } 
    ], 
    "VN": [ 
      { 
        "since": 2017, 
        "full": 38, 
        "reduced": 25 
      }, 
      { 
        "since": 2019, 
        "full": 41, 
        "reduced": 28 
      } 
    ], 
    "WS": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      } 
    ], 
    "XK": [ 
      { 
        "since": 2017, 
        "full": 23, 
        "reduced": 16 
      } 
    ], 
    "YE": [ 
      { 
        "since": 2017, 
        "full": 24, 
        "reduced": 16 
      } 
    ], 
    "ZA": [ 
      { 
        "since": 2017, 
        "full": 22, 
        "reduced": 15 
      } 
    ], 
    "ZA_CT": [ 
      { 
        "since": 2017, 
        "full": 27, 
        "reduced": 18 
      } 
    ], 
    "ZA_JH": [ 
      { 
        "since": 2017, 
        "full": 29, 
        "reduced": 20 
      } 
    ], 
    "ZM": [ 
      { 
        "since": 2017, 
        "full": 36, 
        "reduced": 24 
      } 
    ], 
    "ZW": [ 
      { 
        "since": 2017, 
        "full": 45, 
        "reduced": 30 
      } 
    ] 
  }
};