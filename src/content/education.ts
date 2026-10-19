import type { EducationEntry } from '@/types/content'

export const education: EducationEntry[] = [
  {
    degree: 'Full Stack Java Development',
    institution: 'Tel-Ran Educational Center',
    location: 'Rehovot, Israel',
    period: 'Sep 2020 – Sep 2021',
    document: {
      title: 'Certificate of Graduation',
      src: '/education/tel-ran-certificate.webp',
      thumbnail: '/education/tel-ran-certificate-thumb.webp',
      width: 1240,
      height: 1605,
      alt: 'Tel-Ran certificate of graduation in Full Stack Java Development issued to Alina Laktionova, ID FG035484, for the course held 24/09/2020 – 23/09/2021 with 454 hours of lectures and lab practice.',
    },
  },
  {
    degree: 'Administration of Computer Systems and Networks',
    institution: 'Kyiv Electromechanical College',
    location: 'Kyiv, Ukraine',
    period: 'Sep 2014 – Jun 2017',
    document: {
      title: 'Junior Specialist’s Diploma with honours',
      src: '/education/kyiv-electromechanical-diploma.webp',
      thumbnail: '/education/kyiv-electromechanical-diploma-thumb.webp',
      width: 2000,
      height: 1382,
      alt: 'Two-page Junior Specialist’s diploma with honours, E20 № 139915, in Ukrainian and English, issued to Alina Laktionova by Kyiv Electromechanical College for completing the course in 2017; program subject area Administration of computer systems and networks, professional qualification technician of system administration; dated 24 July 2020.',
    },
  },
]
