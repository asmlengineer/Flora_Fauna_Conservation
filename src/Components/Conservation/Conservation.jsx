import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Conservation.css';
import { SlEnergy } from "react-icons/sl";
import { GiPistolGun } from "react-icons/gi";

function Conservation(){
    return(
        <>   
        <div id='conservation'>
        <section class="hero">

        <div class="hero-content">

        <h2>Save Forests, Save Wildlife</h2>

        <p>
        Conservation is the protection and sustainable management of
        plants, animals, forests, rivers, and ecosystems to ensure
        that future generations inherit a healthy planet.
        </p>

        </div>

        </section>


        <section class="section">

        <h2 class="section-title">Our Conservation Mission</h2>

        <div class="mission">

        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"/>

        <div class="mission-content">

        <h2>Working Together for Nature</h2>

        <p>
        Nature conservation helps preserve biodiversity, reduce climate
        change, restore ecosystems, and protect endangered species.
        Healthy forests and wildlife are essential for maintaining
        ecological balance.
        </p>

        <p>
        Every individual can contribute by planting trees, reducing
        plastic waste, conserving water, and supporting wildlife
        protection initiatives.
        </p>

        </div>

        </div>

        </section>
        <section class="section">

        <h2 class="section-title">Conservation Activities</h2>

        <div class="card-container">

        <div class="card">
        <img src="https://images.unsplash.com/photo-1448375240586-882707db888b"/>
        <div class="card-content">
        <h3>🌳 Tree Plantation</h3>
        <p>Planting trees improves air quality, prevents soil erosion, and provides habitats for wildlife.</p>
        <a href="https://upforest.gov.in/web/forestnew/Afforestation.aspx"><button>Read More</button></a>
        </div>
        </div>

        <div class="card">
        <img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d"/>
        <div class="card-content">
        <h3>🦁 Wildlife Protection</h3>
        <p>Protect endangered animals through conservation reserves, anti-poaching efforts, and habitat restoration.</p>
        <a href="https://www.humaneworld.org/en/issue/wildlife-protection"><button>Read More</button></a>
        </div>
        </div>

        <div class="card">
        <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"/>
        <div class="card-content">
        <h3>💧 Water Conservation</h3>
        <p>Protect rivers, lakes, wetlands, and groundwater for both humans and wildlife.</p>
        <a href="https://projectchirag.org/education-and-awareness-raising-awareness-about-water-conservation/?gad_source=1&gad_campaignid=23479545322&gbraid=0AAAAABosjECnn_Q4Wm0yrDXNSM2GKY_jJ&gclid=Cj0KCQjw9ZLSBhCcARIsAEhGKgNFGXMum306bLf8t9lX_tkxr2TyA_93U-w-ZS4Z8Q8rcGnY7XuNvZcaAtpFEALw_wcB"><button>Read More</button></a>
        </div>
        </div>

        <div class="card">
        <img src="https://images.unsplash.com/photo-1492496913980-501348b61469"/>
        <div class="card-content">
        <h3>♻ Waste Management</h3>
        <p>Reduce pollution through recycling, waste segregation, and sustainable resource management.</p>
        <a href="https://www.gravitaindia.com/blogs/waste-management-and-benefits"><button>Read More</button></a>
        </div>
        </div>

        <div class="card">
        <img src="https://images.unsplash.com/photo-1448375240586-882707db888b"/>
        <div class="card-content">
        <h3> <SlEnergy />Renewable Energy</h3>
        <p>Planting trees improves air quality, prevents soil erosion, and provides habitats for wildlife.</p>
        <a href="https://www.britannica.com/science/renewable-energy"><button>Read More</button></a>
        </div>
        </div>
      
        <div class="card">
        <img src="https://images.unsplash.com/photo-1448375240586-882707db888b"/>
        <div class="card-content">
        <h3> <GiPistolGun />Hunting Regulations</h3>
        <p>Planting trees improves air quality, prevents soil erosion, and provides habitats for wildlife.</p>
        <a href="https://dec.ny.gov/things-to-do/hunting/regulations"><button>Read More</button></a>
        </div>
        </div>
        </div>

        </section>
        <section class="statistics">

        <h2 class="section-title">Conservation Facts</h2>

        <div class="stats-grid">

        <div class="stat">
        <h2>31%</h2>
        <p>Earth Covered by Forests</p>
        </div>

        <div class="stat">
        <h2>8M+</h2>
        <p>Known Plant & Animal Species</p>
        </div>

        <div class="stat">
        <h2>100K+</h2>
        <p>Protected Areas Worldwide</p>
        </div>

        <div class="stat">
        <h2>1M+</h2>
        <p>Species at Risk of Extinction</p>
        </div>

        </div>

        </section>

        <section class="section">

        <h2 class="section-title">How You Can Help</h2>

        <div class="tips">

        <ul>

        <li>🌱 Plant more trees in your surroundings.</li>

        <li>🚯 Avoid plastic and dispose of waste responsibly.</li>

        <li>💧 Save water and protect natural water bodies.</li>

        <li>🦜 Support wildlife conservation programs.</li>

        <li>♻ Recycle paper, plastic, and electronic waste.</li>

        <li>🚲 Use eco-friendly transportation whenever possible.</li>

        <li>📢 Spread awareness about environmental conservation.</li>

        <li>🌍 Participate in local clean-up and plantation drives.</li>

        </ul>

        </div>

        </section>
        <section class="cta">

        <h2>Join the Green Movement</h2>

        <p>
        Together, we can preserve forests, protect wildlife,
        reduce pollution, and create a cleaner and greener Earth
        for future generations.
        </p>

        <a href="https://chat.whatsapp.com/LqpRCWu4UkWF4v4c7C4m7T"><button>Become a Volunteer</button></a>
                </section>
        </div>
    </>    
    );
}
export default Conservation;