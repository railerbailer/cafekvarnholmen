import React, { Component } from 'react';
import '../App.css';
import Iframe from 'react-iframe';
import ScrollAnimation from 'react-animate-on-scroll';





class hem extends Component {

  render() {
    return (
 	
       <div className="ContentWrapper">
              <div className="HemContent1">
        
         <div className="OmossTexth22">
         <ScrollAnimation animateIn="fadeIn">

           <h1>Välkommen in till Café Kvarnholmen!</h1>

          </ScrollAnimation>

          </div> 
        <div className="IframeDiv"> 
         {/*     <ScrollAnimation animateIn="fadeIn">

          <Iframe url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCaf%25C3%25A9-Kvarnholmen-1699075110372070%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=2060170357603221"
            width="340px"
            height="400px"
            id="kbry"
            className="Facebook"
            
            position="relative"
            allowFullScreen/>
            </ScrollAnimation>*/}
          </div>
           

        </div>
         {/* <div className="HemContent2">
        
          <div className="OmossTexth222">
           <h2>Välkommen till Café Kvarnholmen!</h2>
           <p style={{fontSize: '18px', textAlign: 'left'}}>
            Facebookflöde.....
           
          </p>
          </div> 

        </div>*/}

       
    
        <div className="HemContent">
      
        <div className="OmossTexth2">
        <ScrollAnimation animateIn="fadeInUp">

         <h2>Vår nya restaurang öppnar i april i Spisfabriken på kvarnholmsvägen 84!</h2>

        </ScrollAnimation>
         {/*<p style={{fontSize: '18px', textAlign: 'left'}}>
     			Facebookflöde.....
         
     		</p>*/}
     		</div> 

      </div>
        
      <div className="IframeDiv"> 
      
          <Iframe
         className="googleMaps"
          width=""
          height="450"
          position="relative"
          frameborder="0"

          url="https://www.google.com/maps/embed/v1/place?key=AIzaSyDNkRbT-26gqdYRZRpuys6hPmjYoJKIRG8
          &q=Café+Kvarnholmen,Kvarnholmen" allowfullscreen/>
      
        </div>
    </div>
       	
		





    );
  }
}

export default hem;
