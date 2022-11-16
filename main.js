const form = document.querySelector("#new-task-form");
const titleInput = document.querySelector("#fname");
const descriptionInput = document.querySelector("#ftext");
const imageInput = document.querySelector("#furl");
const taskList = document.querySelector("#tasks");
const inputs = document.querySelectorAll("input");
const submitButton = document.querySelector("#new-task-submit");

const toggleButton = () => {
  if (
    titleInput.value.length >= 4 &&
    descriptionInput.value.length >= 4 &&
    imageInput.value.length >= 4
  ) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

window.addEventListener("load", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value;
    const description = descriptionInput.value;
    const image = imageInput.value;

    if (title.length < 4) {
      alert("Cada campo deve ter no mínimo 4 caracteres");
      return;
    } else if (description.length < 4) {
      alert("Cada campo deve ter no mínimo 4 caracteres");
      return;
    } else if (image.length < 4) {
      alert("Cada campo deve ter no mínimo 4 caracteres");
      return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    task.appendChild(taskContent);

    const taskDelete = document.createElement("button");
    taskDelete.classList.add("task-delete");
    taskDelete.innerHTML = "Excluir";

    task.appendChild(taskDelete);

    taskDelete.addEventListener("click", () => {
      taskList.removeChild(task);
    });

    const taskImage = document.createElement("img");
    taskImage.classList.add("task-img");
    taskImage.src = image;
    taskImage.alt = "task-img";

    taskContent.appendChild(taskImage);

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    taskContent.appendChild(taskInfo);

    const taskInputTitle = document.createElement("input");
    taskInputTitle.classList.add("task-input-title");
    taskInputTitle.type = "text";
    taskInputTitle.value = title;
    taskInputTitle.setAttribute("readonly", "readonly");

    taskInfo.appendChild(taskInputTitle);

    const taskInputDescription = document.createElement("input");
    taskInputDescription.classList.add("task-input");
    taskInputDescription.type = "text";
    taskInputDescription.value = description;
    taskInputDescription.setAttribute("readonly", "readonly");

    taskInfo.appendChild(taskInputDescription);

    taskList.appendChild(task);
  });
});