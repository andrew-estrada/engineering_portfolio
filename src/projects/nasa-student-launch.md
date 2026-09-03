---
layout: layouts/project.njk
title: NASA Student Launch
description: NASA Student Launch high-power rocketry work by Andrew Estrada — 915 MHz GPS integration, Raven dual-deployment avionics, and black-powder ejection ground testing.
summary: Supported a high-power rocket program targeting 4,000–5,000 ft with dual-deployment recovery and real-time GPS tracking after NAU’s NASA First Nations Launch qualification.
category: Aerospace Systems
role: Avionics team member — GPS integration, pre-flight verification, and ejection charge testing support
featured: true
order: 2
image: /assets/images/projects/nasa-launch.jpg
imageAlt: High-power rocket on the launch pad for NASA Student Launch
ogImage: /assets/images/projects/nasa-launch.jpg
problem: Design, build, and recover a high-power rocket capable of a 4,000–5,000 ft target altitude while carrying an automated imaging payload and meeting descent-time requirements.
contribution: Owned Featherweight GPS functionality and integration, verified telemetry, and led black-powder charge estimation and incremental ground testing for dual-deployment separation.
constraints:
  - Target altitude between 4,000 and 5,000 ft
  - Dual-deployment recovery with controlled descent timing
  - Reliable real-time tracking for recovery
  - Redundant flight-event detection
tools:
  - Featherweight GPS (915 MHz)
  - Raven 3 / Raven 4 altimeters
  - Ground testing
  - Ideal-gas charge estimation
metrics:
  - label: Altitude target
    value: "4–5k ft"
  - label: Recovery success
    value: "5/5 flights"
  - label: Charge tests
    value: "8 increments"
result: GPS tracking and dual-deployment recovery contributed to a 100% recovery success rate across five test flights.
permalink: /projects/nasa-student-launch/
---

## Context

NASA Student Launch challenges university teams to design, manufacture, and fly high-powered rockets against altitude and payload objectives. NAU earned a place in the competition after winning NASA First Nations Launch. The team’s rocket needed to reach 4,000–5,000 ft while carrying a payload with an automated camera system for imaging the landing vicinity.

## Avionics and recovery

The avionics architecture used dual Featherweight Raven altimeters (Raven 3 and Raven 4) for redundant detection of apogee and parachute deployment events. Each altimeter had an independent LiPo battery. Black-powder charges in ejection canisters were optimized through ground testing.

Recovery used dual deployment:

- 18-inch Fruity Chutes drogue at apogee for stabilization and roughly 70 mph descent
- 72-inch Iris main at 600 ft AGL for roughly 20 mph final descent
- Mission requirement: landing within a 90-second descent window

<figure>
  <img src="/assets/images/projects/nasa-avionics-1.jpg" alt="Rocket avionics bay and recovery hardware" width="1200" height="800" loading="lazy">
  <figcaption>Avionics and recovery hardware.</figcaption>
</figure>

## My work: GPS tracking

I was responsible for the Featherweight GPS unit operating at 915 MHz. That included securing the unit in the avionics bay, confirming consistent transmission to the ground station, configuring the system before flight, and verifying telemetry in flight-test and post-flight review. Reliable tracking was essential for efficient recovery.

<figure>
  <img src="/assets/images/projects/nasa-avionics-2.jpg" alt="GPS and avionics integration details" width="1200" height="800" loading="lazy">
  <figcaption>GPS and avionics integration.</figcaption>
</figure>

## Stage ejection testing

Dual deployment required two charges: one to separate the aft section containing the main parachute and one for the forward drogue section. After custom PVC blast caps became unusable, the team built a replacement approach using nitrile-glove pressure vessels sealed with electrical tape.

To size charges, I estimated a starting mass using the ideal gas law, then ran eight incremental ground tests at 0.25 g intervals for forward and aft sections until separation behavior was acceptable.

<figure>
  <img src="/assets/images/projects/nasa-ground-test.jpg" alt="Ground testing setup for ejection charges" width="1200" height="800" loading="lazy">
  <figcaption>Ground testing for ejection charges.</figcaption>
</figure>

<figure>
  <img src="/assets/images/projects/nasa-test-1.jpg" alt="Rocket assembly and test preparation" width="1200" height="800" loading="lazy">
  <figcaption>Assembly and test preparation.</figcaption>
</figure>

## Outcome

The avionics and recovery approach supported a **100% recovery success rate over five test flights**, giving the team repeatable hardware learning cycles before competition.
