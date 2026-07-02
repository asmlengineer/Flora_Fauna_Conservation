import Header from '../Header/Header';
import './Home.css';
import img from '../../assets/img.avif'
import img2 from '../../assets/img2.jpg';
import Footer from '../Footer/Footer';

function Home(){
   return(
    <>
      <div id= 'home'>  
          <section class="hero">

            <div class="hero-content">

            <h1>Protect Nature, Preserve Life</h1>

            <p>
            Discover the beauty of forests, wildlife, rare plants, and biodiversity while learning how together we can protect our planet.
            </p>
        <a href="https://hub.papersowl.com/examples/the-beauty-of-nature/" target='_blank'><button>Explore Nature</button></a>

        </div>

        </section>

        <section>

        <h1 class="section-title">About Nature</h1>

        <div class="about">

        <img src="https://images.unsplash.com/photo-1448375240586-882707db888b"/>

    <div class="about-text">

    <h2>Nature is Our Greatest Treasure</h2>

    <p>
    Flora includes all plant life such as forests, flowers, herbs, and trees that provide oxygen and maintain ecological balance. Fauna represents the diverse animal species that inhabit forests, oceans, deserts, and mountains. Protecting flora and fauna ensures a healthy ecosystem and a sustainable future for generations.
    </p>

    </div>

    </div>

    </section>

    <section>

    <h1 class="section-title">Beautiful Flora</h1>

    <div class="card-container">

    <div class="card">
    <img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"/>
    <div class="card-content">
    <h3>Flowering Plants</h3>
    <p>Beautiful flowers attract pollinators and increase biodiversity.</p>
    </div>
    </div>

    <div class="card">
    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"/>
    <div class="card-content">
    <h3>Dense Forests</h3>
    <p>Forests provide oxygen, shelter, and habitats for wildlife.</p>
    </div>
    </div>

    <div class="card">
    <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"/>
    <div class="card-content">
    <h3>Medicinal Plants</h3>
    <p>Many plants are valuable sources of natural medicines.</p>
    </div>
    </div>

    </div>

    </section>

    <section>

    <h1 class="section-title">Amazing Fauna</h1>

    <div class="card-container">

    <div class="card">
    <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d"/>
    <div class="card-content">
    <h3>Wild Animals</h3>
    <p>Wildlife maintains ecological balance and enriches biodiversity.</p>
    </div>
    </div>

    <div class="card">
    <img src={img}/>
    <div class="card-content">
    <h3>Bird Species</h3>
    <p>Birds help in seed dispersal and maintain healthy ecosystems.</p>
    </div>
    </div>

    <div class="card">
    <img src={img2}/>
    <div class="card-content">
    <h3>Aquatic Life</h3>
    <p>Marine animals contribute to healthy oceans and biodiversity.</p>
    </div>
    </div>

    </div>

    </section>

    <section class="conservation">

    <h1 class="section-title">Save Nature</h1>

    <p>
    Every tree planted, every endangered animal protected, and every forest preserved contributes towards a greener Earth. Join hands in wildlife conservation, afforestation, and environmental awareness campaigns.
    </p>

    <a href="https://chat.whatsapp.com/LqpRCWu4UkWF4v4c7C4m7T"><button>Join the Mission</button></a>

    </section>
    <section>

    <footer>

    <p>© 2026 Flora & Fauna | Protect Nature • Preserve Wildlife • Save Earth 🌍</p>

     </footer>
    </section>
    </div>
    </>
   );
}
export default Home;