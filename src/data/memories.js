
export const memoriesData = [
  {
    id: 1,
    title: "University Hackathon Victory",
    date: "March 2023",
    description: "Won 2nd place at UC Berkeley's annual hackathon with a team of 4 students, building an innovative campus food delivery app",
    type: "achievement",
    media: [
      {
        type: "image",
        url: "/data/images/memories/hackathon-presentation.jpg", // Place memory images in public/data/images/memories/
        alt: "Hackathon team presentation"
      },
      {
        type: "image", 
        url: "/data/images/memories/team-celebration.jpg",
        alt: "Team celebrating victory"
      },
      {
        type: "video",
        url: "/data/videos/demo-presentation.mp4", // Place videos in public/data/videos/
        thumbnail: "/data/images/memories/demo-thumbnail.jpg",
        alt: "Demo presentation video"
      }
    ]
  },
  {
    id: 2,
    title: "First Internship Experience",
    date: "June 2023",
    description: "Started my first tech internship at TechStart Solutions - an amazing learning experience with incredible mentors",
    type: "career",
    media: [
      {
        type: "image",
        url: "/data/images/memories/first-day-internship.jpg",
        alt: "First day at internship"
      },
      {
        type: "image",
        url: "/data/images/memories/team-meeting.jpg",
        alt: "Team meeting"
      }
    ]
  },
  {
    id: 3,
    title: "Computer Science Club Leadership",
    date: "September 2022", 
    description: "Elected as secretary of the CS club, organized coding workshops and tech talks for fellow students",
    type: "leadership",
    media: [
      {
        type: "image",
        url: "/data/images/memories/club-meeting.jpg",
        alt: "Club meeting"
      },
      {
        type: "video",
        url: "/data/videos/workshop-presentation.mp4", 
        thumbnail: "/data/images/memories/workshop-thumbnail.jpg",
        alt: "Workshop presentation"
      },
      {
        type: "image",
        url: "/data/images/memories/club-group-photo.jpg",
        alt: "Club event group photo"
      }
    ]
  }
];
