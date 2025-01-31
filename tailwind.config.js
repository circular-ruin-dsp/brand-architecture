/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // v250104
        ruin: {
          dark: '#A30000', // 032
          core: '#F51700', // 048
          aux: '#FD3A21', // 056
          light: '#FD653F', // 062
          pale: '#FF8952', // 066
        },
        acid: {
          dark: '#184435', // 018
          core: '#2FDCA8', // 052
          pale: '#85CCB1', // 066
        },
        decay: {
          dark: '#734C1C', // 027
          core: '#FFB916', // 054
          pale: '#DBB578', // 066
        },
        oxidation: {
          0: '#000000', // 000
          4: '#0C0B0A', // 004
          8: '#161412', // 008
          10: '#1C1A17', // 010
          12: '#201F1D', // 012
          16: '#2B2926', // 016
          18: '#312F2B', // 018
          24: '#413E39', // 024
          28: '#4C4843', // 028
          32: '#57534E', // 032
          44: '#777169', // 044
          50: '#878178', // 050
          64: '#AAA49C', // 064
          70: '#B9B4AC', // 070
          80: '#D2CDC6', // 080
          84: '#DBD7D1', // 084
          90: '#E9E6E2', // 090
          98: '#FAFAF9', // 098
          100: '#FFFFFF', // 100
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--ruin-dark': theme('colors.ruin.dark'),
          '--ruin-core': theme('colors.ruin.core'),
          '--ruin-aux': theme('colors.ruin.aux'),
          '--ruin-light': theme('colors.ruin.light'),
          '--ruin-pale': theme('colors.ruin.pale'),
          '--acid-dark': theme('colors.acid.dark'),
          '--acid-core': theme('colors.acid.core'),
          '--acid-pale': theme('colors.acid.pale'),
          '--decay-dark': theme('colors.decay.dark'),
          '--decay-core': theme('colors.decay.core'),
          '--decay-pale': theme('colors.decay.pale'),
          '--oxidation-0': theme('colors.oxidation.0'),
          '--oxidation-4': theme('colors.oxidation.4'),
          '--oxidation-8': theme('colors.oxidation.8'),
          '--oxidation-10': theme('colors.oxidation.10'),
          '--oxidation-12': theme('colors.oxidation.12'),
          '--oxidation-16': theme('colors.oxidation.16'),
          '--oxidation-18': theme('colors.oxidation.18'),
          '--oxidation-24': theme('colors.oxidation.24'),
          '--oxidation-28': theme('colors.oxidation.28'),
          '--oxidation-32': theme('colors.oxidation.32'),
          '--oxidation-44': theme('colors.oxidation.44'),
          '--oxidation-50': theme('colors.oxidation.50'),
          '--oxidation-64': theme('colors.oxidation.64'),
          '--oxidation-70': theme('colors.oxidation.70'),
          '--oxidation-80': theme('colors.oxidation.80'),
          '--oxidation-84': theme('colors.oxidation.84'),
          '--oxidation-90': theme('colors.oxidation.90'),
          '--oxidation-98': theme('colors.oxidation.98'),
          '--oxidation-100': theme('colors.oxidation.100'),
        },
      })
    },
  ],
}
