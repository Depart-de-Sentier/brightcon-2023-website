<template>
  <div class="container">
    <h1>Venue</h1>
    <h2>Location</h2>
    Brightcon 2023 will take place in the
    <a href="https://www.agora.lu/belval/belval/">Belval campus</a> of Esch-sur-Alzette,
    Luxembourg.
    <a
      href="https://www.list.lu/fileadmin/files/2022_ACCESS_MAP_BELVAL_BELVAUX_EN.pdf"
    >
      Here's an overview of the different LIST sites.
    </a>
    <p class="text-dark">
      For Belvaux (the hackathon venue place), Look for item 3
    </p>

    <h3>Conference location</h3>
    The conference of Sept. 18-20 will be held on: Ellipse room of the
    <a href="https://www.uni.lu/llc-en/"
      >Luxembourg Learning Centre (library of the University of Luxembourg) </a
    >.
    <p></p>
    <h4>
      Directions to Conference location (Belval Campus, Ellipse room of uni.lu
      Learning Center)
    </h4>
    <ul>
      <li>
        When you get out of the Belval-Université train station head to the
        Luxembourg Learning Centre. The building has a white glass facade. You
        will find it on your left side.
        <a href=" https://goo.gl/maps/MhK1NFbYvmyG3S4f8">
          The building is less than 2 minutes walk from the train station.
        </a>
      </li>
    </ul>

    <h3>Hackathon location</h3>
    The hackathon of Sept. 16, 17, will be held on the Belvaux building of LIST,
    <b>rooms F011-A and F011-B</b>:
    <div class="card">
      <p>
        41 rue du Brill <br />
        L-4422 Belvaux <br />
        Luxembourg <br />
      </p>
      <p>Tel. : +352 275 888 1</p>
    </div>
    <h4>Directions to hackathon location (Belvaux building of LIST)</h4>
    <ul>
      <li>
        <a href="/maps/Directions_Gare_Belval_LIST.pdf">
          🚶Directions from the nearest train station
        </a>
      </li>
    </ul>
    <h3>How to reach Luxembourg</h3>
    <ul>
      <li>
        🚅 by Train. The train station at Luxembourg City is well connected to
        neighboring countries and Europe in general: 2 hours from Paris by
        high-speed trains and 3 hours from Brussels. There are also high-speed
        trains connecting Metz/Strasbourg/Marseille.
      </li>
      <li>
        ✈ By Plane. The
        <a href="https://www.lux-airport.lu/">Airport in Luxembourg city </a> is
        close to the city center.
      </li>
    </ul>
    <h3>How to reach Belval</h3>
    Below, you can find a quick list of options to reach the Belval cmapus, for
    more detailed information, visit the
    <a href="https://www.belval.lu/en/belval/getting-here-and-parking">
      Belval Campus guide to get there and parking </a
    >.
    <p>
      The easiest way to get to Campus Belval is by public transportation. Once
      you are in Luxembourg,
      <a href="https://www.mobiliteit.lu/en/tickets/free-transport/">
        public transportation is free</a
      >. You don't need tickets to go from Luxembourg City to Belval for
      example.
    </p>

    <ul>
      <li>
        Taking the train (even if you are lodged in Esch-sur-Alzette). There are
        four trains per hour (during day time on working days). The train
        station at Campus Belval is called <b>"Belval-Université"</b>. Campus
        Belval is connected by direct trains with the City of Luxembourg (30
        minutes). The train stops at Bettembourg and Esch-sur-Alzette (and at
        some other stops). Check train times on the CFL website or at
        <a href="https://www.mobiliteit.lu/en/">mobiliteit.lu</a>.
      </li>
      <li>
        Bus lines from Luxembourg City reach Esch-sur-Alzette and Belval. Check
        train times on the CFL website or at
        <a href="https://www.mobiliteit.lu/en/">mobiliteit.lu</a>.
      </li>
    </ul>
    <h2>Accomodation</h2>
    <b>
      Last year, we booked a number of rooms in several hotels for the
      conference participants. We are in the process of doing the same for
      Brightcon 2023.
    </b>
    <!-- 
    Please note that the room availability is guaranteed for a limited period.
    We strongly suggest booking your stay as soon as possible. 
    -->
    Here are the hotels we booked last year for information. As soon as we have
    the final prices and details, all the information will be published here.

    <h3>Hotels</h3>

    <div class="row is-horizontal-align">
      <div
        v-for="(hotel, i) in hotels"
        :key="i"
        class="col-6-md card hotel-card"
      >
        <h4 class="header">
          <a :href="hotel.websiteUrl">
            {{ hotel.name }}
          </a>
        </h4>
        <div>
          <h5>Comment:</h5>
          <div>
            <p class="with-indent">{{ hotel.comment }}</p>
          </div>
        </div>
        <div>
          <h5><b> special conference</b> Prices :</h5>
          <div>
            <p class="with-indent">{{ hotel.price }}</p>
          </div>
        </div>

        <div>
          <h5>Contact:</h5>
          <div>
            <p v-if="hotel.tel" class="with-indent">Tel: {{ hotel.tel }}</p>
            <p v-if="hotel.mail" class="with-indent">
              Mail: <a :href="`mailto:${hotel.mail}`">{{ hotel.mail }}</a>
            </p>
          </div>
        </div>

        <div class="grow"></div>
        <div>
          <h5>Reservation:</h5>
          <div>
            <p class="with-indent">
              {{ hotel.reservation }}
            </p>
            <div class="is-center">
              <NuxtLink
                :to="hotel.formUrl"
                target="_blank"
                rel="noopener"
                class="button outline primary"
              >
                Please use the enclosed form
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h3>Other hotels</h3>

    <table>
      <tbody>
        <tr>
          <td><strong>Hotels</strong></td>
          <td><strong>Address</strong></td>
          <td><strong>Prices (estimation)</strong></td>
          <td><strong>Telephone</strong></td>
        </tr>
        <tr>
          <td>
            <a href="https://youthhostels.lu/en/youth-hostels/youth-hostel-esch"
              >Youth Hostel Esch-sur-Alzette</a
            >
          </td>
          <td>
            17, Boulevard John F. Kennedy<br />
            L-4170 Esch-sur-Alzette
          </td>
          <td>See website</td>
          <td>(+352) 26 27 66 450</td>
        </tr>
        <tr>
          <td>
            <a href="https://thesevenhotel.lu/lhotel/">The Seven Hotel</a>
          </td>
          <td>
            50 Gaalgebierg<br />
            L-4142 Esch-sur-Alzette
          </td>
          <td>
            <p>Single room Premium: 169 €/night</p>
            <p>Single room Deluxe : 202 €/night</p>
          </td>
          <td>
            Tel.: +352 540228<br />
            Email:
            <a href="mailto:reservation@thesevenhotel.lu"
              >reservation@thesevenhotel.lu</a
            >
          </td>
        </tr>
        <tr>
          <td><a href="https://www.hotel-acacia.lu/">Hôtel Acacia</a></td>
          <td>
            10, rue de la Libération<br />
            L-4210 Esch-sur-Alzette
          </td>
          <td>Single room (as of 2022): 98 €/night</td>
          <td>+(352) 54 10 61</td>
        </tr>
        <tr>
          <td>
            <a href="https://www.hoteldelaposteluxembourg.com/hotel"
              >Hôtel de la Poste</a
            >
          </td>
          <td>
            107 Rue de l'Alzette<br />
            Esch-sur-Alzette
          </td>
          <td>Single room: 115 €/night</td>
          <td>+(352) 54 00 18</td>
        </tr>
      </tbody>
    </table>
    <h3>Alternatives</h3>
    If accomodation in Luxembourg is out of your budget, an alternative is the
    city Thionville (in France), located at only 15 minutes away from
    Bettembourg by train, and there you have a direct train to Campus Belval.
    <h2>Sights</h2>
    <ul>
      <li>
        World class concert hall
        <a href="https://rockhal.lu/agenda-en/#filter=.Sep">Rockhal</a>
      </li>
      <li>
        <a href="https://www.belval.lu/en/leisure/blast-furnaces"
          >Blast furnaces</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const hotels = [
  {
    name: "IBIS Esch-Belval",
    websiteUrl:
      "https://all.accor.com/hotel/7071/index.fr.shtml?utm_term=mar&gclid=Cj0KCQjw-daUBhCIARIsALbkjSbTel61VKraL5IinXv1RPui8zPTg62vH8mChZ2gxhK0sFhpfGL9e-MaAsy2EALw_wcB&utm_campaign=ppc-ibi-mar-goo-be-fr-reg_top-mix-se&utm_medium=cpc&utm_content=be-fr-LU-V1243&utm_source=google",
    comment: "Near the train station of Belval",
    adress: "12, avenue du Rock’n Roll (Belval) L-4361 Esch-sur-Alzette",
    price:
      "Available until September 1st 2023, 113 € /night (single room + breakfast) | 123 €/night (twin or double room + breakfast)",
    tel: "(+352)261731",
    mail: "H7071-BO@accor.com",
    reservation: "15 rooms in option until September 1st. 2023",
    formUrl: "/Reservation_form_IBIS_Belval.pdf",
  },
  {
    name: "ResidHome Luxembourg Esch-Belval",
    websiteUrl:
      "https://www.myresidhome.com/esch-sur-alzette/residhome-luxembourg-esch-belval/apparthotel-residence-hoteliere.html?utm_source=adwords&utm_medium=content&utm_campaign=DSA_Gen_Ann3",
    comment: "5 minutes walk from the conference venue",
    adress: "3 Bd du Jazz (Belval) L-4370 Esch-sur-Alzette",
    price:
      "140 € (1 person room only), 155 € (room and breakfast) single room, 170 € (room and breakfast) double room",
    tel: "",
    mail: "Luxembourg.eschbelval@residhome.com",
    reservation: "15 rooms in option until September 1st 2023",
    formUrl: "/Reservation_form_RESID_HOME_Belval.pdf",
  },
];
</script>
<style>
.with-indent {
  text-indent: 1.5rem;
}
.hotel-card {
  display: flex;
  flex-direction: column;
}
.grow {
  flex-grow: 1;
}
</style>
