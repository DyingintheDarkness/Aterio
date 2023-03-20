import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`

        @font-face {
            font-family: 'Mona Sans';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/mona-sans/Mona-Sans-Medium.woff2') format('woff2'),
            url('/fonts/mona-sans/Mona-Sans-Medium.woff')  format('woff'),
            url('/fonts/mona-sans/Mona-Sans-Medium.ttf') format('truetype'),
            url('/fonts/mona-sans/Mona-Sans-Medium.otf') format('otf'),
            url('/fonts/mona-sans/Mona-Sans-Medium.eot') format('eot');
          }

        @font-face {
            font-family: 'Mona Sans';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url('/fonts/mona-sans/Mona-Sans-SemiBold.woff')  format('woff'),      
            url('/fonts/mona-sans/Mona-Sans-SemiBold.otf') format('otf'),
            url('/fonts/mona-sans/Mona-Sans-SemiBold.ttf') format('truetype'); 
          }

        @font-face {
            font-family: 'Sinoreta';
            font-style: normal;
            font-display: swap;
            src: url('/fonts/sinoreta/Sinoreta.woff2') format('woff2'),
            url('/fonts/sinoreta/Sinoreta.woff')  format('woff'),
            url('/fonts/sinoreta/Sinoreta.ttf') format('truetype'),
            url('/fonts/sinoreta/Sinoreta.otf') format('otf'),
            url('/fonts/sinoreta/Sinoreta.eot') format('eot');
          }
          
        @font-face {
            font-family: 'HK Grotesk';
            font-style: italic;
            font-weight: 300;
            font-display: swap;
            src: url('/fonts/hk-grotesk/HKGrotesk-LightLegacyItalic.woff2') format('woff2'),
            url('/fonts/hk-grotesk/HKGrotesk-LightLegacyItalic.woff')  format('woff'),
            url('/fonts/hk-grotesk/HKGrotesk-LightLegacyItalic.eot') format('eot');
          }

        @font-face {
            font-family: 'HK Grotesk';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url('/fonts/hk-grotesk/HKGrotesk-RegularLegacy.woff2') format('woff2'),
            url('/fonts/hk-grotesk/HKGrotesk-RegularLegacy.woff')  format('woff'),
            url('/fonts/hk-grotesk/HKGrotesk-RegularLegacy.eot') format('eot');
          }
        @font-face {
            font-family: 'HK Grotesk';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url('/fonts/hk-grotesk/HKGrotesk-MediumLegacy.woff2') format('woff2'),
            url('/fonts/hk-grotesk/HKGrotesk-MediumLegacy.woff')  format('woff'),
            url('/fonts/hk-grotesk/HKGrotesk-MediumLegacy.eot') format('eot');
          }    
          
        `}
    />
  );
}
