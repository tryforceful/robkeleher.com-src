---
layout: default
title: Home
sass_file: home
---

{% capture include__main %}
# Hello, World! I'm Rob.

I am a senior Software and Web Developer with experience in frontend & full-stack development, project leadership and team leadership in the software industry. I have been responsible for critical products that have enhanced the experiences of tens of thousands of users. I have worked in team environments both large and small, for companies from a dozen to thousands of employees, following Agile/Scrum development principles as a certified Scrummaster. I strive to find and effect elegant solutions to technical problems as both a developer and a leader. I am also passionate about Japanese language, culture, and foreign exchange with 2 years of experience living and working in Japan as an English teacher.

Check out some of my [projects](#projects) on GitHub or my [résumé](#resume).

<div>
    <section>
        <img class="img-responsive" src="assets/images/cover.jpg"/>
    </section>
</div>
{% endcapture %}

{% capture include__interests %}
<div class="row">
    <div class="col-xs-6 p-2">
        <h2>My Interests</h2>
        <ul class="interests col-md-offset-1">
            <li>:computer: Programming</li>
            <li>:microphone: Singing</li>
            <li>:bicyclist: Cycling</li>
            <li>:jp: Japan</li>
            <li>:video_game: The Legend of Zelda!</li>
        </ul>

        </div>
        <div class="col-xs-6">

        <h2>Work Experience</h2>

        {% include company_logos.html classes="col-xs-12" %}
    </div>
</div>
{% endcapture %}

<section id="main_content">
    <section id="main" class="outer">
        <div class="inner">
        {{ include__main | markdownify }}
        </div>
    </section>
    <section id="interests" class="outer">
        <div class="inner">
        {{ include__interests | markdownify }}
        </div>
    </section>
    <section id="projects" class="outer">
        <div class="inner">
        {% capture include__projects %}{% include projects.md %}{% endcapture %}
        {{ include__projects | markdownify }}
        </div>
    </section>
    <section id="resume" class="outer">
        <div class="inner">
        {% capture include__resume %}{% include resume.md %}{% endcapture %}
        {{ include__resume | markdownify }}
        </div>
    </section>
    <section id="contact" class="outer">
        <div class="inner">
        {% capture include__contact %}{% include contact.md %}{% endcapture %}
        {{ include__contact | markdownify }}
        </div>
    </section>
</section>