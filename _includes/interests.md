<div class="row">
    <div class="col-12">
        <h2>Work History</h2>
        {% include company_logos.html classes="col-12 col-sm-auto mx-auto" %}
    </div>
</div>
<div class="row justify-content-around pb-3" id="tech">
    <div class="col-12">
        <h2>Tech Experience</h2>
    </div>
    
    {%- assign offsettime = 0 -%}
    {%- for item in site.data.technologies -%}
    <div class="col-auto" data-aos="flip-left" data-aos-anchor="#tech" data-aos-duration="750" data-aos-delay="{{ offsettime }}">
        {%- assign offsettime = offsettime | plus: 50 -%}
        <p class="text-center icon">
            {%- if item.icon -%}
                <i class="fa-fw {{item.icon}} icon-color-{% cycle 1,2,3,4,5 %}"></i>
            {%- elsif item.icon_special -%}
                <span class="icon-color-{% cycle 1,2,3,4,5 %}">{{ item.icon_special }}</span>
            {%- endif -%}
        </p>
        <p class="h5 text-center">{{item.name}}</p>
    </div>
    {%- endfor -%}
    <!-- below: hack for left-justified auto cols -->
    <div class="col-auto col-extra"><div></div></div>
    <div class="col-auto col-extra"><div></div></div>
    <div class="col-auto col-extra"><div></div></div>
    <div class="col-auto col-extra"><div></div></div>
    <div class="col-auto col-extra"><div></div></div>

</div>
<div class="row">
    <div class="col-12 col-sm-6">
        <h2>My Interests</h2>
        <ul class="fa-ul interests mx-auto col-auto mx-sm-0 col-sm-11 offset-sm-1">
            <li><span class="fa-li">:computer:</span> Programming</li>
            <li><span class="fa-li">:microphone:</span> Singing</li>
            <li><span class="fa-li">:bicyclist:</span> Cycling</li>
            <li><span class="fa-li">:jp:</span> Japan</li>
            <li><span class="fa-li">:video_game:</span> The Legend of Zelda!</li>
        </ul>
    </div>
    <div class="col-12 col-sm-6">
        <h2>Accolades</h2>
        <div class="row">
            <div class="col-auto mx-auto">
                <div>
                    <a target="_blank" href="https://www.codewars.com/users/tryforceful">
                        <img alt="Rob's Code Wars Level (www.codewars.com)" src="https://www.codewars.com/users/tryforceful/badges/large">
                    </a>
                </div>
            </div>
            <div class="col-auto mx-auto">
                <img class="img-fluid" width="200" src="assets/images/scrum.png">
            </div>
        </div>
    </div>
</div>