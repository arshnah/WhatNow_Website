import { ScrollVelocity } from "whatnow-web";

// Scroll-velocity marquee primitive: rows of text that scroll horizontally and
// speed up/slow down with scroll velocity. Here it renders at its base
// velocity with a couple of repeating phrases.
export const Default = () => (
  <div style={{ overflow: "hidden", width: "100%" }}>
    <ScrollVelocity
      texts={["WhatNow  •  Careers  •  Exams  •  Guides  •  ", "Unbiased  •  Real stories  •  Clear roadmaps  •  "]}
      velocity={40}
      numCopies={6}
    />
  </div>
);
