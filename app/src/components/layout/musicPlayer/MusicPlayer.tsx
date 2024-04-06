"use client";

import { $Beats, $SelectedBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";

export const MusicPlayer = () => {
  const beats = useStore($Beats);
  const selectedBeat = useStore($SelectedBeat);
  const [playing, setPlaying] = useState<boolean>(true);

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
    if (!selectedBeat) {
      $SelectedBeat.set(beats[0]);
    }
    if (playing) {
      setPlaying(false);
    } else {
      setPlaying(true);
    }
    setEnded(false);
  };

  const handleonChangeRange = (e: any) => {
    if (!playerRef.current) return;

    (playerRef.current as ReactPlayer).seekTo(
      e.target.value * (playerRef.current as ReactPlayer).getDuration()
    );
  };
  const handleNextSong = () => {
    if (!selectedBeat) {
      $SelectedBeat.set(beats[0]);
    } else {
      const currentIndex = beats.findIndex(
        (beat) => beat.id === selectedBeat.id
      );
      if (currentIndex === beats.length - 1) {
        $SelectedBeat.set(beats[0]);
      } else {
        $SelectedBeat.set(beats[currentIndex + 1]);
      }
    }
  };
  const handlePrevSong = () => {
    if (!selectedBeat) {
      $SelectedBeat.set(beats[0]);
    } else {
      const currentIndex = beats.findIndex(
        (beat) => beat.id === selectedBeat.id
      );
      if (currentIndex === 0) {
        $SelectedBeat.set(beats[beats.length - 1]);
      } else {
        $SelectedBeat.set(beats[currentIndex - 1]);
      }
    }
  };
  return (
    <>
      <section className="sticky flex justify-center items-center w-full h-[6rem] bottom-0 bg-secundario">
        <div className=" absolute hover:top-[-1rem] top-0 w-full z-30 flex opacity-70 hover:opacity-100 overflow-hidden duration-200 h-1 hover:h-[2rem]">
          <div
            className=" z-40 h-[2rem] absolute left-0 bg-red-800 ease-linear duration-1000"
            style={{ width: `${progress * 100}%` }}
          />
          <div
            className="z-30 h-[2rem] absolute left-0 bg-red-500"
            style={{ width: `${100}%` }}
          />
          <p className="z-50 absolute flex top-[.2rem] ml-4 text-terciario">
            {progressDuration}
          </p>
          <p className="z-50 absolute right-0 flex top-[.2rem] mr-4 text-terciario">
            {duration}
          </p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={progress}
            onChange={handleonChangeRange}
            className="z-50 w-full absolute opacity-0 cursor-pointer h-[2rem]"
          />
        </div>
        <div className="flex absolute justify-center items-center w-full h-[6rem] overflow-hidden">
          <div className="absolute opacity-60 blur-xl z-10 pointer-events-none w-screen h-screen">
            {selectedBeat && (
              <ReactPlayer
                className="scale-x-150"
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${selectedBeat.url}`}
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
            )}
          </div>
        </div>
        <div className="z-20 flex items-center justify-center gap-5">
          <button type="button" className="" onClick={handlePrevSong}>
            <IconPlayerTrackPrevFilled
              className="text-terciario duration-75 active:scale-125 opacity-75 hover:opacity-100 hover:scale-105"
              size={30}
            />
          </button>
          <button type="button" className="" onClick={handlePlayButtonClick}>
            {playing && selectedBeat && (
              <IconPlayerPauseFilled
                className="text-primario active:scale-125 opacity-75 hover:opacity-100 hover:scale-105 duration-75"
                size={60}
              />
            )}
            {(!playing || !selectedBeat) && (
              <IconPlayerPlayFilled
                className="text-primario active:scale-125 opacity-75 hover:opacity-100 hover:scale-105 duration-75"
                size={60}
              />
            )}
          </button>
          <button type="button" className="z-20" onClick={handleNextSong}>
            <IconPlayerTrackNextFilled
              className="text-terciario duration-75 active:scale-125 opacity-75 hover:opacity-100 hover:scale-105"
              size={30}
            />
          </button>
        </div>
      </section>
    </>
  );
};
