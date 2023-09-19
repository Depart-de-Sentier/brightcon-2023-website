<template>
  <div class="container">
    <div>
      <h1>Programme for Brightcon 2023</h1>

      <h2>Hackathon - Sept 16 & 17</h2>
      <p>
        On September 16 & 17, we will have a hackathon with the
        <a href="https://www.hestia.earth/"> HESTIA team </a>. HESTIA provides
        detailed and validated activity data on agriculture and food supply
        chains (currently the data are from more than 400 published studies and
        35,000 farms). HESTIA also makes available nearly 500 models to gap fill
        farm activity data (e.g., to quantify ruminant grass consumption), to
        estimate agricultural emissions (e.g., N2O emissions related to
        fertiliser application), and to quantify resource uses. It is an
        open-source, open-access project and still in the development and
        testing stage, but is already the largest open dataset and model archive
        in this area. In the hackathon we will focus on integrating HESTIA with
        open LCA software, and simplifying the process of entering data into
        HESTIA.
      </p>
      <table class="styled-table">
        <thead>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Event</th>
        </thead>
        <tbody>
          <tr class="active-row">
            <td>16/Sept/2023</td>
            <td>09:30 - 10:00</td>
            <td>Belvaux building of LIST</td>
            <td>Registration</td>
          </tr>
          <tr class="active-row">
            <td>16/Sept/2023</td>
            <td>10:00 - 17:00</td>
            <td>Belvaux building of LIST</td>
            <td>hackathon</td>
          </tr>
          <tr class="active-row">
            <td>17/Sept/2023</td>
            <td>10:00 - 17:00</td>
            <td>Belvaux building of LIST</td>
            <td>hackathon</td>
          </tr>
          <tr class="active-row">
            <td>17/Sept/2023</td>
            <td>17:00 - 18:00</td>
            <td>Belval Petanque court</td>
            <td>Outdoor games / snacks (<i>if weather allows</i>)</td>
          </tr>
        </tbody>

        <tbody></tbody>
      </table>
      <h2>Conference - Sept 18, 19 and 20</h2>
      <p>
        The conference will be a mix of talks, special sessions, and short
        courses. Being there in person is a lot of fun, but this year, with
        support from ecoinvent, we are also offering
        <a href="https://canapii.com">online attendance</a>. Physical attendance
        is limited to 80 people, and we expect it to sell out, as it did last
        year.
      </p>

      The conference part of Brightcon 2023 will include (changes are still
      possible):

      <ul>
        <li>Premise hands on</li>
        <li>Open data</li>
        <li>Feedback on the Brightcon 2022 visualization contest</li>
        <li>News from the Brightway development roadmap</li>
        <li>What's new in the Brightway documentation project</li>
        <li>Contribution analysis with Brightway and other modules</li>
        <li>Full SQL database backend solution for Brightway</li>
        <li>Overview of progress/plans for the AB</li>
      </ul>
      <div class="card">
        <header>
          <h3>18 September 2023</h3>
        </header>
        <table class="styled-table">
          <thead>
            <th>Time</th>
            <th>Location</th>
            <th>Event</th>
          </thead>
          <tbody>
            <tr class="active-row">
              <td>09:30 - 10:00</td>
              <td>Salle Ellipse</td>
              <td>Registration</td>
            </tr>
            <tr class="active-row">
              <td>10:00 - 10:30</td>
              <td>Salle Ellipse</td>
              <td>Introduction to the conference</td>
            </tr>
            <tr class="active-row">
              <td>10:30 - 12:00</td>
              <td>Salle Ellipse</td>
              <td>
                What would an opensource database for MFA look like? (workshop
                with groups) by
                <NuxtLink :to="{ hash: '#svn' }" external="true"
                  >Sander VAN NIELEN</NuxtLink
                >
                <span class="tag">workshop</span>
              </td>
            </tr>
            <tr class="active-row">
              <td>12:00 - 13:00</td>
              <td>Salle Ellipse</td>
              <td>LUNCH</td>
            </tr>
            <tr class="active-row">
              <td>13:00 - 13:15</td>
              <td>Salle Ellipse</td>
              <td>
                Visualization contest results
                <NuxtLink :to="{ hash: '#kt' }" external="true"
                  >Karin TREYER</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>13:15 - 14:00</td>
              <td>Salle Ellipse</td>
              <td>
                Using the GTDR Database, by
                <NuxtLink :to="{ hash: '#vs' }" external="true"
                  >Valentin STARLINGER</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>14:00 - 15:00</td>
              <td>Salle Ellipse</td>
              <td>
                Brightway in the Browser (workshop) by
                <NuxtLink :to="{ hash: '#mw' }" external="true"
                  >Michael WEINOLD</NuxtLink
                >
                <span class="tag">workshop</span>
              </td>
            </tr>
            <tr class="active-row">
              <td>15:00 - 15:45</td>
              <td>Salle Ellipse</td>
              <td>Coffee Break</td>
            </tr>
            <tr class="active-row">
              <td>15:45 - 16:00</td>
              <td>Salle Ellipse</td>
              <td>
                Cycling from data island to island, by
                <NuxtLink :to="{ hash: '#cm' }" external="true"
                  >Chris MUTEL</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>16:00 - 17:00</td>
              <td>Salle Ellipse</td>
              <td>
                Panel discussion on benefits and limits of openness, by
                <NuxtLink :to="{ hash: '#cm' }" external="true"
                  >Chris MUTEL</NuxtLink
                >
                and
                <NuxtLink :to="{ hash: '#ok' }" external="true"
                  >Oliver KUSCHE</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>17:00 - 17:30</td>
              <td>Salle Ellipse</td>
              <td>
                Prioritizing Brightway development by
                <NuxtLink :to="{ hash: '#tng' }" external="true"
                  >Tomás NAVARRETE GUTIÉRREZ</NuxtLink
                >
                <span class="tag">workshop</span>
              </td>
            </tr>
            <tr class="active-row">
              <td>18:00 - 20:00</td>
              <td>Salle Ellipse</td>
              <td>Welcome drink</td>
            </tr>
            <tr class="active-row">
              <td>18:00 - TBD</td>
              <td>Online</td>
              <td>
                VOD: Talks and introduction to workshops (Organized in groups
                during coffee break)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <header>
          <h3>19 September 2023</h3>
        </header>
        <table class="styled-table">
          <thead>
            <th>Time</th>
            <th>Location</th>
            <th>Event</th>
          </thead>
          <tbody>
            <tr class="active-row">
              <td>9:15 - 10:00</td>
              <td>Salle Ellipse</td>
              <td>
                Leveraging Large Language Models and Vector Databases for
                Exploring Life Cycle Inventory Databases by
                <NuxtLink :to="{ hash: '#sy' }" external="true"
                  >Selim YOUSSRY</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>10:00 - 10:45</td>
              <td>Salle Ellipse</td>
              <td>
                Presentation of the EOS-Platform from Eaternity (group exercise)
                by
                <NuxtLink :to="{ hash: '#mk' }" external="true"
                  >Manuel KLARMANN</NuxtLink
                >
                <span class="tag">workshop</span>
              </td>
            </tr>
            <tr class="active-row">
              <td>10:45 - 11:00</td>
              <td>Salle Ellipse</td>
              <td>Coffee Break</td>
            </tr>
            <tr class="active-row">
              <td>11:00 - 12:00</td>
              <td>Salle Ellipse</td>
              <td>
                A more strict SQL schema for Brightway (group exercise), by
                <NuxtLink :to="{ hash: '#mk' }" external="true"
                  >Bartolomeus HÄUSSLING LÖWGREN</NuxtLink
                >
                <span class="tag">workshop</span>
              </td>
            </tr>
            <tr class="active-row">
              <td>12:00 - 13:00</td>
              <td>Salle Ellipse</td>
              <td>Lunch</td>
            </tr>
            <tr class="active-row">
              <td>13:00 - 13:15</td>
              <td>Salle Ellipse</td>
              <td>Brightcon Awards</td>
            </tr>
            <tr class="active-row">
              <td>13:15 - 14:45</td>
              <td>Salle Ellipse</td>
              <td>
                Course on prospective LCA by
                <NuxtLink :to="{ hash: '#rs' }" external="true"
                  >Romain SACCHI</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>14:45 - 15:30</td>
              <td>Salle Ellipse</td>
              <td>Coffee Break</td>
            </tr>
            <tr class="active-row">
              <td>15:30 - 15:45</td>
              <td>Salle Ellipse</td>
              <td>
                pyecospold and pyilcd, by
                <NuxtLink :to="{ hash: '#ms' }" external="true"
                  >Mina SAMI</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>15:45 - 16:00</td>
              <td>Salle Ellipse</td>
              <td>
                Adapting bw_processing to Parquet by
                <NuxtLink :to="{ hash: '#nvo' }" external="true"
                  >Nikolaj van OMME</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>16:00 - 16:30</td>
              <td>Salle Ellipse</td>
              <td>
                ILCD Importer for bw2io by
                <NuxtLink :to="{ hash: '#vs' }" external="true"
                  >Valentin STARLINGER</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>16:30 - 17:30</td>
              <td>Salle Ellipse</td>
              <td>"Help, I neeed somebody" breakout session</td>
            </tr>
            <tr class="active-row">
              <td>18:00 - 22:00</td>
              <td>Salle Ellipse</td>
              <td>
                Social gathering at
                <NuxtLink to="https://www.facebook.com/SchmelzBelval/">
                  Schmelz restaurant </NuxtLink
                >(1 minute walk from the conference venue)
              </td>
            </tr>
            <tr class="active-row">
              <td>18:00 - TBD</td>
              <td>Online</td>
              <td>
                VOD: Talks and introduction to workshops (Organized in groups
                during coffee break)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="card">
        <header>
          <h3>20 September 2023</h3>
        </header>
        <table class="styled-table">
          <thead>
            <th>Time</th>
            <th>Location</th>
            <th>Event</th>
          </thead>
          <tbody>
            <tr class="active-row">
              <td>9:15 - 9:45</td>
              <td>Salle Ellipse</td>
              <td>
                Current and future developments of the Activity Browser, by
                <NuxtLink :to="{ hash: '#vs' }" external="true"
                  >Bernhard STEUBING</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>9:45 - 10:00</td>
              <td>Salle Ellipse</td>
              <td>
                Matchbox: Matching mismatched databases by
                <NuxtLink :to="{ hash: '#cmutel' }" external="true"
                  >Chris MUTEL</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>10:00 - 10:15</td>
              <td>Salle Ellipse</td>
              <td>
                The ecoinvent glossary by
                <NuxtLink :to="{ hash: '#spollard' }" external="true"
                  >Sean POLLARD</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>10:15 - 10:45</td>
              <td>Salle Ellipse</td>
              <td>Coffee Break</td>
            </tr>
            <tr class="active-row">
              <td>10:45 - 12:00</td>
              <td>Salle Ellipse</td>
              <td>
                Practical Life Cycle Sustainability Assessment by
                <NuxtLink :to="{ hash: '#hz' }" external="true"
                  >Hanie ZARAFSHANI</NuxtLink
                >
                and
                <NuxtLink :to="{ hash: '#bw' }" external="true"
                  >Bo WEIDEMA</NuxtLink
                >
                <span class="tag">workshop</span>
              </td>
            </tr>
            <tr class="active-row">
              <td>12:00 - 13:00</td>
              <td>Salle Ellipse</td>
              <td>Lunch</td>
            </tr>
            <tr class="active-row">
              <td>13:00 - 14:15</td>
              <td>Salle Ellipse</td>
              <td>Results of hackathon</td>
            </tr>
            <tr class="active-row">
              <td>14:15 - 15:00</td>
              <td>Salle Ellipse</td>
              <td>Last reflections and audience feedback</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Instructors />
</template>

<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
