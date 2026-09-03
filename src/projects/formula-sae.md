---
layout: layouts/project.njk
title: Formula SAE Front Pushrod Suspension
description: Formula SAE front pushrod suspension and rocker design by Andrew Estrada — geometry optimization, MATLAB load analysis, ANSYS structural simulation, and CNC manufacturing.
summary: Designed and machined a cost-effective front pushrod rocker for NAU’s first Formula SAE car, iterating geometry for linear motion ratio, structural integrity, and manufacturability.
category: Vehicle Systems
role: Co-founder & front suspension contributor — rocker geometry, analysis, CAM, and machining
featured: true
order: 1
image: /assets/images/projects/fsae-car.jpg
imageAlt: Formula SAE vehicle during development
ogImage: /assets/images/projects/fsae-car.jpg
problem: NAU needed a first-generation FSAE front pushrod suspension that was tunable, lightweight, and manufacturable with available student resources.
contribution: Owned rocker geometry development, motion-ratio iteration in Lotus Shark, MATLAB load-transfer setup, ANSYS structural studies, Mastercam programming, and CNC machining of the rocker.
constraints:
  - At least 50 mm of wheel travel (V.3.1.1)
  - Prefer linear motion ratio for predictable damper response
  - Ease of manufacture for student CNC capability
  - Lightweight design with adequate structural margin
tools:
  - SolidWorks
  - Lotus Shark
  - MATLAB
  - ANSYS
  - Mastercam
  - CNC machining
metrics:
  - label: Design load
    value: "~1,100 N"
  - label: ANSYS FoS
    value: "~2.7"
  - label: 0–60 (extrapolated)
    value: "~3.58 s"
result: Produced a machined rocker that met tolerance and surface-finish targets after design iteration from a tabbed single-op concept to a practical two-operation CNC process.
permalink: /projects/formula-sae/
---

## Context

Formula SAE asks student teams to design, build, test, and compete with an open-wheel race car. As a sophomore I co-founded NAU’s Formula SAE club with the goal of fielding a senior-capstone vehicle. My focus was the suspension system, specifically a cost-effective front pushrod architecture.

## Design goals

- Ease of manufacture
- Linear motion ratio
- ≥ 50 mm wheel travel
- Lightweight structure
- Geometry optimized for predictable damper response

A linear motion ratio was preferred for a first car because it simplifies tuning and makes vehicle response easier to understand. Rocker side lengths and included angle control that response. Through iterative development and Lotus Suspension Shark simulation, the geometry was driven toward a linear characteristic.

<figure>
  <img src="/assets/images/projects/fsae-rocker-triangle.png" alt="Simple rocker arm geometry triangle used for motion ratio development" width="800" height="500" loading="lazy">
  <figcaption>Simple rocker geometry used to reason about motion ratio.</figcaption>
</figure>

<figure>
  <img src="/assets/images/projects/fsae-rocker-before.png" alt="Rocker geometry before optimization" width="640" height="400" loading="lazy">
  <figcaption>Before optimization.</figcaption>
</figure>

<figure>
  <img src="/assets/images/projects/fsae-rocker-after.png" alt="Rocker geometry after the twelfth iteration" width="640" height="400" loading="lazy">
  <figcaption>After the 12th iteration.</figcaption>
</figure>

## Analysis

A MATLAB load-transfer script established a starting point for static construction. Referencing *Race Car Vehicle Dynamics* and team analysis, a 3G bump case was treated as binding for suspension sizing. ANSYS was used to evaluate load cases, inspect stress distribution, and remove excess material while preserving structural integrity.

For the rocker study, the design load was approximately **1,100 N**, with an ANSYS factor of safety of approximately **2.7**.

<figure>
  <img src="/assets/images/projects/fsae-ansys-geometry.jpg" alt="ANSYS initial study geometry for the rocker" width="1000" height="700" loading="lazy">
  <figcaption>Initial study geometry.</figcaption>
</figure>

<figure>
  <img src="/assets/images/projects/fsae-ansys-stress.jpg" alt="ANSYS von Mises stress plot for the rocker" width="1000" height="700" loading="lazy">
  <figcaption>Von Mises stress.</figcaption>
</figure>

<figure>
  <img src="/assets/images/projects/fsae-ansys-fos.jpg" alt="ANSYS factor of safety plot for the rocker" width="1000" height="700" loading="lazy">
  <figcaption>Factor of safety.</figcaption>
</figure>

## Manufacturing

Manufacturability was a requirement from the first sketch because I would also machine the part. The rocker began as a single-operation design using tabs instead of soft jaws. During CAM it became clear that tabs were a poor retention strategy for the available stock, so the process was revised to a straightforward two-operation workflow with cosmetic fillets.

CAM was completed in Mastercam. The finished rocker met tolerance requirements and achieved a strong surface finish.

<figure>
  <img src="/assets/images/projects/fsae-cnc-1.jpg" alt="CNC machining of the Formula SAE rocker" width="1200" height="900" loading="lazy">
  <figcaption>CNC machining in process.</figcaption>
</figure>

<figure>
  <img src="/assets/images/projects/fsae-finished-part.jpg" alt="Finished machined rocker component" width="1200" height="900" loading="lazy">
  <figcaption>Finished machined component.</figcaption>
</figure>

<figure>
  <img src="/assets/images/projects/fsae-pushrod-diagram.jpg" alt="Front pushrod suspension configuration diagram" width="1200" height="800" loading="lazy">
  <figcaption>Front pushrod configuration.</figcaption>
</figure>

## Vehicle context

Beyond the rocker itself, the broader FSAE effort included suspension packaging, fabrication support, and vehicle data collection. Extrapolated vehicle 0–60 performance from team testing was approximately **3.58 seconds** — useful program context, not a claim that the rocker alone produced that result.

<figure>
  <img src="/assets/images/projects/fsae-machining.jpg" alt="Hands-on fabrication work for the Formula SAE program" width="1200" height="1600" loading="lazy">
  <figcaption>Hands-on fabrication alongside design ownership.</figcaption>
</figure>
