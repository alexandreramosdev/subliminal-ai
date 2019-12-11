import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body {
    font-size: 12px;

     @media (min-width: 600px) {
      font-size: 16px;
    }

     @media (min-width: 900px) {
      font-size: 18px;
    }

      @media (min-width: 1200px) {
      font-size: 20px;
      }
  } 
`