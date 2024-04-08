/* eslint-disable @next/next/no-img-element */
"use client";

import {
  getLocalStorage,
  setLocalStorage,
} from "@/components/utils/handleLocalStorage";
import { beatStructure, mainPlayListName } from "@/constants";
import { $Beats, $PlayList, $SelectedBeat } from "@/stores/beats";
import { useStore } from "@nanostores/react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";
import { use, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import ReactPlayer from "react-player";

export const MusicPlayer = () => {
  const beats = useStore($Beats);
  const playlist = useStore($PlayList);
  const selectedBeat = useStore($SelectedBeat);
  const [playing, setPlaying] = useState<boolean>(true);
  const [ended, setEnded] = useState<boolean>(false);
  const [progressDuration, setprogressDuration] = useState<string>("0:00");
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<string>("0:00");
  const playerRef = useRef(null);
  const [volume, setVolume] = useState<number>(getLocalStorage("volumen"));
  const handlePlay = () => {
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
      setLocalStorage(`localSelectedBeat`, beats[0]);
      setLocalStorage(`localPlayList`, { name: mainPlayListName, beats });
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
    const { beats: playlistBeats, name } = playlist;
    if (!selectedBeat) {
      $SelectedBeat.set(beats[0]);
      setLocalStorage(`localSelectedBeat`, beats[0]);
      setLocalStorage(`localPlayList`, { name: mainPlayListName, beats });
      setPlaying(true);
      setEnded(false);
    } else {
      const currentIndex = playlistBeats.findIndex(
        (beat) => beat.id === selectedBeat.id
      );
      setPlaying(true);
      setEnded(false);
      setLocalStorage(`localPlayList`, { name, beats: playlistBeats });
      if (currentIndex === playlistBeats.length - 1) {
        $SelectedBeat.set(playlistBeats[0]);
        setLocalStorage(`localSelectedBeat`, playlistBeats[0]);
      } else {
        $SelectedBeat.set(playlistBeats[currentIndex + 1]);
        setLocalStorage(`localSelectedBeat`, playlistBeats[currentIndex + 1]);
      }
    }
  };
  useEffect(() => {
    if (ended) {
      handleNextSong();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ended]);
  useEffect(() => {
    setLocalStorage(`volumen`, volume);
  }, [volume]);
  useEffect(() => {
    if (
      localStorage.getItem(`localSelectedBeat`) &&
      localStorage.getItem(`localPlayList`)
    ) {
      $SelectedBeat.set(getLocalStorage(`localSelectedBeat`));
      $PlayList.set(getLocalStorage(`localPlayList`));
      setTimeout(() => {
        setPlaying(false);
      }, 200);
    }
  }, []);
  useEffect(() => {
    if (selectedBeat) {
      setPlaying(true);
      setEnded(false);
    }
  }, [selectedBeat]);

  useEffect(() => {
    if (selectedBeat) {
      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 mt-[3rem] flex flex-col p-2 bg-primario`}
          >
            <div className="flex flex-col justify-center">
              <img
                src={`https://img.youtube.com/vi/${selectedBeat.url}/mqdefault.jpg`}
                alt={`imagen de ${selectedBeat.name}`}
                className="rounded-xl w-full h-[5rem] object-cover"
              />
              <div className="flex flex-col items-baseline gap-1 py-1">
                <h3 className="text-secundario/80 font-semibold">
                  {selectedBeat.name}
                </h3>
                <h4 className="text-sm text-secundario/50">
                  {selectedBeat.producer.name}
                </h4>
              </div>
            </div>
          </div>
        ),
        { id: "beat-toast", duration: 5000, position: "top-right" }
      );
    }

    return () => {
      toast.dismiss();
    };
  }, [selectedBeat]);
  const handlePrevSong = () => {
    const { beats: playlistBeats, name } = playlist;
    if (!selectedBeat) {
      $SelectedBeat.set(beats[0]);
      setLocalStorage(`localSelectedBeat`, beats[0]);
      setLocalStorage(`localPlayList`, { name: mainPlayListName, beats });
      setPlaying(true);
      setEnded(false);
    } else {
      const currentIndex = playlistBeats.findIndex(
        (beat) => beat.id === selectedBeat.id
      );
      setPlaying(true);
      setEnded(false);
      setLocalStorage(`localPlayList`, { name, beats: playlistBeats });
      if (currentIndex === 0) {
        $SelectedBeat.set(playlistBeats[playlistBeats.length - 1]);
        setLocalStorage(
          `localSelectedBeat`,
          playlistBeats[playlistBeats.length - 1]
        );
      } else {
        $SelectedBeat.set(playlistBeats[currentIndex - 1]);
        setLocalStorage(`localSelectedBeat`, playlistBeats[currentIndex - 1]);
      }
    }
  };

  return (
    <>
      <section className="sticky flex justify-center items-center w-full h-[6rem] bottom-0 bg-secundario">
        <div className=" absolute hover:top-[-1rem] top-0 w-full z-30 flex opacity-70 hover:opacity-100 overflow-hidden duration-200 h-1 hover:h-[2rem] peer">
          <div
            className=" z-40 h-[2rem] absolute left-0 bg-[#DF2935] ease-linear duration-1000"
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

        <div
          className="opacity-100 peer-hover:opacity-0 top-[-.2rem] pointer-events-none z-30 h-[.7rem] w-[.7rem] rounded-full absolute bg-[#DF2935]"
          style={{
            left: `${progress * 100 - 0.3}%`,
            transition: "left 1s linear",
          }}
        />

        {selectedBeat?.structure.map((section, index) => (
          <div
            key={index}
            className="opacity-0 peer-hover:opacity-100 z-50 h-[.5rem] top-[-1.5rem] absolute duration-100 ease-linear"
            style={{
              left: `${section.start * 100}%`,
              width: `${(section.end - section.start) * 100}%`,
              backgroundColor:
                beatStructure[section.name as keyof typeof beatStructure].color,
            }}
          >
            <small className="flex items-center justify-center top-[-1rem] bg-primario/70 rounded-md p-1 text-center absolute left-1/2 transform -translate-x-1/2 shadow-xl">
              {beatStructure[section.name as keyof typeof beatStructure].name}
            </small>
          </div>
        ))}
        <div className="flex absolute justify-center items-center w-full h-[6rem] overflow-hidden">
          <div className="absolute blur-3xl z-10 pointer-events-none w-screen h-screen">
            {selectedBeat && (
              <ReactPlayer
                className="scale-x-150 opacity-20"
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
                onPlay={handlePlay}
                onEnded={() => setEnded(true)}
                onDuration={handleDuration}
                onProgress={handleProgress}
                volume={volume}
              />
            )}
          </div>
        </div>
        <div className="z-20 flex flex-col items-center justify-center gap-2 ">
          <div className="flex items-center justify-center gap-5">
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
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume !== null ? volume : 0.5}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="MusicPlayer-volumen"
          />
          {selectedBeat && (
            <p className="opacity-20 hover:opacity-100 bottom-0 left-0 absolute text-terciario duration-100">
              Reproduciendo: {playlist.name}
            </p>
          )}
        </div>
      </section>
    </>
  );
};
