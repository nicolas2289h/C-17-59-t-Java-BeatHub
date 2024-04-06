"use client";

import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerStopFilled,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export const MusicPlayer = () => {
  const [playing, setPlaying] = useState<boolean>(true);
  const [startPlayer, setStartPlayer] = useState<boolean>(false);

  const [pause, setPause] = useState<boolean>(false);
  const [ended, setEnded] = useState<boolean>(false);
  const [progressDuration, setprogressDuration] = useState<string>("0:00");
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<string>("0:00");
  const playerRef = useRef(null);
  const [volume, setVolume] = useState<number>(0.75);
  const handlePlay = () => {
    setPause(false);
    setEnded(false);
    setPlaying(true);
  };
  const handleDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60) - 1;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    setDuration(`${minutes}:${formattedSeconds}`);
  };
  const handleProgress = ({
    played,
    playedSeconds,
  }: {
    played: any;
    playedSeconds: any;
  }) => {
    setProgress(played);
    let minutes = 0;
    const remainingSeconds = Math.ceil(playedSeconds % 60) % 60;
    if (playedSeconds < 59 && minutes === 0) {
      minutes = Math.floor(playedSeconds / 60);
    } else if (remainingSeconds === 0 && minutes === 0 && playedSeconds > 0) {
      minutes = Math.floor(playedSeconds / 60) + 1;
    } else if (remainingSeconds === 0 && playedSeconds >= 60) {
      minutes = Math.floor(playedSeconds / 60) + 1;
    } else {
      minutes = Math.floor(playedSeconds / 60);
    }

    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    setprogressDuration(`${minutes}:${formattedSeconds}`);
  };
  const handlePlayButtonClick = (e: any) => {
    e.preventDefault();
    if (!startPlayer) {
      setStartPlayer(true);
    }
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
    setEnded(false);
  };
  return (
    <section className="sticky flex justify-center items-center w-full h-[4rem] bottom-0 bg-secundario overflow-hidden">
      {startPlayer && (
        <div className="absolute opacity-40 z-10 pointer-events-none w-screen h-screen">
          <ReactPlayer
            className=""
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${"ewvYDxeOhN4"}`}
            config={{
              youtube: {
                playerVars: {
                  fs: 1,
                  controls: 0,
                  modestbranding: 1,
                  autoplay: true,
                },
              },
            }}
            ref={playerRef}
            playing={playing}
            onPause={() => setPause(true)}
            onPlay={handlePlay}
            onEnded={() => setEnded(true)}
            onDuration={handleDuration}
            onProgress={handleProgress}
            volume={volume}
          />
        </div>
      )}
      <button type="button" className="z-20" onClick={handlePlayButtonClick}>
        {!startPlayer && (
          <IconPlayerStopFilled
            className="text-primario active:scale-110 duration-75"
            size={60}
          />
        )}
        {playing && startPlayer && (
          <IconPlayerPauseFilled
            className="text-primario active:scale-110 duration-75"
            size={60}
          />
        )}
        {!playing && startPlayer && (
          <IconPlayerPlayFilled
            className="text-primario active:scale-110 duration-75"
            size={60}
          />
        )}
      </button>
    </section>
  );
};
