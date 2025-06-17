const selecteazaCaracterul = document.getElementById("nameCharacter");
selecteazaCaracterul.addEventListener("change", cauta);
async function cauta() {
  try {
    const nameCharacter = document.getElementById("nameCharacter").value;
    const response = await fetch(
      `https://dragonball-api.com/api/characters/${nameCharacter}`
    );
    if (!response.ok) {
      throw new Error("Nu sa gasit caracterul");
    }
    const data = await response.json();
    const characterName = document.getElementById("characterName");
    characterName.src = data.image;
    characterName.style.display = "block";
    console.log(data);
    const container = document.getElementById("characterDetails");
    document.getElementById("name").innerText = data.name;
    document.getElementById("putereMinima").innerText = data.ki;
    document.getElementById("putereMaxima").innerText = data.maxKi;
    container.style.display = "block";
  } catch (e) {
    console.error(e);
  }
}
