<script setup>
import { reactive, ref, onMounted } from "vue";
const img = ref(null);
let video = ref(null);

const width = 320;
const constraints = { audio: false, video: { width: 1280, height: 720 } };

const getUserMedia = () => {
  if (navigator.mediaDevices === undefined) {
    navigator.mediaDevices = {};
  }

  if (navigator.mediaDevices.getUserMedia === undefined) {
    navigator.mediaDevices.getUserMedia = function(constraints) {
      // 首先，如果有getUserMedia的话，就获得它
      var getUserMedia =
        navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      // 一些浏览器根本没实现它 - 那么就返回一个error到promise的reject来保持一个统一的接口
      if (!getUserMedia) {
        return Promise.reject(
          new Error("getUserMedia is not implemented in this browser")
        );
      }

      // 否则，为老的navigator.getUserMedia方法包裹一个Promise
      return new Promise(function(resolve, reject) {
        getUserMedia.call(navigator, constraints, resolve, reject);
      });
    };
  }
};
getUserMedia();

const init = () => {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(mediaStream) {
      video.value.srcObject = mediaStream;
      video.value.onloadedmetadata = function(e) {
        video.value.play();
      };
    })
    .catch(function(err) {
      console.log(err.name + ": " + err.message);
      if (err.name.includes("NotAllowed")) {
        alert("请先授权浏览器摄像头权限");
      }
    });
};

const capture = () => {
  const cvs = document.createElement("canvas");
  const context = cvs.getContext("2d");
  const height = video.value.videoHeight / (video.value.videoWidth / width);
  cvs.height = height;
  cvs.width = width;
  context.drawImage(video.value, 0, 0, width, height);
  const _data = cvs.toDataURL("image/png");

  img.value.src = _data;
  cvs.remove();
};

onMounted(() => init());
</script>
<template>
  <div>
    <video ref="video"></video>
  </div>
  <button @click="capture">capture</button>
  <img ref="img" width="300" />
</template>
<style lang="stylus" scoped>
video
  width 800px
  height auto
  border 1px solid #ccc
  display none
</style>
