---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: none
---
<head>
  <link rel="stylesheet" href="assets/styles.css">
</head>

<body>
    {% assign counters = "hours,minutes,seconds" | split: ',' %}
    <div class="main-container" id="counter">
        <div class="counter-container days">
        <div class="counter days" id="counter-days">
            <div class="digit days" id="days-2" data-time="0"></div>
            <div class="digit days" id="days-1" data-time="0"></div>
            <div class="digit days" id="days-0" data-time="0"></div>
        </div>
        <h1>Days</h1>
        </div>
        {% for counter in counters %}
        <div class="counter-container {{counter}}">
        <div class="counter {{counter}}" id="counter-{{counter}}">
            <div class="digit {{counter}}" id="{{counter}}-1" data-time="0"></div>
            <div class="digit {{counter}}" id="{{counter}}-0" data-time="0"></div>
        </div>
        <h3>{{ counter | capitalize }}</h3>
        </div>
        {% endfor %}
    </div>
  <script src="assets/counterScript.js"></script>



</body>