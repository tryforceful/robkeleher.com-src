---
layout: default
canonical_url: http://www.robkeleher.com
---

<section id="main_content">
    <section id="_intro" class="outer gray-section">
        <a class="section-anchor" id="intro"></a>
        <div class="inner">
        {% capture include__intro %}{% include intro.md %}{% endcapture %}
        {{ include__intro | markdownify }}
        </div>
        <div class="d-none d-sm-block coverimage">
            <img class="img-fluid" srcset="
                assets/images/cover-4x.jpg 3840w,
                assets/images/cover-3x.jpg 2880w,
                assets/images/cover-2x.jpg 1920w,
                assets/images/cover-1x.jpg 960w"
            sizes="100vw"
            src="assets/images/cover.jpg"/>
        </div>
    </section>
    <section id="_about" class="outer dark-section">
        <a class="section-anchor" id="about"></a>
        <div class="inner">
        {% capture include__about %}{% include interests.md %}{% endcapture %}
        {{ include__about | markdownify }}
        </div>
    </section>
    <section id="_projects" class="outer gray-section">
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
    <section id="_contact" class="outer gray-section">
        <a class="section-anchor" id="contact"></a>
        <div class="inner">
        {% capture include__contact %}{% include contact.md %}{% endcapture %}
        {{ include__contact | markdownify }}
        </div>
    </section>
</section>