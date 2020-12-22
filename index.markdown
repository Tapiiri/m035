---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: none
---
<head>
  <link rel="stylesheet" href="assets/styles.css">
</head>

<body>
  <div class="main-container" id="counter">
    <div class="counter-container days">
      <div class="counter days" id="counter-days">
        <div class="digit days" id="days-2" data-time="0"></div>
        <div class="digit days" id="days-1" data-time="0"></div>
        <div class="digit days" id="days-0" data-time="0"></div>
      </div>
      <h1>Days</h1>
    </div>
    <div class="counter-container hours">
      <div class="counter hours" id="counter-hours">
        <div class="digit hours" id="hours-1" data-time="0"></div>
        <div class="digit hours" id="hours-0" data-time="0"></div>
      </div>
      <h3>Hours</h3>
    </div>
    <div class="counter-container minutes">
      <div class="counter minutes" id="counter-minutes">
        <div class="digit minutes" id="minutes-1" data-time="0"></div>
        <div class="digit minutes" id="minutes-0" data-time="0"></div>
      </div>
      <h3>Minutes</h3>
    </div>
    <div class="counter-container seconds">
      <div class="counter seconds" id="counter-seconds">
        <div class="digit seconds" id="seconds-1" data-time="0"></div>
        <div class="digit seconds" id="seconds-0" data-time="0"></div>
      </div>
      <h3>Seconds</h3>
    </div>
  </div>
  <script src="assets/counterScript.js"></script>



</body>