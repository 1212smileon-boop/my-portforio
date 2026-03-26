document.addEventListener("DOMContentLoaded", function () {

  const track = document.querySelector(".track");

  if (!track) {
    console.log("trackが見つからない");
    return;
  }

  let position = 0;
  const speed = 0.5;

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
