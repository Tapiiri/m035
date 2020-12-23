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
            <div class="digit digit-1 days" id="days-2" data-time="0"></div>
            <div class="digit digit-2 days" id="days-1" data-time="0"></div>
            <div class="digit digit-3 days" id="days-0" data-time="0"></div>
        </div>
        </div>
        <div class="small-wheels-container">
            {% assign counters = "hours,minutes,seconds" | split: ',' %}
            {% for counter in counters %}
                <div class="counter-container {{counter}}">
                    <div class="counter {{counter}}" id="counter-{{counter}}">
                        <div class="digit digit-1 {{counter}}" id="{{counter}}-1" data-time="0"></div>
                        <div class="digit digit-2 {{counter}}" id="{{counter}}-0" data-time="0"></div>
                    </div>
                </div>
            {% endfor %}
        </div>
        <div class="frame-container">
            <div class="frame-overlay">
                <h1>Days</h1>
                {% for counter in counters %}
                    <h3>{{ counter | capitalize }}</h3>
                {% endfor %}
            </div>
        </div>
    </div>
  <script src="assets/counterScript.js"></script>



</body>