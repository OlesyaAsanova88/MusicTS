<script setup lang="ts">
import type { Song } from '@/types';

const props = defineProps<{ playingSongs: Song[] }>()

const emits = defineEmits<{
  (event: 'add-to-favorite', id: string): void
}>()

const currentSong = props.playingSongs[Math.floor(Math.random() * props.playingSongs.length)]
</script>

<template>
    <v-card class="player">
        <v-card-text>
            <v-list-subheader>Player</v-list-subheader>
            <v-icon icon="mdi mdi-play"></v-icon>
            {{ currentSong.title }} . {{ currentSong.artist }} ({{ currentSong.year }}) 
        </v-card-text>
        <v-card-actions>
            <v-btn @click="emits('add-to-favorite', currentSong.id)">
                Add to favorites
            </v-btn>
        </v-card-actions>
    </v-card>
</template>