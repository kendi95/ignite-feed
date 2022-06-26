import { v4 as uuidV4 } from "uuid";

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
}

type Content = {
  type: string;
  content: string;
}

export type Post = {
  id: string;
  author: Author;
  publishAt: Date;
  content: Content[];
}

export const posts = [
  {
    id: uuidV4(),
    author: {
      avatarUrl: "https://github.com/kendi95.png",
      name: "Alisson Kendi Kohatsu",
      role: "Software Developer"
    },
    publishAt: new Date("2022-06-20 07:00:00"),
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare"
      },
      {
        type: "link",
        content: "#novoprojeto #nlw #rocketseat"
      }
    ]
  },
  {
    id: uuidV4(),
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador @Rocketseat"
    },
    publishAt: new Date("2022-06-23 10:00:00"),
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare"
      },
      {
        type: "link",
        content: "#novoprojeto #nlw #rocketseat"
      }
    ]
  }
] as Post[];