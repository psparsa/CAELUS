import "../styles/global.css";
import React from "react";
import * as styles from "../styles/index.module.css";
import type { HeadFC, PageProps } from "gatsby";
import { Weather } from "../components/Weather/Weather";
import { PublicIP } from "../components/PublicIP/PublicIP";
import { Clock } from "../components/Clock/Clock";
import { Search } from "../components/Search/Search";

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

      <div className={styles.Container}>
        <header className={styles.Header}>
          <Weather />
        </header>
        <div className={styles.MiddleContainer}>
          <Clock />
          <Search className={styles.Search} />
        </div>
        <PublicIP />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
