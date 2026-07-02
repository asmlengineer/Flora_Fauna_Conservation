import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Flora.css';

function Flora(){
   return(
    <>
     <div id='flora'>
      <section class="hero">
      <div class="hero-content">
      <h2>Explore the World of Flora</h2>
      <p>
      Plants are the foundation of life on Earth. They provide oxygen,
      food, medicine, shelter, and maintain ecological balance.
      </p>
      </div>
      </section>

<section class="section">

<h2 class="section-title">Types of Flora</h2>

<div class="card-container">

<div class="card">
<img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"/>
<div class="card-content">
<h3>🌸 Flowering Plants</h3>
<p>
Flowering plants produce colorful flowers and fruits. They play
a significant role in pollination and beautifying nature.
</p>
<a href="https://www.vedantu.com/evs/flowering-plants-names"><button>Read More</button></a>
</div>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"/>
<div class="card-content">
<h3>🌳 Forest Trees</h3>
<p>
Trees absorb carbon dioxide, produce oxygen, conserve water,
and provide habitats for countless wildlife species.
</p>
<a href="https://fsi.nic.in/scheme-of-classification"><button>Read More</button></a>
</div>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"/>
<div class="card-content">
<h3>🌿 Medicinal Plants</h3>
<p>
Medicinal plants have been used for centuries to prepare herbal
medicines and support human health naturally.
</p>
<a href="https://en.wikipedia.org/wiki/Medicinal_plants"><button>Read More</button></a>
</div>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1492496913980-501348b61469"/>
<div class="card-content">
<h3>🌵 Desert Plants</h3>
<p>
Desert plants such as cacti survive in harsh climates by storing
water and reducing water loss.
</p>
<a href="https://www.planetnatural.com/desert-plants/"><button>Read More</button></a>
</div>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1"/>
<div class="card-content">
<h3>🌾 Grasslands</h3>
<p>
Grasslands support grazing animals, protect soil from erosion,
and contribute to biodiversity.
</p>
<a href="https://www.pipegreentrust.org/ecology/grassland-plants.html"><button>Read More</button></a>
</div>
</div>

<div class="card">
<img src="https://images.unsplash.com/photo-1472396961693-142e6e269027"/>
<div class="card-content">
<h3>🍃 Rare Plants</h3>
<p>
Rare and endangered plants require conservation efforts to
prevent extinction and preserve biodiversity.
</p>
<a href="https://www.usbg.gov/rare-and-endangered-plant-spotlights"><button>Read More</button></a>
</div>
</div>

</div>

</section>

<section class="importance">

<img src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"/>

<div class="importance-text">

<h2>Why Flora is Important?</h2>

<p>
Flora plays a vital role in maintaining ecological balance by producing
oxygen, absorbing harmful gases, conserving soil, and supporting
food chains. Healthy forests and plant life are essential for a
sustainable environment.
</p>

<ul>
<li>🌿 Produces Oxygen</li>
<li>🌍 Reduces Global Warming</li>
<li>💊 Source of Medicines</li>
<li>🍎 Provides Food</li>
<li>🐦 Supports Wildlife</li>
<li>🌧 Prevents Soil Erosion</li>
</ul>

</div>

</section>

<section class="stats">

<h2 class="section-title">Flora Facts</h2>

<div class="stats-container">

<div class="stat-box">
<h2>390K+</h2>
<p>Known Plant Species</p>
</div>

<div class="stat-box">
<h2>31%</h2>
<p>Earth Covered by Forests</p>
</div>

<div class="stat-box">
<h2>80%</h2>
<p>Food Comes from Plants</p>
</div>

<div class="stat-box">
<h2>50K+</h2>
<p>Medicinal Plant Species</p>
</div>

</div>

</section>

<footer>
<p>© 2026 Flora & Fauna | Protect Plants • Protect Life 🌿</p>
</footer>
</div>
    </>
   );
}
export default Flora;