---
layout: default
canonical_url: http://www.robkeleher.com
---

{% capture include__main %}
<h1><div id="introtext">Hello, World! I'm Rob.</div></h1>

I am a senior Software and Web Developer with experience in frontend & full-stack development, project leadership and team leadership in the software industry. I have been responsible for critical products that have enhanced the experiences of tens of thousands of users. I have worked in team environments both large and small, for companies from a dozen to thousands of employees, following Agile/Scrum development principles as a certified Scrummaster. I strive to find and effect elegant solutions to technical problems as both a developer and a leader. I am also passionate about Japanese language, culture, and foreign exchange with 2 years of experience living and working in Japan as an English teacher.

Check out some of my [projects](#projects) on GitHub or my [résumé](#resume).

<div id="coverimage"><img class="img-fluid" src="assets/images/cover.jpg"/></div>

{% endcapture %}

<section id="main_content">
    <section id="_about" class="outer">
        <a class="section-anchor" id="about"></a>
        <div class="inner">
        {{ include__main | markdownify }}
        </div>
    </section>
    <section id="_interests" class="outer dark-section">
        <a class="section-anchor" id="interests"></a>
        <div class="inner">
        {% capture include__interests %}{% include interests.md %}{% endcapture %}
        {{ include__interests | markdownify }}
        </div>
    </section>
    <section id="_projects" class="outer">
        <a class="section-anchor" id="projects"></a>
        <div class="inner">
        {% capture include__projects %}{% include projects.md %}{% endcapture %}
        {{ include__projects | markdownify }}
        </div>
    </section>
    <section id="_resume" class="outer dark-section">
        <a class="section-anchor" id="resume"></a>
        <div class="inner">
        {% capture include__resume %}{% include resume.md %}{% endcapture %}
        {{ include__resume | markdownify }}
        </div>
    </section>
    <section id="_contact" class="outer">
        <a class="section-anchor" id="contact"></a>
        <div class="inner">
        {% capture include__contact %}{% include contact.md %}{% endcapture %}
        {{ include__contact | markdownify }}
        </div>
    </section>
</section>