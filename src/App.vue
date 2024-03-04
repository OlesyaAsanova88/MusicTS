<script setup lang="ts">

import { onMounted, ref } from 'vue';
// import { collection, query, getDocs, onSnapshot } from "firebase/firestore";
// import { db } from '@/firebase/config'
import type { Song } from '@/types';
import { addSong, getSongs } from '@/firebase/songs';
import SongsList from './components/SongsList.vue';
import SongsPlayer from './components/SongsPlayer.vue';


// Обновление даты в реальном времени без перезагрузки страницы
const songs = ref<Song[]>([]);

const playingSongs: Song[] = [
  {
    id: '1',
    title: 'So What',
    artist: 'Miles Davis',
    year: 1959,
  },
  {
    id: '2',
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    year: 1991,
  },
  {
    id: '3',
    title: 'What a Wonderful World',
    artist: 'Louis  Armstrong',
    year: 1967,
  },
  {
    id: '4',
    title: 'The Look',
    artist: 'Roxette',
    year: 1988,
  },
]

onMounted(async () => {
  getSongs(songs)
})

const addToFavorite = async (songId: string) => {
  const song = playingSongs.find(song => song.id === songId)
  if(song) {
   await addSong(song)
  }
}

//Обновление данных с перезагрузкой страницы:
// const songs: Song[] = reactive([]);

// onMounted(async () => {
//   const q = query(collection(db, "songs"));
//   const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   songs.push({
//     id: doc.id,
//      ...doc.data(),
//   } as Song); 
// });
// })

</script>

<template>
  <main>
    <SongsPlayer 
    :playingSongs="playingSongs"
    @add-to-favorite="addToFavorite"
    />
    <SongsList :songs="songs" />
  </main>
</template>

<style scoped lang="scss">
  main {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(https://img.freepik.com/free-vector/vibrant-pink-watercolor-painting-background_53876-58931.jpg?size=626&ext=jpg&ga=GA1.1.1231329001.1704964341&semt=ais);
    height: 98vh;
    margin: 8px;
   padding: 50px;
   box-shadow: 0 0 15px #FF00C0;
  }
</style>
