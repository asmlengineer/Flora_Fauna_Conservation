import Header from '../Header/Header';
import './Extinct.css';
import bat from '../../assets/bat.jpg';
import bird from '../../assets/bird.jpg';
import dodo from '../../assets/dodo.jpg';
import dolphin from '../../assets/dolphin.jpg';
import elep from '../../assets/elep.jpg';
import gost from '../../assets/gost.jpg';
import mouse from '../../assets/mouse.jpg';
import rhino from '../../assets/rhino.jpg';
import sparrow from '../../assets/sparrow.jpg';
import tiger from '../../assets/tiger.jpg';
import turtle from '../../assets/turtle.jpg';
import paddle from '../..//assets/paddle.jpg';
import Footer from '../Footer/Footer';
function Extinct(){
   return(
    <>
    <div id='extinct'>
<section class="hero">

<div class="hero-content">

<h2>Learn From the Past, Protect the Future</h2>

<p>
Many animal species have disappeared due to habitat loss,
climate change, overhunting, pollution, and human activities.
Their stories remind us of the importance of conservation.
</p>

</div>

</section>

<section class="section">

<h2 class="section-title">Why Species Become Extinct?</h2>

<div class="intro">

<img src="https://images.unsplash.com/photo-1511497584788-876760111969"/>

<div class="intro-text">

<h2>Understanding Extinction</h2>

<p>
Extinction occurs when the last individual of a species dies.
Natural disasters, environmental changes, invasive species,
and human activities such as deforestation and illegal hunting
have caused many animals to disappear forever.
</p>

<p>
Protecting biodiversity today helps prevent more species from
meeting the same fate.
</p>

</div>

</div>

</section>


<section class="section">

<h2 class="section-title">Famous Extinct Animals</h2>

<div class="card-grid">

<div class="card">
<img src={dodo}/>
<div class="card-content">
<h3> Dodo</h3>
<p>A flightless bird native to Mauritius that became extinct in the late 17th century due to hunting and introduced animals.</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={tiger}/>
<div class="card-content">
<h3> Tasmanian Tiger (Thylacine)</h3>
<p>A carnivorous marsupial from Australia that disappeared in the 20th century because of hunting and habitat loss.</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={bird}/>
<div class="card-content">
<h3> Passenger Pigeon</h3>
<p>Once one of the most abundant birds in North America, it became extinct because of excessive commercial hunting.</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={elep}/>
<div class="card-content">
<h3> Woolly Mammoth</h3>
<p>A giant Ice Age mammal that disappeared due to climate change and hunting by early humans.</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={paddle}/>
<div class="card-content">
<h3> Chinese paddlefish</h3>
<p>The Chinese paddlefish (Psephurus gladius) was a giant migratory fish native to China's Yangtze River system and one of the largest freshwater fishes ever recorded. As the only species in the genus Psephurus, it represented an ancient lineage of paddlefishes that survived for millions of years before being declared extinct in 2022 following decades without a viable population</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={sparrow}/>
<div class="card-content">
<h3>Bridled white-eye</h3>
<p>The bridled white-eye (Zosterops conspicillatus) (Chamorro name: nosa') is a species of white-eye native to the Mariana Islands and formerly Guam. The species' natural habitat is tropical forests, shrublands and urban areas</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={rhino}/>
<div class="card-content">
<h3>Western Black Rhinoceros</h3>
<p>The western black rhinoceros (Diceros bicornis longipes) or West African black rhinoceros is an extinct subspecies of the black rhinoceros. It was declared extinct by the IUCN in 2011</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={bat}/>
<div class="card-content">
<h3>Christmas Island pipistrelle</h3>
<p>The Christmas Island pipistrelle was a small insect-eating bat that was found only on Christmas Island. It became notable as the first known mammal to go extinct in Australia during the 21st century, with its rapid decline serving as a widely cited example of how quickly isolated island species can disappear..</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={gost}/>
<div class="card-content">
<h3> Pyrenean ibex</h3>
<p>The Pyrenean ibex (Capra pyrenaica pyrenaica), also known as the bucardo, was an extinct mountain goat native to the Pyrenees of northern Spain and southern France. It was one of the four recognized subspecies of the Iberian ibex and became internationally famous as the first extinct animal ever brought back briefly through cloning. </p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={turtle}/>
<div class="card-content">
<h3>Pinta Island tortoise</h3>
<p>The Pinta Island tortoise (Chelonoidis abingdonii) was a giant tortoise native to Pinta Island in Ecuador’s Galápagos archipelago. It became one of the world's most famous extinction stories because its last known individual, Lonesome George, died in 2012, making the taxon officially extinct.</p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={mouse}/>
<div class="card-content">
<h3>Bramble Cay melomys</h3>
<p>The Bramble Cay melomys (Melomys rubicola) was a small rodent native to a single tiny coral island, Bramble Cay, at the northern tip of Australia's Great Barrier Reef. It is best known as the only mammal endemic to the reef and for becoming one of the most widely cited examples of a species lost after severe habitat degradation linked to sea-level rise and storm-driven inundation. </p>
<span class="status">Extinct</span>
</div>
</div>

<div class="card">
<img src={dolphin}/>
<div class="card-content">
<h3>Baiji</h3>
<p>The baiji (Lipotes vexillifer), also known as the Yangtze river dolphin, was a freshwater dolphin native to the Yangtze River in China. It became one of the world's rarest mammals due to habitat degradation, heavy river traffic, pollution, and fishing impacts, and is widely regarded as functionally extinct after extensive surveys failed to locate a surviving population </p>
<span class="status">Extinct</span>
</div>
</div>
</div>

</section>
<section class="section">

<h2 class="section-title">Extinction Timeline</h2>

<table>

<tr>
<th>Species</th>
<th>Region</th>
<th>Approximate Extinction</th>
<th>Main Cause</th>
</tr>

<tr>
<td>Dodo</td>
<td>Mauritius</td>
<td>17th Century</td>
<td>Hunting & Invasive Species</td>
</tr>

<tr>
<td>Passenger Pigeon</td>
<td>North America</td>
<td>1914</td>
<td>Commercial Hunting</td>
</tr>

<tr>
<td>Tasmanian Tiger</td>
<td>Australia</td>
<td>1936</td>
<td>Hunting & Habitat Loss</td>
</tr>

        <tr>
        <td>Woolly Mammoth</td>
        <td>Arctic Regions</td>
        <td>~4,000 Years Ago</td>
        <td>Climate Change & Hunting</td>
        </tr>

        </table>

        </section>
        <section class="section">

        <h2 class="section-title">How Can We Prevent More Extinctions?</h2>

        <div class="awareness">

        <ul>

        <li>🌳 Protect forests and natural habitats.</li>

        <li>🦏 Prevent illegal wildlife hunting and trade.</li>

        <li>♻ Reduce pollution and plastic waste.</li>

        <li>🌎 Support biodiversity conservation projects.</li>

        <li>🌱 Plant more trees and restore damaged ecosystems.</li>

        <li>📚 Educate communities about wildlife conservation.</li>

        <li>🤝 Support national parks and wildlife sanctuaries.</li>

        </ul>

        </div>

        </section>

        <section class="cta">

        <h2>Every Species Matters</h2>

        <p>
        Extinction cannot be reversed. By protecting endangered animals today,
        we help preserve Earth's biodiversity for future generations.
        Together, we can make a difference.
</p>

<a href="https://chat.whatsapp.com/LqpRCWu4UkWF4v4c7C4m7T"><button>Support Conservation</button></a>

</section></div>
    </>
   );
}
export default Extinct;