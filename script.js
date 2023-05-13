function downloadVideo() {
    var videoUrl = document.getElementById("videoUrl").value;
    if (videoUrl === "") {
      alert("Por favor insira uma URL válida!");
      return;
    }
  
    var videoId = extractVideoId(videoUrl);
    var downloadUrl = "http://localhost:3000/download?url=" + encodeURIComponent(videoUrl);
  
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Baixando...";
  
    var link = document.createElement("a");
    link.href = downloadUrl;
    link.target = "_blank";
    link.download = "video.mp4";
    link.style.display = "none";
  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  
    outputDiv.innerHTML = "Download completo!";
  }
  
  function extractVideoId(url) {
    var videoId = "";
    var regex = /[?&]v=([^&#]*)/i;
    var match = url.match(regex);
    if (match && match[1]) {
      videoId = match[1];
    }
    return videoId;
  }
  