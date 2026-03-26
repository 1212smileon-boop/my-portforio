document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".slide-track");

  // 取得できてるか確認
  if (!track) {
    console.log("slide-trackが見つからない");
    return;
  }

  let position = 0;
  const speed = 0.5; // 動く速さ

  function animate() {
    position -= speed;

    track.style.transform = `translateX(${position}px)`;

    // 無限ループ
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
alert("OK");
