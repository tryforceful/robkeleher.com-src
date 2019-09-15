<div class="row">
    <div class="col-12 col-sm-6">
        <h2>My Interests</h2>
        <ul class="interests col-auto mx-auto col-sm-11 col-md-offset-1">
            <li>:computer: Programming</li>
            <li>:microphone: Singing</li>
            <li>:bicyclist: Cycling</li>
            <li>:jp: Japan</li>
            <li>:video_game: The Legend of Zelda!</li>
        </ul>
    </div>
    <div class="col-12 col-sm-6">
        <h2>Work History</h2>
        {% include company_logos.html classes="col-auto mx-auto" %}
    </div>
</div>
<div class="row justify-content-around" id="tech">
    <div class="col-12">
        <h2>Tech Experience</h2>
    </div>
    {%- for item in site.data.technologies -%}
    <div class="col-auto">
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