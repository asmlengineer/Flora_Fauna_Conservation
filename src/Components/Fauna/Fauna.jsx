import './Fauna.css';
import img from '../../assets/img.avif';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import img5 from '../../assets/img5.jpg';
import Footer from '../Footer/Footer';

function Fauna(){
   return(
      <>
      <div id='fauna'>
         <section class="hero">

         <div class="hero-content">

         <h2>Discover the Beauty of Wildlife</h2>

         <p>
         Fauna includes all animal species living on Earth, from tiny insects
         to magnificent elephants and majestic tigers. Every species plays an
         important role in maintaining ecological balance.
         </p>

         </div>

         </section>

         <section class="section">

         <h2 class="section-title">Types of Fauna</h2>

         <div class="card-container">

         <div class="card">
         <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d"/>
         <div class="card-content">
         <h3>🦁 Wild Animals</h3>
         <p>
         Lions, tigers, elephants, deer, and many other mammals live in forests
         and contribute to healthy ecosystems.
         </p>
         <a href="https://faunalytics.org/fundamentals-wild-animals/"><button>Learn More</button></a>
         </div>
         </div>

         <div class="card">
         <img src={img}/>
         <div class="card-content">
         <h3>🦅 Birds</h3>
         <p>
         Birds help with seed dispersal, pollination, and insect control while
         adding beauty to natural habitats.
         </p>
         <a href="https://www.birdlife.org/birds/"><button>Learn More</button></a>
         </div>
         </div>

         <div class="card">
         <img src={img2}/>
         <div class="card-content">
         <h3>🐠 Aquatic Animals</h3>
         <p>
         Fish, whales, dolphins, and sea turtles are essential to maintaining
         healthy rivers and oceans.
         </p>
         <a href="https://www.ebsco.com/research-starters/anatomy-and-physiology/aquatic-animals"><button>Learn More</button></a>
         </div>
         </div>

         <div class="card">
         <img src={img3}/>
         <div class="card-content">
         <h3>🦋 Insects</h3>
         <p>
         Butterflies, bees, and insects play a vital role in pollination and
         ecosystem stability.
         </p>
         <a href="https://www.britannica.com/animal/insect"><button>Learn More</button></a>
         </div>
         </div>

         <div class="card">
         <img src={img4}/>
         <div class="card-content">
         <h3>🐍 Reptiles</h3>
         <p>
         Snakes, crocodiles, turtles, and lizards help control pests and maintain
         ecological balance.
         </p>
         <a href="https://wildlifesos.org/our-work/reptiles-others/?gad_source=1&gad_campaignid=9870531060&gbraid=0AAAAACb9eRE_wPaQar3pAPmiHEmxaCH5u&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgMIO73PzyejiaBREvX8K47xK_rOSPg2USe-pq1QzCfbvq5fjX4WZ3gaArxJEALw_wcB"><button>Learn More</button></a>
         </div>
         </div>

         <div class="card">
         <img src={img5}/>
         <div class="card-content">
         <h3>🐼 Endangered Species</h3>
         <p>
         Many rare animals require immediate conservation efforts to prevent
         their extinction.
         </p>
         <a href="https://www.britannica.com/science/endangered-species"><button>Learn More</button></a>
         </div>
         </div>

         </div>

         </section>

         <section class="importance">

         <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d"/>

         <div class="importance-text">

         <h2>Importance of Fauna</h2>

         <p>
         Animals are essential components of biodiversity. They maintain food
         chains, pollinate plants, disperse seeds, and contribute to balanced
         ecosystems. Protecting wildlife ensures a healthier environment for all
         living organisms.
         </p>

         <ul>
         <li>🦋 Helps Pollination</li>
         <li>🌱 Maintains Ecological Balance</li>
         <li>🌾 Supports Agriculture</li>
         <li>🌍 Conserves Biodiversity</li>
         <li>🐘 Protects Forest Ecosystems</li>
         <li>❤️ Promotes Sustainable Living</li>
         </ul>

         </div>

         </section>

         <section class="facts">

         <h2 class="section-title">Wildlife Facts</h2>

         <div class="fact-grid">

         <div class="fact-box">
         <h2>8.7M+</h2>
         <p>Estimated Animal Species</p>
         </div>

         <div class="fact-box">
         <h2>41K+</h2>
         <p>Threatened Species</p>
         </div>

         <div class="fact-box">
         <h2>75%</h2>
         <p>Pollination Depends on Animals</p>
         </div>

         <div class="fact-box">
         <h2>30%</h2>
         <p>Wildlife Habitats Under Threat</p>
         </div>

         </div>

         </section>

         <section class="conservation">

         <h2>🌍 Wildlife Conservation</h2>

         <p>
         Protecting wildlife is a shared responsibility. By preserving forests,
         reducing pollution, preventing illegal hunting, and supporting wildlife
         sanctuaries, we can ensure a safe future for every species on Earth.
         </p>

         <a href="https://chat.whatsapp.com/LqpRCWu4UkWF4v4c7C4m7T"><button>Support Wildlife</button></a>

         </section></div>
   </>
   );
}
export default Fauna;