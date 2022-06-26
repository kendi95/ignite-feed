import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./app.module.css";

import { posts } from "./utils/datas";

export function App() {

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </main>
      </div>
    </div>
  )
}
