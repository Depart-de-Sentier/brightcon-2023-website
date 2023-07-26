<template>
  <div class="container">
    <div>
      <h1>Tentative Programme for Brightcon 2023</h1>

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
              <td>Interactive talks</td>
            </tr>
            <tr class="active-row">
              <td>14:00 - 15:30</td>
              <td>Salle Ellipse</td>
              <td>
                Course on web assembly and live documentation by
                <NuxtLink :to="{ hash: '#mw' }" external="True"
                  >Michael WEINOLD</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>15:30 - 17:00</td>
              <td>Salle Ellipse</td>
              <td>Panel discussion on benefits and limits of openness</td>
            </tr>
            <tr class="active-row">
              <td>18:00 - 19:00</td>
              <td>Salle Ellipse</td>
              <td>Social event - visit of old steel works</td>
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
              <td>10:00 - 12:00</td>
              <td>Salle Ellipse</td>
              <td>Interactive talks</td>
            </tr>
            <tr class="active-row">
              <td>14:00 - 15:30</td>
              <td>Salle Ellipse</td>
              <td>
                Course on prospective LCA by
                <NuxtLink :to="{ hash: '#rs' }" external="True"
                  >Romain SACCHI</NuxtLink
                >
              </td>
            </tr>
            <tr class="active-row">
              <td>15:30 - 17:00</td>
              <td>Salle Ellipse</td>
              <td>Help, I neeed somebody breakout session</td>
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
              <td>10:00 - 12:00</td>
              <td>Salle Ellipse</td>
              <td>Interactive talks</td>
            </tr>
            <tr class="active-row">
              <td>13:30 - 14:00</td>
              <td>Salle Ellipse</td>
              <td>Results of hackathon</td>
            </tr>
            <tr class="active-row">
              <td>14:00 - 15:00</td>
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
