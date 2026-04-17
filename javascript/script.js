(function () {
  const timeEl = document.getElementById("epochTime");
  const avatarEl = document.getElementById("profileAvatar");
  const avatarUrlInput = document.getElementById("avatarUrlInput");
  const applyAvatarButton = document.getElementById("applyAvatarUrl");
  const avatarFileInput = document.getElementById("avatarFileInput");

  function renderTime() {
    timeEl.textContent = String(Date.now());
  }

  renderTime();
  setInterval(renderTime, 500);

  applyAvatarButton.addEventListener("click", function () {
    const candidate = avatarUrlInput.value.trim();
    if (!candidate) {
      return;
    }

    try {
      const parsed = new URL(candidate);
      avatarEl.src = parsed.href;
      avatarEl.alt = "Updated profile avatar image from provided URL";
    } catch (error) {
      alert("Please enter a valid image URL.");
    }
  });

  avatarFileInput.addEventListener("change", function (event) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }

    const localObjectUrl = URL.createObjectURL(file);
    avatarEl.src = localObjectUrl;
    avatarEl.alt = "Updated profile avatar image from uploaded file";
  });
})();
