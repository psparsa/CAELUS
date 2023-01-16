import "../styles/global.css";
import * as React from "react";
import * as styles from "../styles/index.module.css";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className={styles.HomePage}>
      <video
        src="/Background.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
        disablePictureInPicture={true}
        disableRemotePlayback={true}
        className={styles.VideoPlayer}
      />

      <div className={styles.Container}></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
