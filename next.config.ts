import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/exams/imu-cet/scholarships',
        destination: '/exams/imu-cet/entry-paths',
        permanent: true,
      },
      {
        source: '/exams/imu-cet/resources',
        destination: '/exams/imu-cet/prep',
        permanent: true,
      },
      {
        source: '/exams/imu-cet/is-it-for-you',
        destination: '/exams/imu-cet/medical',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
