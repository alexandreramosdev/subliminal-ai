import styled from 'styled-components'

import Card from '../../components/card/styles'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      width:100%;
      max-width: 1320px;
      margin: 0 auto;
  }

  @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

      ${Card}:nth-child(1) {
       grid-column: span 4;
      }

      ${Card}:nth-child(2){
       grid-column: span 2;
      }

       ${Card}:nth-child(3){
         grid-column: span 3;
       }
      ${Card}:nth-child(4){
       grid-column: span 3;
      }
    
      ${Card}:nth-child(5){
        grid-column: span 4;
      }

      ${Card}:nth-child(6){
        grid-column: span 2;
      }

      ${Card}:nth-child(7){
        grid-column: span 2;
      }
      ${Card}:nth-child(8){
        grid-column: span 2;
      }
      ${Card}:nth-child(9){
       grid-column: span 2;
      }
      
      ${Card}:nth-child(10) {
        grid-column: 1 / -1;
      }

      ${Card}:nth-child(11){
        grid-column: span 3;
      } 
      ${Card}:nth-child(12){
        grid-column: span 3;
      }
      ${Card}:nth-child(13){
        grid-column: span 3;
      } 
      ${Card}:nth-child(14){
       grid-column: span 3;
      }

      ${Card}:nth-child(15){
        grid-column: span 2
      }
      ${Card}:nth-child(16){
        grid-column: span 2
      }
      ${Card}:nth-child(17){
       grid-column: span 2
     }
     

  }
`;