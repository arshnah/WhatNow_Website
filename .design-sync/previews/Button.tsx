import { Button } from "whatnow-web";

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Primary = () => <Button variant="primary">Explore Careers</Button>;

export const Outline = () => <Button variant="outline">About WhatNow</Button>;

export const WithIcon = () => (
  <Button variant="primary" icon={<Arrow />}>Get started</Button>
);

export const Disabled = () => (
  <Button variant="primary" disabled>Submitting…</Button>
);
