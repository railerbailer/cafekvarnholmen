import React, { Component } from 'react';


import ScrollAnimation from 'react-animate-on-scroll';


class OmOss extends Component {
  render() {
    return (
    <div className="ContentWrapper">
     

{/*          <img className="maxBildHeight" src={snyggbild} alt="hmm" />
*/}        <div className="ContentOne">
     		<ScrollAnimation animateIn="fadeIn">
       	   <div className="Texth2">
             <h2>Felix & Felicia</h2>
             <p>
             Hej! Vi är ett par som har ett café i kvarnholmen. Felicia Arvidsson är en "master"-barista och Felix Fylking erfaren kock. 
             Vi skall snart även öppna en restaurang rakt över gatan i mars-april. 
         		
         		</p>
       		</div>
        </ScrollAnimation>
          
           {/*<img src={snyggbild} className="head" alt="omsoss" />*/}
          
       
      </div>
      {/*<div className="ContentTwo">*/}
     
         
        
          
          
       
      {/*</div>*/}



      <div className="ContentThree">
{/*      <img className="maxBildHeight" src={godMat} alt="hmm" />
*/}	     		
        <ScrollAnimation animateIn="fadeInUp">
          <div className="Texth22">
		         <h2>"Felicia en barista och Felix kock."</h2>
		         {/*<p style={{fontSize: '18px', textAlign: 'left'}}>
		     			Drömkombon

		     		</p>*/}
	     		</div>
        </ScrollAnimation>
          
          
       
    
         
          
           
          
       
      </div>

    </div>

    );
  }
}

export default OmOss;
