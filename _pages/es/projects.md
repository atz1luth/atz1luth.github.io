---
page_id: projects
layout: page
title: \ d0Cs /
permalink: /projects/
description:
nav: true
nav_order: 3
display_categories: [code, hacking, "cheet sheets", misc]
horizontal: false
---

<br>

> Aquí tengo las fichas de comandos que me parecen interesantes.<br>Muchos repositorios de github, y algunos míos. :ok_hand::slightly_smiling_face::wink:

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  <ul>
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "importance" %}
    {% for project in sorted_projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a></li>
    {% endfor %}
  </ul>
  {% endfor %}
{% else %}
  <ul>
    {% assign sorted_projects = site.projects | sort: "importance" %}
    {% for project in sorted_projects %}
      <li><a href="{{ project.url }}">{{ project.title }}</a> - {{ project.date }}</li>
    {% endfor %}
  </ul>
{% endif %}
</div>
