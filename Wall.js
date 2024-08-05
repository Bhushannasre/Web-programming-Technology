document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("chartForm");
  const clearButton = document.getElementById("clear");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const wallsInput = parseInt(document.getElementById("walls").value);
    const heightsInput = document
      .getElementById("heights")
      .value.split("#")
      .map(Number);

    if (isNaN(wallsInput) || heightsInput.some(isNaN)) {
      alert("Please enter valid inputs.");
      return;
    }

    generateBarChart(wallsInput, heightsInput);
    updateInfoTable(wallsInput, heightsInput);
  });

  clearButton.addEventListener("click", function () {
    clearInputs();
    clearChart();
    clearInfoTable();
  });
});

function generateBarChart(walls, heights) {
  const labels = Array.from({ length: walls }, (_, i) => `Wall ${i + 1}`);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Height",
        data: heights,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const ctx = document.getElementById("barChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

function updateInfoTable(walls, heights) {
  let visibleToLeft = 0;
  let visibleToRight = 0;
  let maxVisibleHeightToLeft = 0;
  let maxVisibleHeightToRight = 0;

  for (let i = 0; i < walls; i++) {
    if (heights[i] > maxVisibleHeightToLeft) {
      visibleToLeft++;
      maxVisibleHeightToLeft = heights[i];
    }
  }

  for (let i = walls - 1; i >= 0; i--) {
    if (heights[i] > maxVisibleHeightToRight) {
      visibleToRight++;
      maxVisibleHeightToRight = heights[i];
    }
  }

  document.getElementById("leftPersonInfo").textContent = `${visibleToLeft}`;
  document.getElementById("rightPersonInfo").textContent = `${visibleToRight}`;
}

function clearInputs() {
  document.getElementById("walls").value = "";
  document.getElementById("heights").value = "";
}

function clearChart() {
  const ctx = document.getElementById("barChart").getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function clearInfoTable() {
  document.getElementById("leftPersonInfo").textContent = "-";
  document.getElementById("rightPersonInfo").textContent = "-";
}
